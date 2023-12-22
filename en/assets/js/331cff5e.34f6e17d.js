"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[67055],{79874:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return g}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),k=d(a),f=r,g=k["".concat(o,".").concat(f)]||k[f]||N[f]||l;return a?n.createElement(g,m(m({ref:e},p),{},{components:a})):n.createElement(g,m({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,m=new Array(l);m[0]=f;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[k]="string"==typeof t?t:r,m[1]=i;for(var d=2;d<l;d++)m[d]=a[d];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},37185:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return p}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const m={title:"Taro DOM Reference"},i=void 0,o={unversionedId:"taro-dom",id:"version-3.x/taro-dom",title:"Taro DOM Reference",description:"\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e0b\uff0cTaro \u6a21\u62df\u5b9e\u73b0\u7684 DOM\u3001BOM API \u6982\u89c8\u3002",source:"@site/versioned_docs/version-3.x/taro-dom.md",sourceDirName:".",slug:"/taro-dom",permalink:"/taro-docs/en/docs/3.x/taro-dom",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/taro-dom.md",tags:[],version:"3.x",frontMatter:{title:"Taro DOM Reference"},sidebar:"docs",previous:{title:"Implementation Details",permalink:"/taro-docs/en/docs/3.x/implement-note"}},d={},p=[{value:"DOM",id:"dom",level:2},{value:"TaroEventTarget",id:"taroeventtarget",level:3},{value:"TaroNode",id:"taronode",level:3},{value:"\u53ef\u9009\u5c5e\u6027/\u65b9\u6cd5",id:"\u53ef\u9009\u5c5e\u6027\u65b9\u6cd5",level:4},{value:"TaroText",id:"tarotext",level:3},{value:"TaroElement",id:"taroelement",level:3},{value:"\u53ef\u9009\u5c5e\u6027/\u65b9\u6cd5",id:"\u53ef\u9009\u5c5e\u6027\u65b9\u6cd5-1",level:4},{value:"RootElement",id:"rootelement",level:3},{value:"FormElement",id:"formelement",level:3},{value:"SVGElement",id:"svgelement",level:3},{value:"BOM",id:"bom",level:2},{value:"window",id:"window",level:3},{value:"document",id:"document",level:3},{value:"navigator",id:"navigator",level:3},{value:"requestAnimationFrame",id:"requestanimationframe",level:3},{value:"cancelAnimationFrame",id:"cancelanimationframe",level:3}],k={toc:p},N="wrapper";function f(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)(N,r({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5c0f\u7a0b\u5e8f"),"\u73af\u5883\u4e0b\uff0cTaro \u6a21\u62df\u5b9e\u73b0\u7684 DOM\u3001BOM API \u6982\u89c8\u3002"),(0,n.kt)("p",null,"\u76f8\u5173\u4ee3\u7801\u4f4d\u4e8e ",(0,n.kt)("inlineCode",{parentName:"p"},"@tarojs/runtime")," \u5305\u4e2d\u3002"),(0,n.kt)("h2",r({},{id:"dom"}),"DOM"),(0,n.kt)("h3",r({},{id:"taroeventtarget"}),"TaroEventTarget"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"addEventListener"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u7ed1\u5b9a\u4e8b\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"removeEventListener"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u89e3\u7ed1\u4e8b\u4ef6")))),(0,n.kt)("h3",r({},{id:"taronode"}),"TaroNode"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"nodeType"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"nodeName"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"parentNode"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"childNodes"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"nextSibling"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"previousSibling"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"parentElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"firstChild"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"lastChild"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"textContent"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"setter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"insertBefore"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"appendChild"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"replaceChild"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"removeChild"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"remove"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"hasChildNodes"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"ownerDocument"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u53ea\u8bfb\uff0c\u8fd4\u56de\u6a21\u62df\u7684 ",(0,n.kt)("a",r({parentName:"td"},{href:"taro-dom#document"}),"document")," \u5bf9\u8c61")))),(0,n.kt)("h4",r({},{id:"\u53ef\u9009\u5c5e\u6027\u65b9\u6cd5"}),"\u53ef\u9009\u5c5e\u6027/\u65b9\u6cd5"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u5c5e\u6027/\u65b9\u6cd5\u4e0d\u662f\u6bcf\u4e2a Web \u6846\u67b6\u3001\u6bcf\u4e2a\u5e94\u7528\u90fd\u9700\u8981\u4f7f\u7528\u7684\u3002\u56e0\u6b64 Taro v3.4 \u628a\u8fd9\u7c7b DOM APIs \u505a\u6210\u53ef\u63d2\u62d4\u5f0f\uff0c\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u9009\u62e9\u5728\u6700\u7ec8\u7684\u7f16\u8bd1\u7ed3\u679c\u91cc\u53ea\u5b58\u5728\u54ea\u4e9b DOM APIs\u3002"),(0,n.kt)("admonition",r({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6ca1\u6709\u4f7f\u7528 React \u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML")," \u6216 Vue2 \u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"v-html")," \u53bb\u6e32\u67d3 HTML \u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u5173\u95ed\u5bf9 ",(0,n.kt)("inlineCode",{parentName:"p"},"innerHTML")," \u7684\u652f\u6301\uff0c\u53ef\u4ee5\u8282\u7701 ",(0,n.kt)("strong",{parentName:"p"},"9k")," \u7684\u7a7a\u95f4\u3002\n\u4f46 Vue3 \u5fc5\u987b\u5f00\u542f\uff0c\u56e0\u4e3a\u5b83\u4f7f\u7528\u4e86 insertAdjacentHTML\u3002")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u72b6\u6001"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u914d\u7f6e\u9879"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"innerHTML"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5f00\u542f"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"enableInnerHTML"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u76ee\u524d\u53ea\u5b9e\u73b0\u4e86 ",(0,n.kt)("inlineCode",{parentName:"td"},"setter"),"(\u4e3b\u8981\u7528\u4e8e\u652f\u6301 React ",(0,n.kt)("inlineCode",{parentName:"td"},"dangerouslySetInnerHTML"),"\u3001Vue ",(0,n.kt)("inlineCode",{parentName:"td"},"v-html"),")",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"getter")," \u53ea\u4f1a\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"insertAdjacentHTML"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5f00\u542f\uff08Vue3\uff09"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"enableAdjacentHTML"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"cloneNode"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5f00\u542f\uff08Vue3\uff09"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"enableCloneNode"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"contains"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5173\u95ed"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"enableContains"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))))),(0,n.kt)("h3",r({},{id:"tarotext"}),"TaroText"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode <- TaroText")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"textContent"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"nodeValue"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))))),(0,n.kt)("h3",r({},{id:"taroelement"}),"TaroElement"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode <- TaroElement")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"id"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"tagName"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"props"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"style"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"dataset"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"className"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"cssText"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"classList"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"children"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"attributes"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"textContent"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"hasAttribute"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"hasAttributes"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"focus"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"blur"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"setAttribute"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"removeAttribute"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"getAttribute"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"getElementsByTagName"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"getElementsByClassName"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"dispatchEvent"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))))),(0,n.kt)("h4",r({},{id:"\u53ef\u9009\u5c5e\u6027\u65b9\u6cd5-1"}),"\u53ef\u9009\u5c5e\u6027/\u65b9\u6cd5"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u72b6\u6001"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u914d\u7f6e\u9879"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"content"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5f00\u542f\uff08Vue3\uff09"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"enableTemplateContent"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"getBoundingClientRect"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5173\u95ed"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"enableSizeAPIs"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u53d7\u9650\u4e8e\u5c0f\u7a0b\u5e8f\uff0c\u6b64 API \u662f",(0,n.kt)("strong",{parentName:"td"},"\u5f02\u6b65\u51fd\u6570"))))),(0,n.kt)("h3",r({},{id:"rootelement"}),"RootElement"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode <- TaroElement <- RootElement")),(0,n.kt)("p",null,"\u975e Web \u6807\u51c6 API\u3002\u662f\u94fe\u63a5 Taro DOM \u66f4\u65b0\u548c\u5c0f\u7a0b\u5e8f ",(0,n.kt)("inlineCode",{parentName:"p"},"setData")," \u7684\u6838\u5fc3\u5b9e\u73b0\u3002"),(0,n.kt)("p",null,"\u5728\u8fd9\u91cc\u4f1a\u8c03\u7528\u5c0f\u7a0b\u5e8f\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"setData")," API\uff0c\u628a Taro DOM \u7684\u5e8f\u5217\u5316\u6570\u636e\u4f20\u9012\u5230\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u3002"),(0,n.kt)("h3",r({},{id:"formelement"}),"FormElement"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode <- TaroElement <- FormElement")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"value"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8fd4\u56de\u6216\u8bbe\u7f6e\u5f53\u524d\u63a7\u4ef6\u7684\u503c")))),(0,n.kt)("h3",r({},{id:"svgelement"}),"SVGElement"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode <- TaroElement <- SVGElement")),(0,n.kt)("p",null,"\u53ea\u662f\u5b9e\u73b0\u4e86\u7ee7\u627f\u5173\u7cfb\uff0c\u6ca1\u6709\u5b9e\u73b0\u5c5e\u6027\u4e0e\u65b9\u6cd5\u3002"),(0,n.kt)("h2",r({},{id:"bom"}),"BOM"),(0,n.kt)("h3",r({},{id:"window"}),"window"),(0,n.kt)("p",null,"Taro \u6a21\u62df\u5b9e\u73b0\u4e86\u57fa\u4e8e\u6d4f\u89c8\u5668\u6807\u51c6 ",(0,n.kt)("inlineCode",{parentName:"p"},"window")," \u5bf9\u8c61\uff0c\u5b83\u4e3b\u8981\u5b9e\u73b0\u4e86\u7528\u4e8e\u652f\u6301 React\u3001Vue \u7b49\u6846\u67b6\u8fd0\u884c\u7684\u5fc5\u5907 API\u3002"),(0,n.kt)("p",null,"\u6b64\u5916\uff0cTaro \u4f1a\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"window")," \u5bf9\u8c61\u8d4b\u503c\u5c0f\u7a0b\u5e8f\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"global")," \u5bf9\u8c61\u4e0a\u7684\u5168\u90e8\u5c5e\u6027\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"navigator"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u6a21\u62df\u7684 ",(0,n.kt)("a",r({parentName:"td"},{href:"taro-dom#navigator"}),"navigator")," \u5bf9\u8c61")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"document"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u6a21\u62df\u7684 ",(0,n.kt)("a",r({parentName:"td"},{href:"taro-dom#document"}),"document")," \u5bf9\u8c61")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"requestAnimationFrame"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u6a21\u62df\u7684 ",(0,n.kt)("a",r({parentName:"td"},{href:"taro-dom#requestanimationframe"}),"requestAnimationFrame")," API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"cancelAnimationFrame"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u6a21\u62df\u7684 ",(0,n.kt)("a",r({parentName:"td"},{href:"taro-dom#cancelanimationframe"}),"cancelAnimationFrame")," API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"getComputedStyle"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u53ea\u80fd\u7528\u4e8e\u8fd4\u56de\u5143\u7d20\u7684 ",(0,n.kt)("inlineCode",{parentName:"td"},"style")," \u503c\uff0c\u505a\u4e0d\u5230\u771f\u6b63\u53bb\u8ba1\u7b97 ",(0,n.kt)("inlineCode",{parentName:"td"},"css")," \u540e\u7684\u6837\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"addEventListener"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u7a7a\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"removeEventListener"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u7a7a\u51fd\u6570")))),(0,n.kt)("h3",r({},{id:"document"}),"document"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TaroEventTarget <- TaroNode <- TaroElement <- document")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u6216\u65b9\u6cd5"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"createElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"td"},"TaroElement"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"createElementNS"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u6ca1\u6709\u771f\u6b63\u53bb\u5b9e\u73b0\uff0c\u7b49\u540c\u4e8e ",(0,n.kt)("inlineCode",{parentName:"td"},"document.createElement"),"\uff0c\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"td"},"TaroElement"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"createTextNode"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"td"},"TaroText"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"createComment"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"td"},"TaroText"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"getElementById"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"td"},"TaroElement"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"querySelector"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u76ee\u524d\u53ea\u80fd\u6839\u636e ",(0,n.kt)("inlineCode",{parentName:"td"},"id")," \u5bfb\u627e\u5143\u7d20\uff0c\u7b49\u540c\u4e8e ",(0,n.kt)("inlineCode",{parentName:"td"},"document.getElementById"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"querySelectorAll"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u6ca1\u6709\u771f\u6b63\u53bb\u5b9e\u73b0\uff0c\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"td"},"[]"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"defaultView"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8fd4\u56de ",(0,n.kt)("a",r({parentName:"td"},{href:"taro-dom#window"}),"window"))))),(0,n.kt)("h3",r({},{id:"navigator"}),"navigator"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"navigator")," \u4e3a\u4ee5\u4e0b\u5bf9\u8c61\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "appCodeName": "Mozilla",\n  "appName": "Netscape",\n  "appVersion": "5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36",\n  "cookieEnabled": true,\n  "mimeTypes": [],\n  "onLine": true,\n  "platform": "MacIntel",\n  "plugins": [],\n  "product": "Taro",\n  "productSub": "20030107",\n  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36",\n  "vendor": "Joyent",\n  "vendorSub": ""\n}\n')),(0,n.kt)("h3",r({},{id:"requestanimationframe"}),"requestAnimationFrame"),(0,n.kt)("p",null,"\u4f18\u5148\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," API\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u8fdb\u884c ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/next/packages/taro-runtime/src/bom/raf.ts"}),"polyfill"),"\u3002"),(0,n.kt)("h3",r({},{id:"cancelanimationframe"}),"cancelAnimationFrame"),(0,n.kt)("p",null,"\u4f18\u5148\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"cancelAnimationFrame")," API\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"clearTimeout")," \u4ee3\u66ff\u3002"))}f.isMDXComponent=!0}}]);