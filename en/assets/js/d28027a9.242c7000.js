"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[23790],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?a.createElement(k,o(o({ref:e},c),{},{components:n})):a.createElement(k,o({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63917:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"Taro.createAnimation(option)",sidebar_label:"createAnimation"},l=void 0,u={unversionedId:"apis/ui/animation/createAnimation",id:"version-3.x/apis/ui/animation/createAnimation",title:"Taro.createAnimation(option)",description:"Create an animation instance animation. Describe the animation by calling the instance. Use the method of exporting the animation instance to export the animation data and pass it to the animation property of the component.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/ui/animation/createAnimation.md",sourceDirName:"apis/ui/animation",slug:"/apis/ui/animation/createAnimation",permalink:"/taro-docs/en/docs/apis/ui/animation/createAnimation",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/ui/animation/createAnimation.md",tags:[],version:"3.x",frontMatter:{title:"Taro.createAnimation(option)",sidebar_label:"createAnimation"},sidebar:"API",previous:{title:"ScrollViewContext",permalink:"/taro-docs/en/docs/apis/ui/scroll/ScrollViewContext"},next:{title:"Animation",permalink:"/taro-docs/en/docs/apis/ui/animation/"}},p={},c=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"timingFunction",id:"timingfunction",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],s={toc:c};function m(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)("wrapper",r({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create an ",(0,a.kt)("inlineCode",{parentName:"p"},"animation")," instance animation. Describe the ",(0,a.kt)("inlineCode",{parentName:"p"},"animation")," by calling the instance. Use the method of exporting the ",(0,a.kt)("inlineCode",{parentName:"p"},"animation")," instance to export the ",(0,a.kt)("inlineCode",{parentName:"p"},"animation")," data and pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"animation")," property of the component."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ui/animation/wx.createAnimation.html"}),"Reference"))),(0,a.kt)("h2",r({},{id:"type"}),"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Animation\n")),(0,a.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,a.kt)("h3",r({},{id:"option"}),"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"delay"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Animation delay time (in ms)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"duration"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Animation duration (in ms)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"timingFunction"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-start" | "step-end"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Animation effect")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"transformOrigin"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null)))),(0,a.kt)("h3",r({},{id:"timingfunction"}),"timingFunction"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"linear"),(0,a.kt)("td",null,"The animation keeps the same speed from start to end")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ease"),(0,a.kt)("td",null,"The animation starts slow, then speeds up, and then slows down before ending.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ease-in"),(0,a.kt)("td",null,"The animation starts at low speed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ease-in-out"),(0,a.kt)("td",null,"The animation starts and ends at low speed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ease-out"),(0,a.kt)("td",null,"The animation ends at low speed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"step-start"),(0,a.kt)("td",null,"The first frame of the animation jumps to the end state until the animation ends")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"step-end"),(0,a.kt)("td",null,"The animation remains the start state until the final frame jumps to the end state")))),(0,a.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),'var animation = Taro.createAnimation({\n  transformOrigin: "50% 50%",\n  duration: 1000,\n  timingFunction: "ease",\n  delay: 0\n})\n')),(0,a.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.createAnimation"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);