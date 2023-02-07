"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[29924],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});n(93106);var a=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={title:"Vue3 Composition APIs"},i=void 0,s={unversionedId:"composition-api",id:"composition-api",title:"Vue3 Composition APIs",description:"Taro v3.4.0+ \u5f00\u59cb\u652f\u6301",source:"@site/docs/composition-api.md",sourceDirName:".",slug:"/composition-api",permalink:"/taro-docs/docs/next/composition-api",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/composition-api.md",tags:[],version:"current",frontMatter:{title:"Vue3 Composition APIs"},sidebar:"docs",previous:{title:"Vue3",permalink:"/taro-docs/docs/next/vue3"},next:{title:"Vue DevTools",permalink:"/taro-docs/docs/next/vue-devtools"}},p={},u=[{value:"Taro Composition APIs",id:"taro-composition-apis",level:2},{value:"useRouter",id:"userouter",level:3},{value:"useLoad",id:"useload",level:3},{value:"useReady",id:"useready",level:3},{value:"useDidShow",id:"usedidshow",level:3},{value:"useDidHide",id:"usedidhide",level:3},{value:"useUnload",id:"useunload",level:3},{value:"usePullDownRefresh",id:"usepulldownrefresh",level:3},{value:"useReachBottom",id:"usereachbottom",level:3},{value:"usePageScroll",id:"usepagescroll",level:3},{value:"useResize",id:"useresize",level:3},{value:"useShareAppMessage",id:"useshareappmessage",level:3},{value:"useTabItemTap",id:"usetabitemtap",level:3},{value:"useShareTimeline",id:"usesharetimeline",level:3},{value:"useAddToFavorites",id:"useaddtofavorites",level:3},{value:"useSaveExitState",id:"usesaveexitstate",level:3},{value:"useTitleClick",id:"usetitleclick",level:3},{value:"useOptionMenuClick",id:"useoptionmenuclick",level:3},{value:"usePullIntercept",id:"usepullintercept",level:3}],c={toc:u};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",o({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Taro v3.4.0+ \u5f00\u59cb\u652f\u6301")),(0,a.kt)("p",null,"Vue3 \u63d0\u4f9b\u4e86 ",(0,a.kt)("a",o({parentName:"p"},{href:"https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api"}),"Composition API\uff08\u7ec4\u5408\u5f0f API\uff09")," \u7279\u6027\uff0c\u548c\u4f20\u7edf\u7684 Options API \u4e0d\u540c\uff0cComposition API \u63d0\u4f9b\u4e86\u5168\u65b0\u7684\u7f16\u7801\u65b9\u5f0f \uff0c\u53ef\u4ee5\u8ba9\u6211\u4eec\u66f4\u597d\u5730\u53bb\u7ec4\u7ec7\u548c\u590d\u7528\u4ee3\u7801\u903b\u8f91\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u5c06\u4f1a\u4ecb\u7ecd Taro \u63d0\u4f9b\u7684\u4e00\u4e9b",(0,a.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49 Composition APIs"),"\u3002\u800c\u5173\u4e8e Composition API \u7684\u76f8\u5173\u7528\u6cd5\u548c\u5185\u7f6e API \u7b49\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Vue \u6587\u6863\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://v3.vuejs.org/guide/composition-api-introduction.html"}),"\u4ecb\u7ecd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://v3.vuejs.org/guide/composition-api-setup.html"}),"Setup \u51fd\u6570")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html"}),"\u751f\u547d\u5468\u671f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://v3.vuejs.org/guide/composition-api-provide-inject.html"}),"Provider / Inject")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://v3.vuejs.org/guide/composition-api-template-refs.html"}),"Template Refs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax"}),(0,a.kt)("inlineCode",{parentName:"a"},"<script setup>")))),(0,a.kt)("h2",o({},{id:"taro-composition-apis"}),"Taro Composition APIs"),(0,a.kt)("p",null,"Taro \u5185\u7f6e\u7684\u4e00\u4e9b Composition API\uff0c\u53ef\u4ee5\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u5305\u4e2d\u5f15\u5165\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html",metastring:'title="\u5728 setup \u51fd\u6570\u4e2d\u4f7f\u7528"',title:'"\u5728',setup:!0,'\u51fd\u6570\u4e2d\u4f7f\u7528"':!0}),"<script>\n  import { useDidShow } from '@tarojs/taro'\n\n  export default {\n    setup() {\n      useDidShow(() => console.log('onShow'))\n    },\n  }\n<\/script>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html",metastring:'title="\u5728 <script setup> \u4e2d\u4f7f\u7528"',title:'"\u5728',"<script":!0,"setup>":!0,'\u4e2d\u4f7f\u7528"':!0}),"<script setup>\n  import { useDidShow } from '@tarojs/taro'\n\n  useDidShow(() => console.log('onShow'))\n<\/script>\n")),(0,a.kt)("h3",o({},{id:"userouter"}),"useRouter"),(0,a.kt)("p",null,"\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.getCurrentInstance().router"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"// { path: '', params: { ... } }\nconst router = useRouter()\n")),(0,a.kt)("h3",o({},{id:"useload"}),"useLoad"),(0,a.kt)("admonition",o({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Taro v3.5.0+ \u5f00\u59cb\u652f\u6301")),(0,a.kt)("p",null,"\u7b49\u540c\u4e8e\u9875\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onLoad")," \u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"useLoad(() => {\n  console.log('onLoad')\n})\n")),(0,a.kt)("h3",o({},{id:"useready"}),"useReady"),(0,a.kt)("p",null,"\u7b49\u540c\u4e8e\u9875\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onReady")," \u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,a.kt)("p",null,"\u4ece\u6b64\u751f\u547d\u5468\u671f\u5f00\u59cb\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"createCanvasContext")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"createSelectorQuery")," \u7b49 API \u8bbf\u95ee\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u7684 DOM \u8282\u70b9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"useReady(() => {\n  const query = wx.createSelectorQuery()\n})\n")),(0,a.kt)("h3",o({},{id:"usedidshow"}),"useDidShow"),(0,a.kt)("p",null,"\u9875\u9762\u663e\u793a/\u5207\u5165\u524d\u53f0\u65f6\u89e6\u53d1\u3002\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"onShow")," \u9875\u9762\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"useDidShow(() => {\n  console.log('onShow')\n})\n")),(0,a.kt)("h3",o({},{id:"usedidhide"}),"useDidHide"),(0,a.kt)("p",null,"\u9875\u9762\u9690\u85cf/\u5207\u5165\u540e\u53f0\u65f6\u89e6\u53d1\u3002\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"onHide")," \u9875\u9762\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"useDidHide(() => {\n  console.log('onHide')\n})\n")),(0,a.kt)("h3",o({},{id:"useunload"}),"useUnload"),(0,a.kt)("admonition",o({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Taro v3.5.0+ \u5f00\u59cb\u652f\u6301")),(0,a.kt)("p",null,"\u7b49\u540c\u4e8e\u9875\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onUnload")," \u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"useUnload(() => {\n  console.log('onUnload')\n})\n")),(0,a.kt)("h3",o({},{id:"usepulldownrefresh"}),"usePullDownRefresh"),(0,a.kt)("p",null,"\u76d1\u542c\u7528\u6237\u4e0b\u62c9\u52a8\u4f5c\u3002\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"onPullDownRefresh")," \u9875\u9762\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"usePullDownRefresh(() => {\n  console.log('onPullDownRefresh')\n})\n")),(0,a.kt)("h3",o({},{id:"usereachbottom"}),"useReachBottom"),(0,a.kt)("p",null,"\u76d1\u542c\u7528\u6237\u4e0a\u62c9\u89e6\u5e95\u4e8b\u4ef6\u3002\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"onReachBottom")," \u9875\u9762\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"useReachBottom(() => {\n  console.log('onReachBottom')\n})\n")),(0,a.kt)("h3",o({},{id:"usepagescroll"}),"usePageScroll"),(0,a.kt)("p",null,"\u76d1\u542c\u7528\u6237\u6ed1\u52a8\u9875\u9762\u4e8b\u4ef6\u3002\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"onPageScroll")," \u9875\u9762\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"usePageScroll((res) => {\n  console.log(res.scrollTop)\n})\n")),(0,a.kt)("h3",o({},{id:"useresize"}),"useResize"),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u5c4f\u5e55\u65cb\u8f6c\u65f6\u89e6\u53d1\u3002\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"onResize")," \u9875\u9762\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"useResize((res) => {\n  console.log(res.size.windowWidth)\n  console.log(res.size.windowHeight)\n})\n")),(0,a.kt)("h3",o({},{id:"useshareappmessage"}),"useShareAppMessage"),(0,a.kt)("p",null,"\u76d1\u542c\u7528\u6237\u70b9\u51fb\u9875\u9762\u5185\u8f6c\u53d1\u6309\u94ae\uff08Button \u7ec4\u4ef6 openType='share'\uff09\u6216\u53f3\u4e0a\u89d2\u83dc\u5355\u201c\u8f6c\u53d1\u201d\u6309\u94ae\u7684\u884c\u4e3a\uff0c\u5e76\u81ea\u5b9a\u4e49\u8f6c\u53d1\u5185\u5bb9\u3002\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"onShareAppMessage")," \u9875\u9762\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65f6\uff0c\u5fc5\u987b\u4e3a\u9875\u9762\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"strong"},"enableShareAppMessage: true"),"\u3002\uff08\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u540e\u8bf7\u91cd\u65b0\u7f16\u8bd1\u9879\u76ee\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html",metastring:'title="page.vue"',title:'"page.vue"'}),"<script setup>\n  import { useShareAppMessage } from '@tarojs/taro'\n\n  useShareAppMessage((res) => {\n    if (res.from === 'button') {\n      // \u6765\u81ea\u9875\u9762\u5185\u8f6c\u53d1\u6309\u94ae\n      console.log(res.target)\n    }\n    return {\n      title: '\u81ea\u5b9a\u4e49\u8f6c\u53d1\u6807\u9898',\n      path: '/page/user?id=123',\n    }\n  })\n<\/script>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="page.config.js" {2}',title:'"page.config.js"',"{2}":!0}),"export default {\n  enableShareAppMessage: true,\n}\n")),(0,a.kt)("h3",o({},{id:"usetabitemtap"}),"useTabItemTap"),(0,a.kt)("p",null,"\u70b9\u51fb tab \u65f6\u89e6\u53d1\u3002\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"onTabItemTap")," \u9875\u9762\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"useTabItemTap((item) => {\n  console.log(item.index)\n  console.log(item.pagePath)\n  console.log(item.text)\n})\n")),(0,a.kt)("h3",o({},{id:"usesharetimeline"}),"useShareTimeline"),(0,a.kt)("p",null,"\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u201c\u5206\u4eab\u5230\u670b\u53cb\u5708\u201d\u6309\u94ae\u7684\u884c\u4e3a\uff0c\u5e76\u81ea\u5b9a\u4e49\u5206\u4eab\u5185\u5bb9\u3002\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"onShareTimeline")," \u9875\u9762\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ea\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u652f\u6301\uff0c\u57fa\u7840\u5e93 2.11.3 \u5f00\u59cb\u652f\u6301\uff0c\u672c\u63a5\u53e3\u4e3a Beta \u7248\u672c\uff0c\u6682\u53ea\u5728 Android \u5e73\u53f0\u652f\u6301")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u65f6\uff0c\u5fc5\u987b\u4e3a\u9875\u9762\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"strong"},"enableShareTimeline: true"),"\u3002\uff08\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u540e\u8bf7\u91cd\u65b0\u7f16\u8bd1\u9879\u76ee\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html",metastring:'title="page.vue"',title:'"page.vue"'}),"<script setup>\n  import { useShareTimeline } from '@tarojs/taro'\n\n  useShareTimeline(() => {\n    console.log('onShareTimeline')\n  })\n<\/script>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="page.config.js" {2}',title:'"page.config.js"',"{2}":!0}),"export default {\n  enableShareTimeline: true,\n}\n")),(0,a.kt)("h3",o({},{id:"useaddtofavorites"}),"useAddToFavorites"),(0,a.kt)("p",null,"\u76d1\u542c\u7528\u6237\u70b9\u51fb\u53f3\u4e0a\u89d2\u83dc\u5355\u201c\u6536\u85cf\u201d\u6309\u94ae\u7684\u884c\u4e3a\uff0c\u5e76\u81ea\u5b9a\u4e49\u6536\u85cf\u5185\u5bb9\u3002\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"onAddToFavorites")," \u9875\u9762\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ea\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u652f\u6301\uff0c\u672c\u63a5\u53e3\u4e3a Beta \u7248\u672c\uff0c\u5b89\u5353 7.0.15 \u7248\u672c\u8d77\u652f\u6301\uff0c\u6682\u53ea\u5728\u5b89\u5353\u5e73\u53f0\u652f\u6301")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"useAddToFavorites((res) => {\n  // webview \u9875\u9762\u8fd4\u56de webviewUrl\n  console.log('WebviewUrl: ', res.webviewUrl)\n  return {\n    title: '\u81ea\u5b9a\u4e49\u6807\u9898',\n    imageUrl: 'https://demo.png',\n    query: 'name=xxx&age=xxx',\n  }\n})\n")),(0,a.kt)("h3",o({},{id:"usesaveexitstate"}),"useSaveExitState"),(0,a.kt)("admonition",o({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Taro v3.5.0+ \u5f00\u59cb\u652f\u6301")),(0,a.kt)("p",null,"\u6bcf\u5f53\u5c0f\u7a0b\u5e8f\u53ef\u80fd\u88ab\u9500\u6bc1\u4e4b\u524d\uff0c\u9875\u9762\u56de\u8c03\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"onSaveExitState")," \u4f1a\u88ab\u8c03\u7528\uff0c\u53ef\u4ee5\u8fdb\u884c",(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html#_4-%E9%80%80%E5%87%BA%E7%8A%B6%E6%80%81"}),"\u9000\u51fa\u72b6\u6001"),"\u7684\u4fdd\u5b58\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ea\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u652f\u6301\uff0c\u57fa\u7840\u5e93 2.7.4 \u5f00\u59cb\u652f\u6301\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"useSaveExitState(() => {\n  const exitState = { myDataField: 'myData' } // \u9700\u8981\u4fdd\u5b58\u7684\u6570\u636e\n  return {\n    data: exitState,\n    expireTimeStamp: Date.now() + 24 * 60 * 60 * 1000, // \u8d85\u65f6\u65f6\u523b\n  }\n})\n")),(0,a.kt)("h3",o({},{id:"usetitleclick"}),"useTitleClick"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ea\u6709\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u652f\u6301\u3002\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"onTitleClick")," \u9875\u9762\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002")),(0,a.kt)("p",null,"\u70b9\u51fb\u6807\u9898\u89e6\u53d1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"useTitleClick(() => console.log('onTitleClick'))\n")),(0,a.kt)("h3",o({},{id:"useoptionmenuclick"}),"useOptionMenuClick"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ea\u6709\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u652f\u6301\u3002\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"onOptionMenuClick")," \u9875\u9762\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002")),(0,a.kt)("p",null,"\u70b9\u51fb\u5bfc\u822a\u680f\u989d\u5916\u56fe\u6807\u89e6\u53d1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"useOptionMenuClick(() => console.log('onOptionMenuClick'))\n")),(0,a.kt)("h3",o({},{id:"usepullintercept"}),"usePullIntercept"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53ea\u6709\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u652f\u6301\u3002\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"onPullIntercept")," \u9875\u9762\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002")),(0,a.kt)("p",null,"\u4e0b\u62c9\u622a\u65ad\u65f6\u89e6\u53d1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"usePullIntercept(() => console.log('onPullIntercept'))\n")))}m.isMDXComponent=!0}}]);