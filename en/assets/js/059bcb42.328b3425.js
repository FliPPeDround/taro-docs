"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[29377],{79874:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39569:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});t(93106);var r=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"Render Props"},s=void 0,c={unversionedId:"render-props",id:"version-3.x/render-props",title:"Render Props",description:"Since 1.3.5 support",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/render-props.md",sourceDirName:".",slug:"/render-props",permalink:"/taro-docs/en/docs/render-props",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/render-props.md",tags:[],version:"3.x",frontMatter:{title:"Render Props"}},p={},l=[{value:"announcements",id:"announcements",level:3}],u={toc:l};function d(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since 1.3.5 support")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"render props")," refers to a Taro between components using a value for the function of prop to share code simple technology."),(0,r.kt)("p",null,"With render prop components to receive a function, the function returns a Taro element and call it rather than to realize his own rendering logic."),(0,r.kt)("p",null,"For example, suppose we have a component, it can present a picture of a cat chasing mouse on the screen. We may use ",(0,r.kt)("inlineCode",{parentName:"p"},"<Cat mouse={{ x, y }} prop />")," to tell the coordinates of the cursor components to let it know where the picture should be on the screen."),(0,r.kt)("p",null,"We can provide with a function of the prop ",(0,r.kt)("inlineCode",{parentName:"p"},"<Mouse>")," components, it can dynamically decide what needs to be rendered, rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"<Cat>")," hardcoded into ",(0,r.kt)("inlineCode",{parentName:"p"},"<Mouse>")," components, and effectively change the rendering results."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"// cat.js\nimport catImage from './cat.jpg'\nclass Cat extends Taro.Component {\n  static defaultProps = {\n    mouse: {\n      x: 0,\n      y: 0\n    }\n  }\n\n  render() {\n    const { mouse } = this.props;\n    return (\n      <Image src={catImage} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />\n    );\n  }\n}\n\n// mouse.js\nclass Mouse extends Taro.Component {\n  constructor(props) {\n    super(props);\n    this.handleMouseMove = this.handleClick.bind(this);\n    this.state = { x: 0, y: 0 };\n  }\n\n  handleClick(event) {\n    const { x, y }  = event.detail\n    this.setState({\n      x,\n      y\n    });\n  }\n\n  render() {\n    return (\n      <View style={{ height: '100%' }} onClick={this.handleClick}>\n\n        {/*\n          We can put the prop as a function, dynamically adjust the rendering content.\n        */}\n        {this.props.renderCat(this.state)}\n      </View>\n    );\n  }\n}\n\n// MouseTracker.js\nclass MouseTracker extends Taro.Component {\n  render() {\n    return (\n      <View>\n        <View>\u70b9\u51fb\u9f20\u6807!</View>\n        {/*\n          Mouse \u5982\u4f55\u6e32\u67d3\u7531 MouseTracker \u7684\u72b6\u6001\u63a7\u5236\n        */}\n        <Mouse renderCat={mouse => (\n          <Cat mouse={mouse} />\n        )}/>\n      </View>\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Now, we have provided a render method let ",(0,r.kt)("inlineCode",{parentName:"p"},"<Mouse>")," can dynamically decide what needs to render, rather than cloning ",(0,r.kt)("inlineCode",{parentName:"p"},"<Mouse>")," components and then hard-coded to solve specific cases."),(0,r.kt)("p",null,"More specifically, ",(0,r.kt)("strong",{parentName:"p"},"render prop is a component to tell what you need to render content function prop"),"."),(0,r.kt)("p",null,"The technology to make our Shared behavior is very easy. To get this behavior, as long as the rendering with a render the prop ",(0,r.kt)("inlineCode",{parentName:"p"},"<Mouse>")," components will be able to tell it to the current Mouse coordinates (x, y) what to render."),(0,r.kt)("h3",o({},{id:"announcements"}),"announcements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"render props")," is based on the mini-app ",(0,r.kt)("inlineCode",{parentName:"strong"},"slot")," mechanism.")," So it is limited by the and restrictions as much of the ",(0,r.kt)("inlineCode",{parentName:"p"},"children and composition"),", the more details, please check the document",(0,r.kt)("a",o({parentName:"p"},{href:"/taro-docs/en/docs/children#announcements"}),"children and combination"),"."))}d.isMDXComponent=!0}}]);