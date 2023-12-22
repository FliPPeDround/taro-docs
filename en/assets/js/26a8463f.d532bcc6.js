"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[51038],{79874:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var o=t(93106);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),c=a,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return t?o.createElement(g,r(r({ref:n},d),{},{components:t})):o.createElement(g,r({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},20614:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d}});t(93106);var o=t(79874);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const r={title:"Installation and Usage"},i=void 0,p={unversionedId:"GETTING-STARTED",id:"version-3.x/GETTING-STARTED",title:"Installation and Usage",description:"Installation",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/GETTING-STARTED.md",sourceDirName:".",slug:"/GETTING-STARTED",permalink:"/taro-docs/en/docs/3.x/GETTING-STARTED",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/GETTING-STARTED.md",tags:[],version:"3.x",frontMatter:{title:"Installation and Usage"},sidebar:"docs",previous:{title:"\u6c9f\u901a\u4e0e\u53cd\u9988",permalink:"/taro-docs/en/docs/3.x/communicate"},next:{title:"More Resources",permalink:"/taro-docs/en/docs/3.x/composition"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"CLI Tools Installation",id:"cli-tools-installation",level:3},{value:"View all Taro releases",id:"view-all-taro-releases",level:4},{value:"Project initialization",id:"project-initialization",level:2},{value:"Compiling and Running",id:"compiling-and-running",level:2},{value:"Wechat Mini-Program",id:"wechat-mini-program",level:3},{value:"Compile command",id:"compile-command",level:4},{value:"Developer Tools",id:"developer-tools",level:4},{value:"Baidu smart program",id:"baidu-smart-program",level:3},{value:"Compile command",id:"compile-command-1",level:4},{value:"Developer Tools",id:"developer-tools-1",level:4},{value:"Alipay Mini-Program",id:"alipay-mini-program",level:3},{value:"Compile command",id:"compile-command-2",level:4},{value:"Developer Tools",id:"developer-tools-2",level:4},{value:"ByteDance Mini-Program",id:"bytedance-mini-program",level:3},{value:"Compile command",id:"compile-command-3",level:4},{value:"Developer Tools",id:"developer-tools-3",level:4},{value:"QQ Mini-Program",id:"qq-mini-program",level:3},{value:"Compile command",id:"compile-command-4",level:4},{value:"Developer Tools",id:"developer-tools-4",level:4},{value:"Jingdong Mini-program",id:"jingdong-mini-program",level:3},{value:"Compile command",id:"compile-command-5",level:4},{value:"Developer Tools",id:"developer-tools-5",level:4},{value:"Jingdong Mini-program related reading",id:"jingdong-mini-program-related-reading",level:4},{value:"Enterprise WeChat Mini-program",id:"enterprise-wechat-mini-program",level:3},{value:"Installing Plugins",id:"installing-plugins",level:4},{value:"Configuration Plugin",id:"configuration-plugin",level:4},{value:"Compile command",id:"compile-command-6",level:4},{value:"Developer Tools",id:"developer-tools-6",level:4},{value:"DingTalk Mini Program",id:"dingtalk-mini-program",level:3},{value:"Installing Plugins",id:"installing-plugins-1",level:4},{value:"Configuration Plugin",id:"configuration-plugin-1",level:4},{value:"Compile Command",id:"compile-command-7",level:4},{value:"Developer Tools",id:"developer-tools-7",level:4},{value:"Alipay IOT Mini-Program",id:"alipay-iot-mini-program",level:3},{value:"Installing Plugins",id:"installing-plugins-2",level:4},{value:"Configuration Plugin",id:"configuration-plugin-2",level:4},{value:"Compile Command",id:"compile-command-8",level:4},{value:"FeiShu Mini program",id:"feishu-mini-program",level:3},{value:"Install the plugin",id:"install-the-plugin",level:4},{value:"Configure the plugin",id:"configure-the-plugin",level:4},{value:"Compile command",id:"compile-command-9",level:4},{value:"Developer tool",id:"developer-tool",level:4},{value:"KuaiShou Mini Program",id:"kuaishou-mini-program",level:3},{value:"Version Requirements",id:"version-requirements",level:4},{value:"Taro 3.3+",id:"taro-33",level:5},{value:"Taro 3.2",id:"taro-32",level:5},{value:"Taro 3.0 - 3.1",id:"taro-30---31",level:5},{value:"Installing plugins",id:"installing-plugins-3",level:4},{value:"Configuring plugins",id:"configuring-plugins",level:4},{value:"\u7f16\u8bd1\u547d\u4ee4",id:"\u7f16\u8bd1\u547d\u4ee4",level:4},{value:"Developer Tools",id:"developer-tools-8",level:4},{value:"H5",id:"h5",level:3},{value:"Compile Command",id:"compile-command-10",level:4},{value:"React Native",id:"react-native",level:3},{value:"Progressive Introduction Tutorial",id:"progressive-introduction-tutorial",level:2},{value:"Common Problems",id:"common-problems",level:2},{value:"Keep the version of the CLI consistent with the dependency version",id:"keep-the-version-of-the-cli-consistent-with-the-dependency-version",level:3},{value:"Taro multi-version coexistence issue",id:"taro-multi-version-coexistence-issue",level:3},{value:"Back to a certain version",id:"back-to-a-certain-version",level:3}],u={toc:d},m="wrapper";function c(e){var{components:n}=e,t=l(e,["components"]);return(0,o.kt)(m,a({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",a({},{id:"installation"}),"Installation"),(0,o.kt)("p",null,"Taro project is based on node, please make sure you have a newer node environment (>=12.0.0), we recommend using the node version management tool ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/creationix/nvm"}),"nvm")," to manage node, so you can not only switch node versions easily, but also no need to add sudo when installing globally. and you don't need to add sudo when installing globally."),(0,o.kt)("h3",a({},{id:"cli-tools-installation"}),"CLI Tools Installation"),(0,o.kt)("p",null,"First, you need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/cli")," globally using npm or yarn, or just use ",(0,o.kt)("a",a({parentName:"p"},{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"}),"npx"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# Use npm to install CLI\n$ npm install -g @tarojs/cli\n\n# OR Use yarn to install CLI\n$ yarn global add @tarojs/cli\n\n# OR installed cnpm, use cnpm to install CLI\n$ cnpm install -g @tarojs/cli\n")),(0,o.kt)("admonition",a({},{title:"Attention",type:"caution"}),(0,o.kt)("p",{parentName:"admonition"},"If the installation process results in ",(0,o.kt)("inlineCode",{parentName:"p"},"sass"),"-related installation errors, please retry after installing ",(0,o.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/mirror-config-china"}),"mirror-config-china"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"$ npm install -g mirror-config-china\n"))),(0,o.kt)("h4",a({},{id:"view-all-taro-releases"}),"View all Taro releases"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm info")," to see the Taro version information, where you can see the current latest version"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"npm info @tarojs/cli\n")),(0,o.kt)("p",null,(0,o.kt)("img",a({parentName:"p"},{src:"https://img13.360buyimg.com/ling/jfs/t1/144770/7/20011/138415/5fe40491Ed0883578/11236962a3e672db.png",alt:"npm info @tarojs/cli screenshot"}))),(0,o.kt)("p",null,"If you are using beta or canary you can see the latest version in the line below ",(0,o.kt)("inlineCode",{parentName:"p"},"dist-tags:"),"."),(0,o.kt)("h2",a({},{id:"project-initialization"}),"Project initialization"),(0,o.kt)("p",null,"Create a template project using the command."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"$ taro init myApp\n")),(0,o.kt)("p",null,"npm 5.2+ can also be used to create template projects using npx without a global installation: npx"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"$ npx @tarojs/cli init myApp\n")),(0,o.kt)("p",null,(0,o.kt)("img",a({parentName:"p"},{src:"https://img30.360buyimg.com/ling/jfs/t1/121270/15/15083/672721/5f89357dEf36b7fe2/ecb98df1436cd3d5.jpg",alt:"taro init myApp command screenshot"}))),(0,o.kt)("p",null,"After creating the project, Taro will start installing the dependencies required by the project by default, using tools in the order of yarn > cnpm > npm. Generally, the dependency installation will succeed, but in some cases the installation may fail, in which case you can install it yourself in the project directory using the install command."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# Go to the project folder\n$ cd myApp\n\n# Use yarn to install dependencies\n$ yarn\n\n# OR Use cnpm to install dependencies\n$ cnpm install\n\n# OR Use npm to install dependencies\n$ npm install\n")),(0,o.kt)("h2",a({},{id:"compiling-and-running"}),"Compiling and Running"),(0,o.kt)("p",null,"Using the Taro ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," command compile Taro code into different platform code, and then check the effect in the corresponding development tool."),(0,o.kt)("p",null,"Taro has ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," modes\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"dev mode (add --watch parameter)\uff09")," Listens for file modifications"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"build mode (delete --watch parameter)")," Compress and package code without listening to file changes."),(0,o.kt)("li",{parentName:"ul"},"dev mode generates large files, you can set the environment variable ",(0,o.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"production")," to turn on compression for easy preview, but the compilation speed will be reduced.")),(0,o.kt)("h3",a({},{id:"wechat-mini-program"}),"Wechat Mini-Program"),(0,o.kt)("h4",a({},{id:"compile-command"}),"Compile command"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# yarn\n$ yarn dev:weapp\n$ yarn build:weapp\n\n# npm script\n$ npm run dev:weapp\n$ npm run build:weapp\n\n# global installation only\n$ taro build --type weapp --watch\n$ taro build --type weapp\n\n# npx users can also use\n$ npx taro build --type weapp --watch\n$ npx taro build --type weapp\n\n# watch mode enables compression\n$ set NODE_ENV=production && taro build --type weapp --watch # CMD\n$ NODE_ENV=production taro build --type weapp --watch # Bash\n")),(0,o.kt)("h4",a({},{id:"developer-tools"}),"Developer Tools"),(0,o.kt)("p",null,"Download and open ",(0,o.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html"}),"WeChat Developer Tools"),"\uff0c, then select ",(0,o.kt)("strong",{parentName:"p"},"Project Directory")," for preview."),(0,o.kt)("p",null,"Developers need to pay attention to the project settings of the developer tools\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Need to set off ES6 to ES5 function,turn on may lead to error"),(0,o.kt)("li",{parentName:"ul"},"Need to set off the style auto-completion when uploading code, turn on may lead to error"),(0,o.kt)("li",{parentName:"ul"},"Need to set off the code compression upload, turn on may lead to error")),(0,o.kt)("h3",a({},{id:"baidu-smart-program"}),"Baidu smart program"),(0,o.kt)("h4",a({},{id:"compile-command-1"}),"Compile command"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# yarn\n$ yarn dev:swan\n$ yarn build:swan\n\n# npm script\n$ npm run dev:swan\n$ npm run build:swan\n\n# global installation only\n$ taro build --type swan --watch\n$ taro build --type swan\n\n# npx users can also use\n$ npx taro build --type swan --watch\n$ npx taro build --type swan\n\n# watch mode enables compression\n$ set NODE_ENV=production && taro build --type swan --watch # CMD\n$ NODE_ENV=production taro build --type swan --watch # Bash\n")),(0,o.kt)("h4",a({},{id:"developer-tools-1"}),"Developer Tools"),(0,o.kt)("p",null,"Download and open ",(0,o.kt)("a",a({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/devtools/show_sur/"}),"Baidu Developer Tools"),", and make sure you have set up the mini-program project configuration ",(0,o.kt)("a",a({parentName:"p"},{href:"./project-config"}),"project.swan.json"),". Then select the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," directory in the project root directory to preview it."),(0,o.kt)("p",null,"Developers need to pay attention to the project settings of the developer tools\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Need to set off ES6 to ES5 function,turn on may lead to error"),(0,o.kt)("li",{parentName:"ul"},"Need to set off the style auto-completion when uploading code, turn on may lead to error"),(0,o.kt)("li",{parentName:"ul"},"Need to set off the code compression upload, turn on may lead to error")),(0,o.kt)("h3",a({},{id:"alipay-mini-program"}),"Alipay Mini-Program"),(0,o.kt)("h4",a({},{id:"compile-command-2"}),"Compile command"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# yarn\n$ yarn dev:alipay\n$ yarn build:alipay\n\n# npm script\n$ npm run dev:alipay\n$ npm run build:alipay\n\n# global installation only\n$ taro build --type alipay --watch\n$ taro build --type alipay\n\n# npx users can also use\n$ npx taro build --type alipay --watch\n$ npx taro build --type alipay\n\n# watch mode enables compression\n$ set NODE_ENV=production && taro build --type alipay --watch # CMD\n$ NODE_ENV=production taro build --type alipay --watch # Bash\n")),(0,o.kt)("h4",a({},{id:"developer-tools-2"}),"Developer Tools"),(0,o.kt)("p",null,"Download and open ",(0,o.kt)("a",a({parentName:"p"},{href:"https://docs.alipay.com/mini/developer/getting-started/"}),"Alipay Developer Tools"),", Then select the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," directory in the project root directory to preview it."),(0,o.kt)("p",null,"Developers need to pay attention to the project settings of the developer tools\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Need to set off ES6 to ES5 function,turn on may lead to error"),(0,o.kt)("li",{parentName:"ul"},"Need to set off the style auto-completion when uploading code, turn on may lead to error"),(0,o.kt)("li",{parentName:"ul"},"Need to set off the code compression upload, turn on may lead to error")),(0,o.kt)("h3",a({},{id:"bytedance-mini-program"}),"ByteDance Mini-Program"),(0,o.kt)("h4",a({},{id:"compile-command-3"}),"Compile command"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# yarn\n$ yarn dev:tt\n$ yarn build:tt\n\n# npm script\n$ npm run dev:tt\n$ npm run build:tt\n\n# global installation only\n$ taro build --type tt --watch\n$ taro build --type tt\n\n# npx users can also use\n$ npx taro build --type tt --watch\n$ npx taro build --type tt\n\n# watch mode enables compression\n$ set NODE_ENV=production && taro build --type tt --watch # CMD\n$ NODE_ENV=production taro build --type tt --watch # Bash\n")),(0,o.kt)("h4",a({},{id:"developer-tools-3"}),"Developer Tools"),(0,o.kt)("p",null,"Download and open ",(0,o.kt)("a",a({parentName:"p"},{href:"https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/developer-instrument/download/developer-instrument-update-and-download"}),"ByteDance Developer Tools"),"\uff0c, and make sure you have set up the mini-program project configuration ",(0,o.kt)("a",a({parentName:"p"},{href:"./project-config"}),"project.tt.json"),". Then select the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," directory in the project root directory to preview it."),(0,o.kt)("p",null,"Developers need to pay attention to the project settings of the developer tools\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Need to set off ES6 to ES5 function,turn on may lead to error"),(0,o.kt)("li",{parentName:"ul"},"Need to set off the style auto-completion when uploading code, turn on may lead to error"),(0,o.kt)("li",{parentName:"ul"},"Need to set off the code compression upload, turn on may lead to error")),(0,o.kt)("h3",a({},{id:"qq-mini-program"}),"QQ Mini-Program"),(0,o.kt)("h4",a({},{id:"compile-command-4"}),"Compile command"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# yarn\n$ yarn dev:qq\n$ yarn build:qq\n\n# npm script\n$ npm run dev:qq\n$ npm run build:qq\n\n# global installation only\n$ taro build --type qq --watch\n$ taro build --type qq\n\n# npx users can also use\n$ npx taro build --type qq --watch\n$ npx taro build --type qq\n\n# watch mode enables compression\n$ set NODE_ENV=production && taro build --type qq --watch # CMD\n$ NODE_ENV=production taro build --type qq --watch # Bash\n")),(0,o.kt)("h4",a({},{id:"developer-tools-4"}),"Developer Tools"),(0,o.kt)("p",null,"Download and open ",(0,o.kt)("a",a({parentName:"p"},{href:"https://q.qq.com/wiki/#_4-%E7%BC%96%E7%A0%81%E5%BC%80%E5%8F%91%E5%B0%8F%E7%A8%8B%E5%BA%8F"}),"QQ Mini-Program Developer Tools "),"\uff0cand then select the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," directory in the project root directory to preview it."),(0,o.kt)("p",null,"Developers need to pay attention to the project settings of the developer tools\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Need to set off ES6 to ES5 function,turn on may lead to error"),(0,o.kt)("li",{parentName:"ul"},"Need to set off the style auto-completion when uploading code, turn on may lead to error"),(0,o.kt)("li",{parentName:"ul"},"Need to set off the code compression upload, turn on may lead to error")),(0,o.kt)("h3",a({},{id:"jingdong-mini-program"}),"Jingdong Mini-program"),(0,o.kt)("h4",a({},{id:"compile-command-5"}),"Compile command"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# yarn\n$ yarn dev:jd\n$ yarn build:jd\n\n# npm script\n$ npm run dev:jd\n$ npm run build:jd\n\n# global installation only\n$ taro build --type jd --watch\n$ taro build --type jd\n\n# npx users can also use\n$ npx taro build --type jd --watch\n$ npx taro build --type jd\n\n# watch mode enables compression\n$ set NODE_ENV=production && taro build --type jd --watch # CMD\n$ NODE_ENV=production taro build --type jd --watch # Bash\n")),(0,o.kt)("h4",a({},{id:"developer-tools-5"}),"Developer Tools"),(0,o.kt)("p",null,"Download and open Jingdong mini-program Developer Tools\uff08Go to ",(0,o.kt)("a",a({parentName:"p"},{href:"https://mp.jd.com"}),"https://mp.jd.com")," to register and you will be provided with developer tools upon successful application\uff09, and then select the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," directory in the project root directory to preview it."),(0,o.kt)("p",null,"Developers need to pay attention to the project settings of the developer tools\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Need to set off ES6 to ES5 function,turn on may lead to error"),(0,o.kt)("li",{parentName:"ul"},"Need to set off the style auto-completion when uploading code, turn on may lead to error"),(0,o.kt)("li",{parentName:"ul"},"Need to set off the code compression upload, turn on may lead to error")),(0,o.kt)("h4",a({},{id:"jingdong-mini-program-related-reading"}),"Jingdong Mini-program related reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/blog/2020-04-27-taro-build-jd"}),"\u300aRapid development of Jingdong mini program using Taro\u300b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/blog/2020-04-27-taro-vs-jd"}),"\u300aJingdong mini Program Taro Development vs. Native Development Review\u300b"))),(0,o.kt)("h3",a({},{id:"enterprise-wechat-mini-program"}),"Enterprise WeChat Mini-program"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Taro v3.1+ support started")),(0,o.kt)("p",null,"The Taro plugin can support compiling enterprise WeChat Mini-program. ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro-plugin-platform-weapp-qy"}),"Github"),"\u3002"),(0,o.kt)("h4",a({},{id:"installing-plugins"}),"Installing Plugins"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"yarn add @tarojs/plugin-platform-weapp-qy\n")),(0,o.kt)("h4",a({},{id:"configuration-plugin"}),"Configuration Plugin"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="Taro Project Configuration"',title:'"Taro',Project:!0,'Configuration"':!0}),"config = {\n  // ...\n  plugins: ['@tarojs/plugin-platform-weapp-qy'],\n}\n")),(0,o.kt)("h4",a({},{id:"compile-command-6"}),"Compile command"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# yarn\n$ yarn dev:qywx\n$ yarn build:qywx\n\n# npm script\n$ npm run dev:qywx\n$ npm run build:qywx\n\n# global installation only\n$ taro build --type qywx --watch\n$ taro build --type qywx\n\n# npx users can also use\n$ npx taro build --type qywx --watch\n$ npx taro build --type qywx\n\n# watch mode enables compression\n$ set NODE_ENV=production && taro build --type qywx --watch # CMD\n$ NODE_ENV=production taro build --type qywx --watch # Bash\n")),(0,o.kt)("h4",a({},{id:"developer-tools-6"}),"Developer Tools"),(0,o.kt)("p",null,"Same as WeChat mini-program. The compile mode of developer tool is set to Enterprise WeChat."),(0,o.kt)("h3",a({},{id:"dingtalk-mini-program"}),"DingTalk Mini Program"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Taro v3.1+ support started")),(0,o.kt)("p",null,"The Taro plugin can support compiling pinned dingtalk mini-program. Plugin documentation can be found at ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro-plugin-platform-alipay-dd"}),"Github"),"\u3002"),(0,o.kt)("h4",a({},{id:"installing-plugins-1"}),"Installing Plugins"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"yarn add @tarojs/plugin-platform-alipay-dd\n")),(0,o.kt)("h4",a({},{id:"configuration-plugin-1"}),"Configuration Plugin"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="Taro Project Configuration"',title:'"Taro',Project:!0,'Configuration"':!0}),"config = {\n  // ...\n  plugins: ['@tarojs/plugin-platform-alipay-dd'],\n}\n")),(0,o.kt)("h4",a({},{id:"compile-command-7"}),"Compile Command"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# yarn\n$ yarn dev:dd\n$ yarn build:dd\n\n# npm script\n$ npm run dev:dd\n$ npm run build:dd\n\n# global installation only\n$ taro build --type dd --watch\n$ taro build --type dd\n\n# npx users can also use\n$ npx taro build --type dd --watch\n$ npx taro build --type dd\n\n# watch mode enables compression\n$ set NODE_ENV=production && taro build --type dd --watch # CMD\n$ NODE_ENV=production taro build --type dd --watch # Bash\n")),(0,o.kt)("h4",a({},{id:"developer-tools-7"}),"Developer Tools"),(0,o.kt)("p",null,"Same as Alipay mini-program. The compile mode of developer tool is set to DingTalk."),(0,o.kt)("h3",a({},{id:"alipay-iot-mini-program"}),"Alipay IOT Mini-Program"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Taro v3.1+ support started")),(0,o.kt)("p",null,"The Taro plugin supports compiling Alipay IOT Mini-Program, Plugin documentation can be found at ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro-plugin-platform-alipay-iot"}),"Github"),"\u3002"),(0,o.kt)("h4",a({},{id:"installing-plugins-2"}),"Installing Plugins"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"yarn add @tarojs/plugin-platform-alipay-iot\n")),(0,o.kt)("h4",a({},{id:"configuration-plugin-2"}),"Configuration Plugin"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="Taro Project Configuration"',title:'"Taro',Project:!0,'Configuration"':!0}),"config = {\n  // ...\n  plugins: ['@tarojs/plugin-platform-alipay-iot'],\n}\n")),(0,o.kt)("h4",a({},{id:"compile-command-8"}),"Compile Command"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# yarn\n$ yarn dev:iot\n$ yarn build:iot\n\n# npm script\n$ npm run dev:iot\n$ npm run build:iot\n\n# global installation only\n$ taro build --type iot --watch\n$ taro build --type iot\n\n# npx users can also use\n$ npx taro build --type iot --watch\n$ npx taro build --type iot\n\n# watch mode enables compression\n$ set NODE_ENV=production && taro build --type iot --watch # CMD\n$ NODE_ENV=production taro build --type iot --watch # Bash\n")),(0,o.kt)("h3",a({},{id:"feishu-mini-program"}),"FeiShu Mini program"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Taro v3.1+ support started")),(0,o.kt)("p",null,"Using Taro plugin can support compiling FeiShu mini program, see ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro-plugin-platform-lark"}),"Github")," for plugin documentation."),(0,o.kt)("h4",a({},{id:"install-the-plugin"}),"Install the plugin"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"yarn add @tarojs/plugin-platform-lark\n")),(0,o.kt)("h4",a({},{id:"configure-the-plugin"}),"Configure the plugin"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="Taro project configuration"',title:'"Taro',project:!0,'configuration"':!0}),"config = {\n  // ...\n  plugins: ['@tarojs/plugin-platform-lark'],\n}\n")),(0,o.kt)("h4",a({},{id:"compile-command-9"}),"Compile command"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# yarn\n$ yarn dev:lark\n$ yarn build:lark\n\n# npm script\n$ npm run dev:lark\n$ npm run build:lark\n\n# Global installation only\n$ taro build --type lark --watch\n$ taro build --type lark\n\n# npx user can use\n$ npx taro build --type lark --watch\n$ npx taro build --type lark\n\n# watch Also turn on compression\n$ set NODE_ENV=production && taro build --type lark --watch # CMD\n$ NODE_ENV=production taro build --type lark --watch # Bash\n")),(0,o.kt)("h4",a({},{id:"developer-tool"}),"Developer tool"),(0,o.kt)("p",null,(0,o.kt)("a",a({parentName:"p"},{href:"https://open.feishu.cn/document/uYjL24iN/uMjNzUjLzYzM14yM2MTN"}),"FeiShu mini program")," can run on Fishu client and one set of code runs on multiple ends (including PC and mobile). You need to download and open ",(0,o.kt)("a",a({parentName:"p"},{href:"https://open.feishu.cn/document/uYjL24iN/ucDOzYjL3gzM24yN4MjN"}),"FeiShu mini program developer tool"),", and make sure you have set up the mini program project configuration file. Then select the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," directory in the project root directory for preview."),(0,o.kt)("p",null,"Need to pay attention to the project configuration of developer tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to turn off the ES6 to ES5 feature, it may report an error if you turn it on."),(0,o.kt)("li",{parentName:"ul"},"Need to turn off the style auto-completion when uploading code, it may report an error if you turn it on."),(0,o.kt)("li",{parentName:"ul"},"You need to turn off the code compression upload, it may report an error if you turn it on.")),(0,o.kt)("h3",a({},{id:"kuaishou-mini-program"}),"KuaiShou Mini Program"),(0,o.kt)("p",null,"Using the Taro plugin can support compiling kuaishou mini program, see ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro-plugin-platform-kwai"}),"Github")," for plugin documentation."),(0,o.kt)("h4",a({},{id:"version-requirements"}),"Version Requirements"),(0,o.kt)("h5",a({},{id:"taro-33"}),"Taro 3.3+"),(0,o.kt)("p",null,"Please use version 1.0 or higher of ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro-plugin-platform-kwai"}),"taro-plugin-platform-kwai"),"."),(0,o.kt)("h5",a({},{id:"taro-32"}),"Taro 3.2"),(0,o.kt)("p",null,"Please use version 1.2.x of ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/vadxq/taro-plugin-platform-ks"}),"taro-plugin-platform-ks"),"."),(0,o.kt)("h5",a({},{id:"taro-30---31"}),"Taro 3.0 - 3.1"),(0,o.kt)("p",null,"Please use version 1.0.x of ",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/vadxq/taro-plugin-platform-ks"}),"taro-plugin-platform-ks"),"."),(0,o.kt)("h4",a({},{id:"installing-plugins-3"}),"Installing plugins"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"yarn add @tarojs/plugin-platform-kwai\n")),(0,o.kt)("h4",a({},{id:"configuring-plugins"}),"Configuring plugins"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-js",metastring:'title="Taro project configuration"',title:'"Taro',project:!0,'configuration"':!0}),"config = {\n  // ...\n  plugins: ['@tarojs/plugin-platform-kwai'],\n}\n")),(0,o.kt)("h4",a({},{id:"\u7f16\u8bd1\u547d\u4ee4"}),"\u7f16\u8bd1\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# yarn\n$ yarn dev:kwai\n$ yarn build:kwai\n\n# npm script\n$ npm run dev:kwai\n$ npm run build:kwai\n\n# Global installation only\n$ taro build --type kwai --watch\n$ taro build --type kwai\n\n$ npx taro build --type kwai --watch\n$ npx taro build --type kwai\n\n# watch also turn on compression\n$ set NODE_ENV=production && taro build --type kwai --watch # CMD\n$ NODE_ENV=production taro build --type kwai --watch # Bash\n")),(0,o.kt)("h4",a({},{id:"developer-tools-8"}),"Developer Tools"),(0,o.kt)("p",null,"Same as Alipay mini-program. The compile mode of developer tool is set to IOT mini-program."),(0,o.kt)("h3",a({},{id:"h5"}),"H5"),(0,o.kt)("h4",a({},{id:"compile-command-10"}),"Compile Command"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# yarn\n$ yarn dev:h5\n$ yarn build:h5\n\n# npm script\n$ npm run dev:h5\n$ npm run build:h5\n\n# global installation only\n$ taro build --type h5 --watch\n$ taro build --type h5\n\n# npx users can also use\n$ npx taro build --type h5 --watch\n$ npx taro build --type h5\n")),(0,o.kt)("h3",a({},{id:"react-native"}),"React Native"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Taro v3.2+ support started")),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",a({parentName:"p"},{href:"./react-native"}),"React Native Development Process")),(0,o.kt)("h2",a({},{id:"progressive-introduction-tutorial"}),"Progressive Introduction Tutorial"),(0,o.kt)("p",null,"We have provided a hands-on tutorial from the beginning to the end, please refer to",(0,o.kt)("a",a({parentName:"p"},{href:"./guide"}),"\u300aguide\u300b"),"\u3002"),(0,o.kt)("h2",a({},{id:"common-problems"}),"Common Problems"),(0,o.kt)("h3",a({},{id:"keep-the-version-of-the-cli-consistent-with-the-dependency-version"}),"Keep the version of the CLI consistent with the dependency version"),(0,o.kt)("p",null,"When using Taro for multi-site development, keep the version of the Taro CLI consistent with the version of your project's dependencies, otherwise you may get compilation errors or runtime errors."),(0,o.kt)("p",null,"If you find inconsistencies you can use the Taro upgrade command taro update self ","[version]"," and taro update project ","[version]","to upgrade the CLI and project dependencies to the specified version, respectively."),(0,o.kt)("p",null,"Alternatively, you can manually install the appropriate version of the CLI, modify the package.json dependency version number, and reinstall the dependency to resolve it."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# Use the Taro upgrade command to update the CLI version to the latest version\n$ taro update self [version number]\n# Use the Taro upgrade command to update the CLI version to the specified version\n$ taro update self\n# Use the Taro upgrade command to upgrade project dependencies to a version consistent with @tarojs/cli\n$ taro update project\n# Use the Taro upgrade command to upgrade project dependencies to the specified version\n$ taro update project [version number]\n")),(0,o.kt)("p",null,"If you are using Taro CLI version 3.0.9 and the dependency version used in your project is 3.0.10, you may have problems. In this case, please update your Taro CLI version to the same version as the project dependency version number, and if you still have problems, please ",(0,o.kt)("a",a({parentName:"p"},{href:"https://nervjs.github.io/taro-issue-helper/"}),"Issue")," to the community."),(0,o.kt)("h3",a({},{id:"taro-multi-version-coexistence-issue"}),"Taro multi-version coexistence issue"),(0,o.kt)("p",null,"Many developers have worked on projects with older versions of Taro and already have Taro installed globally, but want to experience Taro 3 at the same time, how should I proceed?"),(0,o.kt)("p",null,"We offer two ideas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you need to create a new Taro 3 project, you can use ",(0,o.kt)("a",a({parentName:"li"},{href:"https://github.com/nvm-sh/nvm"}),"nvm")," to manage node versions and install different versions of the Taro CLI by installing different node versions, thus solving the problem of multiple versions of Taro coexisting."),(0,o.kt)("li",{parentName:"ul"},"If some of the existing projects need to upgrade to Taro 3, you can install the corresponding version of Taro CLI locally in these projects, so that the locally installed Taro CLI will be used directly if you execute the command via ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"npm"),", by ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn add @tarojs/cli"))),(0,o.kt)("h3",a({},{id:"back-to-a-certain-version"}),"Back to a certain version"),(0,o.kt)("p",null,"To install a fixed version, or to go back to a certain version, e.g. if we want to install ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3.9"),", we would do the following."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# Use npm install CLI\n$ npm install -g @tarojs/cli@1.3.9\n# OR use yarn npm CLI\n$ yarn global add @tarojs/cli@1.3.9\n# OR installed cnpm, use cnpm install CLI\n$ cnpm install -g @tarojs/cli@1.3.9\n")))}c.isMDXComponent=!0}}]);