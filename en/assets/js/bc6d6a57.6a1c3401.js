"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[72284],{79874:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),s=a,f=m["".concat(p,".").concat(s)]||m[s]||u[s]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},70897:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={title:"Taro.createMediaRecorder(canvas, option)",sidebar_label:"createMediaRecorder"},l=void 0,p={unversionedId:"apis/media/media-recorder/createMediaRecorder",id:"version-3.x/apis/media/media-recorder/createMediaRecorder",title:"Taro.createMediaRecorder(canvas, option)",description:"\u521b\u5efa WebGL \u753b\u9762\u5f55\u5236\u5668\uff0c\u53ef\u9010\u5e27\u5f55\u5236\u5728 WebGL \u4e0a\u6e32\u67d3\u7684\u753b\u9762\u5e76\u5bfc\u51fa\u89c6\u9891\u6587\u4ef6",source:"@site/versioned_docs/version-3.x/apis/media/media-recorder/createMediaRecorder.md",sourceDirName:"apis/media/media-recorder",slug:"/apis/media/media-recorder/createMediaRecorder",permalink:"/taro-docs/en/docs/apis/media/media-recorder/createMediaRecorder",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/media/media-recorder/createMediaRecorder.md",tags:[],version:"3.x",frontMatter:{title:"Taro.createMediaRecorder(canvas, option)",sidebar_label:"createMediaRecorder"},sidebar:"API",previous:{title:"exitVoIPChat",permalink:"/taro-docs/en/docs/apis/media/voip/exitVoIPChat"},next:{title:"MediaRecorder",permalink:"/taro-docs/en/docs/apis/media/media-recorder/MediaRecorder"}},c={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3}],m={toc:d},u="wrapper";function s(e){var{components:t}=e,o=i(e,["components"]);return(0,n.kt)(u,a({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u521b\u5efa WebGL \u753b\u9762\u5f55\u5236\u5668\uff0c\u53ef\u9010\u5e27\u5f55\u5236\u5728 WebGL \u4e0a\u6e32\u67d3\u7684\u753b\u9762\u5e76\u5bfc\u51fa\u89c6\u9891\u6587\u4ef6"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(72369).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/wx.createMediaRecorder.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(canvas?: any, option?: Option) => MediaRecorder\n")),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"canvas"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"any"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,n.kt)("h3",a({},{id:"option"}),"Option"),(0,n.kt)("p",null,"createMediaRecorder Option"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/wx.createMediaRecorder.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"duration"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"600")),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u6307\u5b9a\u5f55\u5236\u7684\u65f6\u957f\uff08s)\uff0c\u5230\u8fbe\u81ea\u52a8\u505c\u6b62\u3002\u6700\u5927 7200\uff0c\u6700\u5c0f 5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"videoBitsPerSecond"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"1000")),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u89c6\u9891\u6bd4\u7279\u7387\uff08kbps\uff09\uff0c\u6700\u5c0f\u503c 600\uff0c\u6700\u5927\u503c 3000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"gop"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"12")),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u89c6\u9891\u5173\u952e\u5e27\u95f4\u9694")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"fps"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"24")),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u89c6\u9891 fps")))))}s.isMDXComponent=!0},83190:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,r){t.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},519:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},72369:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);