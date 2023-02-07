"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[39884],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:e},s),{},{components:n})):r.createElement(m,i({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65440:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"Taro.onNetworkStatusChange(CALLBACK)",sidebar_label:"onNetworkStatusChange"},l=void 0,c={unversionedId:"apis/device/netstat/onNetworkStatusChange",id:"version-1.x/apis/device/netstat/onNetworkStatusChange",title:"Taro.onNetworkStatusChange(CALLBACK)",description:"\u76d1\u542c\u7f51\u7edc\u72b6\u6001\u53d8\u5316\u3002",source:"@site/versioned_docs/version-1.x/apis/device/netstat/onNetworkStatusChange.md",sourceDirName:"apis/device/netstat",slug:"/apis/device/netstat/onNetworkStatusChange",permalink:"/taro-docs/en/docs/1.x/apis/device/netstat/onNetworkStatusChange",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/device/netstat/onNetworkStatusChange.md",tags:[],version:"1.x",frontMatter:{title:"Taro.onNetworkStatusChange(CALLBACK)",sidebar_label:"onNetworkStatusChange"},sidebar:"version-1.x/API",previous:{title:"getNetworkType",permalink:"/taro-docs/en/docs/1.x/apis/device/netstat/getNetworkType"},next:{title:"getHCEState",permalink:"/taro-docs/en/docs/1.x/apis/device/nfc/getHCEState"}},p={},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],u={toc:s};function d(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u76d1\u542c\u7f51\u7edc\u72b6\u6001\u53d8\u5316\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CALLBACK \u8fd4\u56de\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"isConnected"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u662f\u5426\u6709\u7f51\u7edc\u8fde\u63a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"networkType"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u7f51\u7edc\u7c7b\u578b")))),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a",(0,r.kt)("strong",{parentName:"p"},"H5")," \u7aef\u517c\u5bb9\u60c5\u51b5\u8f83\u5dee\uff0c\u53ea\u6709\u5f53 navigator.connection \u652f\u6301\u76d1\u542c onChange \u4e8b\u4ef6\u65f6\u624d\u4f1a\u751f\u6548\u3002"),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.onNetworkStatusChange(res => {\n  console.log(res.isConnected)\n  console.log(res.networkType)\n})\n")),(0,r.kt)("h2",a({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"ReactNative"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.onNetworkStatusChange"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);