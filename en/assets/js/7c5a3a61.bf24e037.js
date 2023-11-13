"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[27231],{79874:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(r),s=o,d=u["".concat(l,".").concat(s)]||u[s]||f[s]||a;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},78479:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"Project Configuration"},p=void 0,l={unversionedId:"project-config",id:"version-3.x/project-config",title:"Project Configuration",description:"Each type of mini-program platform has its own project profile, for example",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/project-config.md",sourceDirName:".",slug:"/project-config",permalink:"/taro-docs/en/docs/project-config",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/project-config.md",tags:[],version:"3.x",frontMatter:{title:"Project Configuration"},sidebar:"docs",previous:{title:"\u9875\u9762\u914d\u7f6e",permalink:"/taro-docs/en/docs/page-config"},next:{title:"Babel Configuration",permalink:"/taro-docs/en/docs/babel-config"}},c={},m=[],u={toc:m},f="wrapper";function s(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(f,o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Each type of mini-program platform has its own project profile, for example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WeChat mini-program, ",(0,n.kt)("a",o({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html?search-key=%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE"}),"project.config.json")),(0,n.kt)("li",{parentName:"ul"},"Baidu smart mini-program, ",(0,n.kt)("a",o({parentName:"li"},{href:"https://smartprogram.baidu.com/docs/develop/devtools/projectconfig/"}),"project.swan.json")),(0,n.kt)("li",{parentName:"ul"},"ByteDance mini-program, ",(0,n.kt)("a",o({parentName:"li"},{href:"https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/framework/basic-reference/catalog-structure#_projectconfigjson-%E9%85%8D%E7%BD%AE%E4%BB%8B%E7%BB%8D"}),"project.config.json")),(0,n.kt)("li",{parentName:"ul"},"QQ mini-program, project.config.json"),(0,n.kt)("li",{parentName:"ul"},"Alipay mini-program,",(0,n.kt)("a",o({parentName:"li"},{href:"https://opendocs.alipay.com/mini/framework/project"}),"mini.project.json")),(0,n.kt)("li",{parentName:"ul"},"Jingdong mini-program, Not found")),(0,n.kt)("p",null,"To be able to adapt to the different profiles of different mini-program platforms, Taro supports adding individual project profiles for each mini-program platform."),(0,n.kt)("p",null,"Projects created through the Taro template will have a project configuration file ",(0,n.kt)("inlineCode",{parentName:"p"},"project.config.json")," by default, which ",(0,n.kt)("strong",{parentName:"p"},"can only be used for WeChat mini-program"),", to be compatible with other mini-program platforms, please add the configuration file of the corresponding platform according to the following corresponding rules, and the configuration is consistent with the requirements of the respective mini-program platforms."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Mini-program Platform"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Configuration File"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"WeChat mini-program"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"project.config.json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Baidu smart mini-program"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"project.swan.json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"ByteDance mini-program"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"project.tt.json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"QQ mini-program"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"project.qq.json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Alipay mini-program"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"project.alipay.json")))))}s.isMDXComponent=!0}}]);