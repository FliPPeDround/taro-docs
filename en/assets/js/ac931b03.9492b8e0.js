"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[64857],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26078:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});n(93106);var o=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"AuthSetting",sidebar_label:"AuthSetting"},a=void 0,s={unversionedId:"apis/open-api/settings/AuthSetting",id:"version-4.x/apis/open-api/settings/AuthSetting",title:"AuthSetting",description:"Some of the APIs need users\u2019 authorization before they can be called. We have divided these APIs into multiple scope according to the scope of usage. The users can select scope to authorize. After a scope is authorized, all of its APIs can be used directly.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-4.x/apis/open-api/settings/AuthSetting.md",sourceDirName:"apis/open-api/settings",slug:"/apis/open-api/settings/AuthSetting",permalink:"/taro-docs/en/docs/apis/open-api/settings/AuthSetting",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/apis/open-api/settings/AuthSetting.md",tags:[],version:"4.x",frontMatter:{title:"AuthSetting",sidebar_label:"AuthSetting"},sidebar:"API",previous:{title:"getSetting",permalink:"/taro-docs/en/docs/apis/open-api/settings/getSetting"},next:{title:"SubscriptionsSetting",permalink:"/taro-docs/en/docs/apis/open-api/settings/SubscriptionsSetting"}},c={},p=[{value:"Methods",id:"methods",level:2}],u={toc:p},d="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)(d,r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some of the APIs need users\u2019 authorization before they can be called. We have divided these APIs into multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"scope")," according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"scope")," of usage. The users can select ",(0,o.kt)("inlineCode",{parentName:"p"},"scope")," to authorize. After a ",(0,o.kt)("inlineCode",{parentName:"p"},"scope")," is authorized, all of its APIs can be used directly."),(0,o.kt)("p",null,"When such an API is called:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the user has not accepted or rejected this authorization, a pop-up window will appear to ask the user if he/she wants to accept. The API can be called only after the user clicks to accept;"),(0,o.kt)("li",{parentName:"ul"},"If the user has accepted authorization, the API can be called directly;"),(0,o.kt)("li",{parentName:"ul"},"If the user has rejected authorization, no pop-up appears. Instead, API fail callback will be accessed directly. ",(0,o.kt)("strong",{parentName:"li"},"Developers should make the scenario compatible where the user has rejected to authorization."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/authorize.html"}),"Reference"))),(0,o.kt)("h2",r({},{id:"methods"}),"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"scope.address"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Postal address. ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html"},"wx.chooseAddress"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"scope.camera"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Camera. [",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"},"camera"),"](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html) component")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"scope.invoice"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Gets invoice. ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html"},"wx.chooseInvoice"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"scope.invoiceTitle"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Invoice title. ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html"},"wx.chooseInvoiceTitle"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"scope.record"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Recording feature. ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html"},"wx.startRecord"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"scope.userInfo"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"User information. ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html"},"wx.getUserInfo"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"scope.userLocation"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Geographic location. ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html"},"wx.getLocation"),", ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html"},"wx.chooseLocation"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"scope.werun"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"WeRun step counts. ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html"},"wx.getWeRunData"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"scope.writePhotosAlbum"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Saves to album. ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html"},"wx.saveImageToPhotosAlbum"),", ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html"},"wx.saveVideoToPhotosAlbum"))))))}h.isMDXComponent=!0}}]);