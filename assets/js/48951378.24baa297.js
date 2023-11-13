"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[53438],{79874:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return b}});var n=r(93106);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),l=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=l(r),m=o,b=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(b,u(u({ref:e},p),{},{components:r})):n.createElement(b,u({ref:e},p))}));function b(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,u=new Array(a);u[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[s]="string"==typeof t?t:o,u[1]=c;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38226:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const u={slug:"2019-02-25-taro-ui-2.0",title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",author:"jimczj",author_url:"https://github.com/jimczj",author_image_url:"https://avatars3.githubusercontent.com/u/13499146?s=460&u=a5a6d4c6bcc746b3b6353c245346d7a832f4649b&v=4"},c=void 0,i={permalink:"/taro-docs/blog/2019-02-25-taro-ui-2.0",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2019-02-25-taro-ui-2.0.md",source:"@site/blog/2019-02-25-taro-ui-2.0.md",title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",description:"\u8f6c\u773c\u95f4\uff0cTaro UI \u53d1\u5e03\u5df2\u6709\u534a\u5e74\uff0c\u611f\u8c22\u5927\u5bb6\u7684\u652f\u6301\uff0c\u8ba9\u6211\u4eec\u6536\u83b7\u4e86 GitHub 1400+ star\u3002\u5728\u6b64\u671f\u95f4\uff0c\u6211\u4eec\u4e0d\u65ad\u5b8c\u5584\u7ec4\u4ef6\u5e93\u7684\u529f\u80fd\u548c\u7279\u6027\uff0c\u65b0\u589e\u4e86\u8bb8\u591a\u7ec4\u4ef6\u548c\u5c0f\u5de5\u5177\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e:",date:"2019-02-25T00:00:00.000Z",formattedDate:"2019\u5e742\u670825\u65e5",tags:[],readingTime:6.935,hasTruncateMarker:!0,authors:[{name:"jimczj",url:"https://github.com/jimczj",imageURL:"https://avatars3.githubusercontent.com/u/13499146?s=460&u=a5a6d4c6bcc746b3b6353c245346d7a832f4649b&v=4"}],frontMatter:{slug:"2019-02-25-taro-ui-2.0",title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",author:"jimczj",author_url:"https://github.com/jimczj",author_image_url:"https://avatars3.githubusercontent.com/u/13499146?s=460&u=a5a6d4c6bcc746b3b6353c245346d7a832f4649b&v=4"},prevItem:{title:"\u51b3\u6218\u6027\u80fd\u4e4b\u5dc5 - Taro H5 \u8f6c\u6362\u4e0e\u4f18\u5316\u5347\u7ea7",permalink:"/taro-docs/blog/2019-02-28-taro-h5-optimize"},nextItem:{title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",permalink:"/taro-docs/blog/2018-12-18-taro-1-2"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p},f="wrapper";function m(t){var{components:e}=t,r=a(t,["components"]);return(0,n.kt)(f,o({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8f6c\u773c\u95f4\uff0cTaro UI \u53d1\u5e03\u5df2\u6709\u534a\u5e74\uff0c\u611f\u8c22\u5927\u5bb6\u7684\u652f\u6301\uff0c\u8ba9\u6211\u4eec\u6536\u83b7\u4e86 ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-ui"}),"GitHub")," 1400+ star\u3002\u5728\u6b64\u671f\u95f4\uff0c\u6211\u4eec\u4e0d\u65ad\u5b8c\u5584\u7ec4\u4ef6\u5e93\u7684\u529f\u80fd\u548c\u7279\u6027\uff0c\u65b0\u589e\u4e86\u8bb8\u591a\u7ec4\u4ef6\u548c\u5c0f\u5de5\u5177\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b0\u589e\u65e5\u5386\u3001\u7d22\u5f15\u9009\u62e9\u3001\u533a\u57df\u9009\u62e9\u3001\u56fe\u7247\u9009\u62e9\u7b49\u5341\u4e00\u4e2a\u7ec4\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u9002\u914d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,n.kt)("li",{parentName:"ul"},"\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u65b0\u589e\u4e3b\u9898\u751f\u6210\u5668\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u4f7f\u7528\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u65b0\u589e Issue Helper\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u89c4\u8303\u5730\u586b\u5199 Issue")))}m.isMDXComponent=!0}}]);