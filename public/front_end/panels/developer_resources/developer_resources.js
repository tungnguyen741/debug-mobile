import*as e from"../../core/common/common.js";import*as t from"../../core/i18n/i18n.js";import*as i from"../../core/sdk/sdk.js";import*as r from"../../ui/legacy/legacy.js";import*as s from"../../core/host/host.js";import*as o from"../../core/platform/platform.js";import*as l from"../../models/text_utils/text_utils.js";import*as a from"../../ui/legacy/components/data_grid/data_grid.js";const n=new CSSStyleSheet;n.replaceSync(".data-grid{border:none}.data-grid td .url-outer{width:100%;display:inline-flex;justify-content:flex-start}.data-grid td .url-outer .filter-highlight{font-weight:700}.data-grid td .url-prefix{overflow-x:hidden;text-overflow:ellipsis}.data-grid td .url-suffix{flex:none}.data-grid td.error-message .filter-highlight{font-weight:700}\n/*# sourceURL=developerResourcesListView.css */\n");const d={status:"Status",url:"URL",initiator:"Initiator",totalBytes:"Total Bytes",error:"Error",developerResources:"Developer Resources",copyUrl:"Copy URL",copyInitiatorUrl:"Copy initiator URL",pending:"pending",success:"success",failure:"failure",sBytes:"{n, plural, =1 {# byte} other {# bytes}}"},h=t.i18n.registerUIStrings("panels/developer_resources/DeveloperResourcesListView.ts",d),c=t.i18n.getLocalizedString.bind(void 0,h);class u extends r.Widget.VBox{nodeForItem;isVisibleFilter;highlightRegExp;dataGrid;constructor(e){super(!0),this.nodeForItem=new Map,this.isVisibleFilter=e,this.highlightRegExp=null;const t=[{id:"status",title:c(d.status),width:"60px",fixedWidth:!0,sortable:!0},{id:"url",title:c(d.url),width:"250px",fixedWidth:!1,sortable:!0},{id:"initiator",title:c(d.initiator),width:"80px",fixedWidth:!1,sortable:!0},{id:"size",title:c(d.totalBytes),width:"80px",fixedWidth:!0,sortable:!0,align:a.DataGrid.Align.Right},{id:"errorMessage",title:c(d.error),width:"200px",fixedWidth:!1,sortable:!0}];this.dataGrid=new a.SortableDataGrid.SortableDataGrid({displayName:c(d.developerResources),columns:t,editCallback:void 0,refreshCallback:void 0,deleteCallback:void 0}),this.dataGrid.setResizeMethod(a.DataGrid.ResizeMethod.Last),this.dataGrid.element.classList.add("flex-auto"),this.dataGrid.addEventListener(a.DataGrid.Events.SortingChanged,this.sortingChanged,this),this.dataGrid.setRowContextMenuCallback(this.populateContextMenu.bind(this));const i=this.dataGrid.asWidget();i.show(this.contentElement),this.setDefaultFocusedChild(i)}populateContextMenu(e,t){const i=t.item;e.clipboardSection().appendItem(c(d.copyUrl),(()=>{s.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(i.url)})),i.initiator.initiatorUrl&&e.clipboardSection().appendItem(c(d.copyInitiatorUrl),(()=>{s.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(i.initiator.initiatorUrl)}))}update(e){let t=!1;const i=this.dataGrid.rootNode();for(const r of e){let e=this.nodeForItem.get(r);e?this.isVisibleFilter(e.item)&&(t=e.refreshIfNeeded()||t):(e=new g(r),this.nodeForItem.set(r,e),this.isVisibleFilter(e.item)&&(i.appendChild(e),t=!0))}t&&this.sortingChanged()}reset(){this.nodeForItem.clear(),this.dataGrid.rootNode().removeChildren()}updateFilterAndHighlight(e){this.highlightRegExp=e;let t=!1;for(const e of this.nodeForItem.values()){const i=this.isVisibleFilter(e.item),r=Boolean(e.parent);i&&e.setHighlight(this.highlightRegExp),i!==r&&(t=!0,i?this.dataGrid.rootNode().appendChild(e):e.remove())}t&&this.sortingChanged()}sortingChanged(){const e=this.dataGrid.sortColumnId();if(!e)return;const t=g.sortFunctionForColumn(e);t&&this.dataGrid.sortNodes(t,!this.dataGrid.isSortOrderAscending())}wasShown(){super.wasShown(),this.registerCSSFiles([n])}}class g extends a.SortableDataGrid.SortableDataGridNode{item;highlightRegExp;constructor(e){super(),this.item=e,this.highlightRegExp=null}setHighlight(e){this.highlightRegExp!==e&&(this.highlightRegExp=e,this.refresh())}refreshIfNeeded(){return this.refresh(),!0}createCell(e){const t=this.createTD(e);switch(e){case"url":{r.Tooltip.Tooltip.install(t,this.item.url);const i=t.createChild("div","url-outer"),s=i.createChild("div","url-prefix"),o=i.createChild("div","url-suffix"),l=/^(.*)(\/[^/]*)$/.exec(this.item.url);s.textContent=l?l[1]:this.item.url,o.textContent=l?l[2]:"",this.highlightRegExp&&this.highlight(i,this.item.url),this.setCellAccessibleName(this.item.url,t,e);break}case"initiator":{const s=this.item.initiator.initiatorUrl||"";t.textContent=s,r.Tooltip.Tooltip.install(t,s),this.setCellAccessibleName(s,t,e),t.onmouseenter=()=>{const e=this.item.initiator.frameId,t=e?i.FrameManager.FrameManager.instance().getFrame(e):null;t&&t.highlight()},t.onmouseleave=()=>i.OverlayModel.OverlayModel.hideDOMNodeHighlight();break}case"status":null===this.item.success?t.textContent=c(d.pending):t.textContent=this.item.success?c(d.success):c(d.failure);break;case"size":{const i=this.item.size;if(null!==i){t.createChild("span").textContent=o.NumberUtilities.withThousandsSeparator(i);const r=c(d.sBytes,{n:i});this.setCellAccessibleName(r,t,e)}break}case"errorMessage":t.classList.add("error-message"),this.item.errorMessage&&(t.textContent=this.item.errorMessage,this.highlightRegExp&&this.highlight(t,this.item.errorMessage))}return t}highlight(e,t){if(!this.highlightRegExp)return;const i=this.highlightRegExp.exec(t);if(!i||!i.length)return;const s=new l.TextRange.SourceRange(i.index,i[0].length);r.UIUtils.highlightRangesWithStyleClass(e,[s],"filter-highlight")}static sortFunctionForColumn(e){const t=e=>null===e?-1:Number(e);switch(e){case"url":return(e,t)=>e.item.url.localeCompare(t.item.url);case"status":return(e,i)=>t(e.item.success)-t(i.item.success);case"size":return(e,i)=>t(e.item.size)-t(i.item.size);case"initiator":return(e,t)=>(e.item.initiator.initiatorUrl||"").localeCompare(t.item.initiator.initiatorUrl||"");case"errorMessage":return(e,t)=>(e.item.errorMessage||"").localeCompare(t.item.errorMessage||"");default:return console.assert(!1,"Unknown sort field: "+e),null}}}const p=new CSSStyleSheet;p.replaceSync(":host{overflow:hidden}.developer-resource-view-toolbar-container{display:flex;border-bottom:1px solid var(--color-details-hairline);flex:0 0 auto}.developer-resource-view-toolbar{display:inline-block;width:100%}.developer-resource-view-toolbar-summary{background-color:var(--color-background-elevation-2);border-top:1px solid var(--color-details-hairline);padding-left:5px;flex:0 0 19px;display:flex;padding-right:5px}.developer-resource-view-toolbar-summary .developer-resource-view-message{padding-top:2px;padding-left:1ex;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.developer-resource-view-results{overflow-y:auto;display:flex;flex:auto}\n/*# sourceURL=developerResourcesView.css */\n");const m={enterTextToSearchTheUrlAndError:"Enter text to search the URL and Error columns",loadHttpsDeveloperResources:"Load `HTTP(S)` developer resources through the inspected target",enableLoadingThroughTarget:"Enable loading through target",resourcesCurrentlyLoading:"{PH1} resources, {PH2} currently loading",resources:"{n, plural, =1 {# resource} other {# resources}}"},x=t.i18n.registerUIStrings("panels/developer_resources/DeveloperResourcesView.ts",m),v=t.i18n.getLocalizedString.bind(void 0,x);let f;class b extends r.Widget.VBox{textFilterRegExp;filterInput;coverageResultsElement;listView;statusToolbarElement;statusMessageElement;throttler;loader;constructor(){super(!0);const t=this.contentElement.createChild("div","developer-resource-view-toolbar-container"),s=new r.Toolbar.Toolbar("developer-resource-view-toolbar",t);this.textFilterRegExp=null;this.filterInput=new r.Toolbar.ToolbarInput(v(m.enterTextToSearchTheUrlAndError),"",1),this.filterInput.addEventListener(r.Toolbar.ToolbarInput.Event.TextChanged,this.onFilterChanged,this),s.appendToolbarItem(this.filterInput);const o=i.PageResourceLoader.getLoadThroughTargetSetting(),l=new r.Toolbar.ToolbarSettingCheckbox(o,v(m.loadHttpsDeveloperResources),v(m.enableLoadingThroughTarget));s.appendToolbarItem(l),this.coverageResultsElement=this.contentElement.createChild("div","developer-resource-view-results"),this.listView=new u(this.isVisible.bind(this)),this.listView.show(this.coverageResultsElement),this.statusToolbarElement=this.contentElement.createChild("div","developer-resource-view-toolbar-summary"),this.statusMessageElement=this.statusToolbarElement.createChild("div","developer-resource-view-message"),this.throttler=new e.Throttler.Throttler(100),this.loader=i.PageResourceLoader.PageResourceLoader.instance(),this.loader.addEventListener(i.PageResourceLoader.Events.Update,this.onUpdate,this),this.onUpdate()}static instance(){return f||(f=new b),f}onUpdate(){this.throttler.schedule(this.update.bind(this))}async update(){this.listView.reset(),this.listView.update(this.loader.getResourcesLoaded().values()),this.updateStats()}updateStats(){const{loading:e,resources:t}=this.loader.getNumberOfResources();this.statusMessageElement.textContent=e>0?v(m.resourcesCurrentlyLoading,{PH1:t,PH2:e}):v(m.resources,{n:t})}isVisible(e){return!this.textFilterRegExp||this.textFilterRegExp.test(e.url)||this.textFilterRegExp.test(e.errorMessage||"")}onFilterChanged(){if(!this.listView)return;const e=this.filterInput.value();this.textFilterRegExp=e?createPlainTextSearchRegex(e,"i"):null,this.listView.updateFilterAndHighlight(this.textFilterRegExp),this.updateStats()}wasShown(){super.wasShown(),this.registerCSSFiles([p])}}var w=Object.freeze({__proto__:null,DeveloperResourcesView:b});export{w as DeveloperResourcesView};
