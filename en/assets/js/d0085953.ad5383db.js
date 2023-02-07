"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[31209],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17760:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(93106),a=r(4706),o="tabItem_HvW6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function u({children:e,hidden:t,className:r}){return n.createElement("div",l({role:"tabpanel",className:(0,a.Z)(o,r)},{hidden:t}),e)}},47695:function(e,t,r){r.d(t,{Z:function(){return N}});var n=r(93106),a=r(4706),o=r(24767),l=r(24755),u=r(85645),i=r(86082),c=r(55245);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d({value:e,tabValues:t}){return t.some((t=>t.value===e))}function b({queryString:e=!1,groupId:t}){const r=(0,l.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,u._X)(a),i=(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},r.location,{search:t.toString()}))}),[a,r]);return[o,i]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[l,u]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,s]=b({queryString:r,groupId:a}),[p,v]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,c.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),f=(()=>{const e=null!=i?i:p;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),v(e)}),[s,v,o]),tabValues:o}}var f=r(12722),h="tabList_OEKz",y="tabItem_FehW";function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}function k({className:e,block:t,selectedValue:r,selectValue:l,tabValues:u}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),s=e=>{const t=e.currentTarget,n=i.indexOf(t),a=u[n].value;a!==r&&(c(t),l(a))},p=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;var r;t=null!==(r=i[n])&&void 0!==r?r:i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;var n;t=null!==(n=i[r])&&void 0!==n?n:i[i.length-1];break}}null==t||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},u.map((({value:e,label:t,attributes:o})=>n.createElement("li",g({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>i.push(e),onKeyDown:p,onClick:s},o,{className:(0,a.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function w({lazy:e,children:t,selectedValue:r}){if(t=Array.isArray(t)?t:[t],e){const e=t.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},t.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function O(e){const t=v(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",h)},n.createElement(k,g({},e,t)),n.createElement(w,g({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(O,g({key:String(t)},e))}},77974:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});r(93106);var n=r(79874),a=r(47695),o=r(17760);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"MovableArea",sidebar_label:"MovableArea"},c=void 0,s={unversionedId:"components/viewContainer/movable-area",id:"components/viewContainer/movable-area",title:"MovableArea",description:"A movable area of the movable-view component.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/viewContainer/movable-area.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/movable-area",permalink:"/taro-docs/en/docs/next/components/viewContainer/movable-area",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/viewContainer/movable-area.md",tags:[],version:"current",frontMatter:{title:"MovableArea",sidebar_label:"MovableArea"},sidebar:"components",previous:{title:"MatchMedia",permalink:"/taro-docs/en/docs/next/components/viewContainer/match-media"},next:{title:"MovableView",permalink:"/taro-docs/en/docs/next/components/viewContainer/movable-view"}},p={},m=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"MovableAreaProps",id:"movableareaprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"API Support",id:"api-support",level:2}],d={toc:m};function b(e){var{components:t}=e,r=u(e,["components"]);return(0,n.kt)("wrapper",l({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A movable area of the movable-view component."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/movable-area.html"}),"Reference"))),(0,n.kt)("h2",l({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"ComponentType<MovableAreaProps>\n")),(0,n.kt)("h2",l({},{id:"examples"}),"Examples"),(0,n.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    return (\n      <MovableArea style='height: 200px; width: 200px; background: red;'>\n        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'>The meaning of travel</MovableView>\n      </MovableArea>\n    )\n  }\n}\n"))),(0,n.kt)(o.Z,{value:"Vue",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-html"}),"  <movable-area style='height: 200px; width: 200px; background: red;'>\n    <movable-view style='height: 50px; width: 50px; background: blue;' direction='all'>On the road</movable-view>\n  </movable-area>\n")))),(0,n.kt)("h2",l({},{id:"movableareaprops"}),"MovableAreaProps"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Default"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"scaleArea"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},(0,n.kt)("code",null,"false")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"When the movable-view inside is set to support two-finger zoom, setting this value modifies the area where the zoom gesture takes effect to the entire movable-area.")))),(0,n.kt)("h3",l({},{id:"property-support"}),"Property Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"Property"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"MovableAreaProps.scaleArea"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h2",l({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"MovableArea"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}b.isMDXComponent=!0}}]);