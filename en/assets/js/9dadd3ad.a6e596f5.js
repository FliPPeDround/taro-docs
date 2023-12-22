"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[13729],{79874:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var l=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=l.createContext({}),k=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=k(t.components);return l.createElement(i.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,i=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),p=k(n),s=a,m=p["".concat(i,".").concat(s)]||p[s]||c[s]||r;return n?l.createElement(m,o(o({ref:e},u),{},{components:n})):l.createElement(m,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=s;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d[p]="string"==typeof t?t:a,o[1]=d;for(var k=2;k<r;k++)o[k]=n[k];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41207:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});n(93106);var l=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},a.apply(this,arguments)}function r(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={title:"InnerAudioContext",sidebar_label:"InnerAudioContext"},d=void 0,i={unversionedId:"apis/media/audio/InnerAudioContext",id:"version-3.x/apis/media/audio/InnerAudioContext",title:"InnerAudioContext",description:"The InnerAudioContext instance can be obtained through the API Taro.createInnerAudioContext.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/media/audio/InnerAudioContext.md",sourceDirName:"apis/media/audio",slug:"/apis/media/audio/InnerAudioContext",permalink:"/taro-docs/en/docs/3.x/apis/media/audio/InnerAudioContext",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/media/audio/InnerAudioContext.md",tags:[],version:"3.x",frontMatter:{title:"InnerAudioContext",sidebar_label:"InnerAudioContext"},sidebar:"API",previous:{title:"AudioContext",permalink:"/taro-docs/en/docs/3.x/apis/media/audio/AudioContext"},next:{title:"MediaAudioPlayer",permalink:"/taro-docs/en/docs/3.x/apis/media/audio/MediaAudioPlayer"}},k={},u=[{value:"Methods",id:"methods",level:2},{value:"play",id:"play",level:3},{value:"pause",id:"pause",level:3},{value:"stop",id:"stop",level:3},{value:"seek",id:"seek",level:3},{value:"destroy",id:"destroy",level:3},{value:"onCanplay",id:"oncanplay",level:3},{value:"onPlay",id:"onplay",level:3},{value:"onPause",id:"onpause",level:3},{value:"onStop",id:"onstop",level:3},{value:"onEnded",id:"onended",level:3},{value:"onTimeUpdate",id:"ontimeupdate",level:3},{value:"onError",id:"onerror",level:3},{value:"onWaiting",id:"onwaiting",level:3},{value:"onSeeking",id:"onseeking",level:3},{value:"onSeeked",id:"onseeked",level:3},{value:"offCanplay",id:"offcanplay",level:3},{value:"offPlay",id:"offplay",level:3},{value:"offPause",id:"offpause",level:3},{value:"offStop",id:"offstop",level:3},{value:"offEnded",id:"offended",level:3},{value:"offTimeUpdate",id:"offtimeupdate",level:3},{value:"offError",id:"offerror",level:3},{value:"offWaiting",id:"offwaiting",level:3},{value:"offSeeking",id:"offseeking",level:3},{value:"offSeeked",id:"offseeked",level:3},{value:"Parameters",id:"parameters",level:2},{value:"onErrorDetail",id:"onerrordetail",level:3},{value:"onErrorDetailErrCode",id:"onerrordetailerrcode",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],p={toc:u},c="wrapper";function s(t){var{components:e}=t,n=r(t,["components"]);return(0,l.kt)(c,a({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The InnerAudioContext instance can be obtained through the API ",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.createInnerAudioContext"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Supported Formats")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:null}),"Format"),(0,l.kt)("th",a({parentName:"tr"},{align:null}),"iOS"),(0,l.kt)("th",a({parentName:"tr"},{align:null}),"Android"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"flac"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"x"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"m4a"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"ogg"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"x"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"ape"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"x"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"amr"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"x"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"wma"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"x"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"wav"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"mp3"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"mp4"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"x"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"aac"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"aiff"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"caf"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"\u221a"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"x")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/audio/InnerAudioContext.html"}),"Reference"))),(0,l.kt)("h2",a({},{id:"methods"}),"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoplay"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Whether to enable auto playback.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"buffered"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The position where the audio is buffered. Only the part between the position where the playback has got to and this position is buffered (read only).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"currentTime"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The position where the playback has got to (in sec). It is only returned when a valid src attribute exists and is rounded to six decimal places (read only).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"duration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The length of the audio file (in sec). It is only returned when a valid src attribute exists (read only).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"loop"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Whether to enable loop playback.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"obeyMuteSwitch"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,'Whether to follow the "Mute" switch. If it is set to ',(0,l.kt)("code",null,"false"),',  the audio file still sounds even if the "Mute" switch is on. As of base library 2.3.0, this parameter does not take effect and the feature is set through the API ',(0,l.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html"},"Taro.setInnerAudioOption"),".")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"paused"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Whether the playback is paused or stopped (read only).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"src"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The audio file address which can be used to play the audio file directly.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"startTime"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The position where the playback starts (in sec).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"volume"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"1")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies the volume, which ranges from 0 to 1. It is 1 by default.")))),(0,l.kt)("h3",a({},{id:"play"}),"play"),(0,l.kt)("p",null,"Plays an audio file."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,l.kt)("h3",a({},{id:"pause"}),"pause"),(0,l.kt)("p",null,"Pauses the audio playback. The playback is resumed at the point where it was paused."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,l.kt)("h3",a({},{id:"stop"}),"stop"),(0,l.kt)("p",null,"Stops the audio playback. The playback starts from the beginning if the file is played again."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,l.kt)("h3",a({},{id:"seek"}),"seek"),(0,l.kt)("p",null,"Jumps to the specific position."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(position: number) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"position"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number"))))),(0,l.kt)("h3",a({},{id:"destroy"}),"destroy"),(0,l.kt)("p",null,"Terminates the current instance."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,l.kt)("h3",a({},{id:"oncanplay"}),"onCanplay"),(0,l.kt)("p",null,"Listens on the event that an audio file is ready for playback. A smooth playback is not guaranteed."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onplay"}),"onPlay"),(0,l.kt)("p",null,"Listens on the audio playback event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onpause"}),"onPause"),(0,l.kt)("p",null,"Listens on the audio pause event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onstop"}),"onStop"),(0,l.kt)("p",null,"Listens on the event of stopping audio playback."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onended"}),"onEnded"),(0,l.kt)("p",null,"Listens on the event of playing an audio file to the end without interruption."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"ontimeupdate"}),"onTimeUpdate"),(0,l.kt)("p",null,"Listens on the event of updating audio playback progress."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onerror"}),"onError"),(0,l.kt)("p",null,"Listens on the audio playback error event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: (res: onErrorDetail) => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: onErrorDetail) => void"))))),(0,l.kt)("h3",a({},{id:"onwaiting"}),"onWaiting"),(0,l.kt)("p",null,"Listens on the audio loading event. It is triggered when the playback of an audio file stops to load the file due to insufficient data."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onseeking"}),"onSeeking"),(0,l.kt)("p",null,"Listens on the event of jumping to a specific position in the audio file."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"onseeked"}),"onSeeked"),(0,l.kt)("p",null,"Listens on the event of finishing the jump to a specific position in the audio file."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"offcanplay"}),"offCanplay"),(0,l.kt)("p",null,"Un-listens on the event that an audio file is ready for playback."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"offplay"}),"offPlay"),(0,l.kt)("p",null,"Un-listens on the audio playback event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"offpause"}),"offPause"),(0,l.kt)("p",null,"Un-listens on the audio pause event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"offstop"}),"offStop"),(0,l.kt)("p",null,"Un-listens on the event of stopping audio playback."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"offended"}),"offEnded"),(0,l.kt)("p",null,"Un-listens on the event of playing an audio file to the end without interruption."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"offtimeupdate"}),"offTimeUpdate"),(0,l.kt)("p",null,"Un-listens on the event of updating audio playback progress."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"offerror"}),"offError"),(0,l.kt)("p",null,"Un-listens on the audio playback error event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"offwaiting"}),"offWaiting"),(0,l.kt)("p",null,"Un-listens on the audio loading event."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"offseeking"}),"offSeeking"),(0,l.kt)("p",null,"Un-listens on the event of jumping to a specific position in the audio file."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h3",a({},{id:"offseeked"}),"offSeeked"),(0,l.kt)("p",null,"Un-listens on the event of finishing the jump to a specific position in the audio file."),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback?: () => void) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"() => void"))))),(0,l.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,l.kt)("h3",a({},{id:"onerrordetail"}),"onErrorDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"errCode"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Error code")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Error message")))),(0,l.kt)("h3",a({},{id:"onerrordetailerrcode"}),"onErrorDetailErrCode"),(0,l.kt)("p",null,"Valid values of errCode"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"10001"),(0,l.kt)("td",null,"System error")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"10002"),(0,l.kt)("td",null,"Network error")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"10003"),(0,l.kt)("td",null,"File error")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"10004"),(0,l.kt)("td",null,"Format error")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"-1"),(0,l.kt)("td",null,"Unknown error")))),(0,l.kt)("h2",a({},{id:"sample-code"}),"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const innerAudioContext = Taro.createInnerAudioContext()\ninnerAudioContext.autoplay = true\ninnerAudioContext.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'\ninnerAudioContext.onPlay(() => {\n  console.log('Start playback')\n})\ninnerAudioContext.onError((res) => {\n  console.log(res.errMsg)\n  console.log(res.errCode)\n})\n")),(0,l.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.play"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.pause"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.stop"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.seek"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.destroy"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.onCanplay"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.onPlay"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.onPause"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.onStop"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.onEnded"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.onTimeUpdate"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.onError"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.onWaiting"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.onSeeking"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.onSeeked"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.offCanplay"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.offPlay"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.offPause"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.offStop"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.offEnded"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.offTimeUpdate"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.offError"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.offWaiting"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.offSeeking"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"InnerAudioContext.offSeeked"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",a({parentName:"tr"},{align:"center"})),(0,l.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);