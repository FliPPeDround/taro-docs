"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[96264],{79874:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=c(t,["components","mdxType","originalType","parentName"]),u=p(n),s=r,g=u["".concat(o,".").concat(s)]||u[s]||d[s]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17760:function(t,e,n){n.d(e,{Z:function(){return c}});var a=n(93106),r=n(4706),l="tabItem_HvW6";function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function c({children:t,hidden:e,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:e}),t)}},47695:function(t,e,n){n.d(e,{Z:function(){return O}});var a=n(93106),r=n(4706),l=n(24767),i=n(24755),c=n(85645),o=n(86082),p=n(55245);function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){return function(t){return a.Children.map(t,(t=>{if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((({props:{value:t,label:e,attributes:n,default:a}})=>({value:t,label:e,attributes:n,default:a})))}function u(t){const{values:e,children:n}=t;return(0,a.useMemo)((()=>{const t=null!=e?e:d(n);return function(t){const e=(0,o.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function s({value:t,tabValues:e}){return e.some((e=>e.value===t))}function g({queryString:t=!1,groupId:e}){const n=(0,i.k6)(),r=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e}),l=(0,c._X)(r),o=(0,a.useCallback)((t=>{if(!r)return;const e=new URLSearchParams(n.location.search);e.set(r,t),n.replace(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){m(t,e,n[e])}))}return t}({},n.location,{search:e.toString()}))}),[r,n]);return[l,o]}function k(t){const{defaultValue:e,queryString:n=!1,groupId:r}=t,l=u(t),[i,c]=(0,a.useState)((()=>function({defaultValue:t,tabValues:e}){if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!s({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}var n;const a=null!==(n=e.find((t=>t.default)))&&void 0!==n?n:e[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[o,m]=g({queryString:n,groupId:r}),[d,k]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[n,r]=(0,p.Nk)(e);return[n,(0,a.useCallback)((t=>{e&&r.set(t)}),[e,r])]}({groupId:r}),N=(()=>{const t=null!=o?o:d;return s({value:t,tabValues:l})?t:null})();(0,a.useLayoutEffect)((()=>{N&&c(N)}),[N]);return{selectedValue:i,selectValue:(0,a.useCallback)((t=>{if(!s({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);c(t),m(t),k(t)}),[m,k,l]),tabValues:l}}var N=n(12722),f="tabList_OEKz",b="tabItem_FehW";function h(){return h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},h.apply(this,arguments)}function v({className:t,block:e,selectedValue:n,selectValue:i,tabValues:c}){const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=t=>{const e=t.currentTarget,a=o.indexOf(e),r=c[a].value;r!==n&&(p(e),i(r))},d=t=>{let e=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":{const a=o.indexOf(t.currentTarget)+1;var n;e=null!==(n=o[a])&&void 0!==n?n:o[0];break}case"ArrowLeft":{const n=o.indexOf(t.currentTarget)-1;var a;e=null!==(a=o[n])&&void 0!==a?a:o[o.length-1];break}}null==e||e.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":e},t)},c.map((({value:t,label:e,attributes:l})=>a.createElement("li",h({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:t=>o.push(t),onKeyDown:d,onClick:m},l,{className:(0,r.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":n===t})}),null!=e?e:t))))}function y({lazy:t,children:e,selectedValue:n}){if(e=Array.isArray(e)?e:[e],t){const t=e.find((t=>t.props.value===n));return t?(0,a.cloneElement)(t,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},e.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function w(t){const e=k(t);return a.createElement("div",{className:(0,r.Z)("tabs-container",f)},a.createElement(v,h({},t,e)),a.createElement(y,h({},t,e)))}function O(t){const e=(0,N.Z)();return a.createElement(w,h({key:String(e)},t))}},66997:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});n(93106);var a=n(79874),r=n(47695),l=n(17760);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"Switch",sidebar_label:"Switch"},p=void 0,m={unversionedId:"components/forms/switch",id:"components/forms/switch",title:"Switch",description:"\u5f00\u5173\u9009\u62e9\u5668",source:"@site/docs/components/forms/switch.md",sourceDirName:"components/forms",slug:"/components/forms/switch",permalink:"/taro-docs/docs/next/components/forms/switch",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/forms/switch.md",tags:[],version:"current",frontMatter:{title:"Switch",sidebar_label:"Switch"},sidebar:"components",previous:{title:"Slider",permalink:"/taro-docs/docs/next/components/forms/slider"},next:{title:"Textarea",permalink:"/taro-docs/docs/next/components/forms/textarea"}},d={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"SwitchProps",id:"switchprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail",level:3}],s={toc:u};function g(t){var{components:e}=t,o=c(t,["components"]);return(0,a.kt)("wrapper",i({},s,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f00\u5173\u9009\u62e9\u5668"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(50154).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(88789).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(75629).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:n(47067).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:n(45225).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/switch.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",i({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"ComponentType<SwitchProps>\n")),(0,a.kt)("h2",i({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>\u9ed8\u8ba4\u6837\u5f0f</Text>\n        <Switch checked/>\n        <Switch/>\n        <Text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</Text>\n        <Switch checked/>\n        <Switch/>\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class=\'components-page\'>\n    <text>\u9ed8\u8ba4\u6837\u5f0f</text>\n    <switch :checked="true" />\n    <switch />\n    <text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</text>\n    <switch :checked="true" />\n    <switch />\n  </view>\n</template>\n')))),(0,a.kt)("h2",i({},{id:"switchprops"}),"SwitchProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"checked"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u662f\u5426\u9009\u4e2d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"disabled"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u662f\u5426\u7981\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),'"switch" or "checkbox"'),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},'"switch"')),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u6837\u5f0f\uff0c\u6709\u6548\u503c\uff1aswitch, checkbox")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"color"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},'"#04BE02"')),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"switch \u7684\u989c\u8272\uff0c\u540c css \u7684 color")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"nativeProps"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, unknown>")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u7528\u4e8e\u900f\u4f20 ",(0,a.kt)("inlineCode",{parentName:"td"},"WebComponents")," \u4e0a\u7684\u5c5e\u6027\u5230\u5185\u90e8 H5 \u6807\u7b7e\u4e0a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u7ec4\u4ef6\u540d\u5b57\uff0c\u7528\u4e8e\u8868\u5355\u63d0\u4ea4\u83b7\u53d6\u6570\u636e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"controlled"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u662f\u5426\u4e3a\u53d7\u63a7\u7ec4\u4ef6\uff0c\u4e3a true \u65f6\uff0cchecked \u4f1a\u5b8c\u5168\u53d7 setData \u63a7\u5236\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"ariaLabel"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u65e0\u969c\u788d\u8bbf\u95ee\uff0c\uff08\u5c5e\u6027\uff09\u5143\u7d20\u7684\u989d\u5916\u63cf\u8ff0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"onChange"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onChangeEventDetail>")),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"checked \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6")))),(0,a.kt)("h3",i({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"SwitchProps.checked"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"SwitchProps.disabled"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"SwitchProps.type"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"SwitchProps.color"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"SwitchProps.nativeProps"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"SwitchProps.name"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"SwitchProps.controlled"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"SwitchProps.ariaLabel"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"SwitchProps.onChange"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"})),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",i({},{id:"onchangeeventdetail"}),"onChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"value"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))))))}g.isMDXComponent=!0},88789:function(t,e,n){e.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},80068:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},45225:function(t,e,n){e.Z=n.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},47067:function(t,e,n){e.Z=n.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},96636:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},50154:function(t,e,n){e.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},75629:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},88421:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);