"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[28462],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,v=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3034:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Taro.onNeedPrivacyAuthorization(listener)",sidebar_label:"onNeedPrivacyAuthorization"},l=void 0,p={unversionedId:"apis/open-api/privacy/onNeedPrivacyAuthorization",id:"version-3.x/apis/open-api/privacy/onNeedPrivacyAuthorization",title:"Taro.onNeedPrivacyAuthorization(listener)",description:"\u76d1\u542c\u9690\u79c1\u63a5\u53e3\u9700\u8981\u7528\u6237\u6388\u6743\u4e8b\u4ef6\u3002\u5f53\u9700\u8981\u7528\u6237\u8fdb\u884c\u9690\u79c1\u6388\u6743\u65f6\u4f1a\u89e6\u53d1\u3002\u89e6\u53d1\u8be5\u4e8b\u4ef6\u65f6\uff0c\u5f00\u53d1\u8005\u9700\u8981\u5f39\u51fa\u9690\u79c1\u534f\u8bae\u8bf4\u660e\uff0c\u5e76\u5728\u7528\u6237\u540c\u610f\u6216\u62d2\u7edd\u6388\u6743\u540e\u8c03\u7528\u56de\u8c03\u63a5\u53e3 resolve \u89e6\u53d1\u539f\u9690\u79c1\u63a5\u53e3\u6216\u7ec4\u4ef6\u7ee7\u7eed\u6267\u884c\u3002\u9690\u79c1\u5408\u89c4\u5f00\u53d1\u6307\u5357\u8be6\u60c5\u53ef\u89c1\u300a\u5c0f\u7a0b\u5e8f\u9690\u79c1\u534f\u8bae\u5f00\u53d1\u6307\u5357\u300b",source:"@site/versioned_docs/version-3.x/apis/open-api/privacy/onNeedPrivacyAuthorization.md",sourceDirName:"apis/open-api/privacy",slug:"/apis/open-api/privacy/onNeedPrivacyAuthorization",permalink:"/taro-docs/docs/3.x/apis/open-api/privacy/onNeedPrivacyAuthorization",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/open-api/privacy/onNeedPrivacyAuthorization.md",tags:[],version:"3.x",frontMatter:{title:"Taro.onNeedPrivacyAuthorization(listener)",sidebar_label:"onNeedPrivacyAuthorization"},sidebar:"API",previous:{title:"openPrivacyContract",permalink:"/taro-docs/docs/3.x/apis/open-api/privacy/openPrivacyContract"},next:{title:"getPrivacySetting",permalink:"/taro-docs/docs/3.x/apis/open-api/privacy/getPrivacySetting"}},c={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"ResolveOption",id:"resolveoption",level:3},{value:"EventInfo",id:"eventinfo",level:3},{value:"Listener",id:"listener",level:3}],s={toc:u},d="wrapper";function m(e){var{components:t}=e,o=i(e,["components"]);return(0,r.kt)(d,a({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u76d1\u542c\u9690\u79c1\u63a5\u53e3\u9700\u8981\u7528\u6237\u6388\u6743\u4e8b\u4ef6\u3002\u5f53\u9700\u8981\u7528\u6237\u8fdb\u884c\u9690\u79c1\u6388\u6743\u65f6\u4f1a\u89e6\u53d1\u3002\u89e6\u53d1\u8be5\u4e8b\u4ef6\u65f6\uff0c\u5f00\u53d1\u8005\u9700\u8981\u5f39\u51fa\u9690\u79c1\u534f\u8bae\u8bf4\u660e\uff0c\u5e76\u5728\u7528\u6237\u540c\u610f\u6216\u62d2\u7edd\u6388\u6743\u540e\u8c03\u7528\u56de\u8c03\u63a5\u53e3 resolve \u89e6\u53d1\u539f\u9690\u79c1\u63a5\u53e3\u6216\u7ec4\u4ef6\u7ee7\u7eed\u6267\u884c\u3002\u9690\u79c1\u5408\u89c4\u5f00\u53d1\u6307\u5357\u8be6\u60c5\u53ef\u89c1\u300a\u5c0f\u7a0b\u5e8f\u9690\u79c1\u534f\u8bae\u5f00\u53d1\u6307\u5357\u300b"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/privacy/wx.onNeedPrivacyAuthorization.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(listener: Listener) => void\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"listener"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Listener"))))),(0,r.kt)("h3",a({},{id:"resolveoption"}),"ResolveOption"),(0,r.kt)("p",null,"resolve \u662f onNeedPrivacyAuthorization \u7684\u56de\u8c03\u53c2\u6570\uff0c\u662f\u4e00\u4e2a\u63a5\u53e3\u51fd\u6570\u3002\n\u5f53\u89e6\u53d1 needPrivacyAuthorization \u4e8b\u4ef6\u65f6\uff0c\u89e6\u53d1\u8be5\u4e8b\u4ef6\u7684\u9690\u79c1\u63a5\u53e3\u6216\u7ec4\u4ef6\u4f1a\u5904\u4e8e pending \u72b6\u6001\u3002\n\u5982\u679c\u8c03\u7528 resolve({ buttonId: 'disagree-btn'\uff0c event:'agree' })\uff0c\u5219\u89e6\u53d1\u5f53\u524d needPrivacyAuthorization \u4e8b\u4ef6\u7684\u539f\u9690\u79c1\u63a5\u53e3\u6216\u7ec4\u4ef6\u4f1a\u7ee7\u7eed\u6267\u884c\u3002\u5176\u4e2d buttonId \u4e3a\u9690\u79c1\u540c\u610f\u6388\u6743\u6309\u94ae\u7684id\uff0c\u4e3a\u786e\u4fdd\u7528\u6237\u6709\u540c\u610f\u7684\u64cd\u4f5c\uff0c\u57fa\u7840\u5e93\u4f1a\u68c0\u67e5\u5bf9\u5e94\u7684\u540c\u610f\u6309\u94ae\u662f\u5426\u88ab\u70b9\u51fb\u8fc7\u3002\n\u5982\u679c\u8c03\u7528 resolve({ event: 'disagree' })\uff0c\u5219\u89e6\u53d1\u5f53\u524d needPrivacyAuthorization \u4e8b\u4ef6\u7684\u539f\u9690\u79c1\u63a5\u53e3\u6216\u7ec4\u4ef6\u4f1a\u5931\u8d25\u5e76\u8fd4\u56de API:fail privacy permission is not authorized \u7684\u9519\u8bef\u4fe1\u606f\u3002\n\u5728\u8c03\u7528 resolve({ event: 'agree'/'disagree' }) \u4e4b\u524d\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u8c03\u7528 resolve({ event: 'exposureAuthorization' }) \u628a\u9690\u79c1\u5f39\u7a97\u66dd\u5149\u544a\u77e5\u5e73\u53f0\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"event"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"exposureAuthorization" or "agree" or "disagree"'),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u7528\u6237\u64cd\u4f5c\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"buttonId"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u540c\u610f\u6388\u6743\u6309\u94ae\u7684id \uff08\u4ec5event=agree\u65f6\u5fc5\u586b\uff09")))),(0,r.kt)("h3",a({},{id:"eventinfo"}),"EventInfo"),(0,r.kt)("p",null,"\u89e6\u53d1\u672c\u6b21 onNeedPrivacyAuthorization \u4e8b\u4ef6\u7684\u5173\u8054\u4fe1\u606f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"referrer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h3",a({},{id:"listener"}),"Listener"),(0,r.kt)("p",null,"\u9690\u79c1\u6388\u6743\u76d1\u542c\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(resolve: (option: ResolveOption) => void,eventInfo: EventInfo) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"resolve"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(option: ResolveOption) => void")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"eventInfo"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"EventInfo")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5173\u8054\u4e8b\u4ef6\u4fe1\u606f")))))}m.isMDXComponent=!0},83190:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},519:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},72369:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);