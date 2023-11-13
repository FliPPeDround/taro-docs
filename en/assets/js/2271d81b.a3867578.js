"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[60556],{79874:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return b}});var a=r(93106);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),u=n,b=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return r?a.createElement(b,o(o({ref:t},d),{},{components:r})):a.createElement(b,o({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56334:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});r(93106);var a=r(79874);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={title:"Taro.getClipboardData(param)",sidebar_label:"getClipBoardData"},l=void 0,p={unversionedId:"apis/device/clipboard/getClipboardData",id:"version-1.x/apis/device/clipboard/getClipboardData",title:"Taro.getClipboardData(param)",description:"\u83b7\u53d6\u7cfb\u7edf\u526a\u8d34\u677f\u7684\u5185\u5bb9\u3002",source:"@site/versioned_docs/version-1.x/apis/device/clipboard/getClipboardData.md",sourceDirName:"apis/device/clipboard",slug:"/apis/device/clipboard/getClipboardData",permalink:"/taro-docs/en/docs/1.x/apis/device/clipboard/getClipboardData",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/device/clipboard/getClipboardData.md",tags:[],version:"1.x",frontMatter:{title:"Taro.getClipboardData(param)",sidebar_label:"getClipBoardData"},sidebar:"version-1.x/API",previous:{title:"setScreenBrightness",permalink:"/taro-docs/en/docs/1.x/apis/device/brightness/setScreenBrightness"},next:{title:"setClipBoardData",permalink:"/taro-docs/en/docs/1.x/apis/device/clipboard/setClipboardData"}},c={},d=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"object param",id:"object-param",level:3},{value:"success(res)",id:"successres",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],s={toc:d},m="wrapper";function u(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)(m,n({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u83b7\u53d6\u7cfb\u7edf\u526a\u8d34\u677f\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.getClipboardData.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"wx.getClipboardData")),"\uff0c\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,a.kt)("h2",n({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("h3",n({},{id:"object-param"}),"object param"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5c5e\u6027"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u7c7b\u578b"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"success"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"function"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"fail"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"function"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"complete"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"function"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,a.kt)("h4",n({},{id:"successres"}),"success(res)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"object res")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5c5e\u6027"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u7c7b\u578b"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"data"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"string"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u526a\u8d34\u677f\u7684\u5185\u5bb9")))),(0,a.kt)("h2",n({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getClipBoardData(params).then(...)\n")),(0,a.kt)("h2",n({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Taro.getClipBoardData"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(\u90e8\u5206\u5b9e\u73b0)"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);