"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[28038],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),v=o,m=d["".concat(u,".").concat(v)]||d[v]||c[v]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64713:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Vue DevTools"},a=void 0,u={unversionedId:"vue-devtools",id:"vue-devtools",title:"Vue DevTools",description:"Taro v3.3.2 is supported.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/vue-devtools.md",sourceDirName:".",slug:"/vue-devtools",permalink:"/taro-docs/en/docs/next/vue-devtools",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/vue-devtools.md",tags:[],version:"current",frontMatter:{title:"Vue DevTools"},sidebar:"docs",previous:{title:"Vue3 Composition APIs",permalink:"/taro-docs/en/docs/next/composition-api"},next:{title:"Router",permalink:"/taro-docs/en/docs/next/router"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"1. Installation",id:"1-installation",level:3},{value:"2. Configuring the Taro Plugin",id:"2-configuring-the-taro-plugin",level:3},{value:"3. Compile project",id:"3-compile-project",level:3},{value:"Plugin Parameters",id:"plugin-parameters",level:2},{value:"enabled",id:"enabled",level:3},{value:"port",id:"port",level:3},{value:"Caution",id:"caution",level:2},{value:"Detailed Design",id:"detailed-design",level:2}],c={toc:s};function d(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Taro v3.3.2 is supported."),(0,r.kt)("p",{parentName:"admonition"},"Vue2 is not supported at this time.")),(0,r.kt)("p",null,"When developing mini program you can use ",(0,r.kt)("a",o({parentName:"p"},{href:"https://devtools.vuejs.org/guide/installation.html"}),"Vue DevTools"),"\u3002"),(0,r.kt)("h2",o({},{id:"usage"}),"Usage"),(0,r.kt)("h3",o({},{id:"1-installation"}),"1. Installation"),(0,r.kt)("p",null,"Install the Taro plugin in your project ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-vue-devtools"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"$ yarn add --dev @tarojs/plugin-vue-devtools\n")),(0,r.kt)("h3",o({},{id:"2-configuring-the-taro-plugin"}),"2. Configuring the Taro Plugin"),(0,r.kt)("p",null,"Configure the Taro compile configuration to use ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-vue-devtools"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="config/dev.js"',title:'"config/dev.js"'}),"config = {\n  plugins: [\n    '@tarojs/plugin-vue-devtools'\n  ],\n  // ...\n}\n")),(0,r.kt)("h3",o({},{id:"3-compile-project"}),"3. Compile project"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"$ taro build --type weapp --watch\n")),(0,r.kt)("h2",o({},{id:"plugin-parameters"}),"Plugin Parameters"),(0,r.kt)("p",null,"The plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-vue-devtools")," has the following parameters."),(0,r.kt)("h3",o({},{id:"enabled"}),"enabled"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Default value: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"Controls whether to connect to ",(0,r.kt)("inlineCode",{parentName:"p"},"vue-devtools"),", which will inject backend code into the developer's app when turned on."),(0,r.kt)("h3",o({},{id:"port"}),"port"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Default value: ",(0,r.kt)("inlineCode",{parentName:"p"},"8098")),(0,r.kt)("p",null,"The Websocket port used by Vue DevTools."),(0,r.kt)("h2",o({},{id:"caution"}),"Caution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The version of ",(0,r.kt)("inlineCode",{parentName:"li"},"vue-devtools")," is forcibly locked, and the code of the ",(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/plugin-vue-devtools")," plugin needs to be modified to update the version.")),(0,r.kt)("p",null,"In addition, the current support for devtools is not comprehensive enough, some features need to be magic backend for the mini program environment to achieve, welcome to build ~"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support element highlighting.")),(0,r.kt)("h2",o({},{id:"detailed-design"}),"Detailed Design"),(0,r.kt)("p",null,"For detailed design, see ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs/blob/master/rfcs/0006-vue-devtools.md"}),"RFC"),"\u3002"))}d.isMDXComponent=!0}}]);