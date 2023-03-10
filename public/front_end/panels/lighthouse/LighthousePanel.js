// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as Common from '../../core/common/common.js';
import * as Host from '../../core/host/host.js';
import * as i18n from '../../core/i18n/i18n.js';
import * as SDK from '../../core/sdk/sdk.js';
import * as EmulationModel from '../../models/emulation/emulation.js';
import * as UI from '../../ui/legacy/legacy.js';
import * as Emulation from '../emulation/emulation.js';
import { Events, LighthouseController } from './LighthouseController.js';
import lighthousePanelStyles from './lighthousePanel.css.js';
import { ProtocolService } from './LighthouseProtocolService.js';
import * as LighthouseReport from '../../third_party/lighthouse/report/report.js';
import { LighthouseReportRenderer, LighthouseReportUIFeatures } from './LighthouseReportRenderer.js';
import { Item, ReportSelector } from './LighthouseReportSelector.js';
import { StartView } from './LighthouseStartView.js';
import { StatusView } from './LighthouseStatusView.js';
const UIStrings = {
    /**
    *@description Text that appears when user drag and drop something (for example, a file) in Lighthouse Panel
    */
    dropLighthouseJsonHere: 'Drop `Lighthouse` JSON here',
    /**
    *@description Tooltip text that appears when hovering over the largeicon add button in the Lighthouse Panel
    */
    performAnAudit: 'Perform an audit…',
    /**
    *@description Text to clear everything
    */
    clearAll: 'Clear all',
    /**
    *@description Tooltip text that appears when hovering over the largeicon settings gear in show settings pane setting in start view of the audits panel
    */
    lighthouseSettings: '`Lighthouse` settings',
    /**
    *@description Status header in the Lighthouse panel
    */
    printing: 'Printing',
    /**
    *@description Status text in the Lighthouse panel
    */
    thePrintPopupWindowIsOpenPlease: 'The print popup window is open. Please close it to continue.',
    /**
    *@description Text in Lighthouse Panel
    */
    cancelling: 'Cancelling',
};
const str_ = i18n.i18n.registerUIStrings('panels/lighthouse/LighthousePanel.ts', UIStrings);
const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
let lighthousePanelInstace;
export class LighthousePanel extends UI.Panel.Panel {
    protocolService;
    controller;
    startView;
    statusView;
    warningText;
    unauditableExplanation;
    cachedRenderedReports;
    dropTarget;
    auditResultsElement;
    clearButton;
    newButton;
    reportSelector;
    settingsPane;
    rightToolbar;
    showSettingsPaneSetting;
    stateBefore;
    isLHAttached;
    constructor() {
        super('lighthouse');
        this.protocolService = new ProtocolService();
        this.controller = new LighthouseController(this.protocolService);
        this.startView = new StartView(this.controller);
        this.statusView = new StatusView(this.controller);
        this.warningText = null;
        this.unauditableExplanation = null;
        this.cachedRenderedReports = new Map();
        this.dropTarget = new UI.DropTarget.DropTarget(this.contentElement, [UI.DropTarget.Type.File], i18nString(UIStrings.dropLighthouseJsonHere), this.handleDrop.bind(this));
        this.controller.addEventListener(Events.PageAuditabilityChanged, this.refreshStartAuditUI.bind(this));
        this.controller.addEventListener(Events.PageWarningsChanged, this.refreshWarningsUI.bind(this));
        this.controller.addEventListener(Events.AuditProgressChanged, this.refreshStatusUI.bind(this));
        this.controller.addEventListener(Events.RequestLighthouseStart, _event => {
            this.startLighthouse();
        });
        this.controller.addEventListener(Events.RequestLighthouseCancel, _event => {
            this.cancelLighthouse();
        });
        this.renderToolbar();
        this.auditResultsElement = this.contentElement.createChild('div', 'lighthouse-results-container');
        this.renderStartView();
        this.controller.recomputePageAuditability();
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!lighthousePanelInstace || forceNew) {
            lighthousePanelInstace = new LighthousePanel();
        }
        return lighthousePanelInstace;
    }
    static getEvents() {
        return Events;
    }
    refreshWarningsUI(evt) {
        // PageWarningsChanged fires multiple times during an audit, which we want to ignore.
        if (this.isLHAttached) {
            return;
        }
        this.warningText = evt.data.warning;
        this.startView.setWarningText(evt.data.warning);
    }
    refreshStartAuditUI(evt) {
        // PageAuditabilityChanged fires multiple times during an audit, which we want to ignore.
        if (this.isLHAttached) {
            return;
        }
        this.unauditableExplanation = evt.data.helpText;
        this.startView.setUnauditableExplanation(evt.data.helpText);
        this.startView.setStartButtonEnabled(!evt.data.helpText);
    }
    refreshStatusUI(evt) {
        this.statusView.updateStatus(evt.data.message);
    }
    refreshToolbarUI() {
        this.clearButton.setEnabled(this.reportSelector.hasItems());
    }
    clearAll() {
        this.reportSelector.clearAll();
        this.renderStartView();
        this.refreshToolbarUI();
    }
    renderToolbar() {
        const lighthouseToolbarContainer = this.element.createChild('div', 'lighthouse-toolbar-container');
        const toolbar = new UI.Toolbar.Toolbar('', lighthouseToolbarContainer);
        this.newButton = new UI.Toolbar.ToolbarButton(i18nString(UIStrings.performAnAudit), 'largeicon-add');
        toolbar.appendToolbarItem(this.newButton);
        this.newButton.addEventListener(UI.Toolbar.ToolbarButton.Events.Click, this.renderStartView.bind(this));
        toolbar.appendSeparator();
        this.reportSelector = new ReportSelector(() => this.renderStartView());
        toolbar.appendToolbarItem(this.reportSelector.comboBox());
        this.clearButton = new UI.Toolbar.ToolbarButton(i18nString(UIStrings.clearAll), 'largeicon-clear');
        toolbar.appendToolbarItem(this.clearButton);
        this.clearButton.addEventListener(UI.Toolbar.ToolbarButton.Events.Click, this.clearAll.bind(this));
        this.settingsPane = new UI.Widget.HBox();
        this.settingsPane.show(this.contentElement);
        this.settingsPane.element.classList.add('lighthouse-settings-pane');
        this.settingsPane.element.appendChild(this.startView.settingsToolbar().element);
        this.showSettingsPaneSetting = Common.Settings.Settings.instance().createSetting('lighthouseShowSettingsToolbar', false, Common.Settings.SettingStorageType.Synced);
        this.rightToolbar = new UI.Toolbar.Toolbar('', lighthouseToolbarContainer);
        this.rightToolbar.appendSeparator();
        this.rightToolbar.appendToolbarItem(new UI.Toolbar.ToolbarSettingToggle(this.showSettingsPaneSetting, 'largeicon-settings-gear', i18nString(UIStrings.lighthouseSettings)));
        this.showSettingsPaneSetting.addChangeListener(this.updateSettingsPaneVisibility.bind(this));
        this.updateSettingsPaneVisibility();
        this.refreshToolbarUI();
    }
    updateSettingsPaneVisibility() {
        this.settingsPane.element.classList.toggle('hidden', !this.showSettingsPaneSetting.get());
    }
    toggleSettingsDisplay(show) {
        this.rightToolbar.element.classList.toggle('hidden', !show);
        this.settingsPane.element.classList.toggle('hidden', !show);
        this.updateSettingsPaneVisibility();
    }
    renderStartView() {
        this.auditResultsElement.removeChildren();
        this.statusView.hide();
        this.reportSelector.selectNewReport();
        this.contentElement.classList.toggle('in-progress', false);
        this.startView.show(this.contentElement);
        this.toggleSettingsDisplay(true);
        this.startView.setUnauditableExplanation(this.unauditableExplanation);
        this.startView.setStartButtonEnabled(!this.unauditableExplanation);
        if (!this.unauditableExplanation) {
            this.startView.focusStartButton();
        }
        this.startView.setWarningText(this.warningText);
        this.newButton.setEnabled(false);
        this.refreshToolbarUI();
        this.setDefaultFocusedChild(this.startView);
    }
    renderStatusView(inspectedURL) {
        this.contentElement.classList.toggle('in-progress', true);
        this.statusView.setInspectedURL(inspectedURL);
        this.statusView.show(this.contentElement);
    }
    beforePrint() {
        this.statusView.show(this.contentElement);
        this.statusView.toggleCancelButton(false);
        this.statusView.renderText(i18nString(UIStrings.printing), i18nString(UIStrings.thePrintPopupWindowIsOpenPlease));
    }
    afterPrint() {
        this.statusView.hide();
        this.statusView.toggleCancelButton(true);
    }
    renderReport(lighthouseResult, artifacts) {
        this.toggleSettingsDisplay(false);
        this.contentElement.classList.toggle('in-progress', false);
        this.startView.hideWidget();
        this.statusView.hide();
        this.auditResultsElement.removeChildren();
        this.newButton.setEnabled(true);
        this.refreshToolbarUI();
        const cachedRenderedReport = this.cachedRenderedReports.get(lighthouseResult);
        if (cachedRenderedReport) {
            this.auditResultsElement.appendChild(cachedRenderedReport);
            return;
        }
        const reportContainer = this.auditResultsElement.createChild('div', 'lh-vars lh-root lh-devtools');
        const dom = new LighthouseReport.DOM(this.auditResultsElement.ownerDocument, reportContainer);
        const renderer = new LighthouseReportRenderer(dom);
        const el = renderer.renderReport(lighthouseResult, reportContainer);
        // Linkifying requires the target be loaded. Do not block the report
        // from rendering, as this is just an embellishment and the main target
        // could take awhile to load.
        this.waitForMainTargetLoad().then(() => {
            LighthouseReportRenderer.linkifyNodeDetails(el);
            LighthouseReportRenderer.linkifySourceLocationDetails(el);
        });
        LighthouseReportRenderer.handleDarkMode(el);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const features = new LighthouseReportUIFeatures(dom);
        features.setBeforePrint(this.beforePrint.bind(this));
        features.setAfterPrint(this.afterPrint.bind(this));
        LighthouseReportRenderer.addViewTraceButton(el, features, artifacts);
        features.initFeatures(lighthouseResult);
        this.cachedRenderedReports.set(lighthouseResult, reportContainer);
    }
    async waitForMainTargetLoad() {
        const mainTarget = SDK.TargetManager.TargetManager.instance().mainTarget();
        if (!mainTarget) {
            return;
        }
        const resourceTreeModel = mainTarget.model(SDK.ResourceTreeModel.ResourceTreeModel);
        if (!resourceTreeModel) {
            return;
        }
        await resourceTreeModel.once(SDK.ResourceTreeModel.Events.Load);
    }
    buildReportUI(lighthouseResult, artifacts) {
        if (lighthouseResult === null) {
            return;
        }
        const optionElement = new Item(lighthouseResult, () => this.renderReport(lighthouseResult, artifacts), this.renderStartView.bind(this));
        this.reportSelector.prepend(optionElement);
        this.refreshToolbarUI();
        this.renderReport(lighthouseResult);
    }
    handleDrop(dataTransfer) {
        const items = dataTransfer.items;
        if (!items.length) {
            return;
        }
        const item = items[0];
        if (item.kind === 'file') {
            const file = items[0].getAsFile();
            if (!file) {
                return;
            }
            const reader = new FileReader();
            reader.onload = () => this.loadedFromFile(reader.result);
            reader.readAsText(file);
        }
    }
    loadedFromFile(report) {
        const data = JSON.parse(report);
        if (!data['lighthouseVersion']) {
            return;
        }
        this.buildReportUI(data);
    }
    async startLighthouse() {
        Host.userMetrics.actionTaken(Host.UserMetrics.Action.LighthouseStarted);
        try {
            const inspectedURL = await this.controller.getInspectedURL({ force: true });
            const categoryIDs = this.controller.getCategoryIDs();
            const flags = this.controller.getFlags();
            await this.setupEmulationAndProtocolConnection();
            this.renderStatusView(inspectedURL);
            const lighthouseResponse = await this.protocolService.startLighthouse(inspectedURL, categoryIDs, flags);
            if (lighthouseResponse && lighthouseResponse.fatal) {
                const error = new Error(lighthouseResponse.message);
                error.stack = lighthouseResponse.stack;
                throw error;
            }
            if (!lighthouseResponse) {
                throw new Error('Auditing failed to produce a result');
            }
            Host.userMetrics.actionTaken(Host.UserMetrics.Action.LighthouseFinished);
            await this.resetEmulationAndProtocolConnection();
            this.buildReportUI(lighthouseResponse.lhr, lighthouseResponse.artifacts);
            // Give focus to the new audit button when completed
            this.newButton.element.focus();
        }
        catch (err) {
            await this.resetEmulationAndProtocolConnection();
            if (err instanceof Error) {
                this.statusView.renderBugReport(err);
            }
        }
    }
    async cancelLighthouse() {
        this.statusView.updateStatus(i18nString(UIStrings.cancelling));
        await this.resetEmulationAndProtocolConnection();
        this.renderStartView();
    }
    /**
     * We set the device emulation on the DevTools-side for two reasons:
     * 1. To workaround some odd device metrics emulation bugs like occuluding viewports
     * 2. To get the attractive device outline
     *
     * We also set flags.internalDisableDeviceScreenEmulation = true to let LH only apply UA emulation
     */
    async setupEmulationAndProtocolConnection() {
        const flags = this.controller.getFlags();
        const emulationModel = EmulationModel.DeviceModeModel.DeviceModeModel.instance();
        this.stateBefore = {
            emulation: {
                enabled: emulationModel.enabledSetting().get(),
                outlineEnabled: emulationModel.deviceOutlineSetting().get(),
                toolbarControlsEnabled: emulationModel.toolbarControlsEnabledSetting().get(),
            },
            network: { conditions: SDK.NetworkManager.MultitargetNetworkManager.instance().networkConditions() },
        };
        emulationModel.toolbarControlsEnabledSetting().set(false);
        if ('emulatedFormFactor' in flags && flags.emulatedFormFactor === 'desktop') {
            emulationModel.enabledSetting().set(false);
            emulationModel.emulate(EmulationModel.DeviceModeModel.Type.None, null, null);
        }
        else if (flags.emulatedFormFactor === 'mobile') {
            emulationModel.enabledSetting().set(true);
            emulationModel.deviceOutlineSetting().set(true);
            for (const device of EmulationModel.EmulatedDevices.EmulatedDevicesList.instance().standard()) {
                if (device.title === 'Moto G4') {
                    emulationModel.emulate(EmulationModel.DeviceModeModel.Type.Device, device, device.modes[0], 1);
                }
            }
        }
        await this.protocolService.attach();
        this.isLHAttached = true;
    }
    async resetEmulationAndProtocolConnection() {
        if (!this.isLHAttached) {
            return;
        }
        this.isLHAttached = false;
        await this.protocolService.detach();
        if (this.stateBefore) {
            const emulationModel = EmulationModel.DeviceModeModel.DeviceModeModel.instance();
            emulationModel.enabledSetting().set(this.stateBefore.emulation.enabled);
            emulationModel.deviceOutlineSetting().set(this.stateBefore.emulation.outlineEnabled);
            emulationModel.toolbarControlsEnabledSetting().set(this.stateBefore.emulation.toolbarControlsEnabled);
            SDK.NetworkManager.MultitargetNetworkManager.instance().setNetworkConditions(this.stateBefore.network.conditions);
            delete this.stateBefore;
        }
        Emulation.InspectedPagePlaceholder.InspectedPagePlaceholder.instance().update(true);
        const mainTarget = SDK.TargetManager.TargetManager.instance().mainTarget();
        if (!mainTarget) {
            return;
        }
        const resourceTreeModel = mainTarget.model(SDK.ResourceTreeModel.ResourceTreeModel);
        if (!resourceTreeModel) {
            return;
        }
        // reload to reset the page state
        const inspectedURL = await this.controller.getInspectedURL();
        await resourceTreeModel.navigate(inspectedURL);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([lighthousePanelStyles]);
    }
}
//# sourceMappingURL=LighthousePanel.js.map