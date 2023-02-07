"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[47223],{79874:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50907:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});t(93106);var r=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"CLI Command"},c=void 0,l={unversionedId:"cli",id:"cli",title:"CLI Command",description:"Common Taro CLI commands.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/cli.md",sourceDirName:".",slug:"/cli",permalink:"/taro-docs/en/docs/next/cli",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/cli.md",tags:[],version:"current",frontMatter:{title:"CLI Command"},sidebar:"docs",previous:{title:"Directory Structure",permalink:"/taro-docs/en/docs/next/folder"},next:{title:"Compile Configuration",permalink:"/taro-docs/en/docs/next/config"}},s={},u=[{value:"View all Taro commands and help",id:"view-all-taro-commands-and-help",level:3},{value:"Environmental and Dependency Testing",id:"environmental-and-dependency-testing",level:3},{value:"Taro Doctor",id:"taro-doctor",level:3},{value:"Quickly create new pages",id:"quickly-create-new-pages",level:3},{value:"CLI Configuration",id:"cli-configuration",level:3}],p={toc:u};function d(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Common Taro CLI commands."),(0,r.kt)("h3",o({},{id:"view-all-taro-commands-and-help"}),"View all Taro commands and help"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ taro --help\n")),(0,r.kt)("h3",o({},{id:"environmental-and-dependency-testing"}),"Environmental and Dependency Testing"),(0,r.kt)("p",null,"Taro provides commands to check the version of Taro environment and dependencies with one click, so that you can check the environment and dependencies of your project and troubleshoot environment problems. When raising an issue, please include the information printed in ",(0,r.kt)("inlineCode",{parentName:"p"},"taro info")," to help developers locate the problem quickly."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ taro info\n\ud83d\udc7d Taro v3.0.7\n\n\n\n  Taro CLI 3.0.7 environment info:\n    System:\n      OS: macOS High Sierra 10.13.6\n      Shell: 5.3 - /bin/zsh\n    Binaries:\n      Node: 13.14.0 - ~/.nvm/versions/node/v13.14.0/bin/node\n      Yarn: 1.22.4 - ~/.nvm/versions/node/v13.14.0/bin/yarn\n      npm: 6.14.4 - ~/.nvm/versions/node/v13.14.0/bin/npm\n    npmPackages:\n      @tarojs/components: 1.3.27 => 1.3.27\n      @tarojs/router: 1.3.27 => 1.3.27\n      @tarojs/taro: 1.3.27 => 1.3.27\n      @tarojs/taro-h5: 1.3.27 => 1.3.27\n      @tarojs/webpack-runner: 1.3.27 => 1.3.27\n      eslint-config-taro: 1.3.27 => 1.3.27\n      eslint-plugin-taro: 1.3.27 => 1.3.27\n      nerv-devtools: 1.5.5 => 1.5.5\n      nervjs: 1.5.5 => 1.5.5\n\n")),(0,r.kt)("h3",o({},{id:"taro-doctor"}),"Taro Doctor"),(0,r.kt)("p",null,"Taro Doctor acts like a doctor who can diagnose the project's dependencies, settings, structure, and the specification of the code for problems and try to give solutions."),(0,r.kt)("p",null,"But unlike a real doctor, Taro Doctor doesn't need to wait in line to register and doesn't cost anything. You just need to run the command: ",(0,r.kt)("inlineCode",{parentName:"p"},"taro doctor")," in the terminal, as in the picture."),(0,r.kt)("p",null,(0,r.kt)("img",o({parentName:"p"},{src:"https://img10.360buyimg.com/ling/jfs/t1/46613/36/5573/202581/5d357d14E6f0df7e1/fc026be7dc69dcf2.png",alt:"Taro Doctor Diagnostic Result Chart"}))),(0,r.kt)("h3",o({},{id:"quickly-create-new-pages"}),"Quickly create new pages"),(0,r.kt)("p",null,"Taro create --name ","[page name]"," can quickly generate new page files in the current project's pages directory and populate the base code, making it a great tool for improving development efficiency."),(0,r.kt)("h3",o({},{id:"cli-configuration"}),"CLI Configuration"),(0,r.kt)("p",null,"Taro creates a .taro folder in the user's root directory, where .taro/index.json is used to store CLI-related configuration."),(0,r.kt)("p",null,"Developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"taro config")," command to perform a number of operations on configuration items."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# View Usage\n$ taro config --help\n# Set the value of the configuration item <key> to <value>\n$ taro config set <key> <value>\n# Read configuration item <key>\n$ taro config get <key>\n# Delete configuration item <key>\n$ taro config delete <key>\n# Print all configuration items\n$ taro config list [--json]\n")))}d.isMDXComponent=!0}}]);