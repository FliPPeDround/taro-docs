"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[24107],{79874:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return m}});var r=a(93106);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),p=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=p(a),m=n,k=s["".concat(u,".").concat(m)]||s[m]||c[m]||l;return a?r.createElement(k,i(i({ref:e},d),{},{components:a})):r.createElement(k,i({ref:e},d))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},82494:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});a(93106);var r=a(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const i={title:"Taro.getAvailableAudioSources(option)",sidebar_label:"getAvailableAudioSources"},o=void 0,u={unversionedId:"apis/media/audio/getAvailableAudioSources",id:"apis/media/audio/getAvailableAudioSources",title:"Taro.getAvailableAudioSources(option)",description:"\u83b7\u53d6\u5f53\u524d\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90",source:"@site/docs/apis/media/audio/getAvailableAudioSources.md",sourceDirName:"apis/media/audio",slug:"/apis/media/audio/getAvailableAudioSources",permalink:"/taro-docs/docs/next/apis/media/audio/getAvailableAudioSources",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/media/audio/getAvailableAudioSources.md",tags:[],version:"current",frontMatter:{title:"Taro.getAvailableAudioSources(option)",sidebar_label:"getAvailableAudioSources"},sidebar:"API",previous:{title:"pauseVoice",permalink:"/taro-docs/docs/next/apis/media/audio/pauseVoice"},next:{title:"createWebAudioContext",permalink:"/taro-docs/docs/next/apis/media/audio/createWebAudioContext"}},p={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"audioSources",id:"audiosources",level:3}],c={toc:d};function s(t){var{components:e}=t,i=l(t,["components"]);return(0,r.kt)("wrapper",n({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",n({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,r.kt)("h2",n({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,r.kt)("h3",n({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"complete"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"fail"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult) => void")),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",n({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"audioSources"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(keyof audioSources)[]")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90\u5217\u8868\uff0c\u53ef\u5728 ",(0,r.kt)("a",n({parentName:"td"},{href:"/docs/apis/media/recorder/RecorderManager#start"}),"RecorderManager.start()"),"\u7528\u3002\u8fd4\u56de\u503c\u5b9a\u4e49\u53c2\u8003 ",(0,r.kt)("a",n({parentName:"td"},{href:"https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource"}),"https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"errMsg"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u8c03\u7528\u7ed3\u679c")))),(0,r.kt)("h3",n({},{id:"audiosources"}),"audioSources"),(0,r.kt)("p",null,"\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"auto"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u81ea\u52a8\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4f7f\u7528\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u63d2\u4e0a\u8033\u9ea6\u540e\u81ea\u52a8\u5207\u6362\u4f7f\u7528\u8033\u673a\u9ea6\u514b\u98ce\uff0c\u6240\u6709\u5e73\u53f0\u9002\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"buildInMic"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u4ec5\u9650 iOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"headsetMic"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u8033\u673a\u9ea6\u514b\u98ce\uff0c\u4ec5\u9650 iOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"mic"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u9ea6\u514b\u98ce\uff08\u6ca1\u63d2\u8033\u9ea6\u65f6\u662f\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u63d2\u8033\u9ea6\u65f6\u662f\u8033\u673a\u9ea6\u514b\u98ce\uff09\uff0c\u4ec5\u9650 Android")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"camcorder"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u540c mic\uff0c\u9002\u7528\u4e8e\u5f55\u5236\u97f3\u89c6\u9891\u5185\u5bb9\uff0c\u4ec5\u9650 Android")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"voice_communication"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u540c mic\uff0c\u9002\u7528\u4e8e\u5b9e\u65f6\u6c9f\u901a\uff0c\u4ec5\u9650 Android")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"voice_recognition"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u540c mic\uff0c\u9002\u7528\u4e8e\u8bed\u97f3\u8bc6\u522b\uff0c\u4ec5\u9650 Android")))))}s.isMDXComponent=!0},80068:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(t,e,a){e.Z=a.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);