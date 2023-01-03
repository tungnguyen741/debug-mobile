import*as e from"../common/common.js";import*as t from"../i18n/i18n.js";import*as o from"../platform/platform.js";import*as r from"../root/root.js";var n;!function(e){e.AppendedToURL="appendedToURL",e.CanceledSaveURL="canceledSaveURL",e.ContextMenuCleared="contextMenuCleared",e.ContextMenuItemSelected="contextMenuItemSelected",e.DeviceCountUpdated="deviceCountUpdated",e.DevicesDiscoveryConfigChanged="devicesDiscoveryConfigChanged",e.DevicesPortForwardingStatusChanged="devicesPortForwardingStatusChanged",e.DevicesUpdated="devicesUpdated",e.DispatchMessage="dispatchMessage",e.DispatchMessageChunk="dispatchMessageChunk",e.EnterInspectElementMode="enterInspectElementMode",e.EyeDropperPickedColor="eyeDropperPickedColor",e.FileSystemsLoaded="fileSystemsLoaded",e.FileSystemRemoved="fileSystemRemoved",e.FileSystemAdded="fileSystemAdded",e.FileSystemFilesChangedAddedRemoved="FileSystemFilesChangedAddedRemoved",e.IndexingTotalWorkCalculated="indexingTotalWorkCalculated",e.IndexingWorked="indexingWorked",e.IndexingDone="indexingDone",e.KeyEventUnhandled="keyEventUnhandled",e.ReattachMainTarget="reattachMainTarget",e.ReloadInspectedPage="reloadInspectedPage",e.RevealSourceLine="revealSourceLine",e.SavedURL="savedURL",e.SearchCompleted="searchCompleted",e.SetInspectedTabId="setInspectedTabId",e.SetUseSoftMenu="setUseSoftMenu",e.ShowPanel="showPanel"}(n||(n={}));const s=[[n.AppendedToURL,"appendedToURL",["url"]],[n.CanceledSaveURL,"canceledSaveURL",["url"]],[n.ContextMenuCleared,"contextMenuCleared",[]],[n.ContextMenuItemSelected,"contextMenuItemSelected",["id"]],[n.DeviceCountUpdated,"deviceCountUpdated",["count"]],[n.DevicesDiscoveryConfigChanged,"devicesDiscoveryConfigChanged",["config"]],[n.DevicesPortForwardingStatusChanged,"devicesPortForwardingStatusChanged",["status"]],[n.DevicesUpdated,"devicesUpdated",["devices"]],[n.DispatchMessage,"dispatchMessage",["messageObject"]],[n.DispatchMessageChunk,"dispatchMessageChunk",["messageChunk","messageSize"]],[n.EnterInspectElementMode,"enterInspectElementMode",[]],[n.EyeDropperPickedColor,"eyeDropperPickedColor",["color"]],[n.FileSystemsLoaded,"fileSystemsLoaded",["fileSystems"]],[n.FileSystemRemoved,"fileSystemRemoved",["fileSystemPath"]],[n.FileSystemAdded,"fileSystemAdded",["errorMessage","fileSystem"]],[n.FileSystemFilesChangedAddedRemoved,"fileSystemFilesChangedAddedRemoved",["changed","added","removed"]],[n.IndexingTotalWorkCalculated,"indexingTotalWorkCalculated",["requestId","fileSystemPath","totalWork"]],[n.IndexingWorked,"indexingWorked",["requestId","fileSystemPath","worked"]],[n.IndexingDone,"indexingDone",["requestId","fileSystemPath"]],[n.KeyEventUnhandled,"keyEventUnhandled",["event"]],[n.ReattachMainTarget,"reattachMainTarget",[]],[n.ReloadInspectedPage,"reloadInspectedPage",["hard"]],[n.RevealSourceLine,"revealSourceLine",["url","lineNumber","columnNumber"]],[n.SavedURL,"savedURL",["url","fileSystemPath"]],[n.SearchCompleted,"searchCompleted",["requestId","fileSystemPath","files"]],[n.SetInspectedTabId,"setInspectedTabId",["tabId"]],[n.SetUseSoftMenu,"setUseSoftMenu",["useSoftMenu"]],[n.ShowPanel,"showPanel",["panelName"]]];var i;!function(e){e.ActionTaken="DevTools.ActionTaken",e.PanelClosed="DevTools.PanelClosed",e.PanelShown="DevTools.PanelShown",e.SidebarPaneShown="DevTools.SidebarPaneShown",e.KeyboardShortcutFired="DevTools.KeyboardShortcutFired",e.IssueCreated="DevTools.IssueCreated",e.IssuesPanelIssueExpanded="DevTools.IssuesPanelIssueExpanded",e.IssuesPanelOpenedFrom="DevTools.IssuesPanelOpenedFrom",e.IssuesPanelResourceOpened="DevTools.IssuesPanelResourceOpened",e.KeybindSetSettingChanged="DevTools.KeybindSetSettingChanged",e.DualScreenDeviceEmulated="DevTools.DualScreenDeviceEmulated",e.ExperimentEnabledAtLaunch="DevTools.ExperimentEnabledAtLaunch",e.ExperimentEnabled="DevTools.ExperimentEnabled",e.ExperimentDisabled="DevTools.ExperimentDisabled",e.DeveloperResourceLoaded="DevTools.DeveloperResourceLoaded",e.DeveloperResourceScheme="DevTools.DeveloperResourceScheme",e.LinearMemoryInspectorRevealedFrom="DevTools.LinearMemoryInspector.RevealedFrom",e.LinearMemoryInspectorTarget="DevTools.LinearMemoryInspector.Target",e.Language="DevTools.Language",e.ConsoleShowsCorsErrors="DevTools.ConsoleShowsCorsErrors",e.SyncSetting="DevTools.SyncSetting",e.RecordingEdited="DevTools.RecordingEdited",e.RecordingExported="DevTools.RecordingExported",e.RecordingReplayFinished="DevTools.RecordingReplayFinished",e.RecordingReplayStarted="DevTools.RecordingReplayStarted",e.RecordingToggled="DevTools.RecordingToggled"}(i||(i={}));var a=Object.freeze({__proto__:null,get Events(){return n},EventDescriptors:s,get EnumeratedHistogram(){return i}});const d={systemError:"System error",connectionError:"Connection error",certificateError:"Certificate error",httpError:"HTTP error",cacheError:"Cache error",signedExchangeError:"Signed Exchange error",ftpError:"FTP error",certificateManagerError:"Certificate manager error",dnsResolverError:"DNS resolver error",unknownError:"Unknown error",httpErrorStatusCodeSS:"HTTP error: status code {PH1}, {PH2}",invalidUrl:"Invalid URL",decodingDataUrlFailed:"Decoding Data URL failed"},c=t.i18n.registerUIStrings("core/host/ResourceLoader.ts",d),l=t.i18n.getLocalizedString.bind(void 0,c);let u=0;const m={},g=function(e,t){m[e].write(t)};let S=function(t,o,r){const n=new e.StringOutputStream.StringOutputStream;h(t,o,n,(function(e,t,o){r(e,t,n.data(),o)}))};function p(e,t,o){if(void 0===e||void 0===o)return null;if(0!==e){if(function(e){return e<=-300&&e>-400}(e))return l(d.httpErrorStatusCodeSS,{PH1:String(t),PH2:o});const r=function(e){return l(e>-100?d.systemError:e>-200?d.connectionError:e>-300?d.certificateError:e>-400?d.httpError:e>-500?d.cacheError:e>-600?d.signedExchangeError:e>-700?d.ftpError:e>-800?d.certificateManagerError:e>-900?d.dnsResolverError:d.unknownError)}(e);return`${r}: ${o}`}return null}const h=function(t,o,r,n){const s=function(e){return m[++u]=e,u}(r);if(new e.ParsedURL.ParsedURL(t).isDataURL())return void(e=>new Promise(((t,o)=>{const r=new XMLHttpRequest;r.withCredentials=!1,r.open("GET",e,!0),r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE){if(200!==r.status)return r.onreadystatechange=null,void o(new Error(String(r.status)));r.onreadystatechange=null,t(r.responseText)}},r.send(null)})))(t).then((function(e){g(s,e),a({statusCode:200})})).catch((function(e){a({statusCode:404,messageOverride:l(d.decodingDataUrlFailed)})}));const i=[];if(o)for(const e in o)i.push(e+": "+o[e]);function a(e){if(n){const{success:t,description:o}=function(e){const{statusCode:t,netError:o,netErrorName:r,urlValid:n,messageOverride:s}=e;let i="";const a=t>=200&&t<300;if("string"==typeof s)i=s;else if(!a)if(void 0===o)i=l(!1===n?d.invalidUrl:d.unknownError);else{const e=p(o,t,r);e&&(i=e)}return console.assert(a===(0===i.length)),{success:a,description:{statusCode:t,netError:o,netErrorName:r,urlValid:n,message:i}}}(e);n(t,e.headers||{},o)}var t;m[t=s].close(),delete m[t]}P.loadNetworkResource(t,i.join("\r\n"),s,a)};var v=Object.freeze({__proto__:null,ResourceLoader:{},streamWrite:g,get load(){return S},setLoadForTest:function(e){S=e},netErrorToMessage:p,loadAsStream:h});const C={devtoolsS:"DevTools - {PH1}"},y=t.i18n.registerUIStrings("core/host/InspectorFrontendHost.ts",C),f=t.i18n.getLocalizedString.bind(void 0,y);class k{#e;events;#t;recordedEnumeratedHistograms=[];recordedPerformanceHistograms=[];constructor(){function e(e){!("mac"===this.platform()?e.metaKey:e.ctrlKey)||"+"!==e.key&&"-"!==e.key||e.stopPropagation()}document.addEventListener("keydown",(t=>{e.call(this,t)}),!0),this.#e=new Map}platform(){const e=navigator.userAgent;return e.includes("Windows NT")?"windows":e.includes("Mac OS X")?"mac":"linux"}loadCompleted(){}bringToFront(){this.#t=!0}closeWindow(){this.#t=!1}setIsDocked(e,t){setTimeout(t,0)}showSurvey(e,t){setTimeout((()=>t({surveyShown:!1})),0)}canShowSurvey(e,t){setTimeout((()=>t({canShowSurvey:!1})),0)}setInspectedPageBounds(e){}inspectElementCompleted(){}setInjectedScriptForOrigin(e,t){}inspectedURLChanged(e){document.title=f(C.devtoolsS,{PH1:e.replace(/^https?:\/\//,"")})}copyText(e){null!=e&&navigator.clipboard.writeText(e)}openInNewTab(e){window.open(e,"_blank")}showItemInFolder(t){e.Console.Console.instance().error("Show item in folder is not enabled in hosted mode. Please inspect using chrome://inspect")}save(e,t,o){let r=this.#e.get(e);r||(r=[],this.#e.set(e,r)),r.push(t),this.events.dispatchEventToListeners(n.SavedURL,{url:e,fileSystemPath:e})}append(e,t){const o=this.#e.get(e);o&&(o.push(t),this.events.dispatchEventToListeners(n.AppendedToURL,e))}close(e){const t=this.#e.get(e)||[];this.#e.delete(e);let r="";if(e)try{const t=o.StringUtilities.trimURL(e);r=o.StringUtilities.removeURLFragment(t)}catch(t){r=e}const n=document.createElement("a");n.download=r;const s=new Blob([t.join("")],{type:"text/plain"}),i=URL.createObjectURL(s);n.href=i,n.click(),URL.revokeObjectURL(i)}sendMessageToBackend(e){}recordEnumeratedHistogram(e,t,o){this.recordedEnumeratedHistograms.length>=100&&this.recordedEnumeratedHistograms.shift(),this.recordedEnumeratedHistograms.push({actionName:e,actionCode:t})}recordPerformanceHistogram(e,t){this.recordedPerformanceHistograms.length>=100&&this.recordedPerformanceHistograms.shift(),this.recordedPerformanceHistograms.push({histogramName:e,duration:t})}recordUserMetricsAction(e){}requestFileSystems(){this.events.dispatchEventToListeners(n.FileSystemsLoaded,[])}addFileSystem(e){}removeFileSystem(e){}isolatedFileSystem(e,t){return null}loadNetworkResource(e,t,o,n){r.Runtime.loadResourcePromise(e).then((function(e){g(o,e),n({statusCode:200,headers:void 0,messageOverride:void 0,netError:void 0,netErrorName:void 0,urlValid:void 0})})).catch((function(){n({statusCode:404,headers:void 0,messageOverride:void 0,netError:void 0,netErrorName:void 0,urlValid:void 0})}))}registerPreference(e,t){}getPreferences(e){const t={};for(const e in window.localStorage)t[e]=window.localStorage[e];e(t)}setPreference(e,t){window.localStorage[e]=t}removePreference(e){delete window.localStorage[e]}clearPreferences(){window.localStorage.clear()}getSyncInformation(e){e({isSyncActive:!1,arePreferencesSynced:!1})}upgradeDraggedFileSystemPermissions(e){}indexPath(e,t,o){}stopIndexing(e){}searchInPath(e,t,o){}zoomFactor(){return 1}zoomIn(){}zoomOut(){}resetZoom(){}setWhitelistedShortcuts(e){}setEyeDropperActive(e){}showCertificateViewer(e){}reattach(e){}readyForTest(){}connectionReady(){}setOpenNewWindowForPopups(e){}setDevicesDiscoveryConfig(e){}setDevicesUpdatesEnabled(e){}performActionOnRemotePage(e,t){}openRemotePage(e,t){}openNodeFrontend(){}showContextMenuAtPoint(e,t,o,r){throw"Soft context menu should be used"}isHostedMode(){return!0}setAddExtensionCallback(e){}async initialTargetId(){return null}}let P=window.InspectorFrontendHost;class E{constructor(){for(const e of s)this[e[1]]=this.dispatch.bind(this,e[0],e[2],e[3])}dispatch(e,t,o,...r){if(t.length<2){try{P.events.dispatchEventToListeners(e,r[0])}catch(e){console.error(e+" "+e.stack)}return}const n={};for(let e=0;e<t.length;++e)n[t[e]]=r[e];try{P.events.dispatchEventToListeners(e,n)}catch(e){console.error(e+" "+e.stack)}}streamWrite(e,t){g(e,t)}}!function(){let t;if(P){t=k.prototype;for(const e of Object.getOwnPropertyNames(t)){const o=t[e];"function"!=typeof o||P[e]||(console.error(`Incompatible embedder: method Host.InspectorFrontendHost.${e} is missing. Using stub instead.`),P[e]=o)}}else window.InspectorFrontendHost=P=new k;P.events=new e.ObjectWrapper.ObjectWrapper}(),window.InspectorFrontendAPI=new E;var b=Object.freeze({__proto__:null,InspectorFrontendHostStub:k,get InspectorFrontendHostInstance(){return P},isUnderTest:function(t){return!!r.Runtime.Runtime.queryParam("test")||(t?"true"===t.isUnderTest:e.Settings.Settings.hasInstance()&&e.Settings.Settings.instance().createSetting("isUnderTest",!1).get())}});let I,w,T,R,D;function L(){return I||(I=P.platform()),I}var F,O=Object.freeze({__proto__:null,platform:L,isMac:function(){return void 0===w&&(w="mac"===L()),w},isWin:function(){return void 0===T&&(T="windows"===L()),T},isCustomDevtoolsFrontend:function(){return void 0===R&&(R=window.location.toString().startsWith("devtools://devtools/custom/")),R},fontFamily:function(){if(D)return D;switch(L()){case"linux":D="Roboto, Ubuntu, Arial, sans-serif";break;case"mac":D="'Lucida Grande', sans-serif";break;case"windows":D="'Segoe UI', Tahoma, sans-serif"}return D}});class M{#o;#r;#n;constructor(){this.#o=!1,this.#r=!1,this.#n=""}panelShown(e){const t=x[e]||0,o=Object.keys(x).length+1;P.recordEnumeratedHistogram(i.PanelShown,t,o),this.#o=!0}panelClosed(e){const t=x[e]||0,o=Object.keys(x).length+1;P.recordEnumeratedHistogram(i.PanelClosed,t,o),this.#o=!0}sidebarPaneShown(e){const t=A[e]||0,o=Object.keys(A).length+1;P.recordEnumeratedHistogram(i.SidebarPaneShown,t,o)}settingsPanelShown(e){this.panelShown("settings-"+e)}actionTaken(e){const t=Object.keys(F).length+1;P.recordEnumeratedHistogram(i.ActionTaken,e,t)}panelLoaded(e,t){this.#r||e!==this.#n||(this.#r=!0,requestAnimationFrame((()=>{setTimeout((()=>{performance.mark(t),this.#o||P.recordPerformanceHistogram(t,performance.now())}),0)})))}setLaunchPanel(e){this.#n=e}keybindSetSettingChanged(e){const t=Object.keys(H).length+1,o=H[e]||0;P.recordEnumeratedHistogram(i.KeybindSetSettingChanged,o,t)}keyboardShortcutFired(e){const t=Object.keys(U).length+1,o=U[e]||U.OtherShortcut;P.recordEnumeratedHistogram(i.KeyboardShortcutFired,o,t)}issuesPanelOpenedFrom(e){const t=Object.keys(N).length+1;P.recordEnumeratedHistogram(i.IssuesPanelOpenedFrom,e,t)}issuesPanelIssueExpanded(e){if(void 0===e)return;const t=Object.keys(V).length+1,o=V[e];void 0!==o&&P.recordEnumeratedHistogram(i.IssuesPanelIssueExpanded,o,t)}issuesPanelResourceOpened(e,t){const o=Object.keys(B).length+1,r=B[e+t];void 0!==r&&P.recordEnumeratedHistogram(i.IssuesPanelResourceOpened,r,o)}issueCreated(e){const t=Object.keys(_).length+1,o=_[e];void 0!==o&&P.recordEnumeratedHistogram(i.IssueCreated,o,t)}dualScreenDeviceEmulated(e){const t=Object.keys(W).length+1;P.recordEnumeratedHistogram(i.DualScreenDeviceEmulated,e,t)}experimentEnabledAtLaunch(e){const t=j.__lastValidEnumPosition+1,o=j[e];void 0!==o&&P.recordEnumeratedHistogram(i.ExperimentEnabledAtLaunch,o,t)}experimentChanged(e,t){const o=j.__lastValidEnumPosition+1,r=j[e];if(void 0===r)return;const n=t?i.ExperimentEnabled:i.ExperimentDisabled;P.recordEnumeratedHistogram(n,r,o)}developerResourceLoaded(e){const t=Object.keys(z).length+1;e>=t||P.recordEnumeratedHistogram(i.DeveloperResourceLoaded,e,t)}developerResourceScheme(e){const t=Object.keys(q).length+1;e>=t||P.recordEnumeratedHistogram(i.DeveloperResourceScheme,e,t)}linearMemoryInspectorRevealedFrom(e){const t=Object.keys(K).length+1;e>=t||P.recordEnumeratedHistogram(i.LinearMemoryInspectorRevealedFrom,e,t)}linearMemoryInspectorTarget(e){const t=Object.keys(G).length+1;e>=t||P.recordEnumeratedHistogram(i.LinearMemoryInspectorTarget,e,t)}language(e){const t=Object.keys(J).length+1,o=J[e];void 0!==o&&P.recordEnumeratedHistogram(i.Language,o,t)}showCorsErrorsSettingChanged(e){P.recordEnumeratedHistogram(i.ConsoleShowsCorsErrors,Number(e),2)}syncSetting(e){const t=Object.keys(Q).length+1;P.getSyncInformation((o=>{let r=Q.ChromeSyncDisabled;o.isSyncActive&&!o.arePreferencesSynced?r=Q.ChromeSyncSettingsDisabled:o.isSyncActive&&o.arePreferencesSynced&&(r=e?Q.DevToolsSyncSettingEnabled:Q.DevToolsSyncSettingDisabled),P.recordEnumeratedHistogram(i.SyncSetting,r,t)}))}recordingToggled(e){const t=Object.keys(X).length+1;P.recordEnumeratedHistogram(i.RecordingToggled,e,t)}recordingReplayFinished(e){const t=Object.keys($).length+1;P.recordEnumeratedHistogram(i.RecordingReplayFinished,e,t)}recordingReplayStarted(e){const t=Object.keys(Z).length+1;P.recordEnumeratedHistogram(i.RecordingReplayStarted,e,t)}recordingEdited(e){const t=Object.keys(Y).length+1;P.recordEnumeratedHistogram(i.RecordingEdited,e,t)}recordingExported(e){const t=Object.keys(ee).length+1;P.recordEnumeratedHistogram(i.RecordingExported,e,t)}}!function(e){e[e.WindowDocked=1]="WindowDocked",e[e.WindowUndocked=2]="WindowUndocked",e[e.ScriptsBreakpointSet=3]="ScriptsBreakpointSet",e[e.TimelineStarted=4]="TimelineStarted",e[e.ProfilesCPUProfileTaken=5]="ProfilesCPUProfileTaken",e[e.ProfilesHeapProfileTaken=6]="ProfilesHeapProfileTaken",e[e["LegacyAuditsStarted-deprecated"]=7]="LegacyAuditsStarted-deprecated",e[e.ConsoleEvaluated=8]="ConsoleEvaluated",e[e.FileSavedInWorkspace=9]="FileSavedInWorkspace",e[e.DeviceModeEnabled=10]="DeviceModeEnabled",e[e.AnimationsPlaybackRateChanged=11]="AnimationsPlaybackRateChanged",e[e.RevisionApplied=12]="RevisionApplied",e[e.FileSystemDirectoryContentReceived=13]="FileSystemDirectoryContentReceived",e[e.StyleRuleEdited=14]="StyleRuleEdited",e[e.CommandEvaluatedInConsolePanel=15]="CommandEvaluatedInConsolePanel",e[e.DOMPropertiesExpanded=16]="DOMPropertiesExpanded",e[e.ResizedViewInResponsiveMode=17]="ResizedViewInResponsiveMode",e[e.TimelinePageReloadStarted=18]="TimelinePageReloadStarted",e[e.ConnectToNodeJSFromFrontend=19]="ConnectToNodeJSFromFrontend",e[e.ConnectToNodeJSDirectly=20]="ConnectToNodeJSDirectly",e[e.CpuThrottlingEnabled=21]="CpuThrottlingEnabled",e[e.CpuProfileNodeFocused=22]="CpuProfileNodeFocused",e[e.CpuProfileNodeExcluded=23]="CpuProfileNodeExcluded",e[e.SelectFileFromFilePicker=24]="SelectFileFromFilePicker",e[e.SelectCommandFromCommandMenu=25]="SelectCommandFromCommandMenu",e[e.ChangeInspectedNodeInElementsPanel=26]="ChangeInspectedNodeInElementsPanel",e[e.StyleRuleCopied=27]="StyleRuleCopied",e[e.CoverageStarted=28]="CoverageStarted",e[e.LighthouseStarted=29]="LighthouseStarted",e[e.LighthouseFinished=30]="LighthouseFinished",e[e.ShowedThirdPartyBadges=31]="ShowedThirdPartyBadges",e[e.LighthouseViewTrace=32]="LighthouseViewTrace",e[e.FilmStripStartedRecording=33]="FilmStripStartedRecording",e[e.CoverageReportFiltered=34]="CoverageReportFiltered",e[e.CoverageStartedPerBlock=35]="CoverageStartedPerBlock",e[e["SettingsOpenedFromGear-deprecated"]=36]="SettingsOpenedFromGear-deprecated",e[e["SettingsOpenedFromMenu-deprecated"]=37]="SettingsOpenedFromMenu-deprecated",e[e["SettingsOpenedFromCommandMenu-deprecated"]=38]="SettingsOpenedFromCommandMenu-deprecated",e[e.TabMovedToDrawer=39]="TabMovedToDrawer",e[e.TabMovedToMainPanel=40]="TabMovedToMainPanel",e[e.CaptureCssOverviewClicked=41]="CaptureCssOverviewClicked",e[e.VirtualAuthenticatorEnvironmentEnabled=42]="VirtualAuthenticatorEnvironmentEnabled",e[e.SourceOrderViewActivated=43]="SourceOrderViewActivated",e[e.UserShortcutAdded=44]="UserShortcutAdded",e[e.ShortcutRemoved=45]="ShortcutRemoved",e[e.ShortcutModified=46]="ShortcutModified",e[e.CustomPropertyLinkClicked=47]="CustomPropertyLinkClicked",e[e.CustomPropertyEdited=48]="CustomPropertyEdited",e[e.ServiceWorkerNetworkRequestClicked=49]="ServiceWorkerNetworkRequestClicked",e[e.ServiceWorkerNetworkRequestClosedQuickly=50]="ServiceWorkerNetworkRequestClosedQuickly",e[e.NetworkPanelServiceWorkerRespondWith=51]="NetworkPanelServiceWorkerRespondWith",e[e.NetworkPanelCopyValue=52]="NetworkPanelCopyValue",e[e.ConsoleSidebarOpened=53]="ConsoleSidebarOpened",e[e.PerfPanelTraceImported=54]="PerfPanelTraceImported",e[e.PerfPanelTraceExported=55]="PerfPanelTraceExported"}(F||(F={}));const x={elements:1,resources:2,network:3,sources:4,timeline:5,heap_profiler:6,"legacy-audits-deprecated":7,console:8,layers:9,"console-view":10,animations:11,"network.config":12,rendering:13,sensors:14,"sources.search":15,security:16,js_profiler:17,lighthouse:18,coverage:19,"protocol-monitor":20,"remote-devices":21,"web-audio":22,"changes.changes":23,"performance.monitor":24,"release-note":25,live_heap_profile:26,"sources.quick":27,"network.blocked-urls":28,"settings-preferences":29,"settings-workspace":30,"settings-experiments":31,"settings-blackbox":32,"settings-devices":33,"settings-throttling-conditions":34,"settings-emulation-locations":35,"settings-shortcuts":36,"issues-pane":37,"settings-keybinds":38,cssoverview:39,chrome_recorder:40},A={OtherSidebarPane:0,Styles:1,Computed:2,"elements.layout":3,"elements.eventListeners":4,"elements.domBreakpoints":5,"elements.domProperties":6,"accessibility.view":7},H={devToolsDefault:0,vsCode:1},U={OtherShortcut:0,"commandMenu.show":1,"console.clear":2,"console.show":3,"debugger.step":4,"debugger.step-into":5,"debugger.step-out":6,"debugger.step-over":7,"debugger.toggle-breakpoint":8,"debugger.toggle-breakpoint-enabled":9,"debugger.toggle-pause":10,"elements.edit-as-html":11,"elements.hide-element":12,"elements.redo":13,"elements.toggle-element-search":14,"elements.undo":15,"main.search-in-panel.find":16,"main.toggle-drawer":17,"network.hide-request-details":18,"network.search":19,"network.toggle-recording":20,"quickOpen.show":21,"settings.show":22,"sources.search":23,"background-service.toggle-recording":24,"components.collect-garbage":25,"console.clear.history":26,"console.create-pin":27,"coverage.start-with-reload":28,"coverage.toggle-recording":29,"debugger.breakpoint-input-window":30,"debugger.evaluate-selection":31,"debugger.next-call-frame":32,"debugger.previous-call-frame":33,"debugger.run-snippet":34,"debugger.toggle-breakpoints-active":35,"elements.capture-area-screenshot":36,"emulation.capture-full-height-screenshot":37,"emulation.capture-node-screenshot":38,"emulation.capture-screenshot":39,"emulation.show-sensors":40,"emulation.toggle-device-mode":41,"help.release-notes":42,"help.report-issue":43,"input.start-replaying":44,"input.toggle-pause":45,"input.toggle-recording":46,"inspector_main.focus-debuggee":47,"inspector_main.hard-reload":48,"inspector_main.reload":49,"live-heap-profile.start-with-reload":50,"live-heap-profile.toggle-recording":51,"main.debug-reload":52,"main.next-tab":53,"main.previous-tab":54,"main.search-in-panel.cancel":55,"main.search-in-panel.find-next":56,"main.search-in-panel.find-previous":57,"main.toggle-dock":58,"main.zoom-in":59,"main.zoom-out":60,"main.zoom-reset":61,"network-conditions.network-low-end-mobile":62,"network-conditions.network-mid-tier-mobile":63,"network-conditions.network-offline":64,"network-conditions.network-online":65,"profiler.heap-toggle-recording":66,"profiler.js-toggle-recording":67,"resources.clear":68,"settings.documentation":69,"settings.shortcuts":70,"sources.add-folder-to-workspace":71,"sources.add-to-watch":72,"sources.close-all":73,"sources.close-editor-tab":74,"sources.create-snippet":75,"sources.go-to-line":76,"sources.go-to-member":77,"sources.jump-to-next-location":78,"sources.jump-to-previous-location":79,"sources.rename":80,"sources.save":81,"sources.save-all":82,"sources.switch-file":83,"timeline.jump-to-next-frame":84,"timeline.jump-to-previous-frame":85,"timeline.load-from-file":86,"timeline.next-recording":87,"timeline.previous-recording":88,"timeline.record-reload":89,"timeline.save-to-file":90,"timeline.show-history":91,"timeline.toggle-recording":92,"sources.increment-css":93,"sources.increment-css-by-ten":94,"sources.decrement-css":95,"sources.decrement-css-by-ten":96,"layers.reset-view":97,"layers.pan-mode":98,"layers.rotate-mode":99,"layers.zoom-in":100,"layers.zoom-out":101,"layers.up":102,"layers.down":103,"layers.left":104,"layers.right":105,"help.report-translation-issue":106};var N,W;!function(e){e[e.ConsoleInfoBar=0]="ConsoleInfoBar",e[e.LearnMoreLinkCOEP=1]="LearnMoreLinkCOEP",e[e.StatusBarIssuesCounter=2]="StatusBarIssuesCounter",e[e.HamburgerMenu=3]="HamburgerMenu",e[e.Adorner=4]="Adorner",e[e.CommandMenu=5]="CommandMenu"}(N||(N={})),function(e){e[e.DualScreenDeviceSelected=0]="DualScreenDeviceSelected",e[e.SpanButtonClicked=1]="SpanButtonClicked",e[e.PlatformSupportUsed=2]="PlatformSupportUsed"}(W||(W={}));const j={applyCustomStylesheet:0,captureNodeCreationStacks:1,sourcesPrettyPrint:2,backgroundServices:3,backgroundServicesNotifications:4,backgroundServicesPaymentHandler:5,backgroundServicesPushMessaging:6,inputEventsOnTimelineOverview:10,liveHeapProfile:11,protocolMonitor:13,developerResourcesView:15,recordCoverageWithPerformanceTracing:16,samplingHeapProfilerTimeline:17,showOptionToNotTreatGlobalObjectsAsRoots:18,sourceOrderViewer:20,webauthnPane:22,timelineEventInitiators:24,timelineInvalidationTracking:26,timelineShowAllEvents:27,timelineV8RuntimeCallStats:28,timelineWebGL:29,timelineReplayEvent:30,wasmDWARFDebugging:31,dualScreenSupport:32,keyboardShortcutEditor:35,APCA:39,cspViolationsView:40,fontEditor:41,fullAccessibilityTree:42,ignoreListJSFramesOnTimeline:43,contrastIssues:44,experimentalCookieFeatures:45,hideIssuesFeature:48,reportingApiDebugging:49,syncSettings:50,groupAndHideIssuesByKind:51,cssTypeComponentLength:52,preciseChanges:53,__lastValidEnumPosition:53},V={CrossOriginEmbedderPolicy:0,MixedContent:1,SameSiteCookie:2,HeavyAd:3,ContentSecurityPolicy:4,Other:5},B={CrossOriginEmbedderPolicyRequest:0,CrossOriginEmbedderPolicyElement:1,MixedContentRequest:2,SameSiteCookieCookie:3,SameSiteCookieRequest:4,HeavyAdElement:5,ContentSecurityPolicyDirective:6,ContentSecurityPolicyElement:7,CrossOriginEmbedderPolicyLearnMore:8,MixedContentLearnMore:9,SameSiteCookieLearnMore:10,HeavyAdLearnMore:11,ContentSecurityPolicyLearnMore:12},_={MixedContentIssue:0,"ContentSecurityPolicyIssue::kInlineViolation":1,"ContentSecurityPolicyIssue::kEvalViolation":2,"ContentSecurityPolicyIssue::kURLViolation":3,"ContentSecurityPolicyIssue::kTrustedTypesSinkViolation":4,"ContentSecurityPolicyIssue::kTrustedTypesPolicyViolation":5,"HeavyAdIssue::NetworkTotalLimit":6,"HeavyAdIssue::CpuTotalLimit":7,"HeavyAdIssue::CpuPeakLimit":8,"CrossOriginEmbedderPolicyIssue::CoepFrameResourceNeedsCoepHeader":9,"CrossOriginEmbedderPolicyIssue::CoopSandboxedIFrameCannotNavigateToCoopPage":10,"CrossOriginEmbedderPolicyIssue::CorpNotSameOrigin":11,"CrossOriginEmbedderPolicyIssue::CorpNotSameOriginAfterDefaultedToSameOriginByCoep":12,"CrossOriginEmbedderPolicyIssue::CorpNotSameSite":13,"SameSiteCookieIssue::ExcludeSameSiteNoneInsecure::ReadCookie":14,"SameSiteCookieIssue::ExcludeSameSiteNoneInsecure::SetCookie":15,"SameSiteCookieIssue::WarnSameSiteNoneInsecure::ReadCookie":16,"SameSiteCookieIssue::WarnSameSiteNoneInsecure::SetCookie":17,"SameSiteCookieIssue::WarnSameSiteStrictLaxDowngradeStrict::Secure":18,"SameSiteCookieIssue::WarnSameSiteStrictLaxDowngradeStrict::Insecure":19,"SameSiteCookieIssue::WarnCrossDowngrade::ReadCookie::Secure":20,"SameSiteCookieIssue::WarnCrossDowngrade::ReadCookie::Insecure":21,"SameSiteCookieIssue::WarnCrossDowngrade::SetCookie::Secure":22,"SameSiteCookieIssue::WarnCrossDowngrade::SetCookie::Insecure":23,"SameSiteCookieIssue::ExcludeNavigationContextDowngrade::Secure":24,"SameSiteCookieIssue::ExcludeNavigationContextDowngrade::Insecure":25,"SameSiteCookieIssue::ExcludeContextDowngrade::ReadCookie::Secure":26,"SameSiteCookieIssue::ExcludeContextDowngrade::ReadCookie::Insecure":27,"SameSiteCookieIssue::ExcludeContextDowngrade::SetCookie::Secure":28,"SameSiteCookieIssue::ExcludeContextDowngrade::SetCookie::Insecure":29,"SameSiteCookieIssue::ExcludeSameSiteUnspecifiedTreatedAsLax::ReadCookie":30,"SameSiteCookieIssue::ExcludeSameSiteUnspecifiedTreatedAsLax::SetCookie":31,"SameSiteCookieIssue::WarnSameSiteUnspecifiedLaxAllowUnsafe::ReadCookie":32,"SameSiteCookieIssue::WarnSameSiteUnspecifiedLaxAllowUnsafe::SetCookie":33,"SameSiteCookieIssue::WarnSameSiteUnspecifiedCrossSiteContext::ReadCookie":34,"SameSiteCookieIssue::WarnSameSiteUnspecifiedCrossSiteContext::SetCookie":35,"SharedArrayBufferIssue::TransferIssue":36,"SharedArrayBufferIssue::CreationIssue":37,"TrustedWebActivityIssue::kHttpError":38,"TrustedWebActivityIssue::kUnavailableOffline":39,"TrustedWebActivityIssue::kDigitalAssetLinks":40,LowTextContrastIssue:41,"CorsIssue::InsecurePrivateNetwork":42,"CorsIssue::InsecurePrivateNetworkPreflight":43,"CorsIssue::InvalidHeaders":44,"CorsIssue::WildcardOriginWithCredentials":45,"CorsIssue::PreflightResponseInvalid":46,"CorsIssue::OriginMismatch":47,"CorsIssue::AllowCredentialsRequired":48,"CorsIssue::MethodDisallowedByPreflightResponse":49,"CorsIssue::HeaderDisallowedByPreflightResponse":50,"CorsIssue::RedirectContainsCredentials":51,"CorsIssue::DisallowedByMode":52,"CorsIssue::CorsDisabledScheme":53,"CorsIssue::PreflightMissingAllowExternal":54,"CorsIssue::PreflightInvalidAllowExternal":55,"CorsIssue::InvalidResponse":56,"CorsIssue::NoCorsRedirectModeNotFollow":57,"QuirksModeIssue::QuirksMode":58,"QuirksModeIssue::LimitedQuirksMode":59,DeprecationIssue:60};var z,q,K,G;!function(e){e[e.LoadThroughPageViaTarget=0]="LoadThroughPageViaTarget",e[e.LoadThroughPageViaFrame=1]="LoadThroughPageViaFrame",e[e.LoadThroughPageFailure=2]="LoadThroughPageFailure",e[e.LoadThroughPageFallback=3]="LoadThroughPageFallback",e[e.FallbackAfterFailure=4]="FallbackAfterFailure",e[e.FallbackPerOverride=5]="FallbackPerOverride",e[e.FallbackPerProtocol=6]="FallbackPerProtocol",e[e.FallbackFailure=7]="FallbackFailure"}(z||(z={})),function(e){e[e.SchemeOther=0]="SchemeOther",e[e.SchemeUnknown=1]="SchemeUnknown",e[e.SchemeHttp=2]="SchemeHttp",e[e.SchemeHttps=3]="SchemeHttps",e[e.SchemeHttpLocalhost=4]="SchemeHttpLocalhost",e[e.SchemeHttpsLocalhost=5]="SchemeHttpsLocalhost",e[e.SchemeData=6]="SchemeData",e[e.SchemeFile=7]="SchemeFile",e[e.SchemeBlob=8]="SchemeBlob"}(q||(q={})),function(e){e[e.ContextMenu=0]="ContextMenu",e[e.MemoryIcon=1]="MemoryIcon"}(K||(K={})),function(e){e[e.DWARFInspectableAddress=0]="DWARFInspectableAddress",e[e.ArrayBuffer=1]="ArrayBuffer",e[e.DataView=2]="DataView",e[e.TypedArray=3]="TypedArray",e[e.WebAssemblyMemory=4]="WebAssemblyMemory"}(G||(G={}));const J={af:1,am:2,ar:3,as:4,az:5,be:6,bg:7,bn:8,bs:9,ca:10,cs:11,cy:12,da:13,de:14,el:15,"en-GB":16,"en-US":17,"es-419":18,es:19,et:20,eu:21,fa:22,fi:23,fil:24,"fr-CA":25,fr:26,gl:27,gu:28,he:29,hi:30,hr:31,hu:32,hy:33,id:34,is:35,it:36,ja:37,ka:38,kk:39,km:40,kn:41,ko:42,ky:43,lo:44,lt:45,lv:46,mk:47,ml:48,mn:49,mr:50,ms:51,my:52,ne:53,nl:54,no:55,or:56,pa:57,pl:58,"pt-PT":59,pt:60,ro:61,ru:62,si:63,sk:64,sl:65,sq:66,"sr-Latn":67,sr:68,sv:69,sw:70,ta:71,te:72,th:73,tr:74,uk:75,ur:76,uz:77,vi:78,zh:79,"zh-HK":80,"zh-TW":81,zu:82};var Q,X,$,Z,Y,ee;!function(e){e[e.ChromeSyncDisabled=1]="ChromeSyncDisabled",e[e.ChromeSyncSettingsDisabled=2]="ChromeSyncSettingsDisabled",e[e.DevToolsSyncSettingDisabled=3]="DevToolsSyncSettingDisabled",e[e.DevToolsSyncSettingEnabled=4]="DevToolsSyncSettingEnabled"}(Q||(Q={})),function(e){e[e.RecordingStarted=1]="RecordingStarted",e[e.RecordingFinished=2]="RecordingFinished"}(X||(X={})),function(e){e[e.Success=1]="Success",e[e.TimeoutErrorSelectors=2]="TimeoutErrorSelectors",e[e.TimeoutErrorTarget=3]="TimeoutErrorTarget",e[e.OtherError=4]="OtherError"}($||($={})),function(e){e[e.ReplayOnly=1]="ReplayOnly",e[e.ReplayWithPerformanceTracing=2]="ReplayWithPerformanceTracing"}(Z||(Z={})),function(e){e[e.SelectorPickerUsed=1]="SelectorPickerUsed",e[e.StepAdded=2]="StepAdded",e[e.StepRemoved=3]="StepRemoved",e[e.SelectorAdded=4]="SelectorAdded",e[e.SelectorRemoved=5]="SelectorRemoved",e[e.SelectorPartAdded=6]="SelectorPartAdded",e[e.SelectorPartEdited=7]="SelectorPartEdited",e[e.SelectorPartRemoved=8]="SelectorPartRemoved",e[e.TypeChanged=9]="TypeChanged",e[e.OtherEditing=10]="OtherEditing"}(Y||(Y={})),function(e){e[e.ToPuppeteer=1]="ToPuppeteer",e[e.ToJSON=2]="ToJSON"}(ee||(ee={}));var te=Object.freeze({__proto__:null,UserMetrics:M,get Action(){return F},ContrastThresholds:{aa:0,aaa:1},PanelCodes:x,SidebarPaneCodes:A,KeybindSetSettings:H,KeyboardShortcutAction:U,get IssueOpener(){return N},get DualScreenDeviceEmulated(){return W},DevtoolsExperiments:j,IssueExpanded:V,IssueResourceOpened:B,IssueCreated:_,get DeveloperResourceLoaded(){return z},get DeveloperResourceScheme(){return q},get LinearMemoryInspectorRevealedFrom(){return K},get LinearMemoryInspectorTarget(){return G},Language:J,get SyncSetting(){return Q},get RecordingToggled(){return X},get RecordingReplayFinished(){return $},get RecordingReplayStarted(){return Z},get RecordingEdited(){return Y},get RecordingExported(){return ee}});const oe=new M;export{b as InspectorFrontendHost,a as InspectorFrontendHostAPI,O as Platform,v as ResourceLoader,te as UserMetrics,oe as userMetrics};
