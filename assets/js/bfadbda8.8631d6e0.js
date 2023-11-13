"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[62889],{79874:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var r=a(93106);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},h="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,m=n(t,["components","mdxType","originalType","parentName"]),h=u(a),s=i,k=h["".concat(p,".").concat(s)]||h[s]||c[s]||o;return a?r.createElement(k,l(l({ref:e},m),{},{components:a})):r.createElement(k,l({ref:e},m))}));function k(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,l=new Array(o);l[0]=s;var n={};for(var p in e)hasOwnProperty.call(e,p)&&(n[p]=e[p]);n.originalType=t,n[h]="string"==typeof t?t:i,l[1]=n;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},23058:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return n},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});a(93106);var r=a(79874);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}const l={title:"\u66f4\u591a\u8d44\u6e90"},n=void 0,p={unversionedId:"composition",id:"version-3.x/composition",title:"\u66f4\u591a\u8d44\u6e90",description:"\u6700\u65b0\u7684\u66f4\u591a\u8d44\u6e90\uff0c\u8bf7\u53c2\u8003\uff1aNervJS/awesome-taro",source:"@site/versioned_docs/version-3.x/composition.md",sourceDirName:".",slug:"/composition",permalink:"/taro-docs/docs/composition",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/composition.md",tags:[],version:"3.x",frontMatter:{title:"\u66f4\u591a\u8d44\u6e90"},sidebar:"docs",previous:{title:"\u5b89\u88c5\u53ca\u4f7f\u7528",permalink:"/taro-docs/docs/GETTING-STARTED"},next:{title:"\u76ee\u5f55\u7ed3\u6784",permalink:"/taro-docs/docs/folder"}},u={},m=[{value:"\u5f00\u6e90\u9879\u76ee",id:"\u5f00\u6e90\u9879\u76ee",level:2},{value:"Taro3",id:"taro3",level:3},{value:"Taro2",id:"taro2",level:3},{value:"Taro1",id:"taro1",level:3},{value:"\u5b98\u65b9\u8d44\u6e90",id:"\u5b98\u65b9\u8d44\u6e90",level:2},{value:"\u751f\u6001\u8d44\u6e90",id:"\u751f\u6001\u8d44\u6e90",level:2},{value:"\u6587\u7ae0\u6559\u7a0b",id:"\u6587\u7ae0\u6559\u7a0b",level:2},{value:"\u89c6\u9891\u6559\u7a0b",id:"\u89c6\u9891\u6559\u7a0b",level:2},{value:"\u5f00\u53d1\u6280\u5de7",id:"\u5f00\u53d1\u6280\u5de7",level:2},{value:"\u793a\u4f8b\u9879\u76ee",id:"\u793a\u4f8b\u9879\u76ee",level:2},{value:"Taro 3",id:"taro-3",level:3},{value:"Taro 2",id:"taro-2",level:3},{value:"Taro 1",id:"taro-1",level:3},{value:"\u7b2c\u4e09\u65b9\u5e93\u548c\u7ec4\u4ef6",id:"\u7b2c\u4e09\u65b9\u5e93\u548c\u7ec4\u4ef6",level:2}],h={toc:m},c="wrapper";function s(t){var{components:e}=t,a=o(t,["components"]);return(0,r.kt)(c,i({},h,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6700\u65b0\u7684\u66f4\u591a\u8d44\u6e90\uff0c\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/NervJS/awesome-taro"}),"NervJS/awesome-taro")),(0,r.kt)("h2",i({},{id:"\u5f00\u6e90\u9879\u76ee"}),"\u5f00\u6e90\u9879\u76ee"),(0,r.kt)("h3",i({},{id:"taro3"}),"Taro3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://b2nil.github.io/taro-ui-vue3/"}),"Taro UI Vue3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/psaren/taro-ui-vue"}),"Taro UI Vue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/lsqy/taro-music"}),"\u57fa\u4e8e Taro + Taro-ui + Typescript + redux \u5f00\u53d1\u7684\u7f51\u6613\u4e91\u97f3\u4e50\u5c0f\u7a0b\u5e8f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/ShaoGongBra/taro-design"}),"Taro Design \u5f00\u6e90\u9875\u9762\u8bbe\u8ba1\u5668"))),(0,r.kt)("h3",i({},{id:"taro2"}),"Taro2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcaf ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/hi-our/hi-face"}),"Hi \u5934\u50cf")," \u81ea\u5e26",(0,r.kt)("a",i({parentName:"li"},{href:"https://www.xiaoxili.com/hi-face"}),"\u6559\u7a0b\u5c0f\u518c")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcaf ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/jiechud/taro-mall"}),"\u57fa\u4e8e Taro2.0 + dva + Taro-ui + immer \u5f00\u53d1\u7684\u7535\u5546\u5c0f\u7a0b\u5e8f")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcaf ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/Mayandev/classmate-map"}),"\u57fa\u4e8e Taro2.0 + TypeScript + \u4e91\u5f00\u53d1\u7684\u5730\u56fe\u540c\u5b66\u5f55\u5c0f\u7a0b\u5e8f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/lsqy/taro-music/tree/feature_taro2.x"}),"\u57fa\u4e8e Taro + Taro-ui + Typescript + redux \u5f00\u53d1\u7684\u7f51\u6613\u4e91\u97f3\u4e50\u5c0f\u7a0b\u5e8f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/hirCodd/JavaNorthMiniApp.git"}),"\u57fa\u4e8e Taro2.0 + dva + Taro-ui + wemark \u5f00\u53d1\u7684 markdown \u6587\u7ae0\u535a\u5ba2\u5c0f\u7a0b\u5e8f"))),(0,r.kt)("h3",i({},{id:"taro1"}),"Taro1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcaf ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/js-newbee/taro-yanxuan"}),"\u9996\u4e2a Taro \u591a\u7aef\u7edf\u4e00\u5b9e\u4f8b - \u7f51\u6613\u4e25\u9009\uff08\u5c0f\u7a0b\u5e8f + H5 + React Native\uff09")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcaf ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/EasyTuan/taro-msparis"}),"\u57fa\u4e8e Taro + Dva \u6784\u5efa\u7684\u65f6\u88c5\u8863\u6a71(\u7535\u5546\u5b9e\u6218\u9879\u76ee)")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcaf ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/hugetiny/quit-smoking"}),"\u57fa\u4e8e Taro + Taro-ui + dva \u5f00\u53d1\u7684\u516c\u76ca App")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcaf ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/bozaigao/Taro-demo"}),"github \u4e0a\u80fd\u627e\u5230\u7684 taro \u9002\u914d Android\u3001iOS\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001H5 \u6700\u4f73\u5b9e\u8df5\u9879\u76ee\u811a\u624b\u67b6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/o2team/taro-ebook-source"}),"Taro \u6398\u91d1\u5c0f\u518c\u6e90\u7801")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/huangzhuangjia/taro-music"}),"\u57fa\u4e8e taro + dva \u5f00\u53d1\u7684\u97f3\u4e50\u64ad\u653e\u5668\u5c0f\u7a0b\u5e8f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/huangjianke/Gitter"}),"Taro + Taro-UI GitHub \u5c0f\u7a0b\u5e8f\u5ba2\u6237\u7aef Gitter \u6e90\u7801")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/abc-club/taro-music-ts"}),"\u57fa\u4e8e Taro + dva + Taro-ui + Typescript \u5f00\u53d1\u7684\u7f51\u6613\u4e91\u97f3\u4e50\u5c0f\u7a0b\u5e8f"))),(0,r.kt)("h2",i({},{id:"\u5b98\u65b9\u8d44\u6e90"}),"\u5b98\u65b9\u8d44\u6e90"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro"}),"Taro \u9879\u76ee\u4ed3\u5e93")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"/docs"}),"Taro \u5b98\u65b9\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-ui"}),"Taro UI \u9879\u76ee\u4ed3\u5e93")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://taro-ui.jd.com"}),"Taro UI \u5b98\u65b9\u6587\u6863"))),(0,r.kt)("h2",i({},{id:"\u751f\u6001\u8d44\u6e90"}),"\u751f\u6001\u8d44\u6e90"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://taro-ui.jd.com"}),"Taro UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://b2nil.github.io/taro-ui-vue3/"}),"Taro UI Vue3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/psaren/taro-ui-vue"}),"Taro UI Vue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"/docs/redux"}),"\u66f4\u591a"))),(0,r.kt)("h2",i({},{id:"\u6587\u7ae0\u6559\u7a0b"}),"\u6587\u7ae0\u6559\u7a0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"/blog"}),"\u5b98\u65b9\u535a\u5ba2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://juejin.im/post/5c21f4e5f265da61117a54a0"}),"\u4e0d\u6562\u9605\u8bfb npm \u5305\u6e90\u7801\uff1f\u5e26\u4f60\u63ed\u79d8 taro init \u80cc\u540e\u7684\u54f2\u5b66")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://juejin.im/post/5bb1766d5188255c3272cdd0"}),"\u4ece 0 \u5230 1 \u6784\u5efa\u9002\u914d\u4e0d\u540c\u7aef\uff08\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001H5\u3001React-Native \u7b49\uff09\u7684 taro + dva \u5e94\u7528")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://segmentfault.com/a/1190000016533592"}),"\u3010\u5c0f\u7a0b\u5e8f taro \u6700\u4f73\u5b9e\u8df5\u3011http \u8bf7\u6c42\u5c01\u88c5\uff08\u65b9\u4fbf\u4f7f\u7528\uff0c\u589e\u52a0 token\uff0c\u7edf\u4e00\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\u548c\u4e0a\u62a5\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://segmentfault.com/a/1190000016534001"}),"\u3010\u5c0f\u7a0b\u5e8f taro \u6700\u4f73\u5b9e\u8df5\u3011\u5f02\u6b65 action \u4f18\u96c5\u5b9e\u8df5(\u7b80\u5316\u6d41\u7a0b)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://juejin.im/post/5ba0a53af265da0ab5037234"}),"\u4f7f\u7528 Taro \u6846\u67b6\u5f00\u53d1\u5c0f\u7a0b\u5e8f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://juejin.im/post/5b99da5d5188255c6f1e084e"}),"Taro \u4e0b\u5229\u7528 Decorator \u5feb\u901f\u5b9e\u73b0\u5c0f\u7a0b\u5e8f\u5206\u4eab")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://juejin.im/post/5b97a762e51d450e9649a8fd"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6388\u6743\u767b\u9646\u65b9\u6848\u4ee5\u53ca\u5728 Taro \u4e0b\u5229\u7528 Decorator \u4fee\u9970\u5668\u5b9e\u73b0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://segmentfault.com/a/1190000016247153"}),"\u8bd5\u7528 React \u8bed\u6cd5\u7684\u591a\u7aef\u6846\u67b6 Taro \u95ee\u9898\u6c47\u603b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://juejin.im/entry/5b987859e51d450ea2465ddd"}),"Taro \u5728\u4eac\u4e1c\u8d2d\u7269\u5c0f\u7a0b\u5e8f\u4e0a\u7684\u5b9e\u8df5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://juejin.im/post/5b3b786a6fb9a04f89780a9f"}),"Taro \u5b9e\u8df5 - TOPLIFE \u5c0f\u7a0b\u5e8f \u5f00\u53d1\u4f53\u9a8c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://juejin.im/post/5b3ce041e51d45194832aaf6"}),"Taro \u6280\u672f\u63ed\u79d8\uff1ataro-cli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://juejin.im/post/5b30b476518825749e4a1d91"}),"\u4e3a\u4f55\u6211\u4eec\u8981\u7528 React \u6765\u5199\u5c0f\u7a0b\u5e8f - Taro \u8bde\u751f\u8bb0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://zacksleo.github.io/2018/04/08/GitLab-CI%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%BF%9B%E8%A1%8C%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90%E5%92%8C%E6%8C%81%E7%BB%AD%E9%83%A8%E7%BD%B2/"}),"GitLab-CI \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8fdb\u884c\u6301\u7eed\u96c6\u6210\u548c\u6301\u7eed\u90e8\u7f72")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://zacksleo.github.io/2018/06/16/%E4%BD%BF%E7%94%A8Taro%E5%92%8CTypescript%E8%BF%9B%E8%A1%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%BC%80%E5%8F%91/"}),"\u4f7f\u7528 Taro \u548c Typescript \u8fdb\u884c\u5c0f\u7a0b\u5e8f\u5f00\u53d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://www.jianshu.com/p/7c27dbbc080f"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u53ca h5,\u57fa\u4e8e taro\uff0czoro \u6700\u4f73\u5b9e\u8df5\u63a2\u7d22")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://juejin.im/post/5c3c8c58f265da611a4813a9"}),"\u624b\u628a\u624b\u6559\u4f60\u7528 Taro \u6846\u67b6\u5199\u4e00\u4e2a\u56fe\u50cf\u5904\u7406\u7c7b\u5fae\u4fe1\u5c0f\u7a0b\u5e8f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://juejin.im/post/5c6a151f518825625e4ac830"}),"Taro \u591a\u7aef\u5f00\u53d1\u7684\u6b63\u786e\u59ff\u52bf\uff1a\u6253\u9020\u4e09\u7aef\u7edf\u4e00\u7684\u7f51\u6613\u4e25\u9009\uff08\u5c0f\u7a0b\u5e8f\u3001H5\u3001React Native\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/imageslr/taro-library#%E5%BC%95%E5%85%A5-redux"}),"Taro \u4e0e Redux \u7ed3\u5408\u4f7f\u7528\u6559\u7a0b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://juejin.im/post/5c788d28e51d4560a82be8d2"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u4e4b\u5f71\u5206\u8eab\u672f"))),(0,r.kt)("h2",i({},{id:"\u89c6\u9891\u6559\u7a0b"}),"\u89c6\u9891\u6559\u7a0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://www.bilibili.com/video/BV15A411b7cy"}),"\u51f9\u51f8\u6781\u5ba2\u6c99\u9f99\u300a\u7528 Webpack \u6253\u5305\u5c0f\u7a0b\u5e8f\u300b2020-04-17")," by ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/luckyadam"}),"luckyadam"))),(0,r.kt)("h2",i({},{id:"\u5f00\u53d1\u6280\u5de7"}),"\u5f00\u53d1\u6280\u5de7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://segmentfault.com/a/1190000015443614"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f wx.request \u5bf9\u4e8e JSON \u542b \\u2028 \u5904\u7406\u5f02\u5e38")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/js-newbee/taro-best-practices"}),"Taro \u6700\u4f73\u5b9e\u8df5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/TigerHee/taro-request"}),"\u5c01\u88c5 Taro.request\uff08\u62e6\u622a\u5668\uff0curl \u914d\u7f6e\u7b49\uff09"))),(0,r.kt)("h2",i({},{id:"\u793a\u4f8b\u9879\u76ee"}),"\u793a\u4f8b\u9879\u76ee"),(0,r.kt)("h3",i({},{id:"taro-3"}),"Taro 3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/TodoMVC/tree/react"}),"TodoMVC React \u7248")," (\u5c0f\u7a0b\u5e8f / H5)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/TodoMVC/tree/vue"}),"TodoMVC Vue \u7248")," (\u5c0f\u7a0b\u5e8f / H5)"),(0,r.kt)("li",{parentName:"ul"},"Taro \u7ec4\u4ef6\u5e93\u793a\u4f8b ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-components-sample"}),"taro-components-sample")," \uff08\u9ed8\u8ba4\u662f React\uff0cVue \u8bf7\u5207\u5230 Vue \u5206\u652f\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-zhihu-sample/tree/next"}),"\u4eff\u77e5\u4e4e\u5c0f\u7a0b\u5e8f React \u7248")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-zhihu-sample/tree/vue"}),"\u4eff\u77e5\u4e4e\u5c0f\u7a0b\u5e8f Vue \u7248")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-v2ex/tree/next"}),"V2ex \u5c0f\u7a0b\u5e8f\uff08TypeScript\uff09 React \u7248")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-v2ex/tree/vue"}),"V2ex \u5c0f\u7a0b\u5e8f\uff08TypeScript\uff09Vue \u7248")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-sample-weapp/tree/next"}),"\u4e0e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u539f\u751f\u878d\u5408\u7684\u793a\u4f8b\uff08React \u7248\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-sample-weapp/tree/vue"}),"\u4e0e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u539f\u751f\u878d\u5408\u7684\u793a\u4f8b\uff08Vue \u7248\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/didilinkin/tarojs-ts-cli"}),"Taro \u793a\u4f8b\u9879\u76ee(\u5185\u7f6e \u8ba1\u6570\u5668 \u4e0e \u5f02\u6b65\u8bf7\u6c42): Taro + Dva + Typescript + Immutable")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcaf ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/kala888/nice-router-taro"}),"nice-router-taro \u811a\u624b\u67b6\u9879\u76ee\uff0cDVA+\u6570\u636e\u9a71\u52a8\u9875\u9762+\u6570\u636e\u9a71\u52a8\u8868\u5355+\u6570\u636e\u9a71\u52a8 list"))),(0,r.kt)("h3",i({},{id:"taro-2"}),"Taro 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Taro Redux \u793a\u4f8b ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-redux-sample"}),"taro-redux-sample")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/TodoMVC"}),"TodoMVC")," (\u5c0f\u7a0b\u5e8f/H5/React Native)"),(0,r.kt)("li",{parentName:"ul"},"Taro \u7ec4\u4ef6\u5e93\u793a\u4f8b ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-components-sample/tree/master"}),"taro-components-sample")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/wsdo/taro-kit.git"}),"Taro \u811a\u624b\u67b6\uff08\u7279\u6027\uff1a \u5c01\u88c5 api\u3001redux \u4f18\u96c5\u96c6\u6210\u3001\u5f02\u5e38\u65e5\u5fd7\u4e0a\u62a5\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-zhihu-sample"}),"\u4eff\u77e5\u4e4e\u5c0f\u7a0b\u5e8f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/MoonCheung/zhihu-applet"}),"\u4eff\u77e5\u4e4e\u5c0f\u7a0b\u5e8f: Taro + Taro-UI + yapi API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-v2ex"}),"V2ex \u5c0f\u7a0b\u5e8f\uff08TypeScript\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-sample-weapp"}),"\u4e0e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u539f\u751f\u878d\u5408\u7684\u793a\u4f8b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/zhixiaoqiang/taroCloud"}),"\u8bb0\u65e5\u5e38\u5c0f\u7a0b\u5e8f Taro-UI + Rematch + \u4e91\u5f00\u53d1 + tcb-router")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcaf ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/kala888/nice-router-taro/tree/taro2"}),"nice-router-taro \u811a\u624b\u67b6\u9879\u76ee\uff0cDVA+\u6570\u636e\u9a71\u52a8\u9875\u9762+\u6570\u636e\u9a71\u52a8\u8868\u5355+\u6570\u636e\u9a71\u52a8 list"))),(0,r.kt)("h3",i({},{id:"taro-1"}),"Taro 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Taro \u7aef\u80fd\u529b\u793a\u4f8b ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-apis-sample"}),"taro-apis-sample")),(0,r.kt)("li",{parentName:"ul"},"Taro \u5b9e\u9a8c\u6027\u7279\u6027\u9879\u76ee ",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro-todo"}),"taro-todo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/zuoge85/taro-dva"}),"Taro \u6574\u5408 Dva \u793a\u4f8b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/FaureWu/ztaro"}),"taro \u7ed3\u5408 zoro \u5b8c\u6574\u65b9\u6848\u793a\u4f8b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/qwIvan/taro-demo-todolist"}),"Taro-UI + Rematch \u793a\u4f8b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/zcSkr/taro-dva-wxParse"}),"Taro+dva+wxParse \u591a\u7aef\u5bcc\u6587\u672c\u89e3\u6790\u793a\u4f8b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/hyyqcweb/taro-gank"}),"Taro+Taro-UI+es6 \u5165\u95e8 demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/SmallRuralDog/yundocs"}),"\u77e5\u8bc6\u4ed8\u8d39\u5c0f\u7a0b\u5e8f\uff08TypeScript\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/imageslr/taro-library"}),"\u4e66\u5e97\u5c0f\u7a0b\u5e8f\uff1a Taro + Redux + \u672c\u5730 Mock Server \u793a\u4f8b\u9879\u76ee")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/didilinkin/elf-taro-cli/tree/taro-1.2.8"}),"Taro \u793a\u4f8b\u9879\u76ee(\u5185\u7f6e \u8ba1\u6570\u5668 \u4e0e \u5f02\u6b65\u8bf7\u6c42): Taro + Dva + Typescript + Immutable"))),(0,r.kt)("h2",i({},{id:"\u7b2c\u4e09\u65b9\u5e93\u548c\u7ec4\u4ef6"}),"\u7b2c\u4e09\u65b9\u5e93\u548c\u7ec4\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/xioxin/taro-f2"}),"f2 \u56fe\u8868\u5c01\u88c5 \u517c\u5bb9 H5 \u548c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/WsmDyj/echarts-for-taro"}),"echarts \u56fe\u8868\u5c01\u88c5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/chuyun/taro-plugin-canvas"}),"taro-plugin-canvas - \u57fa\u4e8e Taro \u7684\u5c0f\u7a0b\u5e8f\u6d77\u62a5\u7ec4\u4ef6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/guozimo/taro-bdMark"}),"taro-bdmark - \u57fa\u4e8e Taro \u7684\u767e\u5ea6\u5c0f\u7a0b\u5e8f md \u89e3\u6790\u5668")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/fjc0k/mounted"}),"Mounted - \u4e00\u6b3e\u57fa\u4e8e Taro \u7684\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5e93")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/fjc0k/taro-axios"}),"taro-axios - \u5728 Taro \u4e2d\u4f7f\u7528 axios")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd28",(0,r.kt)("a",i({parentName:"li"},{href:"https://github.com/mpfast/TaroCreator"}),"TaroCreator - \u57fa\u4e8e Taro UI \u7684\u5c0f\u7a0b\u5e8f\u53ef\u89c6\u5316\u8bbe\u8ba1\u5de5\u5177"))))}s.isMDXComponent=!0}}]);