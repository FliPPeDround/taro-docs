"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[56089],{79874:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var o=t(93106);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),u=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),g=a,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||r;return t?o.createElement(m,i(i({ref:n},s),{},{components:t})):o.createElement(m,i({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31164:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});t(93106);var o=t(79874);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={title:"Single-step Debugging Configuration"},l=void 0,p={unversionedId:"debug-config",id:"version-3.x/debug-config",title:"Single-step Debugging Configuration",description:"With the cross-platform code single-step debugging capability provided by VSCode, we can greatly improve the speed of application development based on the Taro development framework, and focus on reducing the complexity of configuration for Windows platform as more mature tools are already available for other platforms.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/debug-config.md",sourceDirName:".",slug:"/debug-config",permalink:"/taro-docs/en/docs/debug-config",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/debug-config.md",tags:[],version:"3.x",frontMatter:{title:"Single-step Debugging Configuration"},sidebar:"docs",previous:{title:"Taro Repository Overview",permalink:"/taro-docs/en/docs/codebase-overview"},next:{title:"Implementation Details",permalink:"/taro-docs/en/docs/implement-note"}},u={},s=[{value:"\u4e00\u3001Development Environment Setup",id:"\u4e00development-environment-setup",level:2},{value:"1. Install Node.js",id:"1-install-nodejs",level:3},{value:"2. Install VSCode",id:"2-install-vscode",level:3},{value:"3. Taro Source Code Download",id:"3-taro-source-code-download",level:3},{value:"4. Source code Dependency Installation",id:"4-source-code-dependency-installation",level:3},{value:"\u4e8c\u3001CLI Debugging",id:"\u4e8ccli-debugging",level:2},{value:"1. Configure VSCode Debugging Parameters",id:"1-configure-vscode-debugging-parameters",level:3},{value:"taro-build Debugging",id:"taro-build-debugging",level:4},{value:"taro-init Debugging",id:"taro-init-debugging",level:4},{value:"2. Compiling Subpackages",id:"2-compiling-subpackages",level:3},{value:"3.Links to unpublished libraries",id:"3links-to-unpublished-libraries",level:3},{value:"4.Start up debugging",id:"4start-up-debugging",level:3}],c={toc:s};function d(e){var{components:n}=e,t=r(e,["components"]);return(0,o.kt)("wrapper",a({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"With the cross-platform code single-step debugging capability provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"VSCode"),", we can greatly improve the speed of application development based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro")," development framework, and focus on reducing the complexity of configuration for Windows platform as more mature tools are already available for other platforms.")),(0,o.kt)("h2",a({},{id:"\u4e00development-environment-setup"}),"\u4e00\u3001Development Environment Setup"),(0,o.kt)("p",null,"First, prepare the basic development environment for ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro")," on Windows, as follows (existing development environments can be skipped)."),(0,o.kt)("h3",a({},{id:"1-install-nodejs"}),"1. Install Node.js"),(0,o.kt)("p",null,"It is recommended to install ",(0,o.kt)("inlineCode",{parentName:"p"},"10.15")," or above,  download ",(0,o.kt)("a",a({parentName:"p"},{href:"https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi",title:" node.js"}),"Node.js")),(0,o.kt)("h3",a({},{id:"2-install-vscode"}),"2. Install VSCode"),(0,o.kt)("p",null,"After installing the latest ",(0,o.kt)("inlineCode",{parentName:"p"},"VSCode"),", it is recommended to install the following plugins:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ESlint")," - Code Specification"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TSlint")," - syntax checking")),(0,o.kt)("h3",a({},{id:"3-taro-source-code-download"}),"3. Taro Source Code Download"),(0,o.kt)("p",null,"Download: ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro.git",title:"Taro"}),"Taro"),", Default is 2.x branch, if you want to debug Taro Next, please switch to ",(0,o.kt)("strong",{parentName:"p"},"next")," branch first."),(0,o.kt)("h3",a({},{id:"4-source-code-dependency-installation"}),"4. Source code Dependency Installation"),(0,o.kt)("p",null,"1.Use ",(0,o.kt)("inlineCode",{parentName:"p"},"VSCode")," to open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro")," source directory, and execute ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm i")," in the root directory to install the dependencies required for the project (the first installation will take a long time, please be patient)"),(0,o.kt)("p",null,"2.Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm build")," to compile all modules"),(0,o.kt)("h2",a({},{id:"\u4e8ccli-debugging"}),"\u4e8c\u3001CLI Debugging"),(0,o.kt)("h3",a({},{id:"1-configure-vscode-debugging-parameters"}),"1. Configure VSCode Debugging Parameters"),(0,o.kt)("p",null,"Open the ",(0,o.kt)("strong",{parentName:"p"},".vscode")," folder in the root of the Taro source code in VSCode and edit ",(0,o.kt)("strong",{parentName:"p"},"launch.json"),"."),(0,o.kt)("p",null,"The launch.json has the following preset configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'}),'{\n  // ...\n  "configurations": [\n    //...\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "CLI debug",\n      "program": "${workspaceFolder}/packages/taro-cli/bin/taro",\n      // "cwd": "${project absolute path}",\n      // "args": [\n      //   "build",\n      //   "--type",\n      //   "weapp",\n      //   "--watch"\n      // ],\n      "skipFiles": [\n        "<node_internals>/**"\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Modification steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"modify ",(0,o.kt)("strong",{parentName:"li"},"cwd")," option to be the target working directory to be debugged"),(0,o.kt)("li",{parentName:"ol"},"modify args to be the parameter of the command to be debugged")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The detailed configuration of launch.json can be found in ",(0,o.kt)("a",a({parentName:"p"},{href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"}),"VSCode Documentation"))),(0,o.kt)("p",null,"Example\uff1a"),(0,o.kt)("h4",a({},{id:"taro-build-debugging"}),"taro-build Debugging"),(0,o.kt)("p",null,"Suppose you need to debug the ",(0,o.kt)("inlineCode",{parentName:"p"},"taro build --weapp --watch")," command for the test project."),(0,o.kt)("p",null,"You can configure launch.json like this."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'}),'{\n  // ...\n  "configurations": [\n    //...\n    {\n      // ...\n      "cwd": "/Users/User/Desktop/test",\n      "args": [\n        "build",\n        "--type",\n        "weapp",\n        "--watch"\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h4",a({},{id:"taro-init-debugging"}),"taro-init Debugging"),(0,o.kt)("p",null,"Suppose you need to debug the ",(0,o.kt)("inlineCode",{parentName:"p"},"taro init projectName")," command for the test project."),(0,o.kt)("p",null,"You can configure launch.json like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'}),'{\n  // ...\n  "configurations": [\n    //...\n    {\n      // ...\n      "cwd": "/Users/User/Desktop",\n      "args": [\n        "init",\n        "projectName"\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h3",a({},{id:"2-compiling-subpackages"}),"2. Compiling Subpackages"),(0,o.kt)("p",null,"When debugging a subpackage, if you want to debug the modified code, go to the root of the corresponding subpackage and turn on watch mode compilation."),(0,o.kt)("p",null,"For example, to debug ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/mini-runner"),", first go to ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/mini-runner/"),", and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev")," in this directory (the compile command may vary by subpackage, see the ",(0,o.kt)("strong",{parentName:"p"},"package.json")," of each subpackage for details). This will allow us to debug the code after each change."),(0,o.kt)("h3",a({},{id:"3links-to-unpublished-libraries"}),"3.Links to unpublished libraries"),(0,o.kt)("p",null,"If the currently developed subpackage depends on other subpackages, you can link the other subpackages to use them."),(0,o.kt)("p",null,"If you need to add other subpackages as dependencies for the current subpackage, you can execute ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm --filter=[target] add [package] [--save-dev]")," in the Taro source root, after which pnpm will automatically create the soft chain."),(0,o.kt)("p",null,"example\uff1a  ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/cli")," add ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/webpack-runner")," as devdependencies\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'pnpm --filter=@tarojs/cli add "@tarojs/webpack-runner@workspace:*" --save-dev')),(0,o.kt)("h3",a({},{id:"4start-up-debugging"}),"4.Start up debugging"),(0,o.kt)("p",null,"You can start single-step debugging by following the diagram below, please refer to VSCode documentation for detailed debugging operation."),(0,o.kt)("p",null,(0,o.kt)("img",a({parentName:"p"},{src:"https://storage.jd.com/cjj-pub-images/WX20200602-221337.png",alt:null}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Currently, subpackages of the Taro project are generally compiled with ",(0,o.kt)("inlineCode",{parentName:"p"},"source-map"),", so it is usually possible to use breakpoints directly in the source code location. If some packages are not compiled with ",(0,o.kt)("inlineCode",{parentName:"p"},"source-map")," enabled, you can enable it manually and submit ",(0,o.kt)("inlineCode",{parentName:"p"},"Pull Requests"),".")))}d.isMDXComponent=!0}}]);