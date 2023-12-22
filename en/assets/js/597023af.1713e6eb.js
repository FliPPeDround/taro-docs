"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[35117],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13224:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"setGlobalDataPlugin",sidebar_label:"setGlobalDataPlugin"},l=void 0,s={unversionedId:"apis/taro.extend/setGlobalDataPlugin",id:"version-4.x/apis/taro.extend/setGlobalDataPlugin",title:"setGlobalDataPlugin",description:"Vue3 \u63d2\u4ef6\uff0c\u7528\u4e8e\u8bbe\u7f6e getApp() \u4e2d\u7684\u5168\u5c40\u53d8\u91cf",source:"@site/versioned_docs/version-4.x/apis/taro.extend/setGlobalDataPlugin.md",sourceDirName:"apis/taro.extend",slug:"/apis/taro.extend/setGlobalDataPlugin",permalink:"/taro-docs/en/docs/apis/taro.extend/setGlobalDataPlugin",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/apis/taro.extend/setGlobalDataPlugin.md",tags:[],version:"4.x",frontMatter:{title:"setGlobalDataPlugin",sidebar_label:"setGlobalDataPlugin"},sidebar:"API",previous:{title:"getCurrentInstance",permalink:"/taro-docs/en/docs/apis/taro.extend/getCurrentInstance"},next:{title:"getTabBar",permalink:"/taro-docs/en/docs/apis/taro.extend/getTabBar"}},c={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Plugin",id:"plugin",level:3},{value:"install",id:"install",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:p},f="wrapper";function d(e){var{components:t}=e,o=i(e,["components"]);return(0,a.kt)(f,r({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Vue3 \u63d2\u4ef6\uff0c\u7528\u4e8e\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"getApp()")," \u4e2d\u7684\u5168\u5c40\u53d8\u91cf"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(55899).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(68525).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:n(58939).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:n(30174).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:n(92207).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u5feb\u5e94\u7528",src:n(22685).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Plugin\n")),(0,a.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("h3",r({},{id:"plugin"}),"Plugin"),(0,a.kt)("p",null,"Vue3 \u63d2\u4ef6\uff0c\u7528\u4e8e\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"getApp()")," \u4e2d\u7684\u5168\u5c40\u53d8\u91cf"),(0,a.kt)("h4",r({},{id:"install"}),"install"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(app: any, data: any) => void\n")),(0,a.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// \u4f7f\u7528\u63d2\u4ef6\nconst App = createApp(...)\nApp.use(setGlobalDataPlugin, {\n  xxx: 999\n})\n// \u83b7\u53d6\u5168\u5c40\u53d8\u91cf\nTaro.getApp().xxx\n")))}d.isMDXComponent=!0},68525:function(e,t,n){t.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},83190:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},92207:function(e,t,n){t.Z=n.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},30174:function(e,t,n){t.Z=n.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},22685:function(e,t,n){t.Z=n.p+"assets/images/quickapp-9d223aa6970cfc9a18ddf09a125a3c09.png"},519:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},55899:function(e,t,n){t.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},58939:function(e,t,n){t.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},72369:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);