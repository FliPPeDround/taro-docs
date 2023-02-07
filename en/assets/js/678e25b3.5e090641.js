"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[91005],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=l.createContext({}),u=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return l.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,d=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=u(n),m=r,s=p["".concat(d,".").concat(m)]||p[m]||k[m]||a;return n?l.createElement(s,o(o({ref:e},c),{},{components:n})):l.createElement(s,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51115:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"Camera",sidebar_label:"Camera"},i=void 0,d={unversionedId:"components/media/camera",id:"version-3.x/components/media/camera",title:"Camera",description:"System camera.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/media/camera.md",sourceDirName:"components/media",slug:"/components/media/camera",permalink:"/taro-docs/en/docs/components/media/camera",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/media/camera.md",tags:[],version:"3.x",frontMatter:{title:"Camera",sidebar_label:"Camera"},sidebar:"components",previous:{title:"Audio",permalink:"/taro-docs/en/docs/components/media/audio"},next:{title:"ChannelLive",permalink:"/taro-docs/en/docs/components/media/channel-live"}},u={},c=[{value:"Type",id:"type",level:2},{value:"CameraProps",id:"cameraprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"mode",id:"mode",level:3},{value:"resolution",id:"resolution",level:3},{value:"devicePosition",id:"deviceposition",level:3},{value:"flash",id:"flash",level:3},{value:"frameSize",id:"framesize",level:3},{value:"onInitDoneEventDetail",id:"oninitdoneeventdetail",level:3},{value:"API Support",id:"api-support",level:2}],k={toc:c};function p(t){var{components:e}=t,n=a(t,["components"]);return(0,l.kt)("wrapper",r({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"System camera."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/camera.html"}),"Reference"))),(0,l.kt)("h2",r({},{id:"type"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CameraProps>\n")),(0,l.kt)("h2",r({},{id:"cameraprops"}),"CameraProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"normal" | "scanCode"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"normal"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Application mode. It is valid only during initialization, and cannot be dynamically changed.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"resolution"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"low" | "medium" | "high"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"medium"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Resolution, no dynamic changes supported.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"devicePosition"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"front" | "back"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"back"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The facing orientation of the camera.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"flash"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"auto" | "on" | "off" | "torch"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"auto"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The flash. Values include auto, on, and off.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"frameSize"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"medium" | "small" | "large"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"medium"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies the expected size of camera frame data")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"scanArea"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number[]")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Scan to identify area, result is [x, y, w, h],",(0,l.kt)("br",null),"is the upper left corner of the display area relative to the camera.",(0,l.kt)("br",null),'w,h is the area size in px. It is valid only when only mode="scanCode"')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onStop"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when the camera is closed unexpectedly, for example, exiting the background.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onError"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when the camera is not authorized.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onInitDone"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onInitDoneEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered after the camera is initialized")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onScanCode"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when a scanned QR code is recognized. ",(0,l.kt)("br",null),'It is valid only when mode="scanCode".')))),(0,l.kt)("h3",r({},{id:"property-support"}),"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.mode"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.resolution"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.devicePosition"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.flash"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.frameSize"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.scanArea"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.onStop"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.onError"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.onInitDone"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"CameraProps.onScanCode"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,l.kt)("h3",r({},{id:"mode"}),"mode"),(0,l.kt)("p",null,"Valid values of mode"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"normal"),(0,l.kt)("td",null,"Camera mode")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"scanCode"),(0,l.kt)("td",null,"Scanning mode")))),(0,l.kt)("h3",r({},{id:"resolution"}),"resolution"),(0,l.kt)("p",null,"Valid values of resolution"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"low"),(0,l.kt)("td",null,"low")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"medium"),(0,l.kt)("td",null,"medium")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"high"),(0,l.kt)("td",null,"high")))),(0,l.kt)("h3",r({},{id:"deviceposition"}),"devicePosition"),(0,l.kt)("p",null,"Valid values of device-position"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"front"),(0,l.kt)("td",null,"Front-facing camera")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"back"),(0,l.kt)("td",null,"Rear-facing camera")))),(0,l.kt)("h3",r({},{id:"flash"}),"flash"),(0,l.kt)("p",null,"Valid values of flash"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"auto"),(0,l.kt)("td",null,"Auto")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"on"),(0,l.kt)("td",null,"On")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"off"),(0,l.kt)("td",null,"Off")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"torch"),(0,l.kt)("td",null,"Always bright")))),(0,l.kt)("h3",r({},{id:"framesize"}),"frameSize"),(0,l.kt)("p",null,"Valid values of frame-size"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"small"),(0,l.kt)("td",null,"Small-size frame data")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"medium"),(0,l.kt)("td",null,"Medium-size frame data")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"large"),(0,l.kt)("td",null,"Large-size frame data")))),(0,l.kt)("h3",r({},{id:"oninitdoneeventdetail"}),"onInitDoneEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"maxZoom"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Maximum zoom")))),(0,l.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Camera"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);