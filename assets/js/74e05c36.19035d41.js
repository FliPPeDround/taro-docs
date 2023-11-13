"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[24422],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),k=o,y=s["".concat(i,".").concat(k)]||s[k]||d[k]||a;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},70328:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Taro.onGyroscopeChange(callback)",sidebar_label:"onGyroscopeChange"},c=void 0,i={unversionedId:"apis/device/gyroscope/onGyroscopeChange",id:"version-2.x/apis/device/gyroscope/onGyroscopeChange",title:"Taro.onGyroscopeChange(callback)",description:"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e Taro.startGyroscope() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 Taro.stopGyroscope() \u505c\u6b62\u76d1\u542c\u3002",source:"@site/versioned_docs/version-2.x/apis/device/gyroscope/onGyroscopeChange.md",sourceDirName:"apis/device/gyroscope",slug:"/apis/device/gyroscope/onGyroscopeChange",permalink:"/taro-docs/docs/2.x/apis/device/gyroscope/onGyroscopeChange",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/device/gyroscope/onGyroscopeChange.md",tags:[],version:"2.x",frontMatter:{title:"Taro.onGyroscopeChange(callback)",sidebar_label:"onGyroscopeChange"},sidebar:"version-2.x/API",previous:{title:"startGyroscope",permalink:"/taro-docs/docs/2.x/apis/device/gyroscope/startGyroscope"},next:{title:"offGyroscopeChange",permalink:"/taro-docs/docs/2.x/apis/device/gyroscope/offGyroscopeChange"}},p={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Callback",id:"callback",level:3},{value:"CallbackResult",id:"callbackresult",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:u},d="wrapper";function k(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(d,o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e Taro.startGyroscope() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 Taro.stopGyroscope() \u505c\u6b62\u76d1\u542c\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.onGyroscopeChange.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,n.kt)("h2",o({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",o({},{id:"callback"}),"Callback"),(0,n.kt)("p",null,"\u9640\u87ba\u4eea\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"CallbackResult"))))),(0,n.kt)("h3",o({},{id:"callbackresult"}),"CallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"x"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"x \u8f74\u7684\u89d2\u901f\u5ea6")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"y"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"y \u8f74\u7684\u89d2\u901f\u5ea6")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"z"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"z \u8f74\u7684\u89d2\u901f\u5ea6")))),(0,n.kt)("h2",o({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"Taro.onGyroscopeChange"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"})),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);