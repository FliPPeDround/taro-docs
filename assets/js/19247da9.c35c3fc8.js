"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[77888],{79874:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return k}});var n=r(93106);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=s(r),k=o,y=d["".concat(c,".").concat(k)]||d[k]||u[k]||l;return r?n.createElement(y,a(a({ref:e},p),{},{components:r})):n.createElement(y,a({ref:e},p))}));function k(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72863:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const a={title:"Taro.startGyroscope(option)",sidebar_label:"startGyroscope"},i=void 0,c={unversionedId:"apis/device/gyroscope/startGyroscope",id:"version-2.x/apis/device/gyroscope/startGyroscope",title:"Taro.startGyroscope(option)",description:"\u5f00\u59cb\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u3002",source:"@site/versioned_docs/version-2.x/apis/device/gyroscope/startGyroscope.md",sourceDirName:"apis/device/gyroscope",slug:"/apis/device/gyroscope/startGyroscope",permalink:"/taro-docs/docs/2.x/apis/device/gyroscope/startGyroscope",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/gyroscope/startGyroscope.md",tags:[],version:"2.x",frontMatter:{title:"Taro.startGyroscope(option)",sidebar_label:"startGyroscope"},sidebar:"version-2.x/API",previous:{title:"stopGyroscope",permalink:"/taro-docs/docs/2.x/apis/device/gyroscope/stopGyroscope"},next:{title:"onGyroscopeChange",permalink:"/taro-docs/docs/2.x/apis/device/gyroscope/onGyroscopeChange"}},s={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"interval",id:"interval",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],u={toc:p};function d(t){var{components:e}=t,r=l(t,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5f00\u59cb\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.startGyroscope.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),(0,n.kt)("h2",o({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",o({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"interval"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"game" | "ui" | "normal"')),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u9891\u7387")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",o({},{id:"interval"}),"interval"),(0,n.kt)("p",null,"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u9891\u7387"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"game"),(0,n.kt)("td",null,"\u9002\u7528\u4e8e\u66f4\u65b0\u6e38\u620f\u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 20ms/\u6b21 \u5de6\u53f3")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"ui"),(0,n.kt)("td",null,"\u9002\u7528\u4e8e\u66f4\u65b0 UI \u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 60ms/\u6b21 \u5de6\u53f3")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"normal"),(0,n.kt)("td",null,"\u666e\u901a\u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 200ms/\u6b21 \u5de6\u53f3")))),(0,n.kt)("h2",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Taro.startGyroscope"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);