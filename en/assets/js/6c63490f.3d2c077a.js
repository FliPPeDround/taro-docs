"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[77934],{79874:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,g=s["".concat(u,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57924:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={slug:"2020-01-02-gmtc",title:"\u5c0f\u7a0b\u5e8f\u8de8\u6846\u67b6\u5f00\u53d1\u7684\u63a2\u7d22\u4e0e\u5b9e\u8df5",authors:"Pines-Cheng"},i=void 0,u={permalink:"/taro-docs/en/blog/2020-01-02-gmtc",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2020-01-02-gmtc.md",source:"@site/blog/2020-01-02-gmtc.md",title:"\u5c0f\u7a0b\u5e8f\u8de8\u6846\u67b6\u5f00\u53d1\u7684\u63a2\u7d22\u4e0e\u5b9e\u8df5",description:"\u524d\u8a00\uff1a\u968f\u7740\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7684\u70ed\u5ea6\u4e0a\u5347\uff0c\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u6846\u67b6\u4e5f\u5c42\u51fa\u4e0d\u7a77\u3002\u4f46\u76ee\u524d\u6bcf\u4e2a\u6846\u67b6\u90fd\u4f1a\u7ed1\u5b9a\u4e00\u4e2a\u4e13\u5c5e DSL\uff0c\u5982\u7c7b React \u6216\u8005\u7c7b Vue\uff0c\u5728\u4e00\u4e2a\u6846\u67b6\u5185\uff0c\u5f00\u53d1\u8005\u65e0\u6cd5\u6839\u636e\u56e2\u961f\u6280\u672f\u6808\u81ea\u7531\u9009\u62e9 DSL\uff0c\u540c\u65f6\u4e5f\u65e0\u6cd5\u5171\u4eab\u6846\u67b6\u672c\u8eab\u7684\u751f\u6001\u4e0e\u5de5\u5177\u3002",date:"2020-01-02T00:00:00.000Z",formattedDate:"January 2, 2020",tags:[],readingTime:33.475,hasTruncateMarker:!0,authors:[{name:"Pines-Cheng",title:"Taro \u8363\u8a89\u6280\u672f\u59d4\u5458\u6210\u5458",url:"https://github.com/Pines-Cheng",imageURL:"https://avatars2.githubusercontent.com/u/9441951?s=460&u=b43f79c07aea1d3c330dd1fd38ae9e9baab58fee&v=4",key:"Pines-Cheng"}],frontMatter:{slug:"2020-01-02-gmtc",title:"\u5c0f\u7a0b\u5e8f\u8de8\u6846\u67b6\u5f00\u53d1\u7684\u63a2\u7d22\u4e0e\u5b9e\u8df5",authors:"Pines-Cheng"},prevItem:{title:"Taro 2.0\uff1a\u62e5\u62b1\u793e\u533a\uff0c\u62e5\u62b1\u53d8\u5316",permalink:"/taro-docs/en/blog/2020-01-08-taro-2-0"},nextItem:{title:"\u4eac\u559c\u9996\u9875\uff08\u5fae\u4fe1\u8d2d\u7269\u5165\u53e3\uff09\u8de8\u7aef\u5f00\u53d1\u4e0e\u4f18\u5316\u5b9e\u8df5",permalink:"/taro-docs/en/blog/2019-12-03-jingxi-index"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p},f="wrapper";function m(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(f,o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u524d\u8a00\uff1a\u968f\u7740\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7684\u70ed\u5ea6\u4e0a\u5347\uff0c\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u6846\u67b6\u4e5f\u5c42\u51fa\u4e0d\u7a77\u3002\u4f46\u76ee\u524d\u6bcf\u4e2a\u6846\u67b6\u90fd\u4f1a\u7ed1\u5b9a\u4e00\u4e2a\u4e13\u5c5e DSL\uff0c\u5982\u7c7b React \u6216\u8005\u7c7b Vue\uff0c\u5728\u4e00\u4e2a\u6846\u67b6\u5185\uff0c\u5f00\u53d1\u8005\u65e0\u6cd5\u6839\u636e\u56e2\u961f\u6280\u672f\u6808\u81ea\u7531\u9009\u62e9 DSL\uff0c\u540c\u65f6\u4e5f\u65e0\u6cd5\u5171\u4eab\u6846\u67b6\u672c\u8eab\u7684\u751f\u6001\u4e0e\u5de5\u5177\u3002")),(0,n.kt)("p",null,"\u672c\u6b21\u5206\u4eab\u5c06\u4e3a\u5927\u5bb6\u4ecb\u7ecd Taro \u5982\u4f55\u5c06\u5404\u79cd\u8bed\u6cd5\u7684\u524d\u7aef\u6846\u67b6\u8fd0\u884c\u5728\u5c0f\u7a0b\u5e8f\u4e0a\uff0c\u8ba8\u8bba\u4e00\u4e2a\u6846\u67b6\u652f\u6301\u591a DSL \u7684\u5b9e\u73b0\u63a2\u7d22\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u70ed\u95e8\u6846\u67b6/\u8bed\u6cd5/DSL \u6765\u7f16\u5199\u5c0f\u7a0b\u5e8f\u5e94\u7528\uff0c\u540c\u65f6\u590d\u7528\u76f8\u5173\u751f\u6001\u3002"))}m.isMDXComponent=!0}}]);