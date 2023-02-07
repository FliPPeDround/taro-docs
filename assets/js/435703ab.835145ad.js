"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[91107],{79874:function(t,e,l){l.d(e,{Zo:function(){return c},kt:function(){return k}});var n=l(93106);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var u=n.createContext({}),s=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},c=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=s(l),k=r,f=p["".concat(u,".").concat(k)]||p[k]||d[k]||a;return l?n.createElement(f,i(i({ref:e},c),{},{components:l})):n.createElement(f,i({ref:e},c))}));function k(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,i=new Array(a);i[0]=p;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<a;s++)i[s]=l[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},10824:function(t,e,l){l.r(e),l.d(e,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});l(93106);var n=l(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}const i={title:"Taro.saveFile(option)",sidebar_label:"saveFile"},o=void 0,u={unversionedId:"apis/files/saveFile",id:"version-2.x/apis/files/saveFile",title:"Taro.saveFile(option)",description:"\u4fdd\u5b58\u6587\u4ef6\u5230\u672c\u5730\u3002\u6ce8\u610f\uff1asaveFile \u4f1a\u628a\u4e34\u65f6\u6587\u4ef6\u79fb\u52a8\uff0c\u56e0\u6b64\u8c03\u7528\u6210\u529f\u540e\u4f20\u5165\u7684 tempFilePath \u5c06\u4e0d\u53ef\u7528",source:"@site/versioned_docs/version-2.x/apis/files/saveFile.md",sourceDirName:"apis/files",slug:"/apis/files/saveFile",permalink:"/taro-docs/docs/2.x/apis/files/saveFile",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/files/saveFile.md",tags:[],version:"2.x",frontMatter:{title:"Taro.saveFile(option)",sidebar_label:"saveFile"},sidebar:"version-2.x/API",previous:{title:"RenderingContext",permalink:"/taro-docs/docs/2.x/apis/canvas/RenderingContext"},next:{title:"removeSavedFile",permalink:"/taro-docs/docs/2.x/apis/files/removeSavedFile"}},s={},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"FailCallbackResult",id:"failcallbackresult",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],d={toc:c};function p(t){var{components:e}=t,l=a(t,["components"]);return(0,n.kt)("wrapper",r({},d,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4fdd\u5b58\u6587\u4ef6\u5230\u672c\u5730\u3002",(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1asaveFile \u4f1a\u628a\u4e34\u65f6\u6587\u4ef6\u79fb\u52a8\uff0c\u56e0\u6b64\u8c03\u7528\u6210\u529f\u540e\u4f20\u5165\u7684 tempFilePath \u5c06\u4e0d\u53ef\u7528")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult | FailCallbackResult>\n")),(0,n.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"tempFilePath"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,n.kt)("td",null,"\u4e34\u65f6\u5b58\u50a8\u6587\u4ef6\u8def\u5f84")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(result: FailCallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"filePath"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u8981\u5b58\u50a8\u7684\u6587\u4ef6\u8def\u5f84")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",r({},{id:"failcallbackresult"}),"FailCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u9519\u8bef\u4fe1\u606f",(0,n.kt)("br",null),(0,n.kt)("br",null),"\u53ef\u9009\u503c\uff1a",(0,n.kt)("br",null),"- 'fail tempFilePath file not exist': \u6307\u5b9a\u7684 tempFilePath \u627e\u4e0d\u5230\u6587\u4ef6;",(0,n.kt)("br",null),"- 'fail permission denied, open \"filePath\"': \u6307\u5b9a\u7684 filePath \u8def\u5f84\u6ca1\u6709\u5199\u6743\u9650;",(0,n.kt)("br",null),"- 'fail no such file or directory \"dirPath\"': \u4e0a\u7ea7\u76ee\u5f55\u4e0d\u5b58\u5728;",(0,n.kt)("br",null),"- 'fail the maximum size of the file storage limit is exceeded': \u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3;")))),(0,n.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"savedFilePath"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u5b58\u50a8\u540e\u7684\u6587\u4ef6\u8def\u5f84")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,n.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseImage({\n  success: function (res) {\n    var tempFilePaths = res.tempFilePaths\n    Taro.saveFile({\n      tempFilePath: tempFilePaths[0],\n      success: function (res) {\n        var savedFilePath = res.savedFilePath\n      }\n    })\n  }\n})\n")),(0,n.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.saveFile"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);