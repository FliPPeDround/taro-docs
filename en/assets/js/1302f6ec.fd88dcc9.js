"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[4095],{79874:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),v=o,m=p["".concat(c,".").concat(v)]||p[v]||f[v]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=v;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},72009:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});t(93106);var r=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"\u6d88\u606f\u673a\u5236"},s=void 0,c={unversionedId:"apis/about/events",id:"version-2.x/apis/about/events",title:"\u6d88\u606f\u673a\u5236",description:"Taro \u63d0\u4f9b\u4e86 Taro.Events \u6765\u5b9e\u73b0\u6d88\u606f\u673a\u5236\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u5b9e\u4f8b\u5316\u5b83\uff0c\u5982\u4e0b",source:"@site/versioned_docs/version-2.x/apis/about/events.md",sourceDirName:"apis/about",slug:"/apis/about/events",permalink:"/taro-docs/en/docs/2.x/apis/about/events",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/about/events.md",tags:[],version:"2.x",frontMatter:{title:"\u6d88\u606f\u673a\u5236"},sidebar:"version-2.x/API",previous:{title:"\u73af\u5883\u5224\u65ad",permalink:"/taro-docs/en/docs/2.x/apis/about/env"},next:{title:"General",permalink:"/taro-docs/en/docs/2.x/apis/General"}},u={},l=[],p={toc:l},f="wrapper";function v(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)(f,o({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro \u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.Events")," \u6765\u5b9e\u73b0\u6d88\u606f\u673a\u5236\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u5b9e\u4f8b\u5316\u5b83\uff0c\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Events } from '@tarojs/taro'\n\nconst events = new Events()\n\n// \u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u63a5\u53d7\u53c2\u6570\nevents.on('eventName', (arg) => {\n  // doSth\n})\n\n// \u76d1\u542c\u540c\u4e2a\u4e8b\u4ef6\uff0c\u540c\u65f6\u7ed1\u5b9a\u591a\u4e2a handler\nevents.on('eventName', handler1)\nevents.on('eventName', handler2)\nevents.on('eventName', handler3)\n\n// \u89e6\u53d1\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u4f20\u53c2\nevents.trigger('eventName', arg)\n\n// \u89e6\u53d1\u4e8b\u4ef6\uff0c\u4f20\u5165\u591a\u4e2a\u53c2\u6570\nevents.trigger('eventName', arg1, arg2, ...)\n\n// \u53d6\u6d88\u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6\nevents.off('eventName')\n\n// \u53d6\u6d88\u76d1\u542c\u4e00\u4e2a\u4e8b\u4ef6\u67d0\u4e2a handler\nevents.off('eventName', handler1)\n\n// \u53d6\u6d88\u76d1\u542c\u6240\u6709\u4e8b\u4ef6\nevents.off()\n")),(0,r.kt)("p",null,"\u540c\u65f6 Taro \u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5168\u5c40\u6d88\u606f\u4e2d\u5fc3 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.eventCenter")," \u4ee5\u4f9b\u4f7f\u7528\uff0c\u5b83\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.Events")," \u7684\u5b9e\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.eventCenter.on\nTaro.eventCenter.trigger\nTaro.eventCenter.off\n")))}v.isMDXComponent=!0}}]);