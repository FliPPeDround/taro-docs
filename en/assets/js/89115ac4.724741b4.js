"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[68109],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60577:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Taro.createInferenceSession(option)",sidebar_label:"createInferenceSession"},o=void 0,p={unversionedId:"apis/ai/inference/createInferenceSession",id:"version-4.x/apis/ai/inference/createInferenceSession",title:"Taro.createInferenceSession(option)",description:"\u521b\u5efa AI \u63a8\u7406 Session",source:"@site/versioned_docs/version-4.x/apis/ai/inference/createInferenceSession.md",sourceDirName:"apis/ai/inference",slug:"/apis/ai/inference/createInferenceSession",permalink:"/taro-docs/en/docs/apis/ai/inference/createInferenceSession",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/apis/ai/inference/createInferenceSession.md",tags:[],version:"4.x",frontMatter:{title:"Taro.createInferenceSession(option)",sidebar_label:"createInferenceSession"},sidebar:"API",previous:{title:"getInferenceEnvInfo",permalink:"/taro-docs/en/docs/apis/ai/inference/getInferenceEnvInfo"},next:{title:"InferenceSession",permalink:"/taro-docs/en/docs/apis/ai/inference/InferenceSession"}},c={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"PrecesionLevel",id:"precesionlevel",level:3}],m={toc:s},u="wrapper";function d(e){var{components:t}=e,i=l(e,["components"]);return(0,r.kt)(u,a({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u521b\u5efa AI \u63a8\u7406 Session"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/wx.createInferenceSession.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => InferenceSession\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,r.kt)("h3",a({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"model"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u6a21\u578b\u6587\u4ef6\u8def\u5f84\uff0c\u76ee\u524d\u53ea\u6267\u884c\u540e\u7f00\u4e3a.onnx\u683c\u5f0f(\u652f\u6301\u4ee3\u7801\u5305\u8def\u5f84\uff0c\u548c\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u8def\u5f84\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"precesionLevel"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"PrecesionLevel")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a8\u7406\u7cbe\u5ea6\uff0c\u6709\u6548\u503c\u4e3a 0 - 4\u3002",(0,r.kt)("br",null),"\u4e00\u822c\u6765\u8bf4\uff0c\u4f7f\u7528\u7684precesionLevel\u7b49\u7ea7\u8d8a\u4f4e\uff0c\u63a8\u7406\u901f\u5ea6\u8d8a\u5feb\uff0c\u4f46\u53ef\u80fd\u4f1a\u635f\u5931\u7cbe\u5ea6\u3002",(0,r.kt)("br",null),"\u63a8\u8350\u5f00\u53d1\u8005\u5728\u5f00\u53d1\u65f6\uff0c\u5728\u6548\u679c\u6ee1\u8db3\u9700\u6c42\u65f6\u4f18\u5148\u4f7f\u7528\u66f4\u4f4e\u7cbe\u5ea6\u4ee5\u63d0\u9ad8\u63a8\u7406\u901f\u5ea6\uff0c\u8282\u7ea6\u80fd\u8017\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"allowQuantize"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u662f\u5426\u751f\u6210\u91cf\u5316\u6a21\u578b\u63a8\u7406")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"allowNPU"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u662f\u5426\u4f7f\u7528NPU\u63a8\u7406\uff0c\u4ec5\u5bf9IOS\u6709\u6548")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"typicalShape"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8f93\u5165\u5178\u578b\u5206\u8fa8\u7387")))),(0,r.kt)("h3",a({},{id:"precesionlevel"}),"PrecesionLevel"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4f7f\u7528fp16 \u5b58\u50a8\u6d6e\u70b9\uff0cfp16\u8ba1\u7b97\uff0cWinograd \u7b97\u6cd5\u4e5f\u91c7\u53d6fp16 \u8ba1\u7b97\uff0c\u5f00\u542f\u8fd1\u4f3cmath\u8ba1\u7b97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4f7f\u7528fp16 \u5b58\u50a8\u6d6e\u70b9\uff0cfp16\u8ba1\u7b97\uff0c\u7981\u7528 Winograd \u7b97\u6cd5\uff0c\u5f00\u542f\u8fd1\u4f3cmath\u8ba1\u7b97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4f7f\u7528fp16 \u5b58\u50a8\u6d6e\u70b9\uff0cfp32\u8ba1\u7b97\uff0c\u5f00\u542f Winograd\uff0c\u5f00\u542f\u8fd1\u4f3cmath\u8ba1\u7b97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"3"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4f7f\u7528fp32 \u5b58\u50a8\u6d6e\u70b9\uff0cfp32\u8ba1\u7b97\uff0c\u5f00\u542f Winograd\uff0c\u5f00\u542f\u8fd1\u4f3cmath\u8ba1\u7b97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"4"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4f7f\u7528fp32 \u5b58\u50a8\u6d6e\u70b9\uff0cfp32\u8ba1\u7b97\uff0c\u5f00\u542f Winograd\uff0c\u5173\u95ed\u8fd1\u4f3cmath\u8ba1\u7b97")))))}d.isMDXComponent=!0},83190:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},519:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},72369:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);