"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[4636],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),d=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=d(n),k=a,g=s["".concat(u,".").concat(k)]||s[k]||p[k]||l;return n?r.createElement(g,o(o({ref:e},c),{},{components:n})):r.createElement(g,o({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},78123:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={title:"Taro.playBackgroundAudio(option)",sidebar_label:"playBackgroundAudio"},i=void 0,u={unversionedId:"apis/media/background-audio/playBackgroundAudio",id:"version-2.x/apis/media/background-audio/playBackgroundAudio",title:"Taro.playBackgroundAudio(option)",description:"\u4f7f\u7528\u540e\u53f0\u64ad\u653e\u5668\u64ad\u653e\u97f3\u4e50\uff0c\u5bf9\u4e8e\u5fae\u4fe1\u5ba2\u6237\u7aef\u6765\u8bf4\uff0c\u53ea\u80fd\u540c\u65f6\u6709\u4e00\u4e2a\u540e\u53f0\u97f3\u4e50\u5728\u64ad\u653e\u3002\u5f53\u7528\u6237\u79bb\u5f00\u5c0f\u7a0b\u5e8f\u540e\uff0c\u97f3\u4e50\u5c06\u6682\u505c\u64ad\u653e\uff1b\u5f53\u7528\u6237\u70b9\u51fb\u201c\u663e\u793a\u5728\u804a\u5929\u9876\u90e8\u201d\u65f6\uff0c\u97f3\u4e50\u4e0d\u4f1a\u6682\u505c\u64ad\u653e\uff1b\u5f53\u7528\u6237\u5728\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u5360\u7528\u4e86\u97f3\u4e50\u64ad\u653e\u5668\uff0c\u539f\u6709\u5c0f\u7a0b\u5e8f\u5185\u7684\u97f3\u4e50\u5c06\u505c\u6b62\u64ad\u653e\u3002",source:"@site/versioned_docs/version-2.x/apis/media/background-audio/playBackgroundAudio.md",sourceDirName:"apis/media/background-audio",slug:"/apis/media/background-audio/playBackgroundAudio",permalink:"/taro-docs/docs/2.x/apis/media/background-audio/playBackgroundAudio",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/media/background-audio/playBackgroundAudio.md",tags:[],version:"2.x",frontMatter:{title:"Taro.playBackgroundAudio(option)",sidebar_label:"playBackgroundAudio"},sidebar:"version-2.x/API",previous:{title:"seekBackgroundAudio",permalink:"/taro-docs/docs/2.x/apis/media/background-audio/seekBackgroundAudio"},next:{title:"pauseBackgroundAudio",permalink:"/taro-docs/docs/2.x/apis/media/background-audio/pauseBackgroundAudio"}},d={},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],p={toc:c};function s(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f7f\u7528\u540e\u53f0\u64ad\u653e\u5668\u64ad\u653e\u97f3\u4e50\uff0c\u5bf9\u4e8e\u5fae\u4fe1\u5ba2\u6237\u7aef\u6765\u8bf4\uff0c\u53ea\u80fd\u540c\u65f6\u6709\u4e00\u4e2a\u540e\u53f0\u97f3\u4e50\u5728\u64ad\u653e\u3002\u5f53\u7528\u6237\u79bb\u5f00\u5c0f\u7a0b\u5e8f\u540e\uff0c\u97f3\u4e50\u5c06\u6682\u505c\u64ad\u653e\uff1b\u5f53\u7528\u6237\u70b9\u51fb\u201c\u663e\u793a\u5728\u804a\u5929\u9876\u90e8\u201d\u65f6\uff0c\u97f3\u4e50\u4e0d\u4f1a\u6682\u505c\u64ad\u653e\uff1b\u5f53\u7528\u6237\u5728\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u5360\u7528\u4e86\u97f3\u4e50\u64ad\u653e\u5668\uff0c\u539f\u6709\u5c0f\u7a0b\u5e8f\u5185\u7684\u97f3\u4e50\u5c06\u505c\u6b62\u64ad\u653e\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.playBackgroundAudio.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",a({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"dataUrl"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u97f3\u4e50\u94fe\u63a5\uff0c\u76ee\u524d\u652f\u6301\u7684\u683c\u5f0f\u6709 m4a, aac, mp3, wav")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"coverImgUrl"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u5c01\u9762URL")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"title"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u97f3\u4e50\u6807\u9898")))),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.playBackgroundAudio({\n  dataUrl: '',\n  title: '',\n  coverImgUrl: ''\n})\n")),(0,r.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.playBackgroundAudio"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);