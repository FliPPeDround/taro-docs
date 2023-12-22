"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[61845],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=c(n),k=a,m=s["".concat(i,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(m,o(o({ref:e},p),{},{components:n})):r.createElement(m,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[s]="string"==typeof t?t:a,o[1]=u;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},91264:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(93106),a=n(4706),l={tabItem:"tabItem_FBI3"};function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function u({children:t,hidden:e,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l.tabItem,n)},{hidden:e}),t)}},8602:function(t,e,n){n.d(e,{Z:function(){return O}});var r=n(93106),a=n(4706),l=n(29369),o=n(27907),u=n(3111),i=n(65009),c=n(42615);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){return function(t){var e,n;return null!==(n=null===(e=r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===e?void 0:e.filter(Boolean))&&void 0!==n?n:[]}(t).map((({props:{value:t,label:e,attributes:n,default:r}})=>({value:t,label:e,attributes:n,default:r})))}function d(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=null!=e?e:s(n);return function(t){const e=(0,i.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function k({value:t,tabValues:e}){return e.some((e=>e.value===t))}function m({queryString:t=!1,groupId:e}){const n=(0,o.k6)(),a=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e}),l=(0,u._X)(a),i=(0,r.useCallback)((t=>{if(!a)return;const e=new URLSearchParams(n.location.search);e.set(a,t),n.replace(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){p(t,e,n[e])}))}return t}({},n.location,{search:e.toString()}))}),[a,n]);return[l,i]}function f(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,l=d(t),[o,u]=(0,r.useState)((()=>function({defaultValue:t,tabValues:e}){if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}var n;const r=null!==(n=e.find((t=>t.default)))&&void 0!==n?n:e[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:l}))),[i,p]=m({queryString:n,groupId:a}),[s,f]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[n,a]=(0,c.Nk)(e);return[n,(0,r.useCallback)((t=>{e&&a.set(t)}),[e,a])]}({groupId:a}),g=(()=>{const t=null!=i?i:s;return k({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!k({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);u(t),p(t),f(t)}),[p,f,l]),tabValues:l}}var g=n(81600),y={tabList:"tabList_qAna",tabItem:"tabItem_ulzt"};function h(){return h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},h.apply(this,arguments)}function b({className:t,block:e,selectedValue:n,selectValue:o,tabValues:u}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=t=>{const e=t.currentTarget,r=i.indexOf(e),a=u[r].value;a!==n&&(c(e),o(a))},s=t=>{let e=null;switch(t.key){case"Enter":p(t);break;case"ArrowRight":{const r=i.indexOf(t.currentTarget)+1;var n;e=null!==(n=i[r])&&void 0!==n?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(t.currentTarget)-1;var r;e=null!==(r=i[n])&&void 0!==r?r:i[i.length-1];break}}null==e||e.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":e},t)},u.map((({value:t,label:e,attributes:l})=>r.createElement("li",h({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:t=>i.push(t),onKeyDown:s,onClick:p},l,{className:(0,a.Z)("tabs__item",y.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===t})}),null!=e?e:t))))}function v({lazy:t,children:e,selectedValue:n}){const a=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function N(t){const e=f(t);return r.createElement("div",{className:(0,a.Z)("tabs-container",y.tabList)},r.createElement(b,h({},t,e)),r.createElement(v,h({},t,e)))}function O(t){const e=(0,g.Z)();return r.createElement(N,h({key:String(e)},t))}},23758:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});n(93106);var r=n(79874),a=n(8602),l=n(91264);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"OpenData",sidebar_label:"OpenData"},c=void 0,p={unversionedId:"components/open/open-data",id:"version-3.x/components/open/open-data",title:"OpenData",description:"Displays WeChat open data.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/open/open-data.md",sourceDirName:"components/open",slug:"/components/open/open-data",permalink:"/taro-docs/en/docs/3.x/components/open/open-data",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/open/open-data.md",tags:[],version:"3.x",frontMatter:{title:"OpenData",sidebar_label:"OpenData"},sidebar:"components",previous:{title:"OfficialAccount",permalink:"/taro-docs/en/docs/3.x/components/open/official-account"},next:{title:"WebView",permalink:"/taro-docs/en/docs/3.x/components/open/web-view"}},s={},d=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"OpenDataProps",id:"opendataprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"type",id:"type-1",level:3},{value:"lang",id:"lang",level:3},{value:"API Support",id:"api-support",level:2}],k={toc:d},m="wrapper";function f(t){var{components:e}=t,n=u(t,["components"]);return(0,r.kt)(m,o({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Displays WeChat open data."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/open-data.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<OpenDataProps>\n")),(0,r.kt)("h2",o({},{id:"examples"}),"Examples"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  render () {\n    return (\n      <OpenData type='userAvatarUrl'/>\n    )\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <open-data type="userAvatarUrl" />\n</template>\n')))),(0,r.kt)("h2",o({},{id:"opendataprops"}),"OpenDataProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"groupName" | "userNickName" | "userAvatarUrl" | "userGender" | "userCity" | "userProvince" | "userCountry" | "userLanguage"')),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"The type of the open data.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"openGid"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,'The ID of the group. It is valid when type="groupName".')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"lang"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"en" | "zh_CN" | "zh_TW"')),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"en"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,'Specifies the language used to display userInfo. It is valid when type="user*".')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"defaultText"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Default text when data is empty")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"defaultAvatar"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Default image when user avatar is empty, supports relative paths and network image paths.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onError"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<any>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the group name or user information is empty.")))),(0,r.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenDataProps.type"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenDataProps.openGid"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenDataProps.lang"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenDataProps.defaultText"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenDataProps.defaultAvatar"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenDataProps.onError"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",o({},{id:"type-1"}),"type"),(0,r.kt)("p",null,"type Valid values of type"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Value"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"groupName"),(0,r.kt)("td",null,"The name of the group")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userNickName"),(0,r.kt)("td",null,"The nickname of the user")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userAvatarUrl"),(0,r.kt)("td",null,"The profile photo of the user")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userGender"),(0,r.kt)("td",null,"The gender of the user")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userCity"),(0,r.kt)("td",null,"The city where the user is located")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userProvince"),(0,r.kt)("td",null,"The province where the user is located")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userCountry"),(0,r.kt)("td",null,"The country where the user is located")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userLanguage"),(0,r.kt)("td",null,"The language used by the user")))),(0,r.kt)("h3",o({},{id:"lang"}),"lang"),(0,r.kt)("p",null,"Valid values of lang"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Value"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"en"),(0,r.kt)("td",null,"English")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"zh_CN"),(0,r.kt)("td",null,"Simplified Chinese")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"zh_TW"),(0,r.kt)("td",null,"Traditional Chinese")))),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"OpenData"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))))}f.isMDXComponent=!0}}]);