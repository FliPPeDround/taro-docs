(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[29884],{79874:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25537:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},10680:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(93106),o=n(42223),a=n(72652),l=n(4706),c={iconEdit:"iconEdit_hTmR"};function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e){var{className:t}=e,n=s(e,["className"]);return r.createElement("svg",i({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(c.iconEdit,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function p({editUrl:e}){return r.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:a.k.common.editThisPage},r.createElement(u,null),r.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},29192:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(93106),o=n(4706),a=n(42223),l=n(67424),c=n(93750),i={anchorWithStickyNavbar:"anchorWithStickyNavbar_wT7u",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_geRW"};function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e){var{as:t,id:n}=e,p=u(e,["as","id"]);const{navbar:{hideOnScroll:m}}=(0,l.L)();if("h1"===t||!n)return r.createElement(t,s({},p,{id:void 0}));const d=(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof p.children?p.children:n});return r.createElement(t,s({},p,{className:(0,o.Z)("anchor",m?i.anchorWithHideOnScrollNavbar:i.anchorWithStickyNavbar,p.className),id:n}),p.children,r.createElement(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":d,title:d},"\u200b"))}},41289:function(e,t,n){"use strict";n.d(t,{Z:function(){return He}});var r=n(93106),o=n(79874),a=n(98719);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=n(81600),s=n(4706),u=n(59402),p=n(67424);function m(){const{prism:e}=(0,p.L)(),{colorMode:t}=(0,u.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var d,f=n(72652),g=n(25537),h=n.n(g);const y=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),v=RegExp("\\{(?<range>[\\d,-]+)\\}"),b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function O(e,t){const n=e.map((e=>{const{start:n,end:r}=b[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function E(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&v.test(a)){const e=a.match(v).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return O(["js","jsBlock"],t);case"jsx":case"tsx":return O(["js","jsBlock","jsx"],t);case"html":return O(["js","jsBlock","html"],t);case"python":case"py":case"bash":return O(["bash"],t);case"markdown":case"md":return O(["html","jsx","bash"],t);default:return O(Object.keys(b),t)}}(r,o),c=n.split("\n"),i=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),p=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let d=0;d<c.length;){const e=c[d].match(l);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${d},`:u[t]?i[u[t]].start=d:p[t]&&(i[p[t]].range+=`${i[p[t]].start}-${d-1},`),c.splice(d,1)}n=c.join("\n");const m={};return Object.entries(i).forEach((([e,{range:t}])=>{h()(t).forEach((t=>{var n;null!==(n=(d=m)[t])&&void 0!==n||(d[t]=[]),m[t].push(e)}))})),{lineClassNames:m,code:n}}var k={codeBlockContainer:"codeBlockContainer_pk0M"};function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function N(e){var{as:t}=e,n=w(e,["as"]);const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,r])=>{const o=t[e];o&&"string"==typeof r&&(n[o]=r)})),n}(m());return r.createElement(t,j({},n,{style:o,className:(0,s.Z)(n.className,k.codeBlockContainer,f.k.common.codeBlock)}))}var C={codeBlockContent:"codeBlockContent_boVk",codeBlockTitle:"codeBlockTitle_EBLC",codeBlock:"codeBlock_Wcy3",codeBlockStandalone:"codeBlockStandalone_t33V",codeBlockLines:"codeBlockLines_Y3gs",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_rgtL",buttonGroup:"buttonGroup_s5vU"};function B({children:e,className:t}){return r.createElement(N,{as:"pre",tabIndex:0,className:(0,s.Z)(C.codeBlockStandalone,"thin-scrollbar",t)},r.createElement("code",{className:C.codeBlockLines},e))}var P=n(11734);const T={attributes:!0,characterData:!0,childList:!0,subtree:!0};function x(e,t){const[n,o]=(0,r.useState)(),a=(0,r.useCallback)((()=>{var t;o(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{a()}),[a]),function(e,t,n=T){const o=(0,P.zX)(t),a=(0,P.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var L={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},_={Prism:n(9952).Z,theme:L};function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}var I=/\r\n|\r|\n/,z=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},W=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function D(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var A=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),S(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=Z({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=Z({},n,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=n})),S(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=Z({},D(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?Z({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),S(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),S(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=Z({},D(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?Z({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),S(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,c=[],i=[c];l>-1;){for(;(a=r[l]++)<o[l];){var s=void 0,u=t[l],p=n[l][a];if("string"==typeof p?(u=l>0?u:["plain"],s=p):(u=W(u,p.type),p.alias&&(u=W(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(I),d=m.length;c.push({types:u,content:m[0]});for(var f=1;f<d;f++)z(c),i.push(c=[]),c.push({types:u,content:m[f]})}else l++,t.push(u),n.push(s),r.push(0),o.push(s.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return z(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),M=A,R={codeLine:"codeLine_KMfF",codeLineNumber:"codeLineNumber_jhDW",codeLineContent:"codeLineContent_BS2T"};function H(){return H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}function V({line:e,classNames:t,showLineNumbers:n,getLineProps:o,getTokenProps:a}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const l=o({line:e,className:(0,s.Z)(t,n&&R.codeLine)}),c=e.map(((e,t)=>r.createElement("span",H({key:t},a({token:e,key:t})))));return r.createElement("span",H({},l),n?r.createElement(r.Fragment,null,r.createElement("span",{className:R.codeLineNumber}),r.createElement("span",{className:R.codeLineContent},c)):c,r.createElement("br",null))}var $=n(42223);function F(){return F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(this,arguments)}function G(e){return r.createElement("svg",F({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function U(e){return r.createElement("svg",q({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}var Q={copyButtonCopied:"copyButtonCopied_znTe",copyButtonIcons:"copyButtonIcons_ADG3",copyButtonIcon:"copyButtonIcon_ynxm",copyButtonSuccessIcon:"copyButtonSuccessIcon_mkQW"};function X({code:e,className:t}){const[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection(),a=o.rangeCount>0&&o.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(e),o(!0),a.current=window.setTimeout((()=>{o(!1)}),1e3)}),[e]);return(0,r.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),r.createElement("button",{type:"button","aria-label":n?(0,$.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,$.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,$.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",t,Q.copyButton,n&&Q.copyButtonCopied),onClick:l},r.createElement("span",{className:Q.copyButtonIcons,"aria-hidden":"true"},r.createElement(G,{className:Q.copyButtonIcon}),r.createElement(U,{className:Q.copyButtonSuccessIcon})))}function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function K(e){return r.createElement("svg",Y({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}var J={wordWrapButtonIcon:"wordWrapButtonIcon_cD8F",wordWrapButtonEnabled:"wordWrapButtonEnabled_r2eU"};function ee({className:e,onClick:t,isEnabled:n}){const o=(0,$.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:t,className:(0,s.Z)("clean-btn",e,n&&J.wordWrapButtonEnabled),"aria-label":o,title:o},r.createElement(K,{className:J.wordWrapButtonIcon,"aria-hidden":"true"}))}function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}function ne({children:e,className:t="",metastring:n,title:o,showLineNumbers:a,language:l}){const{prism:{defaultLanguage:c,magicComments:i}}=(0,p.L)();var u;const d=null!==(u=null!=l?l:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==u?u:c,f=m(),g=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),l=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return x(a,c),(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:l}}(),h=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(y))||void 0===t?void 0:t.groups.title)&&void 0!==n?n:""}(n)||o,{lineClassNames:v,code:b}=E(e,{metastring:n,language:d,magicComments:i}),O=null!=a?a:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return r.createElement(N,{as:"div",className:(0,s.Z)(t,d&&!t.includes(`language-${d}`)&&`language-${d}`)},h&&r.createElement("div",{className:C.codeBlockTitle},h),r.createElement("div",{className:C.codeBlockContent},r.createElement(M,te({},_,{theme:f,code:b,language:null!=d?d:"text"}),(({className:e,tokens:t,getLineProps:n,getTokenProps:o})=>r.createElement("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,s.Z)(e,C.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,s.Z)(C.codeBlockLines,O&&C.codeBlockLinesWithNumbering)},t.map(((e,t)=>r.createElement(V,{key:t,line:e,getLineProps:n,getTokenProps:o,classNames:v[t],showLineNumbers:O}))))))),r.createElement("div",{className:C.buttonGroup},(g.isEnabled||g.isCodeScrollable)&&r.createElement(ee,{className:C.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),r.createElement(X,{className:C.codeButton,code:b}))))}function re(){return re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},re.apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ae(e){var{children:t}=e,n=oe(e,["children"]);const o=(0,i.Z)(),a=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof a?ne:B;return r.createElement(l,re({key:String(o)},n),a)}function le(){return le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le.apply(this,arguments)}var ce=n(93750);function ie(){return ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ie.apply(this,arguments)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}var pe=n(26385),me={details:"details_Bljk",isBrowser:"isBrowser_KmQG",collapsibleContent:"collapsibleContent_WFLX"};function de(){return de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}function fe(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ge(e){return!!e&&("SUMMARY"===e.tagName||ge(e.parentElement))}function he(e,t){return!!e&&(e===t||he(e.parentElement,t))}function ye(e){var{summary:t,children:n}=e,o=fe(e,["summary","children"]);const a=(0,i.Z)(),l=(0,r.useRef)(null),{collapsed:c,setCollapsed:u}=(0,pe.u)({initialState:!o.open}),[p,m]=(0,r.useState)(o.open),d=r.isValidElement(t)?t:r.createElement("summary",null,null!=t?t:"Details");return r.createElement("details",de({},o,{ref:l,open:p,"data-collapsed":c,className:(0,s.Z)(me.details,a&&me.isBrowser,o.className),onMouseDown:e=>{ge(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ge(t)&&he(t,l.current)&&(e.preventDefault(),c?(u(!1),m(!0)):u(!0))}}),d,r.createElement(pe.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),m(!e)}},r.createElement("div",{className:me.collapsibleContent},n)))}var ve={details:"details__OMc"};function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}const Oe="alert alert--info";function Ee(e){var t=be({},e);return r.createElement(ye,be({},t,{className:(0,s.Z)(Oe,ve.details,t.className)}))}function ke(){return ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ke.apply(this,arguments)}var je=n(29192);function we(){return we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}function Ne(e){return r.createElement(je.Z,we({},e))}var Ce={containsTaskList:"containsTaskList_V588"};function Be(){return Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Be.apply(this,arguments)}function Pe(e){if(void 0!==e)return(0,s.Z)(e,(null==e?void 0:e.includes("contains-task-list"))&&Ce.containsTaskList)}var Te={img:"img__Vhd"};function xe(){return xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xe.apply(this,arguments)}var Le="admonition_ZYm_",_e="admonitionHeading_rRLe",Se="admonitionIcon_GbB4",Ze="admonitionContent_nMgc";function Ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ze={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement($.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement($.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement($.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement($.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement($.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},We={secondary:"note",important:"info",success:"tip",warning:"danger"};function De(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>{var t;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null===(t=e.props)||void 0===t?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);var o;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ie(e,t,n[t])}))}return e}({},e,{title:null!==(o=e.title)&&void 0!==o?o:t,children:n})}function Ae(){return Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ae.apply(this,arguments)}const Me={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){var t;if((null===(t=e.props)||void 0===t?void 0:t.mdxType)&&e.props.originalType){const t=e.props,{mdxType:n,originalType:o}=t,a=c(t,["mdxType","originalType"]);return r.createElement(e.props.originalType,a)}return e}(e):e));return r.createElement(a.Z,l({},e),t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null===(n=e.props)||void 0===n?void 0:n.mdxType)}))?r.createElement("code",le({},e)):r.createElement(ae,le({},e))},a:function(e){return r.createElement(ce.Z,ie({},e))},pre:function(e){var t;return r.createElement(ae,ue({},(0,r.isValidElement)(e.children)&&"code"===(null===(t=e.children.props)||void 0===t?void 0:t.originalType)?e.children.props:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){se(e,t,n[t])}))}return e}({},e)))},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return r.isValidElement(e)&&"summary"===(null===(t=e.props)||void 0===t?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(Ee,ke({},e,{summary:n}),o)},ul:function(e){return r.createElement("ul",Be({},e,{className:Pe(e.className)}))},img:function(e){return r.createElement("img",xe({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,Te.img))}));var t},h1:e=>r.createElement(Ne,Ae({as:"h1"},e)),h2:e=>r.createElement(Ne,Ae({as:"h2"},e)),h3:e=>r.createElement(Ne,Ae({as:"h3"},e)),h4:e=>r.createElement(Ne,Ae({as:"h4"},e)),h5:e=>r.createElement(Ne,Ae({as:"h5"},e)),h6:e=>r.createElement(Ne,Ae({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:o,icon:a}=De(e),l=function(e){var t;const n=null!==(t=We[e])&&void 0!==t?t:e,r=ze[n];return r||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),ze.info)}(n),c=null!=o?o:l.label,{iconComponent:i}=l,u=null!=a?a:r.createElement(i,null);return r.createElement("div",{className:(0,s.Z)(f.k.common.admonition,f.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,Le)},r.createElement("div",{className:_e},r.createElement("span",{className:Se},u),c),r.createElement("div",{className:Ze},t))},mermaid:()=>null};var Re=Me;function He({children:e}){return r.createElement(o.Zo,{components:Re},e)}},27226:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(93106),o=n(4706),a=n(93750);function l(e){const{permalink:t,title:n,subLabel:l,isNext:c}=e;return r.createElement(a.Z,{className:(0,o.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&r.createElement("div",{className:"pagination-nav__sublabel"},l),r.createElement("div",{className:"pagination-nav__label"},n))}},75821:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(93106),o=n(4706),a=n(93750),l={tag:"tag_hxGR",tagRegular:"tagRegular_g_tj",tagWithCount:"tagWithCount_ff_b"};function c({permalink:e,label:t,count:n}){return r.createElement(a.Z,{href:e,className:(0,o.Z)(l.tag,n?l.tagWithCount:l.tagRegular)},t,n&&r.createElement("span",null,n))}},43542:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(93106),o=n(4706),a=n(42223),l=n(75821),c={tags:"tags__w8g",tag:"tag_m3kt"};function i({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,o.Z)(c.tags,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:c.tag},r.createElement(l.Z,{label:e,permalink:t}))))))}}}]);