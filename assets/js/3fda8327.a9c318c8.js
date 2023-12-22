"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[76901],{79874:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return g}});var n=a(93106);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=o(a),f=r,g=k["".concat(d,".").concat(f)]||k[f]||N[f]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=f;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},87123:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});a(93106);var n=a(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={title:"Reconciler"},p=void 0,d={unversionedId:"platform-plugin/reconciler",id:"version-4.x/platform-plugin/reconciler",title:"Reconciler",description:"Taro \u7684\u8fd0\u884c\u65f6\u5305\u62ec DOM\u3001BOM\u3001React \u517c\u5bb9\u5c42\u3001Vue \u517c\u5bb9\u5c42\u7b49\u5185\u5bb9\uff0c\u800c\u4e0d\u540c\u7684\u7aef\u5e73\u53f0\u6216\u5f00\u53d1\u6846\u67b6\u90fd\u6709\u53ef\u80fd\u9700\u8981\u5bf9 Taro \u8fd0\u884c\u65f6\u8fdb\u884c\u4fb5\u5165\u5b9a\u5236\u3002",source:"@site/versioned_docs/version-4.x/platform-plugin/reconciler.md",sourceDirName:"platform-plugin",slug:"/platform-plugin/reconciler",permalink:"/taro-docs/docs/platform-plugin/reconciler",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/platform-plugin/reconciler.md",tags:[],version:"4.x",frontMatter:{title:"Reconciler"},sidebar:"docs",previous:{title:"TaroPlatformBase",permalink:"/taro-docs/docs/platform-plugin/platform-mini"},next:{title:"\u6a21\u677f",permalink:"/taro-docs/docs/platform-plugin/template"}},o={},m=[{value:"hostConfig \u914d\u7f6e",id:"hostconfig-\u914d\u7f6e",level:2},{value:"appendChild (parent, child)",id:"appendchild-parent-child",level:3},{value:"removeChild (parent, child, oldChild)",id:"removechild-parent-child-oldchild",level:3},{value:"insertBefore (parent, child, refChild)",id:"insertbefore-parent-child-refchild",level:3},{value:"removeAttribute (element, qualifiedName)",id:"removeattribute-element-qualifiedname",level:3},{value:"setAttribute (element, qualifiedName, value)",id:"setattribute-element-qualifiedname-value",level:3},{value:"prepareUpdateData (data, page)",id:"prepareupdatedata-data-page",level:3},{value:"appendInitialPage (data, page)",id:"appendinitialpage-data-page",level:3},{value:"getLifecyle (instance, lifecyle)",id:"getlifecyle-instance-lifecyle",level:3},{value:"onTaroElementCreate (tagName, nodeType)",id:"ontaroelementcreate-tagname-nodetype",level:3},{value:"getPathIndex (indexOfNode)",id:"getpathindex-indexofnode",level:3},{value:"getEventCenter(Events)",id:"geteventcenterevents",level:3},{value:"initNativeApi (taro)",id:"initnativeapi-taro",level:3}],k={toc:m},N="wrapper";function f(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)(N,r({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Taro \u7684\u8fd0\u884c\u65f6\u5305\u62ec DOM\u3001BOM\u3001React \u517c\u5bb9\u5c42\u3001Vue \u517c\u5bb9\u5c42\u7b49\u5185\u5bb9\uff0c\u800c\u4e0d\u540c\u7684\u7aef\u5e73\u53f0\u6216\u5f00\u53d1\u6846\u67b6\u90fd\u6709\u53ef\u80fd\u9700\u8981\u5bf9 Taro \u8fd0\u884c\u65f6\u8fdb\u884c\u4fb5\u5165\u5b9a\u5236\u3002"),(0,n.kt)("p",null,"\u4e3a\u4e86\u89e3\u8026\uff0c\u6211\u4eec\u53c2\u8003\u4e86 ",(0,n.kt)("strong",{parentName:"p"},"React Reconciler")," \u7684\u6982\u5ff5\uff0c\u5916\u90e8\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"hostConfig")," \u914d\u7f6e\u5bf9\u8c61\uff0c\u5bf9\u8fd0\u884c\u65f6\u8fdb\u884c\u5b9a\u5236\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u9047\u5230 hostConfig \u7684\u914d\u7f6e\u9879\u4e0d\u6ee1\u8db3\u9700\u6c42\uff0c\u9700\u8981\u8fdb\u884c\u6269\u5c55\u65f6\uff0c\u53ef\u4ee5\u7ed9 Taro \u63d0\u4ea4 PR \uff5e")),(0,n.kt)("h2",r({},{id:"hostconfig-\u914d\u7f6e"}),"hostConfig \u914d\u7f6e"),(0,n.kt)("h3",r({},{id:"appendchild-parent-child"}),"appendChild (parent, child)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"DOMNode")," \u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"appendChild")," \u65b9\u6cd5\u65f6\u89e6\u53d1\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"parent"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u7236\u8282\u70b9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"child"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8981\u7ed9\u7236\u8282\u70b9\u8ffd\u52a0\u7684\u8282\u70b9")))),(0,n.kt)("h3",r({},{id:"removechild-parent-child-oldchild"}),"removeChild (parent, child, oldChild)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"DOMNode")," \u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"replaceChild")," \u65b9\u6cd5\u65f6\u89e6\u53d1\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"parent"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u7236\u8282\u70b9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"child"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u7528\u6765\u66ff\u6362 oldChild \u7684\u65b0\u8282\u70b9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"oldChild"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u88ab\u66ff\u6362\u6389\u7684\u539f\u59cb\u8282\u70b9")))),(0,n.kt)("h3",r({},{id:"insertbefore-parent-child-refchild"}),"insertBefore (parent, child, refChild)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"DOMNode")," \u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"insertBefore")," \u65b9\u6cd5\u65f6\u89e6\u53d1\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"parent"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u7236\u8282\u70b9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"child"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u7528\u4e8e\u63d2\u5165\u7684\u8282\u70b9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"refChild"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5c06\u8981\u63d2\u5728\u8fd9\u4e2a\u8282\u70b9\u4e4b\u524d")))),(0,n.kt)("h3",r({},{id:"removeattribute-element-qualifiedname"}),"removeAttribute (element, qualifiedName)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"DOMElement")," \u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"removeAttribute")," \u65b9\u6cd5\u65f6\u89e6\u53d1\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"element"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u64cd\u4f5c\u5143\u7d20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"qualifiedName"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u6307\u5b9a\u8981\u4ece\u5143\u7d20\u4e2d\u79fb\u9664\u7684\u5c5e\u6027\u7684\u540d\u79f0")))),(0,n.kt)("h3",r({},{id:"setattribute-element-qualifiedname-value"}),"setAttribute (element, qualifiedName, value)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"DOMElement")," \u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"setAttribute")," \u65b9\u6cd5\u65f6\u89e6\u53d1\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"element"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOMElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u64cd\u4f5c\u5143\u7d20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"qualifiedName"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u8868\u793a\u5c5e\u6027\u540d\u79f0\u7684\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"value"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u7684\u503c/\u65b0\u503c")))),(0,n.kt)("h3",r({},{id:"prepareupdatedata-data-page"}),"prepareUpdateData (data, page)"),(0,n.kt)("p",null,"\u6bcf\u6b21 Taro DOM \u6811\u66f4\u65b0\uff0c\u8c03\u7528\u5c0f\u7a0b\u5e8f ",(0,n.kt)("inlineCode",{parentName:"p"},"setData")," \u524d\u89e6\u53d1\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"data"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DataTree"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5c06\u8981 setData \u7684 Taro DOM \u6811\u6570\u636e\u7ed3\u6784")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"page"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"TaroRootElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u9875\u9762\u6839\u5143\u7d20")))),(0,n.kt)("h3",r({},{id:"appendinitialpage-data-page"}),"appendInitialPage (data, page)"),(0,n.kt)("p",null,"Taro DOM \u6811\u521d\u59cb\u5316\uff0c\u7b2c\u4e00\u6b21\u8c03\u7528\u5c0f\u7a0b\u5e8f ",(0,n.kt)("inlineCode",{parentName:"p"},"setData")," \u524d\u89e6\u53d1\u3002\u5728\u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"prepareUpdateData")," \u540e\u7acb\u523b\u6267\u884c\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"data"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DataTree"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5c06\u8981 setData \u7684 Taro DOM \u6811\u6570\u636e\u7ed3\u6784")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"page"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"TaroRootElement"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u9875\u9762\u6839\u5143\u7d20")))),(0,n.kt)("h3",r({},{id:"getlifecyle-instance-lifecyle"}),"getLifecyle (instance, lifecyle)"),(0,n.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u9875\u9762\u7684\u751f\u547d\u5468\u671f\u88ab\u89e6\u53d1\u65f6\u8c03\u7528\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"instance"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Instance"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u7528\u6237\u7f16\u5199\u7684\u9875\u9762\u5b9e\u4f8b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"lifecyle"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5c0f\u7a0b\u5e8f\u9875\u9762\u88ab\u89e6\u53d1\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u540d\u79f0")))),(0,n.kt)("p",null,"\u9700\u8981\u8fd4\u56de ",(0,n.kt)("strong",{parentName:"p"},"function")," \u6216 ",(0,n.kt)("strong",{parentName:"p"},"function[]"),"\uff0c\u8868\u793a\u5c06\u8981\u6267\u884c\u7684\u51fd\u6570\u3002"),(0,n.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// \u9ed8\u8ba4\u503c\uff1a\n// \u76f4\u63a5\u53d6\u7528\u6237\u7f16\u5199\u7684\u9875\u9762\u5b9e\u4f8b\u4e2d\uff0c\u5bf9\u5e94\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\ngetLifecyle (instance, lifecyle) {\n  return instance[lifecyle]\n}\n\n// \u5728 React \u4e2d\uff0c\n// \u5c0f\u7a0b\u5e8f\u89e6\u53d1 onShow\uff0c\u8c03\u7528\u7528\u6237\u7f16\u5199\u7684 componentDidShow\n// \u5c0f\u7a0b\u5e8f\u89e6\u53d1 onHide\uff0c\u8c03\u7528\u7528\u6237\u7f16\u5199\u7684 componentDidHide\ngetLifecyle (instance, lifecycle) {\n  if (lifecycle === 'onShow') {\n    lifecycle = 'componentDidShow'\n  } else if (lifecycle === 'onHide') {\n    lifecycle = 'componentDidHide'\n  }\n  return instance[lifecycle]\n}\n")),(0,n.kt)("h3",r({},{id:"ontaroelementcreate-tagname-nodetype"}),"onTaroElementCreate (tagName, nodeType)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"DOMElement")," \u6784\u9020\u65f6\u89e6\u53d1\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"tagName"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u521b\u5efa\u7684\u5143\u7d20\u7684\u6807\u7b7e\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"nodeType"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"NodeType"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u521b\u5efa\u7684\u5143\u7d20\u7684\u8282\u70b9\u7c7b\u578b")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"nodeType"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"1"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"ELEMENT_NODE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"2"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"ATTRIBUTE_NODE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"3"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"TEXT_NODE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"4"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"CDATA_SECTION_NODE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"5"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"ENTITY_REFERENCE_NODE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"6"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"COMMENT_NODE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"7"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"PROCESSING_INSTRUCTION_NODE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"9"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"DOCUMENT_NODE")))),(0,n.kt)("h3",r({},{id:"getpathindex-indexofnode"}),"getPathIndex (indexOfNode)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"DOMNode")," \u83b7\u53d6 ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," \u5c5e\u6027\u65f6\u89e6\u53d1\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"indexOfNode"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u8282\u70b9\u5728\u7236\u8282\u70b9 children \u5217\u8868\u4e2d\u7684\u4e0b\u6807")))),(0,n.kt)("p",null,"\u9700\u8981\u8fd4\u56de\u4e00\u4e2a ",(0,n.kt)("strong",{parentName:"p"},"string")," \u503c\uff0c\u4ee3\u8868\u5c0f\u7a0b\u5e8f\u6309\u8def\u5f84 ",(0,n.kt)("inlineCode",{parentName:"p"},"setData")," \u65f6\u7684\u6570\u7ec4\u4e0b\u6807\u3002"),(0,n.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// \u9ed8\u8ba4\u503c\uff1a\ngetPathIndex (indexOfNode) {\n  return `[${indexOfNode}]`\n}\n\n// \u767e\u5ea6\u5c0f\u7a0b\u5e8f\u4e0d\u9700\u8981 [] \u5305\u88f9\ngetPathIndex (indexOfNode) {\n  return indexOfNode\n}\n")),(0,n.kt)("h3",r({},{id:"geteventcenterevents"}),"getEventCenter(Events)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Taro.eventCenter")," \u521d\u59cb\u5316\u503c\u65f6\u89e6\u53d1\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Events"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Taro \u4e8b\u4ef6\u4e2d\u5fc3\u7684\u6784\u9020\u51fd\u6570")))),(0,n.kt)("p",null,"\u9700\u8981\u8fd4\u56de Taro \u4e8b\u4ef6\u4e2d\u5fc3\u7684\u5b9e\u4f8b\uff0c\u5176\u5c06\u4f1a\u88ab\u8d4b\u503c\u7ed9 ",(0,n.kt)("inlineCode",{parentName:"p"},"Taro.eventCenter"),"\u3002"),(0,n.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// \u9ed8\u8ba4\u503c\uff1a\ngetEventCenter (Events) {\n  return new Events()\n}\n\n// \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\n// \u4f18\u5148\u4ece\u5c0f\u7a0b\u5e8f\u5168\u5c40\u5bf9\u8c61 my \u4e2d\u53d6\u51fa\u521b\u5efa\u8fc7\u7684\u4e8b\u4ef6\u4e2d\u5fc3\u5b9e\u4f8b\uff0c\u907f\u514d\u5206\u5305\u65f6\u51fa\u73b0\u95ee\u9898\u3002\ngetEventCenter (Events) {\n  if (!my.taroEventCenter) {\n    my.taroEventCenter = new Events()\n  }\n  return my.taroEventCenter\n}\n")),(0,n.kt)("h3",r({},{id:"initnativeapi-taro"}),"initNativeApi (taro)"),(0,n.kt)("p",null,"\u5f15\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u5305\u65f6\u89e6\u53d1\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"taro"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"})),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Taro \u5bf9\u8c61")))),(0,n.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"initNativeApi (taro) {\n  // \u4e3a Taro \u5bf9\u8c61\u589e\u52a0 getApp \u65b9\u6cd5\n  taro.getApp = getApp\n}\n")))}f.isMDXComponent=!0}}]);