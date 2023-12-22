"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[97838],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41746:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"WeChat Mini Program Convert to Taro"},c=void 0,l={unversionedId:"taroize",id:"version-3.x/taroize",title:"WeChat Mini Program Convert to Taro",description:"Taro can convert native WeChat mini program applications into Taro projects, thus making the project a multi-terminated application.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/taroize.md",sourceDirName:".",slug:"/taroize",permalink:"/taro-docs/en/docs/3.x/taroize",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/taroize.md",tags:[],version:"3.x",frontMatter:{title:"WeChat Mini Program Convert to Taro"},sidebar:"docs",previous:{title:"\u539f\u751f\u9879\u76ee\u4f7f\u7528 Taro",permalink:"/taro-docs/en/docs/3.x/taro-in-miniapp"},next:{title:"Convert to React",permalink:"/taro-docs/en/docs/3.x/convert-to-react"}},p={},s=[{value:"Reverse conversion steps",id:"reverse-conversion-steps",level:3}],u={toc:s},m="wrapper";function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(m,o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Taro can convert ",(0,n.kt)("strong",{parentName:"p"},"native WeChat mini program applications into Taro projects"),", thus making the project a multi-terminated application."),(0,n.kt)("p",null,"The converted code is highly readable and can continue to be used for secondary development using ",(0,n.kt)("strong",{parentName:"p"},"React")," (conversion to ",(0,n.kt)("strong",{parentName:"p"},"Vue")," is supported in the future)."),(0,n.kt)("h3",o({},{id:"reverse-conversion-steps"}),"Reverse conversion steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Taro command line tool.")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ npm i -g @tarojs/cli\n")),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Run the ",(0,n.kt)("inlineCode",{parentName:"li"},"convert")," command in the root directory of the WeChat mini program project to convert.")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# The converted code is stored in the `taroConvert` folder in the root directory\n$ taro convert\n")),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"taroConvert")," directory and install the dependencies on.")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ cd taroConvert\n$ npm install\n")),(0,n.kt)("ol",o({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"Run the ",(0,n.kt)("inlineCode",{parentName:"li"},"build")," command to compile the project to any platform.")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ taro build --type [platform]\n")))}d.isMDXComponent=!0}}]);