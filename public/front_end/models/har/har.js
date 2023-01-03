import*as e from"../../core/common/common.js";import*as t from"../../core/sdk/sdk.js";import*as s from"../../core/i18n/i18n.js";import*as r from"../../core/platform/platform.js";class o{custom;constructor(e){if(!e||"object"!=typeof e)throw"First parameter is expected to be an object";this.custom=new Map}static safeDate(e){const t=new Date(e);if(!Number.isNaN(t.getTime()))return t;throw"Invalid date format"}static safeNumber(e){const t=Number(e);if(!Number.isNaN(t))return t;throw"Casting to number results in NaN"}static optionalNumber(e){return void 0!==e?o.safeNumber(e):void 0}static optionalString(e){return void 0!==e?String(e):void 0}customAsString(e){const t=this.custom.get(e);if(t)return String(t)}customAsNumber(e){const t=this.custom.get(e);if(!t)return;const s=Number(t);return Number.isNaN(s)?void 0:s}customAsArray(e){const t=this.custom.get(e);if(t)return Array.isArray(t)?t:void 0}customInitiator(){return this.custom.get("initiator")}}class i extends o{version;creator;browser;pages;entries;comment;constructor(e){if(super(e),this.version=String(e.version),this.creator=new n(e.creator),this.browser=e.browser?new n(e.browser):void 0,this.pages=Array.isArray(e.pages)?e.pages.map((e=>new a(e))):[],!Array.isArray(e.entries))throw"log.entries is expected to be an array";this.entries=e.entries.map((e=>new u(e))),this.comment=o.optionalString(e.comment)}}class n extends o{name;version;comment;constructor(e){super(e),this.name=String(e.name),this.version=String(e.version),this.comment=o.optionalString(e.comment)}}class a extends o{startedDateTime;id;title;pageTimings;comment;constructor(e){super(e),this.startedDateTime=o.safeDate(e.startedDateTime),this.id=String(e.id),this.title=String(e.title),this.pageTimings=new c(e.pageTimings),this.comment=o.optionalString(e.comment)}}class c extends o{onContentLoad;onLoad;comment;constructor(e){super(e),this.onContentLoad=o.optionalNumber(e.onContentLoad),this.onLoad=o.optionalNumber(e.onLoad),this.comment=o.optionalString(e.comment)}}class u extends o{pageref;startedDateTime;time;request;response;cache;timings;serverIPAddress;connection;comment;constructor(e){super(e),this.pageref=o.optionalString(e.pageref),this.startedDateTime=o.safeDate(e.startedDateTime),this.time=o.safeNumber(e.time),this.request=new m(e.request),this.response=new d(e.response),this.cache={},this.timings=new S(e.timings),this.serverIPAddress=o.optionalString(e.serverIPAddress),this.connection=o.optionalString(e.connection),this.comment=o.optionalString(e.comment),this.custom.set("fromCache",o.optionalString(e._fromCache)),this.custom.set("initiator",this.importInitiator(e._initiator)),this.custom.set("priority",o.optionalString(e._priority)),this.custom.set("resourceType",o.optionalString(e._resourceType)),this.custom.set("webSocketMessages",this.importWebSocketMessages(e._webSocketMessages))}importInitiator(e){if("object"==typeof e)return new f(e)}importWebSocketMessages(e){if(!Array.isArray(e))return;const t=[];for(const s of e){if("object"!=typeof s)return;t.push(new T(s))}return t}}class m extends o{method;url;httpVersion;cookies;headers;queryString;postData;headersSize;bodySize;comment;constructor(e){super(e),this.method=String(e.method),this.url=String(e.url),this.httpVersion=String(e.httpVersion),this.cookies=Array.isArray(e.cookies)?e.cookies.map((e=>new l(e))):[],this.headers=Array.isArray(e.headers)?e.headers.map((e=>new p(e))):[],this.queryString=Array.isArray(e.queryString)?e.queryString.map((e=>new h(e))):[],this.postData=e.postData?new g(e.postData):void 0,this.headersSize=o.safeNumber(e.headersSize),this.bodySize=o.safeNumber(e.bodySize),this.comment=o.optionalString(e.comment)}}class d extends o{status;statusText;httpVersion;cookies;headers;content;redirectURL;headersSize;bodySize;comment;constructor(e){super(e),this.status=o.safeNumber(e.status),this.statusText=String(e.statusText),this.httpVersion=String(e.httpVersion),this.cookies=Array.isArray(e.cookies)?e.cookies.map((e=>new l(e))):[],this.headers=Array.isArray(e.headers)?e.headers.map((e=>new p(e))):[],this.content=new b(e.content),this.redirectURL=String(e.redirectURL),this.headersSize=o.safeNumber(e.headersSize),this.bodySize=o.safeNumber(e.bodySize),this.comment=o.optionalString(e.comment),this.custom.set("transferSize",o.optionalNumber(e._transferSize)),this.custom.set("error",o.optionalString(e._error))}}class l extends o{name;value;path;domain;expires;httpOnly;secure;comment;constructor(e){super(e),this.name=String(e.name),this.value=String(e.value),this.path=o.optionalString(e.path),this.domain=o.optionalString(e.domain),this.expires=e.expires?o.safeDate(e.expires):void 0,this.httpOnly=void 0!==e.httpOnly?Boolean(e.httpOnly):void 0,this.secure=void 0!==e.secure?Boolean(e.secure):void 0,this.comment=o.optionalString(e.comment)}}class p extends o{name;value;comment;constructor(e){super(e),this.name=String(e.name),this.value=String(e.value),this.comment=o.optionalString(e.comment)}}class h extends o{name;value;comment;constructor(e){super(e),this.name=String(e.name),this.value=String(e.value),this.comment=o.optionalString(e.comment)}}class g extends o{mimeType;params;text;comment;constructor(e){super(e),this.mimeType=String(e.mimeType),this.params=Array.isArray(e.params)?e.params.map((e=>new y(e))):[],this.text=String(e.text),this.comment=o.optionalString(e.comment)}}class y extends o{name;value;fileName;contentType;comment;constructor(e){super(e),this.name=String(e.name),this.value=o.optionalString(e.value),this.fileName=o.optionalString(e.fileName),this.contentType=o.optionalString(e.contentType),this.comment=o.optionalString(e.comment)}}class b extends o{size;compression;mimeType;text;encoding;comment;constructor(e){super(e),this.size=o.safeNumber(e.size),this.compression=o.optionalNumber(e.compression),this.mimeType=String(e.mimeType),this.text=o.optionalString(e.text),this.encoding=o.optionalString(e.encoding),this.comment=o.optionalString(e.comment)}}class S extends o{blocked;dns;connect;send;wait;receive;ssl;comment;constructor(e){super(e),this.blocked=o.optionalNumber(e.blocked),this.dns=o.optionalNumber(e.dns),this.connect=o.optionalNumber(e.connect),this.send=o.safeNumber(e.send),this.wait=o.safeNumber(e.wait),this.receive=o.safeNumber(e.receive),this.ssl=o.optionalNumber(e.ssl),this.comment=o.optionalString(e.comment),this.custom.set("blocked_queueing",o.optionalNumber(e._blocked_queueing)),this.custom.set("blocked_proxy",o.optionalNumber(e._blocked_proxy))}}class f extends o{type;url;lineNumber;constructor(e){super(e),this.type=o.optionalString(e.type),this.url=o.optionalString(e.url),this.lineNumber=o.optionalNumber(e.lineNumber)}}class T extends o{time;opcode;data;type;constructor(e){super(e),this.time=o.optionalNumber(e.time),this.opcode=o.optionalNumber(e.opcode),this.data=o.optionalString(e.data),this.type=o.optionalString(e.type)}}var q=Object.freeze({__proto__:null,HARRoot:class extends o{log;constructor(e){super(e),this.log=new i(e.log)}},HARLog:i,HARPage:a,HAREntry:u,HARParam:y,HARTimings:S,HARInitiator:f});class v{static requestsFromHARLog(e){const s=new Map;for(const t of e.pages)s.set(t.id,t);e.entries.sort(((e,t)=>e.startedDateTime.valueOf()-t.startedDateTime.valueOf()));const r=new Map,o=[];for(const i of e.entries){const e=i.pageref;let n=e?r.get(e):void 0;const a=n?n.mainRequest.url():i.request.url;let c=null;const u=i.customInitiator();u&&(c={type:u.type,url:u.url,lineNumber:u.lineNumber});const m=t.NetworkRequest.NetworkRequest.createWithoutBackendRequest("har-"+o.length,i.request.url,a,c),d=e?s.get(e):void 0;!n&&e&&d&&(n=v.buildPageLoad(d,m),r.set(e,n)),v.fillRequestFromHAREntry(m,i,n),n&&n.bindRequest(m),o.push(m)}return o}static buildPageLoad(e,s){const r=new t.PageLoad.PageLoad(s);return r.startTime=e.startedDateTime.valueOf(),r.contentLoadTime=1e3*Number(e.pageTimings.onContentLoad),r.loadTime=1e3*Number(e.pageTimings.onLoad),r}static fillRequestFromHAREntry(e,s,r){s.request.postData?e.setRequestFormData(!0,s.request.postData.text):e.setRequestFormData(!1,null),e.connectionId=s.connection||"",e.requestMethod=s.request.method,e.setRequestHeaders(s.request.headers),s.response.content.mimeType&&"x-unknown"!==s.response.content.mimeType&&(e.mimeType=s.response.content.mimeType),e.responseHeaders=s.response.headers,e.statusCode=s.response.status,e.statusText=s.response.statusText;let o=s.response.httpVersion.toLowerCase();"http/2.0"===o&&(o="h2"),e.protocol=o.replace(/^http\/2\.0?\+quic/,"http/2+quic");const i=s.startedDateTime.getTime()/1e3;e.setIssueTime(i,i);const n=s.response.content.size>0?s.response.content.size:0,a=s.response.headersSize>0?s.response.headersSize:0,c=s.response.bodySize>0?s.response.bodySize:0;e.resourceSize=n||a+c;let u=s.response.customAsNumber("transferSize");void 0===u&&(u=s.response.headersSize+s.response.bodySize),e.setTransferSize(u>=0?u:0);const m=s.customAsString("fromCache");"memory"===m?e.setFromMemoryCache():"disk"===m&&e.setFromDiskCache();const d=s.response.content.text,l={error:null,content:d||null,encoded:"base64"===s.response.content.encoding};e.setContentDataProvider((async()=>l)),v.setupTiming(e,i,s.time,s.timings),e.setRemoteAddress(s.serverIPAddress||"",80),e.setResourceType(v.getResourceType(e,s,r));const p=s.customAsString("priority");p&&Protocol.Network.ResourcePriority.hasOwnProperty(p)&&e.setPriority(p);const h=s.customAsArray("webSocketMessages");if(h)for(const s of h){if(void 0===s.time)continue;if(!Object.values(t.NetworkRequest.WebSocketFrameType).includes(s.type))continue;if(void 0===s.opcode)continue;if(void 0===s.data)continue;const r=s.type===t.NetworkRequest.WebSocketFrameType.Send;e.addFrame({time:s.time,text:s.data,opCode:s.opcode,mask:r,type:s.type})}e.finished=!0}static getResourceType(t,s,r){const o=s.customAsString("resourceType");if(o){const t=e.ResourceType.ResourceType.fromName(o);if(t)return t}if(r&&r.mainRequest===t)return e.ResourceType.resourceTypes.Document;const i=e.ResourceType.ResourceType.fromMimeType(s.response.content.mimeType);if(i!==e.ResourceType.resourceTypes.Other)return i;const n=e.ResourceType.ResourceType.fromURL(s.request.url);return n||e.ResourceType.resourceTypes.Other}static setupTiming(e,t,s,r){function o(e){return void 0===e||e<0?-1:(i+=e,i)}let i=r.blocked&&r.blocked>=0?r.blocked:0;const n=r.customAsNumber("blocked_proxy")||-1,a=r.customAsNumber("blocked_queueing")||-1,c=r.ssl&&r.ssl>=0?r.ssl:0;r.connect&&r.connect>0&&(r.connect-=c);const u={proxyStart:n>0?i-n:-1,proxyEnd:n>0?i:-1,requestTime:t+(a>0?a:0)/1e3,dnsStart:r.dns&&r.dns>=0?i:-1,dnsEnd:o(r.dns),connectStart:r.connect&&r.connect>=0?i:-1,connectEnd:o(r.connect)+c,sslStart:r.ssl&&r.ssl>=0?i:-1,sslEnd:o(r.ssl),workerStart:-1,workerReady:-1,workerFetchStart:-1,workerRespondWithSettled:-1,sendStart:r.send>=0?i:-1,sendEnd:o(r.send),pushStart:0,pushEnd:0,receiveHeadersEnd:o(r.wait)};o(r.receive),e.timing=u,e.endTime=t+Math.max(s,i)/1e3}}var w=Object.freeze({__proto__:null,Importer:v});class k{static pseudoWallTime(e,t){return new Date(1e3*e.pseudoWallTime(t))}static async build(e){const t=new k,s=[];for(const t of e)s.push(x.build(t));const r=await Promise.all(s);return{version:"1.2",creator:t.creator(),pages:t.buildPages(e),entries:r}}creator(){const e=/AppleWebKit\/([^ ]+)/.exec(window.navigator.userAgent);return{name:"WebInspector",version:e?e[1]:"n/a"}}buildPages(e){const s=new Set,r=[];for(let o=0;o<e.length;++o){const i=e[o],n=t.PageLoad.PageLoad.forRequest(i);n&&!s.has(n.id)&&(s.add(n.id),r.push(this.convertPage(n,i)))}return r}convertPage(e,t){return{startedDateTime:k.pseudoWallTime(t,e.startTime).toJSON(),id:"page_"+e.id,title:e.url,pageTimings:{onContentLoad:this.pageEventTime(e,e.contentLoadTime),onLoad:this.pageEventTime(e,e.loadTime)}}}pageEventTime(e,t){const s=e.startTime;return-1===t||-1===s?-1:x.toMilliseconds(t-s)}}class x{request;constructor(e){this.request=e}static toMilliseconds(e){return-1===e?-1:1e3*e}static async build(s){const r=new x(s);let o=r.request.remoteAddress();const i=o.lastIndexOf(":");-1!==i&&(o=o.substr(0,i));const n=r.buildTimings();let a=0;for(const e of[n.blocked,n.dns,n.connect,n.send,n.wait,n.receive])a+=Math.max(e,0);const c=r.request.initiator();let u=null;c&&(u={type:c.type},void 0!==c.url&&(u.url=c.url),void 0!==c.lineNumber&&(u.lineNumber=c.lineNumber),c.stack&&(u.stack=c.stack));const m={_fromCache:void 0,_initiator:u,_priority:r.request.priority(),_resourceType:r.request.resourceType().name(),_webSocketMessages:void 0,cache:{},connection:void 0,pageref:void 0,request:await r.buildRequest(),response:r.buildResponse(),serverIPAddress:o.replace(/\[\]/g,""),startedDateTime:k.pseudoWallTime(r.request,r.request.issueTime()).toJSON(),time:a,timings:n};r.request.cached()?m._fromCache=r.request.cachedInMemory()?"memory":"disk":delete m._fromCache,"0"!==r.request.connectionId?m.connection=r.request.connectionId:delete m.connection;const d=t.PageLoad.PageLoad.forRequest(r.request);if(d?m.pageref="page_"+d.id:delete m.pageref,r.request.resourceType()===e.ResourceType.resourceTypes.WebSocket){const e=[];for(const t of r.request.frames())e.push({type:t.type,time:t.time,opcode:t.opCode,data:t.text});m._webSocketMessages=e}else delete m._webSocketMessages;return m}async buildRequest(){const e=this.request.requestHeadersText(),t={method:this.request.requestMethod,url:this.buildRequestURL(this.request.url()),httpVersion:this.request.requestHttpVersion(),headers:this.request.requestHeaders(),queryString:this.buildParameters(this.request.queryParameters||[]),cookies:this.buildCookies(this.request.includedRequestCookies()),headersSize:e?e.length:-1,bodySize:await this.requestBodySize(),postData:void 0},s=await this.buildPostData();return s?t.postData=s:delete t.postData,t}buildResponse(){const e=this.request.responseHeadersText;return{status:this.request.statusCode,statusText:this.request.statusText,httpVersion:this.request.responseHttpVersion(),headers:this.request.responseHeaders,cookies:this.buildCookies(this.request.responseCookies),content:this.buildContent(),redirectURL:this.request.responseHeaderValue("Location")||"",headersSize:e?e.length:-1,bodySize:this.responseBodySize,_transferSize:this.request.transferSize,_error:this.request.localizedFailDescription}}buildContent(){const e={size:this.request.resourceSize,mimeType:this.request.mimeType||"x-unknown",compression:void 0},t=this.responseCompression;return"number"==typeof t?e.compression=t:delete e.compression,e}buildTimings(){const e=this.request.timing,t=this.request.issueTime(),s=this.request.startTime,r={blocked:-1,dns:-1,ssl:-1,connect:-1,send:0,wait:0,receive:0,_blocked_queueing:-1,_blocked_proxy:void 0},o=t<s?s-t:-1;r.blocked=x.toMilliseconds(o),r._blocked_queueing=x.toMilliseconds(o);let i=0;if(e){const t=d([e.dnsStart,e.connectStart,e.sendStart]);t!==1/0&&(r.blocked+=t),-1!==e.proxyEnd&&(r._blocked_proxy=e.proxyEnd-e.proxyStart),r._blocked_proxy&&r._blocked_proxy>r.blocked&&(r.blocked=r._blocked_proxy);const s=e.dnsEnd>=0?t:0,o=e.dnsEnd>=0?e.dnsEnd:-1;r.dns=o-s;const n=e.sslEnd>0?e.sslStart:0,a=e.sslEnd>0?e.sslEnd:-1;r.ssl=a-n;const c=e.connectEnd>=0?d([o,t]):0,u=e.connectEnd>=0?e.connectEnd:-1;r.connect=u-c;const m=e.sendEnd>=0?Math.max(u,o,t):0,l=e.sendEnd>=0?e.sendEnd:0;r.send=l-m,r.send<0&&(r.send=0),i=Math.max(l,u,a,o,t,0)}else if(-1===this.request.responseReceivedTime)return r.blocked=x.toMilliseconds(this.request.endTime-t),r;const n=e?e.requestTime:s,a=i,c=x.toMilliseconds(this.request.responseReceivedTime-n);r.wait=c-a;const u=c,m=x.toMilliseconds(this.request.endTime-n);return r.receive=Math.max(m-u,0),r;function d(e){return e.reduce(((e,t)=>t>=0&&t<e?t:e),1/0)}}async buildPostData(){const e=await this.request.requestFormData();if(!e)return null;const t={mimeType:this.request.requestContentType()||"",text:e,params:void 0},s=await this.request.formParameters();return s?t.params=this.buildParameters(s):delete t.params,t}buildParameters(e){return e.slice()}buildRequestURL(e){return e.split("#",2)[0]}buildCookies(e){return e.map(this.buildCookie.bind(this))}buildCookie(e){const t={name:e.name(),value:e.value(),path:e.path(),domain:e.domain(),expires:e.expiresDate(k.pseudoWallTime(this.request,this.request.startTime)),httpOnly:e.httpOnly(),secure:e.secure(),sameSite:void 0};return e.sameSite()?t.sameSite=e.sameSite():delete t.sameSite,t}async requestBodySize(){const e=await this.request.requestFormData();return e?(new TextEncoder).encode(e).length:0}get responseBodySize(){return this.request.cached()||304===this.request.statusCode?0:this.request.responseHeadersText?this.request.transferSize-this.request.responseHeadersText.length:-1}get responseCompression(){if(!this.request.cached()&&304!==this.request.statusCode&&206!==this.request.statusCode&&this.request.responseHeadersText)return this.request.resourceSize-this.responseBodySize}}var N=Object.freeze({__proto__:null,Log:k,Entry:x});const R={collectingContent:"Collecting content…",writingFile:"Writing file…"},_=s.i18n.registerUIStrings("models/har/Writer.ts",R),A=s.i18n.getLocalizedString.bind(void 0,_);class z{static async write(t,s,r){const o=new e.Progress.CompositeProgress(r),i=await z.harStringForRequests(s,o);r.isCanceled()||await z.writeToStream(t,o,i)}static async harStringForRequests(e,t){const s=t.createSubProgress();s.setTitle(A(R.collectingContent)),s.setTotalWork(e.length),e.sort(((e,t)=>e.issueTime()-t.issueTime()));const o=await k.build(e),i=[];for(let t=0;t<e.length;t++){const s=e[t].contentData();i.push(s.then(n.bind(null,o.entries[t])))}return await Promise.all(i),s.done(),s.isCanceled()?"":JSON.stringify({log:o},null,C);function n(e,t){s.incrementWorked();let o=t.encoded;if(null!==t.content){let s=t.content;s&&!o&&function(e){for(let s=0;s<e.length;s++)if(!((t=e.charCodeAt(s))<55296||t>=57344&&t<64976||t>65007&&t<=1114111&&65534!=(65534&t)))return!0;var t;return!1}(s)&&(s=r.StringUtilities.toBase64(s),o=!0),e.response.content.text=s}o&&(e.response.content.encoding="base64")}}static async writeToStream(e,t,s){const r=t.createSubProgress();r.setTitle(A(R.writingFile)),r.setTotalWork(s.length);for(let t=0;t<s.length&&!r.isCanceled();t+=D){const o=s.substr(t,D);await e.write(o),r.incrementWorked(o.length)}r.done()}}const C=2,D=1e5;var P=Object.freeze({__proto__:null,Writer:z,jsonIndent:C,chunkSize:D});export{q as HARFormat,w as Importer,N as Log,P as Writer};
