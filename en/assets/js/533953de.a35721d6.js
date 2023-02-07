"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[99975],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return p}});var r=n(93106);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=r.createContext({}),d=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),k=d(n),p=l,g=k["".concat(i,".").concat(p)]||k[p]||s[p]||a;return n?r.createElement(g,o(o({ref:e},c),{},{components:n})):r.createElement(g,o({ref:e},c))}));function p(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=k;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:l,o[1]=u;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},17760:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(93106),l=n(4706),a="tabItem_HvW6";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function u({children:t,hidden:e,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,l.Z)(a,n)},{hidden:e}),t)}},47695:function(t,e,n){n.d(e,{Z:function(){return T}});var r=n(93106),l=n(4706),a=n(24767),o=n(24755),u=n(85645),i=n(86082),d=n(55245);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){return function(t){return r.Children.map(t,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((({props:{value:t,label:e,attributes:n,default:r}})=>({value:t,label:e,attributes:n,default:r})))}function k(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=null!=e?e:s(n);return function(t){const e=(0,i.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function p({value:t,tabValues:e}){return e.some((e=>e.value===t))}function g({queryString:t=!1,groupId:e}){const n=(0,o.k6)(),l=function({queryString:t=!1,groupId:e}){if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!e)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=e?e:null}({queryString:t,groupId:e}),a=(0,u._X)(l),i=(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){c(t,e,n[e])}))}return t}({},n.location,{search:e.toString()}))}),[l,n]);return[a,i]}function m(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,a=k(t),[o,u]=(0,r.useState)((()=>function({defaultValue:t,tabValues:e}){if(0===e.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:e}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${e.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}var n;const r=null!==(n=e.find((t=>t.default)))&&void 0!==n?n:e[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:a}))),[i,c]=g({queryString:n,groupId:l}),[s,m]=function({groupId:t}){const e=function(t){return t?`docusaurus.tab.${t}`:null}(t),[n,l]=(0,d.Nk)(e);return[n,(0,r.useCallback)((t=>{e&&l.set(t)}),[e,l])]}({groupId:l}),h=(()=>{const t=null!=i?i:s;return p({value:t,tabValues:a})?t:null})();(0,r.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!p({value:t,tabValues:a}))throw new Error(`Can't select invalid tab value=${t}`);u(t),c(t),m(t)}),[c,m,a]),tabValues:a}}var h=n(12722),f="tabList_OEKz",b="tabItem_FehW";function y(){return y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y.apply(this,arguments)}function N({className:t,block:e,selectedValue:n,selectValue:o,tabValues:u}){const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=t=>{const e=t.currentTarget,r=i.indexOf(e),l=u[r].value;l!==n&&(d(e),o(l))},s=t=>{let e=null;switch(t.key){case"Enter":c(t);break;case"ArrowRight":{const r=i.indexOf(t.currentTarget)+1;var n;e=null!==(n=i[r])&&void 0!==n?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(t.currentTarget)-1;var r;e=null!==(r=i[n])&&void 0!==r?r:i[i.length-1];break}}null==e||e.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":e},t)},u.map((({value:t,label:e,attributes:a})=>r.createElement("li",y({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:t=>i.push(t),onKeyDown:s,onClick:c},a,{className:(0,l.Z)("tabs__item",b,null==a?void 0:a.className,{"tabs__item--active":n===t})}),null!=e?e:t))))}function v({lazy:t,children:e,selectedValue:n}){if(e=Array.isArray(e)?e:[e],t){const t=e.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},e.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function x(t){const e=m(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(N,y({},t,e)),r.createElement(v,y({},t,e)))}function T(t){const e=(0,h.Z)();return r.createElement(x,y({key:String(e)},t))}},56484:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return k}});n(93106);var r=n(79874),l=n(47695),a=n(17760);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const i={title:"Textarea",sidebar_label:"Textarea"},d=void 0,c={unversionedId:"components/forms/textarea",id:"components/forms/textarea",title:"Textarea",description:"Multi-line input box. This component is a Native Component. Note related limits before use.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/forms/textarea.md",sourceDirName:"components/forms",slug:"/components/forms/textarea",permalink:"/taro-docs/en/docs/next/components/forms/textarea",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/forms/textarea.md",tags:[],version:"current",frontMatter:{title:"Textarea",sidebar_label:"Textarea"},sidebar:"components",previous:{title:"Switch",permalink:"/taro-docs/en/docs/next/components/forms/switch"},next:{title:"FunctionalPageNavigator",permalink:"/taro-docs/en/docs/next/components/navig/Functional-Page-Navigator"}},s={},k=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"TextareaProps",id:"textareaprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"onFocusEventDetail",id:"onfocuseventdetail",level:3},{value:"onBlurEventDetail",id:"onblureventdetail",level:3},{value:"onLineChangeEventDetail",id:"onlinechangeeventdetail",level:3},{value:"onInputEventDetail",id:"oninputeventdetail",level:3},{value:"onConfirmEventDetail",id:"onconfirmeventdetail",level:3},{value:"onKeyboardHeightChangeEventDetail",id:"onkeyboardheightchangeeventdetail",level:3},{value:"API Support",id:"api-support",level:2}],p={toc:k};function g(t){var{components:e}=t,n=u(t,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Multi-line input box. This component is a Native Component. Note related limits before use."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/textarea.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<TextareaProps>\n")),(0,r.kt)("h2",o({},{id:"examples"}),"Examples"),(0,r.kt)(l.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>Height-adaptive input area with no scroll bars</Text>\n        <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight/>\n        <Text>This is a textarea that can be autofocused</Text>\n        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus/>\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <text>Height-adaptive input area with no scroll bars</text>\n    <textarea style="background:#efefef;width:100%;min-height:80px;padding:0 30rpx;" :auto-height="true" />\n    <text>This is a textarea that can be autofocused</text>\n    <textarea style="background:#efefef;width:100%;height:80px;padding:0 30rpx;" :auto-focusd="true" />\n  </view>\n</template>\n')))),(0,r.kt)("h2",o({},{id:"textareaprops"}),"TextareaProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"The content in the input box")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"placeholder"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The placeholder used when the input box is empty")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"placeholderStyle"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies the style of the placeholder.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"placeholderClass"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"textarea-placeholder"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies the style class of the placeholder.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"disabled"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to disable the component.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"maxlength"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"140")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,'The maximum length. When it is set to "-1", the maximum length is not limited.')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"autoFocus"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Auto focus. The keyboard is automatically displayed.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"focus"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Gets focus")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"autoHeight"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether the height automatically increases. If this property is specified, style.height does not take effect.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fixed"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"If the textarea is in an area of ",(0,r.kt)("code",null,"position:fixed"),", the value of the specified property should always be true.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cursorSpacing"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"0")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies the distance between the cursor and the keyboard. It is either the distance between textarea and the bottom of the screen or the distance specified via cursor-spacing, whichever is smaller.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cursor"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"-1")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies the cursor position during focusing.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"showConfirmBar"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"true")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to display the bar containing the Done button above the keyboard")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"selectionStart"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"-1")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The start position of the cursor. It takes effect only during auto focusing, and needs to used with selectionEnd.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"selectionEnd"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"-1")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The end position of the cursor. It takes effect only during auto focusing, and needs to used with selectionStart.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"adjustPosition"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"true")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to automatically push up the page when the keyboard is displayed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"holdKeyboard"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to hide the keyboard when the page is clicked when focused")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"disableDefaultPadding"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to remove the default inner margins under iOS")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onFocus"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onFocusEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the input box is focused. event.detail = ","{value, height}",", where height is the height of the keyboard.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onBlur"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onBlurEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the input box is unfocused.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onLineChange"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onLineChangeEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Called when the number of lines in the input box changes, event.detail = ","{height: 0, heightRpx: 0, lineCount: 0}")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onInput"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onInputEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"An input event triggered when anything is input via the keyboard, event.detail = ","{value, cursor, keyCode}",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",null,"Return values of the bindinput processing function will not be reflected on textarea."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onConfirm"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onConfirmEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"A confirm event triggered when the ",(0,r.kt)("strong",null,"Done")," button is tapped, event.detail = ","{value: value}")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onKeyboardHeightChange"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onKeyboardHeightChangeEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggered when the height of the keyboard changes.")))),(0,r.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.value"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.placeholder"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.placeholderStyle"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.placeholderClass"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.disabled"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.maxlength"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.autoFocus"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.focus"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.autoHeight"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.fixed"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.cursorSpacing"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.cursor"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.showConfirmBar"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.selectionStart"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.selectionEnd"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.adjustPosition"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.holdKeyboard"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.disableDefaultPadding"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.onFocus"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.onBlur"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.onLineChange"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.onInput"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.onConfirm"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextareaProps.onKeyboardHeightChange"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",o({},{id:"onfocuseventdetail"}),"onFocusEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"input value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"height"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Keyboard height")))),(0,r.kt)("h3",o({},{id:"onblureventdetail"}),"onBlurEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"input value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cursor"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"cursor position")))),(0,r.kt)("h3",o({},{id:"onlinechangeeventdetail"}),"onLineChangeEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"height"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"heightRpx"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"lineCount"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number"))))),(0,r.kt)("h3",o({},{id:"oninputeventdetail"}),"onInputEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"input value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cursor"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"cursor position")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"keyCode"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"key code")))),(0,r.kt)("h3",o({},{id:"onconfirmeventdetail"}),"onConfirmEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"input value")))),(0,r.kt)("h3",o({},{id:"onkeyboardheightchangeeventdetail"}),"onKeyboardHeightChangeEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"height"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Keyboard height")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"duration"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"Duration")))),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"Textarea"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}g.isMDXComponent=!0}}]);