"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[24600],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=o(n),u=r,s=c["".concat(m,".").concat(u)]||c[u]||k[u]||l;return n?a.createElement(s,i(i({ref:e},d),{},{components:n})):a.createElement(s,i({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},59289:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={title:"IntersectionObserver",sidebar_label:"IntersectionObserver"},p=void 0,m={unversionedId:"apis/wxml/IntersectionObserver",id:"version-3.x/apis/wxml/IntersectionObserver",title:"IntersectionObserver",description:"IntersectionObserver \u5bf9\u8c61\uff0c\u7528\u4e8e\u63a8\u65ad\u67d0\u4e9b\u8282\u70b9\u662f\u5426\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3001\u6709\u591a\u5927\u6bd4\u4f8b\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3002",source:"@site/versioned_docs/version-3.x/apis/wxml/IntersectionObserver.md",sourceDirName:"apis/wxml",slug:"/apis/wxml/IntersectionObserver",permalink:"/taro-docs/docs/apis/wxml/IntersectionObserver",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/wxml/IntersectionObserver.md",tags:[],version:"3.x",frontMatter:{title:"IntersectionObserver",sidebar_label:"IntersectionObserver"},sidebar:"API",previous:{title:"createMediaQueryObserver",permalink:"/taro-docs/docs/apis/wxml/createMediaQueryObserver"},next:{title:"MediaQueryObserver",permalink:"/taro-docs/docs/apis/wxml/MediaQueryObserver"}},o={},d=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"disconnect",id:"disconnect",level:3},{value:"observe",id:"observe",level:3},{value:"relativeTo",id:"relativeto",level:3},{value:"relativeToViewport",id:"relativetoviewport",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"ObserveCallback",id:"observecallback",level:3},{value:"ObserveCallbackResult",id:"observecallbackresult",level:3},{value:"RelativeRectResult",id:"relativerectresult",level:3},{value:"IntersectionRectResult",id:"intersectionrectresult",level:3},{value:"BoundingClientRectResult",id:"boundingclientrectresult",level:3},{value:"RelativeToMargins",id:"relativetomargins",level:3},{value:"RelativeToViewportMargins",id:"relativetoviewportmargins",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],k={toc:d};function c(t){var{components:e}=t,i=l(t,["components"]);return(0,a.kt)("wrapper",r({},k,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IntersectionObserver")," \u5bf9\u8c61\uff0c\u7528\u4e8e\u63a8\u65ad\u67d0\u4e9b\u8282\u70b9\u662f\u5426\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3001\u6709\u591a\u5927\u6bd4\u4f8b\u53ef\u4ee5\u88ab\u7528\u6237\u770b\u89c1\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",r({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",r({},{id:"disconnect"}),"disconnect"),(0,a.kt)("p",null,"\u505c\u6b62\u76d1\u542c\u3002\u56de\u8c03\u51fd\u6570\u5c06\u4e0d\u518d\u89e6\u53d1"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(75629).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.disconnect.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,a.kt)("h3",r({},{id:"observe"}),"observe"),(0,a.kt)("p",null,"\u6307\u5b9a\u76ee\u6807\u8282\u70b9\u5e76\u5f00\u59cb\u76d1\u542c\u76f8\u4ea4\u72b6\u6001\u53d8\u5316\u60c5\u51b5"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(75629).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.observe.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(targetSelector: string, callback: ObserveCallback) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"targetSelector"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u5668")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ObserveCallback")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u76d1\u542c\u76f8\u4ea4\u72b6\u6001\u53d8\u5316\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h3",r({},{id:"relativeto"}),"relativeTo"),(0,a.kt)("p",null,"\u4f7f\u7528\u9009\u62e9\u5668\u6307\u5b9a\u4e00\u4e2a\u8282\u70b9\uff0c\u4f5c\u4e3a\u53c2\u7167\u533a\u57df\u4e4b\u4e00\u3002"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(75629).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeTo.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(selector: string, margins?: RelativeToMargins) => IntersectionObserver\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"selector"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9009\u62e9\u5668")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"margins"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RelativeToMargins")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u7528\u6765\u6269\u5c55\uff08\u6216\u6536\u7f29\uff09\u53c2\u7167\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u8fb9\u754c")))),(0,a.kt)("h3",r({},{id:"relativetoviewport"}),"relativeToViewport"),(0,a.kt)("p",null,"\u6307\u5b9a\u9875\u9762\u663e\u793a\u533a\u57df\u4f5c\u4e3a\u53c2\u7167\u533a\u57df\u4e4b\u4e00"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(75629).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeToViewport.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(margins?: RelativeToViewportMargins) => IntersectionObserver\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"margins"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RelativeToViewportMargins")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u7528\u6765\u6269\u5c55\uff08\u6216\u6536\u7f29\uff09\u53c2\u7167\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u8fb9\u754c")))),(0,a.kt)("h4",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u4ee3\u7801\u4e2d\uff0c\u5982\u679c\u76ee\u6807\u8282\u70b9\uff08\u7528\u9009\u62e9\u5668 .target-class \u6307\u5b9a\uff09\u8fdb\u5165\u663e\u793a\u533a\u57df\u4ee5\u4e0b 100px \u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1\u56de\u8c03\u51fd\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.createIntersectionObserver().relativeToViewport({bottom: 100}).observe('.target-class', (res) => {\n  res.intersectionRatio // \u76f8\u4ea4\u533a\u57df\u5360\u76ee\u6807\u8282\u70b9\u7684\u5e03\u5c40\u533a\u57df\u7684\u6bd4\u4f8b\n  res.intersectionRect // \u76f8\u4ea4\u533a\u57df\n  res.intersectionRect.left // \u76f8\u4ea4\u533a\u57df\u7684\u5de6\u8fb9\u754c\u5750\u6807\n  res.intersectionRect.top // \u76f8\u4ea4\u533a\u57df\u7684\u4e0a\u8fb9\u754c\u5750\u6807\n  res.intersectionRect.width // \u76f8\u4ea4\u533a\u57df\u7684\u5bbd\u5ea6\n  res.intersectionRect.height // \u76f8\u4ea4\u533a\u57df\u7684\u9ad8\u5ea6\n})\n")),(0,a.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("h3",r({},{id:"observecallback"}),"ObserveCallback"),(0,a.kt)("p",null,"\u76d1\u542c\u76f8\u4ea4\u72b6\u6001\u53d8\u5316\u7684\u56de\u8c03\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: ObserveCallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"result"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ObserveCallbackResult"))))),(0,a.kt)("h3",r({},{id:"observecallbackresult"}),"ObserveCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"boundingClientRect"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"BoundingClientRectResult")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u76ee\u6807\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"intersectionRatio"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u76f8\u4ea4\u6bd4\u4f8b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"intersectionRect"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"IntersectionRectResult")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u76f8\u4ea4\u533a\u57df\u7684\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"relativeRect"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RelativeRectResult")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u53c2\u7167\u533a\u57df\u7684\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"time"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u76f8\u4ea4\u68c0\u6d4b\u65f6\u7684\u65f6\u95f4\u6233")))),(0,a.kt)("h3",r({},{id:"relativerectresult"}),"RelativeRectResult"),(0,a.kt)("p",null,"\u53c2\u7167\u533a\u57df\u7684\u8fb9\u754c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"bottom"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4e0b\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"left"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5de6\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"right"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u53f3\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"top"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4e0a\u8fb9\u754c")))),(0,a.kt)("h3",r({},{id:"intersectionrectresult"}),"IntersectionRectResult"),(0,a.kt)("p",null,"\u76f8\u4ea4\u533a\u57df\u7684\u8fb9\u754c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"bottom"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4e0b\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"height"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9ad8\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"left"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5de6\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"right"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u53f3\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"top"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4e0a\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"width"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5bbd\u5ea6")))),(0,a.kt)("h3",r({},{id:"boundingclientrectresult"}),"BoundingClientRectResult"),(0,a.kt)("p",null,"\u76ee\u6807\u8fb9\u754c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"bottom"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4e0b\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"height"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9ad8\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"left"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5de6\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"right"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u53f3\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"top"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4e0a\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"width"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5bbd\u5ea6")))),(0,a.kt)("h3",r({},{id:"relativetomargins"}),"RelativeToMargins"),(0,a.kt)("p",null,"\u7528\u6765\u6269\u5c55\uff08\u6216\u6536\u7f29\uff09\u53c2\u7167\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u8fb9\u754c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"bottom"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u4e0b\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"left"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u5de6\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"right"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u53f3\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"top"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u4e0a\u8fb9\u754c")))),(0,a.kt)("h3",r({},{id:"relativetoviewportmargins"}),"RelativeToViewportMargins"),(0,a.kt)("p",null,"\u7528\u6765\u6269\u5c55\uff08\u6216\u6536\u7f29\uff09\u53c2\u7167\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u8fb9\u754c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"bottom"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u4e0b\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"left"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u5de6\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"right"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u53f3\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"top"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8282\u70b9\u5e03\u5c40\u533a\u57df\u7684\u4e0a\u8fb9\u754c")))),(0,a.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"IntersectionObserver.disconnect"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"IntersectionObserver.observe"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"IntersectionObserver.relativeTo"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"IntersectionObserver.relativeToViewport"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))))))}c.isMDXComponent=!0},80068:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},75629:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},88421:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);