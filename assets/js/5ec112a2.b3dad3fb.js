"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[78656],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),c=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=c(t.components);return l.createElement(u.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(n),p=r,f=d["".concat(u,".").concat(p)]||d[p]||k[p]||o;return n?l.createElement(f,a(a({ref:e},s),{},{components:n})):l.createElement(f,a({ref:e},s))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21967:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const a={title:"Taro.showModal(option)",sidebar_label:"showModal"},i=void 0,u={unversionedId:"apis/ui/interaction/showModal",id:"version-2.x/apis/ui/interaction/showModal",title:"Taro.showModal(option)",description:"\u663e\u793a\u6a21\u6001\u5bf9\u8bdd\u6846",source:"@site/versioned_docs/version-2.x/apis/ui/interaction/showModal.md",sourceDirName:"apis/ui/interaction",slug:"/apis/ui/interaction/showModal",permalink:"/taro-docs/docs/2.x/apis/ui/interaction/showModal",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/ui/interaction/showModal.md",tags:[],version:"2.x",frontMatter:{title:"Taro.showModal(option)",sidebar_label:"showModal"},sidebar:"version-2.x/API",previous:{title:"showToast",permalink:"/taro-docs/docs/2.x/apis/ui/interaction/showToast"},next:{title:"showLoading",permalink:"/taro-docs/docs/2.x/apis/ui/interaction/showLoading"}},c={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],d={toc:s},k="wrapper";function p(t){var{components:e}=t,n=o(t,["components"]);return(0,l.kt)(k,r({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u663e\u793a\u6a21\u6001\u5bf9\u8bdd\u6846\n",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Android 6.7.2 \u4ee5\u4e0b\u7248\u672c\uff0c\u70b9\u51fb\u53d6\u6d88\u6216\u8499\u5c42\u65f6\uff0c\u56de\u8c03 fail, errMsg \u4e3a "fail cancel"\uff1b'),(0,l.kt)("li",{parentName:"ul"},"Android 6.7.2 \u53ca\u4ee5\u4e0a\u7248\u672c \u548c iOS \u70b9\u51fb\u8499\u5c42\u4e0d\u4f1a\u5173\u95ed\u6a21\u6001\u5f39\u7a97\uff0c\u6240\u4ee5\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u300c\u53d6\u6d88\u300d\u5206\u652f\u4e2d\u5b9e\u73b0\u4e1a\u52a1\u903b\u8f91")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html"}),"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,l.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,l.kt)("h3",r({},{id:"option"}),"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"cancelColor"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u53d6\u6d88\u6309\u94ae\u7684\u6587\u5b57\u989c\u8272\uff0c\u5fc5\u987b\u662f 16 \u8fdb\u5236\u683c\u5f0f\u7684\u989c\u8272\u5b57\u7b26\u4e32")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"cancelText"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u53d6\u6d88\u6309\u94ae\u7684\u6587\u5b57\uff0c\u6700\u591a 4 \u4e2a\u5b57\u7b26")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"confirmColor"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u786e\u8ba4\u6309\u94ae\u7684\u6587\u5b57\u989c\u8272\uff0c\u5fc5\u987b\u662f 16 \u8fdb\u5236\u683c\u5f0f\u7684\u989c\u8272\u5b57\u7b26\u4e32")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"confirmText"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u786e\u8ba4\u6309\u94ae\u7684\u6587\u5b57\uff0c\u6700\u591a 4 \u4e2a\u5b57\u7b26")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"content"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63d0\u793a\u7684\u5185\u5bb9")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"showCancel"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u662f\u5426\u663e\u793a\u53d6\u6d88\u6309\u94ae")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"title"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63d0\u793a\u7684\u6807\u9898")))),(0,l.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"cancel"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u4e3a true \u65f6\uff0c\u8868\u793a\u7528\u6237\u70b9\u51fb\u4e86\u53d6\u6d88\uff08\u7528\u4e8e Android \u7cfb\u7edf\u533a\u5206\u70b9\u51fb\u8499\u5c42\u5173\u95ed\u8fd8\u662f\u70b9\u51fb\u53d6\u6d88\u6309\u94ae\u5173\u95ed\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"confirm"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u4e3a true \u65f6\uff0c\u8868\u793a\u7528\u6237\u70b9\u51fb\u4e86\u786e\u5b9a\u6309\u94ae")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,l.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.showModal({\n  title: '\u63d0\u793a',\n  content: '\u8fd9\u662f\u4e00\u4e2a\u6a21\u6001\u5f39\u7a97',\n  success: function (res) {\n    if (res.confirm) {\n      console.log('\u7528\u6237\u70b9\u51fb\u786e\u5b9a')\n    } else if (res.cancel) {\n      console.log('\u7528\u6237\u70b9\u51fb\u53d6\u6d88')\n    }\n  }\n})\n")),(0,l.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.showModal"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);