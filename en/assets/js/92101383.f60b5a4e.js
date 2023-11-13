"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[92912],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),d=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return l.createElement(i.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),k=d(n),p=r,m=k["".concat(i,".").concat(p)]||k[p]||s[p]||a;return n?l.createElement(m,o(o({ref:e},c),{},{components:n})):l.createElement(m,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=p;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[k]="string"==typeof t?t:r,o[1]=u;for(var d=2;d<a;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91264:function(t,e,n){n.d(e,{Z:function(){return u}});var l=n(93106),r=n(4706),a={tabItem:"tabItem_FBI3"};function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},o.apply(this,arguments)}function u({children:t,hidden:e,className:n}){return l.createElement("div",o({role:"tabpanel",className:(0,r.Z)(a.tabItem,n)},{hidden:e}),t)}},8602:function(t,e,n){n.d(e,{Z:function(){return P}});var l=n(93106),r=n(4706),a=n(29369),o=n(27907),u=n(3111),i=n(65009),d=n(42615);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k(t){return function(t){var e,n;return null!==(n=null===(e=l.Children.map(t,(t=>{if(!t||(0,l.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===e?void 0:e.filter(Boolean))&&void 0!==n?n:[]}(t).map((({props:{value:t,label:e,attributes:n,default:l}})=>({value:t,label:e,attributes:n,default:l})))}function s(t){const{values:e,children:n}=t;return(0,l.useMemo)((()=>{const t=null!=e?e:k(n);return function(t){const e=(0,i.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function p({value:t,tabValues:e}){return e.some((e=>e.value===t))}function m({queryString:t=!1,groupId:e}){const n=(0,o.k6)(),r=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e}),a=(0,u._X)(r),i=(0,l.useCallback)((t=>{if(!r)return;const e=new URLSearchParams(n.location.search);e.set(r,t),n.replace(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},l=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),l.forEach((function(e){c(t,e,n[e])}))}return t}({},n.location,{search:e.toString()}))}),[r,n]);return[a,i]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:r}=t,a=s(t),[o,u]=(0,l.useState)((()=>function({defaultValue:t,tabValues:e}){if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}var n;const l=null!==(n=e.find((t=>t.default)))&&void 0!==n?n:e[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:e,tabValues:a}))),[i,c]=m({queryString:n,groupId:r}),[k,g]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[n,r]=(0,d.Nk)(e);return[n,(0,l.useCallback)((t=>{e&&r.set(t)}),[e,r])]}({groupId:r}),y=(()=>{const t=null!=i?i:k;return p({value:t,tabValues:a})?t:null})();(0,l.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:o,selectValue:(0,l.useCallback)((t=>{if(!p({value:t,tabValues:a}))throw new Error(`Can't select invalid tab value=${t}`);u(t),c(t),g(t)}),[c,g,a]),tabValues:a}}var y=n(81600),h={tabList:"tabList_qAna",tabItem:"tabItem_ulzt"};function v(){return v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},v.apply(this,arguments)}function f({className:t,block:e,selectedValue:n,selectValue:o,tabValues:u}){const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=t=>{const e=t.currentTarget,l=i.indexOf(e),r=u[l].value;r!==n&&(d(e),o(r))},k=t=>{let e=null;switch(t.key){case"Enter":c(t);break;case"ArrowRight":{const l=i.indexOf(t.currentTarget)+1;var n;e=null!==(n=i[l])&&void 0!==n?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(t.currentTarget)-1;var l;e=null!==(l=i[n])&&void 0!==l?l:i[i.length-1];break}}null==e||e.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":e},t)},u.map((({value:t,label:e,attributes:a})=>l.createElement("li",v({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:t=>i.push(t),onKeyDown:k,onClick:c},a,{className:(0,r.Z)("tabs__item",h.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===t})}),null!=e?e:t))))}function b({lazy:t,children:e,selectedValue:n}){const r=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){const t=r.find((t=>t.props.value===n));return t?(0,l.cloneElement)(t,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function N(t){const e=g(t);return l.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},l.createElement(f,v({},t,e)),l.createElement(b,v({},t,e)))}function P(t){const e=(0,y.Z)();return l.createElement(N,v({key:String(e)},t))}},79169:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});n(93106);var l=n(79874),r=n(8602),a=n(91264);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},o.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={title:"LivePlayer",sidebar_label:"LivePlayer"},d=void 0,c={unversionedId:"components/media/live-player",id:"components/media/live-player",title:"LivePlayer",description:"Real-time audio/video playback. Related API: Taro.createLivePlayerContext",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/media/live-player.md",sourceDirName:"components/media",slug:"/components/media/live-player",permalink:"/taro-docs/en/docs/next/components/media/live-player",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/media/live-player.md",tags:[],version:"current",frontMatter:{title:"LivePlayer",sidebar_label:"LivePlayer"},sidebar:"components",previous:{title:"Image",permalink:"/taro-docs/en/docs/next/components/media/image"},next:{title:"LivePusher",permalink:"/taro-docs/en/docs/next/components/media/live-pusher"}},k={},s=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"LivePlayerProps",id:"liveplayerprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"mode",id:"mode",level:3},{value:"orientation",id:"orientation",level:3},{value:"objectFit",id:"objectfit",level:3},{value:"soundMode",id:"soundmode",level:3},{value:"onStateChangeEventDetail",id:"onstatechangeeventdetail",level:3},{value:"onFullScreenChangeEventDetail",id:"onfullscreenchangeeventdetail",level:3},{value:"onNetStatusEventDetail",id:"onnetstatuseventdetail",level:3},{value:"status",id:"status",level:3},{value:"API Support",id:"api-support",level:2}],p={toc:s},m="wrapper";function g(t){var{components:e}=t,n=u(t,["components"]);return(0,l.kt)(m,o({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Real-time audio/video playback. Related API: ",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.createLivePlayerContext")),(0,l.kt)("p",null,"Currently, it is open only to Mini Programs in the following categories owned by Chinese entities. The component needs to pass the category review, and then on the Mini Program Console, you can activate the permissions for this component by choosing ",(0,l.kt)("strong",{parentName:"p"},"Development > API Settings"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/live-player.html"}),"Reference"))),(0,l.kt)("h2",o({},{id:"type"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<LivePlayerProps>\n")),(0,l.kt)("h2",o({},{id:"examples"}),"Examples"),(0,l.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    return (\n      <LivePlayer src='url' mode='live' autoplay  />\n    )\n  }\n}\n"))),(0,l.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <live-player src="url" mode="live" :autoplay="true"  />\n</template>\n')))),(0,l.kt)("h2",o({},{id:"liveplayerprops"}),"LivePlayerProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"src"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Audio/video address. Only flv and rtmp formats are supported.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"live" | "RTC"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"live"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Mode")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoplay"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Auto playback")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"muted"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to mute the component.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"orientation"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"vertical" | "horizontal"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"vertical"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The orientation of the image.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"objectFit"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"contain" | "fillCrop"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"contain"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Filling mode. Available values include `contain` and `fillCrop`.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"backgroundMute"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to mute the component when it enters the background. ",(0,l.kt)("br",null),"(This property has been discarded. By default, the component is muted when entering the background.)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"minCache"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"1")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Minimum buffer (in s)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"maxCache"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"3")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Minimum buffer (in s)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"soundMode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"speaker" | "ear"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"speaker"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Sound output mode")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoPauseIfNavigate"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to automatically pause the real-time audio/video playback on the current page upon the navigation to another Mini Program page.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoPauseIfOpenNavigate"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to automatically pause the real-time audio/video playback on the current page upon the navigation to another native page of WeChat.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onStateChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onStateChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"A playback status change. detail = ","{code}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onFullScreenChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onFullScreenChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"A full-screen mode change. detail = ","{direction, fullScreen}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onNetstatus"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onNetStatusEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The notification of the network status. detail = ","{info}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onAudioVolumenotify"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<",">")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"Playback volume level change. detail = ","{}")))),(0,l.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.src"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.mode"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.autoplay"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.muted"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.orientation"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.objectFit"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.backgroundMute"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.minCache"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.maxCache"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.soundMode"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.autoPauseIfNavigate"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.autoPauseIfOpenNavigate"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.onStateChange"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.onFullScreenChange"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.onNetstatus"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.onAudioVolumenotify"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",o({},{id:"mode"}),"mode"),(0,l.kt)("p",null,"Valid values of mode"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description "))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"live"),(0,l.kt)("td",null,"Live stream")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"RTC"),(0,l.kt)("td",null,"Real-time call. The latency is lower in this mode.")))),(0,l.kt)("h3",o({},{id:"orientation"}),"orientation"),(0,l.kt)("p",null,"Valid values of orientation"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"vertical"),(0,l.kt)("td",null,"Vertical")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"horizontal"),(0,l.kt)("td",null,"Horizontal")))),(0,l.kt)("h3",o({},{id:"objectfit"}),"objectFit"),(0,l.kt)("p",null,"Valid values of object-fit"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"contain"),(0,l.kt)("td",null,"Indicates that the longer edge of the image fills the screen, and the shorter edge is filled with black.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fillCrop"),(0,l.kt)("td",null,"Indicates that the image fills the screen, and the part out of the display area will be truncated.")))),(0,l.kt)("h3",o({},{id:"soundmode"}),"soundMode"),(0,l.kt)("p",null,"Valid values of soundMode"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"speaker"),(0,l.kt)("td",null,"Loudspeaker")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ear"),(0,l.kt)("td",null,"Receiver")))),(0,l.kt)("h3",o({},{id:"onstatechangeeventdetail"}),"onStateChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Decription"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"code"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"status code")))),(0,l.kt)("h3",o({},{id:"onfullscreenchangeeventdetail"}),"onFullScreenChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Decription"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"direction"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Screen orientation")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fullScreen"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number | boolean")),(0,l.kt)("td",null,"Full screen or not")))),(0,l.kt)("h3",o({},{id:"onnetstatuseventdetail"}),"onNetStatusEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"info"),(0,l.kt)("td",null,(0,l.kt)("code",null,"netStatus"))))),(0,l.kt)("h3",o({},{id:"status"}),"status"),(0,l.kt)("p",null,"Status codes"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Code"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"2001"),(0,l.kt)("td",null,"Connected to the server")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2002"),(0,l.kt)("td",null,"Connected to the server. Pull started.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2003"),(0,l.kt)("td",null,"The network has received the first video packet (IDR)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2004"),(0,l.kt)("td",null,"Video playback started")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2005"),(0,l.kt)("td",null,"Video playback in progress")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2006"),(0,l.kt)("td",null,"Video playback ended")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2007"),(0,l.kt)("td",null,"Video playback loading")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2008"),(0,l.kt)("td",null,"Decoder started")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2009"),(0,l.kt)("td",null,"Video resolution changed")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"-2301"),(0,l.kt)("td",null,"Network disconnected. Too many failed reconnection attempts. Restart the playback for more retries.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"-2302"),(0,l.kt)("td",null,"Failed to get the accelerated pull address")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2101"),(0,l.kt)("td",null,"Failed to decode the current video frame")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2102"),(0,l.kt)("td",null,"Failed to decode the current audio frame")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2103"),(0,l.kt)("td",null,"Network disconnected and auto reconnection has started")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2104"),(0,l.kt)("td",null,"Unstable inbound packet: This may be caused by insufficient downstream bandwidth, or inconsistent outbound stream from the VJ end.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2105"),(0,l.kt)("td",null,"Stutter occurred during the video playback")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2106"),(0,l.kt)("td",null,"Failed to start hard decoding. Soft decoding is used instead.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2107"),(0,l.kt)("td",null,"Discontinuous sequence of video frames. Some frames may be dropped.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2108"),(0,l.kt)("td",null,"Hard decoding of the first I-frame of current stream failed. Switched to soft decoding automatically.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3001"),(0,l.kt)("td",null,"RTMP DNS resolution failed")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3002"),(0,l.kt)("td",null,"Failed to connect to the RTMP server")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3003"),(0,l.kt)("td",null,"Failed to shake hands with the RTMP server")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3005"),(0,l.kt)("td",null,"Failed to read/write data on the RTMP server")))),(0,l.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayer"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))))))}g.isMDXComponent=!0}}]);