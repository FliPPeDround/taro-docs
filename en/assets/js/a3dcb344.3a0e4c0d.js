"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[50047],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16376:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"Taro.batchSetStorage(option)",sidebar_label:"batchSetStorage"},i=void 0,p={unversionedId:"apis/storage/batchSetStorage",id:"version-4.x/apis/storage/batchSetStorage",title:"Taro.batchSetStorage(option)",description:"\u5c06\u6570\u636e\u6279\u91cf\u5b58\u50a8\u5728\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key \u4e2d\u3002\u4f1a\u8986\u76d6\u6389\u539f\u6765\u8be5 key \u5bf9\u5e94\u7684\u5185\u5bb9\u3002",source:"@site/versioned_docs/version-4.x/apis/storage/batchSetStorage.md",sourceDirName:"apis/storage",slug:"/apis/storage/batchSetStorage",permalink:"/taro-docs/en/docs/apis/storage/batchSetStorage",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/apis/storage/batchSetStorage.md",tags:[],version:"4.x",frontMatter:{title:"Taro.batchSetStorage(option)",sidebar_label:"batchSetStorage"},sidebar:"API",previous:{title:"batchSetStorageSync",permalink:"/taro-docs/en/docs/apis/storage/batchSetStorageSync"},next:{title:"batchGetStorageSync",permalink:"/taro-docs/en/docs/apis/storage/batchGetStorageSync"}},c={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"kv",id:"kv",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:s},m="wrapper";function d(t){var{components:e}=t,o=l(t,["components"]);return(0,a.kt)(m,r({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5c06\u6570\u636e\u6279\u91cf\u5b58\u50a8\u5728\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key \u4e2d\u3002\u4f1a\u8986\u76d6\u6389\u539f\u6765\u8be5 key \u5bf9\u5e94\u7684\u5185\u5bb9\u3002\n\u9664\u975e\u7528\u6237\u4e3b\u52a8\u5220\u9664\u6216\u56e0\u5b58\u50a8\u7a7a\u95f4\u539f\u56e0\u88ab\u7cfb\u7edf\u6e05\u7406\uff0c\u5426\u5219\u6570\u636e\u90fd\u4e00\u76f4\u53ef\u7528\u3002\n\u5355\u4e2a key \u5141\u8bb8\u5b58\u50a8\u7684\u6700\u5927\u6570\u636e\u957f\u5ea6\u4e3a 1MB\uff0c\u6240\u6709\u6570\u636e\u5b58\u50a8\u4e0a\u9650\u4e3a 10MB\u3002"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchGetStorage.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,a.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"option"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,a.kt)("h3",r({},{id:"option"}),"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"kvList"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"kv[]")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[{ key, value }]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"complete"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"fail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h3",r({},{id:"kv"}),"kv"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"key"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"key \u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"value"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"any")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"data \u9700\u8981\u5b58\u50a8\u7684\u5185\u5bb9\u3002\u53ea\u652f\u6301\u539f\u751f\u7c7b\u578b\u3001Date\u3001\u53ca\u80fd\u591f\u901a\u8fc7JSON.stringify\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u3002")))),(0,a.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.batchGetStorage({\n  keyList: ['key']\n  success(res) {\n    console.log(res)\n  }\n})\n")))}d.isMDXComponent=!0},83190:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},519:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},72369:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);