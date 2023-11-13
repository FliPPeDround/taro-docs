"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[47090],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return u}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),k=c(n),d=a,u=k["".concat(p,".").concat(d)]||k[d]||m[d]||o;return n?r.createElement(u,l(l({ref:e},s),{},{components:n})):r.createElement(u,l({ref:e},s))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[k]="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19902:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={title:"Taro.getNetworkType(OBJECT)",sidebar_label:"getNetworkType"},i=void 0,p={unversionedId:"apis/device/netstat/getNetworkType",id:"version-1.x/apis/device/netstat/getNetworkType",title:"Taro.getNetworkType(OBJECT)",description:"\u83b7\u53d6\u7f51\u7edc\u7c7b\u578b\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/netstat/getNetworkType.md",sourceDirName:"apis/device/netstat",slug:"/apis/device/netstat/getNetworkType",permalink:"/taro-docs/en/docs/1.x/apis/device/netstat/getNetworkType",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/device/netstat/getNetworkType.md",tags:[],version:"1.x",frontMatter:{title:"Taro.getNetworkType(OBJECT)",sidebar_label:"getNetworkType"},sidebar:"version-1.x/API",previous:{title:"stopBeaconDiscovery",permalink:"/taro-docs/en/docs/1.x/apis/device/ibeacon/stopBeaconDiscovery"},next:{title:"onNetworkStatusChange",permalink:"/taro-docs/en/docs/1.x/apis/device/netstat/onNetworkStatusChange"}},c={},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],k={toc:s},m="wrapper";function d(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)(m,a({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u83b7\u53d6\u7f51\u7edc\u7c7b\u578b\uff0c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"success"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570\uff0c\u8fd4\u56de\u7f51\u7edc\u7c7b\u578b networkType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"fail"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"complete"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Function"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5426"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"success \u8fd4\u56de\u53c2\u6570\u8bf4\u660e\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"networkType"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u7f51\u7edc\u7c7b\u578b")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"networkType \u6709\u6548\u503c\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"wifi"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"wifi \u7f51\u7edc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"2g"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"2g \u7f51\u7edc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"3g"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"3g \u7f51\u7edc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"4g"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"4g \u7f51\u7edc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"none"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u65e0\u7f51\u7edc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"unknow"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Android \u4e0b\u4e0d\u5e38\u89c1\u7684\u7f51\u7edc\u7c7b\u578b")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"H5")," \u4e0b\u6b64 API \u517c\u5bb9\u6027\u8f83\u5dee\uff0c\u8be6\u89c1 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://caniuse.com/#search=connection"}),"Can I use"),"\u3002\u5e76\u4e14\u6807\u51c6\u4e0d\u4e00\uff0c\u5bf9\u4e8e\u4e09\u79cd\u89c4\u8303\u5206\u522b\u652f\u6301\u7684 networkType \u6709\u6548\u503c\u5982\u4e0b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ec5\u652f\u6301\u4e0d\u7b26\u5408\u89c4\u8303\u7684 navigator.connetion.type\uff0c",(0,r.kt)("a",a({parentName:"li"},{href:"https://www.davidbcalhoun.com/2010/using-navigator-connection-android/"}),"\u8be6\u60c5"),"\u3002networkType \u6709\u6548\u503c\u4e3a\uff1a'wifi'\u3001'3g'\u3001'2g'\u3001'unknown'\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 navigator.connetion.type\u3002networkType \u6709\u6548\u503c\u4e3a\uff1a'cellular'\u3001'wifi'\u3001'none'\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 navigator.connetion.effectiveType\u3002networkType \u6709\u6548\u503c\u4e3a\uff1a'slow-2g'\u3001'2g'\u3001'3g'\u3001'4g'\u3002")),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getNetworkType({\n  success: res => console.log(res.networkType)\n})\n  .then(res => console.log(res.networkType))\n")),(0,r.kt)("h2",a({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"ReactNative"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getNetworkType"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);