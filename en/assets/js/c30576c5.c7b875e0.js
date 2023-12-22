"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[91033],{79874:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(93106);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91264:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(93106),a=t(4706),o={tabItem:"tabItem_FBI3"};function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function i({children:e,hidden:n,className:t}){return r.createElement("div",l({role:"tabpanel",className:(0,a.Z)(o.tabItem,t)},{hidden:n}),e)}},8602:function(e,n,t){t.d(n,{Z:function(){return O}});var r=t(93106),a=t(4706),o=t(29369),l=t(27907),i=t(3111),s=t(65009),u=t(42615);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){return function(e){var n,t;return null!==(t=null===(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:p(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m({value:e,tabValues:n}){return n.some((n=>n.value===e))}function f({queryString:e=!1,groupId:n}){const t=(0,l.k6)(),a=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),o=(0,i._X)(a),s=(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({},t.location,{search:n.toString()}))}),[a,t]);return[o,s]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[s,c]=f({queryString:t,groupId:a}),[p,b]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,a]=(0,u.Nk)(n);return[t,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:a}),y=(()=>{const e=null!=s?s:p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var y=t(81600),h={tabList:"tabList_qAna",tabItem:"tabItem_ulzt"};function v(){return v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}function g({className:e,block:n,selectedValue:t,selectValue:l,tabValues:i}){const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const n=e.currentTarget,r=s.indexOf(n),a=i[r].value;a!==t&&(u(n),l(a))},p=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;var t;n=null!==(t=s[r])&&void 0!==t?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;var r;n=null!==(r=s[t])&&void 0!==r?r:s[s.length-1];break}}null==n||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e)},i.map((({value:e,label:n,attributes:o})=>r.createElement("li",v({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>s.push(e),onKeyDown:p,onClick:c},o,{className:(0,a.Z)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function k({lazy:e,children:n,selectedValue:t}){const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function w(e){const n=b(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",h.tabList)},r.createElement(g,v({},e,n)),r.createElement(k,v({},e,n)))}function O(e){const n=(0,y.Z)();return r.createElement(w,v({key:String(n)},e))}},34115:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});t(93106);var r=t(79874),a=t(8602),o=t(91264);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={title:"Use CSS-in-JS"},u=void 0,c={unversionedId:"css-in-js",id:"version-4.x/css-in-js",title:"Use CSS-in-JS",description:"linaria",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-4.x/css-in-js.mdx",sourceDirName:".",slug:"/css-in-js",permalink:"/taro-docs/en/docs/css-in-js",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/css-in-js.mdx",tags:[],version:"4.x",frontMatter:{title:"Use CSS-in-JS"},sidebar:"docs",previous:{title:"Use CSS Modules",permalink:"/taro-docs/en/docs/css-modules"},next:{title:"\u4f7f\u7528 Tailwind CSS",permalink:"/taro-docs/en/docs/tailwindcss"}},p={},d=[{value:"linaria",id:"linaria",level:2},{value:"Fower",id:"fower",level:2}],m={toc:d},f="wrapper";function b(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)(f,l({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",l({},{id:"linaria"}),"linaria"),(0,r.kt)("p",null,"There is a common CSS-in-JS solution in the React community: ",(0,r.kt)("a",l({parentName:"p"},{href:"https://github.com/styled-components/styled-components"}),"styled-components"),"\u3002Unfortunately, however, ",(0,r.kt)("inlineCode",{parentName:"p"},"styled-components")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"<style>")," tag to dynamically control styles, and there is no similar solution in mini program. But we can achieve the same functionality with ",(0,r.kt)("a",l({parentName:"p"},{href:"https://github.com/callstack/linaria"}),"linaria"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"linaria")," mainly provides the following features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API that approximates ",(0,r.kt)("inlineCode",{parentName:"li"},"styled-components")),(0,r.kt)("li",{parentName:"ul"},"TypeScript support"),(0,r.kt)("li",{parentName:"ul"},"Zero runtime")),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"linaria")," is also very simple, first installing the dependencies via NPM:"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"$ pnpm i @linaria/core @linaria/react @linaria/babel-preset @linaria/webpack-loader\n")),(0,r.kt)("p",null,"Next, configure ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js")," in the project root directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'}),"module.exports = {\n  presets: [\n    ['taro', {\n      framework: 'react',\n      ts: true\n    }],\n    '@linaria' // \u6dfb\u52a0\u5230 babel-preset\n  ]\n}\n")),(0,r.kt)("p",null,"After that, configure ",(0,r.kt)("inlineCode",{parentName:"p"},"config/index.js")),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  mini: {\n    webpackChain(chain, webpack) {\n      // linaria/loader options refer to https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md#webpack\n      chain.module\n        .rule('script')\n        .use('linariaLoader')\n        .loader('@linaria/webpack-loader')\n        .options({\n          sourceMap: process.env.NODE_ENV !== 'production',\n        })\n    }\n  },\n  h5: {\n    webpackChain(chain, webpack) {\n      chain.module\n        .rule('script')\n        .use('linariaLoader')\n        .loader('@linaria/webpack-loader')\n        .options({\n          sourceMap: process.env.NODE_ENV !== 'production',\n        })\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Finally, create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"linaria.config.js")," in the root of the project"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:'title="linaria.config.js"',title:'"linaria.config.js"'}),'// linaria configuration details: https://github.com/callstack/linaria/blob/master/docs/CONFIGURATION.md#options\nmodule.exports = {\n  rules: [\n    {\n      action: require("@linaria/shaker").default,\n    },\n    {\n      test: /node_modules[\\/\\\\](?!@tarojs)/,\n      action: "ignore"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"In the business code we can use it like this."),(0,r.kt)(a.Z,{defaultValue:"JS",values:[{label:"JavaScript",value:"JS"},{label:"TypeScript",value:"TS"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"JS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx"}),"import { styled } from '@linaria/react'\nimport { View } from '@tarojs/components'\nimport React from 'react'\n\nconst Title = styled(View)`\n  color: ${props => props.color}\n`;\n\nconst Index = () => {\n  return <Title color='red'>\n    Hello World!\n  </Title>\n}\n\nexport default Index\n"))),(0,r.kt)(o.Z,{value:"TS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"import { styled } from '@linaria/react'\nimport { View, ViewProps } from '@tarojs/components'\n\nimport React from 'react'\nimport './index.scss'\n\ndeclare type Component<TProps> = ((props: TProps) => any) | {\n  new (props: TProps): any\n}\n\ntype VPS = ViewProps & { style?: React.CSSProperties }\ntype TP = VPS & { color: string }\nconst Title = styled<TP, VPS, Component<TP>>(View)`\n  color: ${props => props.color}\n`\nconst Index: React.FC = () => {\n  return <Title color='red'>\n    Hello World!\n  </Title>\n}\n\nexport default Index\n")))),(0,r.kt)("h2",l({},{id:"fower"}),"Fower"),(0,r.kt)("p",null,"The community has another option ",(0,r.kt)("strong",{parentName:"p"},"Fower"),"\uff0c",(0,r.kt)("a",l({parentName:"p"},{href:"https://fower.vercel.app/docs/use-with-taro"}),"Documentation")))}b.isMDXComponent=!0}}]);