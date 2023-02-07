"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[27680],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(93106);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),d=u(n),k=i,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||o;return n?r.createElement(m,l(l({ref:e},s),{},{components:n})):r.createElement(m,l({ref:e},s))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5480:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}const l={title:"Taro.startDeviceMotionListening(option)",sidebar_label:"startDeviceMotionListening"},a=void 0,c={unversionedId:"apis/device/motion/startDeviceMotionListening",id:"apis/device/motion/startDeviceMotionListening",title:"Taro.startDeviceMotionListening(option)",description:"Starts listening on device orientation changes.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/motion/startDeviceMotionListening.md",sourceDirName:"apis/device/motion",slug:"/apis/device/motion/startDeviceMotionListening",permalink:"/taro-docs/en/docs/next/apis/device/motion/startDeviceMotionListening",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/device/motion/startDeviceMotionListening.md",tags:[],version:"current",frontMatter:{title:"Taro.startDeviceMotionListening(option)",sidebar_label:"startDeviceMotionListening"},sidebar:"API",previous:{title:"stopDeviceMotionListening",permalink:"/taro-docs/en/docs/next/apis/device/motion/stopDeviceMotionListening"},next:{title:"onDeviceMotionChange",permalink:"/taro-docs/en/docs/next/apis/device/motion/onDeviceMotionChange"}},u={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"interval",id:"interval",level:3},{value:"API Support",id:"api-support",level:2}],p={toc:s};function d(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",i({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starts listening on device orientation changes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/motion/wx.startDeviceMotionListening.html"}),"Reference"))),(0,r.kt)("h2",i({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => void\n")),(0,r.kt)("h2",i({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",i({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"interval"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"game" | "ui" | "normal"')),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"normal"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The execution interval of the callback function for device orientation change listening")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",i({},{id:"interval"}),"interval"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"game"),(0,r.kt)("td",null,"The execution interval of the callback for game updates, which is about 20 ms.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ui"),(0,r.kt)("td",null,"The execution interval of the callback for UI updates, which is about 60 ms.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"normal"),(0,r.kt)("td",null,"The normal callback interval, which is about 200 ms.")))),(0,r.kt)("h2",i({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"Taro.startDeviceMotionListening"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);