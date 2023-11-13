"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[44909],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91264:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(93106),r=n(4706),l={tabItem:"tabItem_FBI3"};function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s({children:e,hidden:t,className:n}){return a.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l.tabItem,n)},{hidden:t}),e)}},8602:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(93106),r=n(4706),l=n(29369),o=n(27907),s=n(3111),i=n(65009),u=n(42615);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return function(e){var t,n;return null!==(n=null===(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d({value:e,tabValues:t}){return t.some((t=>t.value===e))}function h({queryString:e=!1,groupId:t}){const n=(0,o.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,s._X)(r),i=(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){c(e,t,n[t])}))}return e}({},n.location,{search:t.toString()}))}),[r,n]);return[l,i]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[o,s]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const a=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,c]=h({queryString:n,groupId:r}),[p,f]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,u.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),b=(()=>{const e=null!=i?i:p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var b=n(81600),v={tabList:"tabList_qAna",tabItem:"tabItem_ulzt"};function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function k({className:e,block:t,selectedValue:n,selectValue:o,tabValues:s}){const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),r=s[a].value;r!==n&&(u(t),o(r))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;var n;t=null!==(n=i[a])&&void 0!==n?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;var a;t=null!==(a=i[n])&&void 0!==a?a:i[i.length-1];break}}null==t||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},s.map((({value:e,label:t,attributes:l})=>a.createElement("li",g({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>i.push(e),onKeyDown:p,onClick:c},l,{className:(0,r.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function y({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=f(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},a.createElement(k,g({},e,t)),a.createElement(y,g({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(T,g({key:String(t)},e))}},32461:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});n(93106);var a=n(79874),r=n(8602),l=n(91264);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Rendering HTML"},u=void 0,c={unversionedId:"html",id:"html",title:"Rendering HTML",description:"Please note: All the contents of this section will only work on the mini program side.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/html.mdx",sourceDirName:".",slug:"/html",permalink:"/taro-docs/en/docs/next/html",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/html.mdx",tags:[],version:"current",frontMatter:{title:"Rendering HTML"},sidebar:"docs",previous:{title:"Compile configuration Details",permalink:"/taro-docs/en/docs/next/config-detail"},next:{title:"Using HTML Tags",permalink:"/taro-docs/en/docs/next/use-h5"}},p={},m=[{value:"Custom HTML styles",id:"custom-html-styles",level:2},{value:"\bHTML Escape",id:"html-escape",level:2},{value:"Binding events",id:"binding-events",level:2},{value:"Advanced Options",id:"advanced-options",level:2},{value:"skipElements",id:"skipelements",level:3},{value:"voidElements",id:"voidelements",level:3},{value:"closingElements",id:"closingelements",level:3},{value:"transformText",id:"transformtext",level:3},{value:"transformElement",id:"transformelement",level:3},{value:"Example:",id:"example",level:3}],d={toc:m},h="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(h,o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please note: All the contents of this section will only work on the mini program side.")),(0,a.kt)("p",null,"Taro can render HTML directly via ",(0,a.kt)("inlineCode",{parentName:"p"},"Element#innerHTML")," or Vue's ",(0,a.kt)("inlineCode",{parentName:"p"},"v-html")," or React/Nerv's ",(0,a.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML"),":"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),'function helloWorld() {\n  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n\n  return <View dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n'))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view v-html="html"></view>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n    }\n  }\n}\n<\/script>\n')))),(0,a.kt)("h2",o({},{id:"custom-html-styles"}),"Custom HTML styles"),(0,a.kt)("p",null,"Setting HTML directly will not make the HTML tags take on the browser's default style, Taro provides two built-in styles that we can introduce directly to take effect."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/taro/html.css"),": ",(0,a.kt)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/CSS2/sample.html"}),"W3C HTML4 built-in styles\n"),", Only HTML4 tag style, smaller size, high compatibility, can adapt to most cases."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@tarojs/taro/html5.css"),": ",(0,a.kt)("a",o({parentName:"li"},{href:"https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css"}),"Chrome(Blink) HTML5 built-in styles"),", Rich built-in styles, including most HTML5 tags, large size, not necessarily support all mini program containers.")),(0,a.kt)("p",null,"In order for the built-in tag styles to work, we also need to set the CSS class of the HTML container to ",(0,a.kt)("inlineCode",{parentName:"p"},".taro_html"),":"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),'import \'@tarojs/taro/html.css\'\n\nfunction helloWorld() {\n  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n\n  return <View className="taro_html" dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n'))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view v-html="html" class="taro_html"></view>\n</template>\n\n<script>\nimport \'@tarojs/taro/html.css\'\n\nexport default {\n  data () {\n    return {\n      html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n    }\n  }\n}\n<\/script>\n')))),(0,a.kt)("p",null,"Likewise, we can write our own CSS styles, and the class names of the HTML tags that Taro renders are consistent with the HTML tag names, for example, if we have a container CSS class named ",(0,a.kt)("inlineCode",{parentName:"p"},"my_css")," and we want to set the style of the ",(0,a.kt)("inlineCode",{parentName:"p"},"h1")," tag, then we do this"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-css"}),".my_css .h1 {\n  font-size: 30px;\n}\n")),(0,a.kt)("p",null,"You may prefer the default style of other browsers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css"}),"Firefox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://web.archive.org/web/20170122223926/https://www.iecss.com/"}),"Internet Explorer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css"}),"Safari/Chrome(Webkit)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://web.archive.org/web/20161031005401/https://www.iecss.com/opera-10.51.css"}),"Opera")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://www.w3.org/TR/html5/rendering.html"}),"W3C HTML5 Spec")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://github.com/necolas/normalize.css/blob/master/normalize.css"}),"normalize.css"))),(0,a.kt)("h2",o({},{id:"html-escape"}),"\bHTML Escape"),(0,a.kt)("p",null,"By default, Taro's HTML interface only accepts escaped HTML strings, and we recommend returning the escaped HTML directly on the server side."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://www.npmjs.com/package/he"}),"he"),": Larger size, but more relaxed open source protocol"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://www.npmjs.com/package/entities"}),"entities"),": Smaller size, but more stringent open source protocol")),(0,a.kt)("p",null,"You may need ",(0,a.kt)("inlineCode",{parentName:"p"},"transformText")," from ","[Advanced Options]","(#Advanced Options) in conjunction with HTML escaping for string rendering."),(0,a.kt)("h2",o({},{id:"binding-events"}),"Binding events"),(0,a.kt)("p",null,"For scoping and security reasons, Taro removes all events and JavaScript from the HTML string. But we still have a way to bind events to HTML:"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import '@tarojs/taro/html.css'\n\nfunction helloWorld() {\n  const html = `<h1 id=\"test\">Wallace is way taller than other reporters.</h1>`\n\n  useEffect(() => {\n    const el = document.getElementById('test')\n    function testOnTap (event) {\n      // do something\n      ...\n    }\n    el.addEventListener('tap', testOnTap)\n\n    return () => {\n      el.removeEventListener('tap', testOnTap)\n    }\n  }, [])\n\n  return <View className=\"taro_html\" dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html"}),"<template>\n  <view v-html=\"html\" class=\"taro_html\"></view>\n</template>\n\n<script>\nimport '@tarojs/taro/html.css'\n\nexport default {\n  data () {\n    return {\n      html: `<h1 id=\"test\">Wallace is way taller than other reporters.</h1>`\n    }\n  },\n  mounted () {\n    const el = document.getElementById('test')\n    el.addEventListener('tap', this.testOnTap)\n  },\n  testOnTap (event) {\n    // do something\n    ...\n  },\n  beforeDestroy () {\n    const el = document.getElementById('test')\n    el.removeEventListener('tap', this.testOnTap)\n  }\n}\n<\/script>\n")))),(0,a.kt)("p",null,"You may need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"transformElement")," in ","[Advanced Options]","(#Advanced Options) if the element to be dynamically bound to the event does not have an ID."),(0,a.kt)("h2",o({},{id:"advanced-options"}),"Advanced Options"),(0,a.kt)("p",null,"If the built-in functionality does not meet the needs or the rendering results are not as expected, Taro also provides advanced options for HTML rendering, which can be accessed via ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.options.html")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"import Taro from '@tarojs/taro'\n\n// Do not parse the contents of the souce tag\nTaro.options.html.skipElements.add('source')\n")),(0,a.kt)("h3",o({},{id:"skipelements"}),"skipElements"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,a.kt)("p",null,"Default Value: ",(0,a.kt)("inlineCode",{parentName:"p"},"new Set(['style', 'script'])")),(0,a.kt)("p",null,"HTML tags contained in the HashSet will not be parsed."),(0,a.kt)("h3",o({},{id:"voidelements"}),"voidElements"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,a.kt)("p",null,"Default Value: ",(0,a.kt)("inlineCode",{parentName:"p"},"new Set([\n  '!doctype', 'area', 'base', 'br', 'col', 'command',\n  'embed', 'hr', 'img', 'input', 'keygen', 'link',\n  'meta', 'param', 'source', 'track', 'wbr'\n])")),(0,a.kt)("p",null,"HTML tags contained in a HashSet do not require closure tags, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"<img />"),"."),(0,a.kt)("h3",o({},{id:"closingelements"}),"closingElements"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,a.kt)("p",null,"Default Value: ",(0,a.kt)("inlineCode",{parentName:"p"},"new Set([\n  'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',\n  'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'\n])")),(0,a.kt)("p",null,"HTML tags contained in a HashSet can be automatically closed and cannot be nested."),(0,a.kt)("h3",o({},{id:"transformtext"}),"transformText"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"(taroText: TaroText, text: Text) => TaroText")),(0,a.kt)("p",null,"Default Value: ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"The first argument to this function takes the value of ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/text.ts#L5"}),"TaroText"),", which is processed by Taro by default, the second argument is ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L33-L36"}),"Text"),", which is parsed by the HTML parser, and the final ",(0,a.kt)("inlineCode",{parentName:"p"},"TaroText")," object returned is involved in the rendering of the string in HTML."),(0,a.kt)("h3",o({},{id:"transformelement"}),"transformElement"),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"(taroElement: TaroElement, element: Element) => TaroElement")),(0,a.kt)("p",null,"Default Value: ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"The first parameter of this function takes the value of ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/element.ts#L15"}),"TaroElement")," processed by Taro by default, the second parameter is the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L38-L43"}),"Element")," parsed by the HTML parser, and the last returned ",(0,a.kt)("inlineCode",{parentName:"p"},"TaroElement")," object participates in the HTML element rendering."),(0,a.kt)("h3",o({},{id:"example"}),"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Adding the aotu class to all img tags\nTaro.options.html.transformElement = (el) => {\n  if (el.nodeName === 'image') {\n    el.setAttribute('class', 'aotu')\n  }\n  return el\n}\n")))}f.isMDXComponent=!0}}]);