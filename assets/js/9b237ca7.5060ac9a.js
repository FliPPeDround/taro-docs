"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[17541],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"\u8de8\u7aef\u8bf7\u6c42\u5e93"},l=void 0,p={unversionedId:"request",id:"version-4.x/request",title:"\u8de8\u7aef\u8bf7\u6c42\u5e93",description:"\u672c\u7bc7\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u4f7f\u7528 web \u751f\u6001\u4e0b\u7684\u7f51\u7edc\u8bf7\u6c42\u5e93, \u8fd9\u91cc\u4ee5 axios \u4e3a\u4f8b\u3002",source:"@site/versioned_docs/version-4.x/request.md",sourceDirName:".",slug:"/request",permalink:"/taro-docs/docs/request",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/request.md",tags:[],version:"4.x",frontMatter:{title:"\u8de8\u7aef\u8bf7\u6c42\u5e93"},sidebar:"docs",previous:{title:"\u4f7f\u7528 HTML \u6807\u7b7e",permalink:"/taro-docs/docs/use-h5"},next:{title:"jQuery-like API",permalink:"/taro-docs/docs/jquery-like"}},u={},c=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u63d2\u4ef6\u4f7f\u7528",id:"\u63d2\u4ef6\u4f7f\u7528",level:2},{value:"\u63d2\u4ef6\u5b8c\u6574\u914d\u7f6e\u53c2\u6570",id:"\u63d2\u4ef6\u5b8c\u6574\u914d\u7f6e\u53c2\u6570",level:2},{value:"\u9650\u5236",id:"\u9650\u5236",level:2},{value:"\u63d2\u4ef6\u53d1\u5e03\u8bb0\u5f55",id:"\u63d2\u4ef6\u53d1\u5e03\u8bb0\u5f55",level:2}],s={toc:c},m="wrapper";function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(m,a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc7\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u4f7f\u7528 web \u751f\u6001\u4e0b\u7684\u7f51\u7edc\u8bf7\u6c42\u5e93, \u8fd9\u91cc\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," \u4e3a\u4f8b\u3002"),(0,r.kt)("h2",a({},{id:"\u539f\u7406"}),"\u539f\u7406"),(0,r.kt)("p",null,"\u6211\u4eec\u901a\u8fc7 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/tree/next/packages/taro-plugin-http"}),"@tarojs/plugin-http")," \u63d2\u4ef6\uff0c\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e0b runtime \u6ce8\u5165\u6a21\u62df\u5b9e\u73b0\u7684 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest"}),"XMLHttpRequest")," , \u4ece\u800c\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u4f7f\u7528 web \u751f\u6001\u4e0b\u7684\u5404\u79cd\u7f51\u7edc\u8bf7\u6c42\u5e93\u3002\u81f3\u6b64\uff0c\u4f60\u53ef\u4ee5\u5728 h5\u3001\u5c0f\u7a0b\u5e8f\u3001react native \u4e2d\u7545\u5feb\u4f7f\u7528 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://axios-http.com/"}),"axios")," \u5e93\u4f5c\u4e3a\u8bf7\u6c42\u5e93\u3002"),(0,r.kt)("p",null,"\u7406\u8bba\u4e0a\uff0c \u4efb\u4f55\u5e95\u5c42\u57fa\u4e8e XMLHttpRequest \u5f00\u53d1\u7684 web \u5e93\u4f60\u90fd\u53ef\u4ee5\u81ea\u7531\u4f7f\u7528\u3002"),(0,r.kt)("h2",a({},{id:"\u63d2\u4ef6\u4f7f\u7528"}),"\u63d2\u4ef6\u4f7f\u7528"),(0,r.kt)("p",null,"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"npm i @tarojs/plugin-http axios\n")),(0,r.kt)("p",null,"\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"// config/index.js\nconfig = {\n  // ...\n  plugins: ['@tarojs/plugin-http'],\n}\n")),(0,r.kt)("p",null,"\u4ee3\u7801\u5f15\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),'import axios from "axios";\n\nconst request = axios.create({\n    baseURL: ""\n});\n\n\nexport request;\n')),(0,r.kt)("h2",a({},{id:"\u63d2\u4ef6\u5b8c\u6574\u914d\u7f6e\u53c2\u6570"}),"\u63d2\u4ef6\u5b8c\u6574\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u53c2\u6570\u540d"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"enableCookie"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"false"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"(\u662f\u5426)\u6ce8\u5165\u76f8\u5173\u4ee3\u7801\uff0c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"td"},"document.cookie")," \u3001 \u901a\u8fc7\u540e\u7aef\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"td"},"Set-Cookie")," \u54cd\u5e94\u5934\u6765\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"cookie"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"disabledFormData"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"true"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"(\u662f\u5426)\u7981\u7528\u6389 FormData \u5168\u5c40\u5bf9\u8c61")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"disabledBlob"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"true"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"(\u662f\u5426)\u7981\u7528\u6389 Blob \u5168\u5c40\u5bf9\u8c61")))),(0,r.kt)("h2",a({},{id:"\u9650\u5236"}),"\u9650\u5236"),(0,r.kt)("admonition",a({},{title:"\u9650\u5236",type:"danger"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301\u4e0a\u4f20\uff0c\u4e14\u63d2\u4ef6\u9ed8\u8ba4\u4f1a\u5c06\u5168\u5c40 ",(0,r.kt)("inlineCode",{parentName:"li"},"FormData")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"li"},"Blob")," \u5bf9\u8c61\u66ff\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff08\u4ec5\u9488\u5bf9\u5c0f\u7a0b\u5e8f\u73af\u5883\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u672c\u63d2\u4ef6\u9700\u642d\u914d taro \u4e3b\u5305 3.6.0 \u53ca\u5176\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"webpack4 \u7528\u6237\u9700\u5347\u7ea7\u63d2\u4ef6\u7248\u672c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"3.6.6")," \u53ca\u5176\u4ee5\u4e0a"))),(0,r.kt)("h2",a({},{id:"\u63d2\u4ef6\u53d1\u5e03\u8bb0\u5f55"}),"\u63d2\u4ef6\u53d1\u5e03\u8bb0\u5f55"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3.6.0")," \u63d2\u4ef6\u9996\u6b21\u53d1\u5e03"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3.6.6")," ",(0,r.kt)("a",a({parentName:"li"},{href:"https://github.com/NervJS/taro/pull/13699"}),"fix: @tarojs/plugin-http \u5bf9 webpack4 \u7684\u517c\u5bb9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3.6.7")," \u4f18\u5316\u4e8b\u4ef6\u5c5e\u6027\u7684\u5b9e\u73b0\uff0c ",(0,r.kt)("a",a({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/13824"}),"#13824")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3.6.8")," \u4fee\u590d\u53d1\u9001\u8bf7\u6c42\u65f6\u672a\u6b63\u786e\u643a\u5e26\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"httpOnly")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"cookie")," \u7684\u95ee\u9898\uff0c",(0,r.kt)("a",a({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/13941"}),"#13941"))))}d.isMDXComponent=!0}}]);