"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[69413],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86240:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"React Redux"},s=void 0,l={unversionedId:"redux",id:"version-4.x/redux",title:"React Redux",description:"\u5728 Taro \u4e2d\u53ef\u4ee5\u81ea\u7531\u5730\u4f7f\u7528 React \u751f\u6001\u4e2d\u975e\u5e38\u6d41\u884c\u7684\u6570\u636e\u6d41\u7ba1\u7406\u5de5\u5177 Redux \u6765\u89e3\u51b3\u590d\u6742\u9879\u76ee\u7684\u6570\u636e\u7ba1\u7406\u95ee\u9898\u3002",source:"@site/versioned_docs/version-4.x/redux.md",sourceDirName:".",slug:"/redux",permalink:"/taro-docs/docs/redux",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/redux.md",tags:[],version:"4.x",frontMatter:{title:"React Redux"},sidebar:"docs",previous:{title:"\u793e\u533a\u4f18\u8d28\u7269\u6599",permalink:"/taro-docs/docs/treasures"},next:{title:"Vue2 Vuex",permalink:"/taro-docs/docs/vuex"}},c={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u521b\u5efa <code>store</code> \u4e0e\u914d\u7f6e\u4e2d\u95f4\u4ef6",id:"\u521b\u5efa-store-\u4e0e\u914d\u7f6e\u4e2d\u95f4\u4ef6",level:3},{value:"\u65b0\u589e <code>action type</code>",id:"\u65b0\u589e-action-type",level:3},{value:"\u65b0\u589e <code>reducers</code>",id:"\u65b0\u589e-reducers",level:3},{value:"\u65b0\u589e <code>actions</code>",id:"\u65b0\u589e-actions",level:3},{value:"\u5728\u9875\u9762\u3001\u7ec4\u4ef6\u4e2d\u4f7f\u7528 <code>store</code>",id:"\u5728\u9875\u9762\u7ec4\u4ef6\u4e2d\u4f7f\u7528-store",level:3},{value:"React Redux Hooks",id:"react-redux-hooks",level:2},{value:"<code>useSelector</code>",id:"useselector",level:3},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:4},{value:"<code>useDispatch</code>",id:"usedispatch",level:3},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b-1",level:4},{value:"<code>useStore</code>",id:"usestore",level:3},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b-2",level:4},{value:"\u6301\u4e45\u5316",id:"\u6301\u4e45\u5316",level:2}],u={toc:p},d="wrapper";function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(d,o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728 Taro \u4e2d\u53ef\u4ee5\u81ea\u7531\u5730\u4f7f\u7528 React \u751f\u6001\u4e2d\u975e\u5e38\u6d41\u884c\u7684\u6570\u636e\u6d41\u7ba1\u7406\u5de5\u5177 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://redux.js.org/"}),"Redux")," \u6765\u89e3\u51b3\u590d\u6742\u9879\u76ee\u7684\u6570\u636e\u7ba1\u7406\u95ee\u9898\u3002"),(0,r.kt)("h2",o({},{id:"\u5b89\u88c5"}),"\u5b89\u88c5"),(0,r.kt)("p",null,"\u9996\u5148\u8bf7\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"redux")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"react-redux")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"redux-thunk")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"redux-logger")," \u7b49\u4e00\u4e9b\u9700\u8981\u7528\u5230\u7684 redux \u4e2d\u95f4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ yarn add redux react-redux redux-thunk redux-logger\n# \u6216\u8005\u4f7f\u7528 npm\n$ npm install --save redux react-redux redux-thunk redux-logger\n")),(0,r.kt)("h2",o({},{id:"\u4f8b\u5b50"}),"\u4f8b\u5b50"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"taro init")," \u547d\u4ee4\u65f6\u9009\u62e9 React -> redux \u5373\u53ef\u521b\u5efa react-redux \u6a21\u677f\u9879\u76ee"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/NervJS/TodoMVC"}),"Todo App"))),(0,r.kt)("h2",o({},{id:"\u4f7f\u7528"}),"\u4f7f\u7528"),(0,r.kt)("h3",o({},{id:"\u521b\u5efa-store-\u4e0e\u914d\u7f6e\u4e2d\u95f4\u4ef6"}),"\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"h3"},"store")," \u4e0e\u914d\u7f6e\u4e2d\u95f4\u4ef6"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u65b0\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"src/store/index.js")," \u6587\u4ef6\u7528\u6765\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\uff0c\u6309\u81ea\u5df1\u559c\u597d\u8bbe\u7f6e redux \u7684\u4e2d\u95f4\u4ef6\uff0c\u4f8b\u5982\u4e0b\u9762\u4f8b\u5b50\u4e2d\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"redux-thunk")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"redux-logger")," \u8fd9\u4e24\u4e2a\u4e2d\u95f4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/store/index.js"',title:'"src/store/index.js"'}),"import { createStore, applyMiddleware, compose } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\nimport rootReducer from '../reducers'\n\nconst composeEnhancers =\n  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__\n    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({\n        // Specify extension\u2019s options like name, actionsBlacklist, actionsCreators, serialize...\n      })\n    : compose\n\nconst middlewares = [thunkMiddleware]\n\nif (process.env.NODE_ENV === 'development') {\n  middlewares.push(require('redux-logger').createLogger())\n}\n\nconst enhancer = composeEnhancers(\n  applyMiddleware(...middlewares)\n  // other store enhancers if any\n)\n\nexport default function configStore() {\n  const store = createStore(rootReducer, enhancer)\n  return store\n}\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u5728\u9879\u76ee\u5165\u53e3\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js")," \u4e2d\u4f7f\u7528 react-redux \u4e2d\u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," \u7ec4\u4ef6\u5c06\u4e0a\u4e00\u6b65\u5199\u597d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," \u63a5\u5165\u5e94\u7528\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/app.js"',title:'"src/app.js"'}),"import { Component } from 'react'\nimport { Provider } from 'react-redux'\nimport configStore from './store'\n\nconst store = configStore()\n\nclass App extends Component {\n  render() {\n    return <Provider store={store}>{this.props.children}</Provider>\n  }\n}\n\nexport default App\n")),(0,r.kt)("p",null,"\u968f\u540e\u5c31\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528\u4e86\u3002\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"redux")," \u63a8\u8350\u7684\u90a3\u6837\uff0c\u53ef\u4ee5\u589e\u52a0\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"constants")," \u76ee\u5f55\uff0c\u7528\u6765\u653e\u7f6e\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"action type")," \u5e38\u91cf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"actions")," \u76ee\u5f55\uff0c\u7528\u6765\u653e\u7f6e\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"actions"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reducers")," \u76ee\u5f55\uff0c\u7528\u6765\u653e\u7f6e\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"reducers"),"\u3002")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u5c06\u6f14\u793a\u5982\u4f55\u4f7f\u7528 redux \u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684\u52a0\u3001\u51cf\u8ba1\u6570\u5668\u529f\u80fd\u3002"),(0,r.kt)("h3",o({},{id:"\u65b0\u589e-action-type"}),"\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"h3"},"action type")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/constants/counter.js"',title:'"src/constants/counter.js"'}),"export const ADD = 'ADD'\nexport const MINUS = 'MINUS'\n")),(0,r.kt)("h3",o({},{id:"\u65b0\u589e-reducers"}),"\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"h3"},"reducers")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/reducers/counter.js"',title:'"src/reducers/counter.js"'}),"import { ADD, MINUS } from '../constants/counter'\n\nconst INITIAL_STATE = {\n  num: 0,\n}\n\nexport default function counter(state = INITIAL_STATE, action) {\n  switch (action.type) {\n    case ADD:\n      return {\n        ...state,\n        num: state.num + 1,\n      }\n    case MINUS:\n      return {\n        ...state,\n        num: state.num - 1,\n      }\n    default:\n      return state\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/reducers/index.js"',title:'"src/reducers/index.js"'}),"import { combineReducers } from 'redux'\nimport counter from './counter'\n\nexport default combineReducers({\n  counter,\n})\n")),(0,r.kt)("h3",o({},{id:"\u65b0\u589e-actions"}),"\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"h3"},"actions")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/actions/counter.js"',title:'"src/actions/counter.js"'}),"import { ADD, MINUS } from '../constants/counter'\n\nexport const add = () => {\n  return {\n    type: ADD,\n  }\n}\nexport const minus = () => {\n  return {\n    type: MINUS,\n  }\n}\n\n// \u5f02\u6b65\u7684 action\nexport function asyncAdd() {\n  return (dispatch) => {\n    setTimeout(() => {\n      dispatch(add())\n    }, 2000)\n  }\n}\n")),(0,r.kt)("h3",o({},{id:"\u5728\u9875\u9762\u7ec4\u4ef6\u4e2d\u4f7f\u7528-store"}),"\u5728\u9875\u9762\u3001\u7ec4\u4ef6\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h3"},"store")),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u9875\u9762\uff08\u6216\u8005\u7ec4\u4ef6\uff09\u4e2d\u8fdb\u884c\u4f7f\u7528\uff0c\u6211\u4eec\u5c06\u901a\u8fc7 react-redux \u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," \u65b9\u6cd5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," \u4e0e\u6211\u4eec\u7684\u9875\u9762\u8fdb\u884c\u8fde\u63a5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/pages/index/index.js"',title:'"src/pages/index/index.js"'}),"import { Component } from 'react'\nimport { connect } from 'react-redux'\nimport { View, Button, Text } from '@tarojs/components'\nimport { add, minus, asyncAdd } from '../../actions/counter'\n\n@connect(\n  ({ counter }) => ({\n    counter,\n  }),\n  (dispatch) => ({\n    add() {\n      dispatch(add())\n    },\n    dec() {\n      dispatch(minus())\n    },\n    asyncAdd() {\n      dispatch(asyncAdd())\n    },\n  })\n)\nclass Index extends Component {\n  render() {\n    return (\n      <View className=\"index\">\n        <Button className=\"add_btn\" onClick={this.props.add}>\n          +\n        </Button>\n        <Button className=\"dec_btn\" onClick={this.props.dec}>\n          -\n        </Button>\n        <Button className=\"dec_btn\" onClick={this.props.asyncAdd}>\n          async\n        </Button>\n        <View>\n          <Text>{this.props.counter.num}</Text>\n        </View>\n      </View>\n    )\n  }\n}\n\nexport default Index\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"connect")," \u65b9\u6cd5\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mapStateToProps"),"\uff0c\u51fd\u6570\u7c7b\u578b\uff0c\u63a5\u53d7\u6700\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"state")," \u4f5c\u4e3a\u53c2\u6570\uff0c\u7528\u4e8e\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"state")," \u6620\u5c04\u5230\u7ec4\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"props")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mapDispatchToProps"),"\uff0c\u51fd\u6570\u7c7b\u578b\uff0c\u63a5\u6536 ",(0,r.kt)("inlineCode",{parentName:"li"},"dispatch()")," \u65b9\u6cd5\u5e76\u8fd4\u56de\u671f\u671b\u6ce8\u5165\u5230\u5c55\u793a\u7ec4\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"props")," \u4e2d\u7684\u56de\u8c03\u65b9\u6cd5")),(0,r.kt)("h2",o({},{id:"react-redux-hooks"}),"React Redux Hooks"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u51fd\u6570\u5f0f\u7ec4\u4ef6"),"\u4e2d\u53ef\u4ee5\u4f7f\u7528 react-redux \u63d0\u4f9b\u7684 Hooks API \u8fde\u63a5\u3001\u64cd\u4f5c ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\u3002"),(0,r.kt)("h3",o({},{id:"useselector"}),(0,r.kt)("inlineCode",{parentName:"h3"},"useSelector")),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://react-redux.js.org/api/hooks#useselector"}),"useSelector")," \u5141\u8bb8\u4f60\u4f7f\u7528 selector \u51fd\u6570\u4ece store \u4e2d\u83b7\u53d6\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts",metastring:'title="\u4f7f\u7528"',title:'"\u4f7f\u7528"'}),"const result: any = useSelector(selector: Function, equalityFn?: Function)\n")),(0,r.kt)("p",null,"selector \u51fd\u6570\u5927\u81f4\u76f8\u5f53\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," \u51fd\u6570\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," \u53c2\u6570\u3002selector \u4f1a\u5728\u7ec4\u4ef6\u6bcf\u6b21\u6e32\u67d3\u65f6\u8c03\u7528\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"useSelector")," \u540c\u6837\u4f1a\u8ba2\u9605 redux store\uff0c\u5728 redux action \u88ab dispatch \u65f6\u8c03\u7528\u3002"),(0,r.kt)("p",null,"\u4f46 ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelector")," \u8fd8\u662f\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," \u6709\u4e00\u4e9b\u4e0d\u540c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u50cf ",(0,r.kt)("inlineCode",{parentName:"li"},"mapStateToProps")," \u53ea\u8fd4\u56de\u5bf9\u8c61\u4e00\u6837\uff0cselector \u53ef\u80fd\u4f1a\u8fd4\u56de\u4efb\u4f55\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u4e00\u4e2a action dispatch \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"useSelector")," \u4f1a\u628a selector \u7684\u524d\u540e\u8fd4\u56de\u503c\u505a\u4e00\u6b21\u6d45\u5bf9\u6bd4\uff0c\u5982\u679c\u4e0d\u540c\uff0c\u7ec4\u4ef6\u4f1a\u5f3a\u5236\u66f4\u65b0\u3002"),(0,r.kt)("li",{parentName:"ul"},"selector \u51fd\u6570\u4e0d\u63a5\u53d7 ",(0,r.kt)("inlineCode",{parentName:"li"},"ownProps")," \u53c2\u6570\u3002\u4f46 selector \u53ef\u4ee5\u901a\u8fc7\u95ed\u5305\u8bbf\u95ee\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4f20\u9012\u4e0b\u6765\u7684 props\u3002")),(0,r.kt)("h4",o({},{id:"\u4f7f\u7528\u6848\u4f8b"}),"\u4f7f\u7528\u6848\u4f8b"),(0,r.kt)("p",null,"\u57fa\u672c\u4f7f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import { Component } from 'react'\nimport { useSelector } from 'react-redux'\n\nexport const CounterComponent = () => {\n  const counter = useSelector((state) => state.counter)\n  return <View>{counter}</View>\n}\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u95ed\u5305\u51b3\u5b9a\u5982\u4f55 select \u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"export const TodoListItem = (props) => {\n  const todo = useSelector((state) => state.todos[props.id])\n  return <View>{todo.text}</View>\n}\n")),(0,r.kt)("p",null,"\u8fdb\u9636\u4f7f\u7528\uff1a"),(0,r.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u8bbf\u95ee ",(0,r.kt)("a",o({parentName:"p"},{href:"https://react-redux.js.org/api/hooks#using-memoizing-selectors"}),"react-redux \u6587\u6863")," \u4e86\u89e3\u5982\u4f55\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"reselect")," \u7f13\u5b58 selector\u3002"),(0,r.kt)("h3",o({},{id:"usedispatch"}),(0,r.kt)("inlineCode",{parentName:"h3"},"useDispatch")),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://react-redux.js.org/api/hooks#usedispatch"}),"useDispatch")," \u8fd4\u56de redux store \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," \u5f15\u7528\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765 dispatch actions\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="\u4f7f\u7528"',title:'"\u4f7f\u7528"'}),"const dispatch = useDispatch()\n")),(0,r.kt)("h4",o({},{id:"\u4f7f\u7528\u6848\u4f8b-1"}),"\u4f7f\u7528\u6848\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import { Component } from 'react'\nimport { useDispatch } from 'react-redux'\n\nexport const CounterComponent = ({ value }) => {\n  const dispatch = useDispatch()\n\n  return (\n    <View>\n      <Text>{value}</Text>\n      <Button onClick={() => dispatch({ type: 'increment-counter' })}>Increment counter</Button>\n    </View>\n  )\n}\n")),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," \u4f20\u9012\u56de\u8c03\u5230\u4e00\u4e2a\u5b50\u7ec4\u4ef6\u65f6\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," \u628a\u56de\u8c03\u7f13\u5b58\u8d77\u6765\uff0c\u56e0\u4e3a\u7ec4\u4ef6\u53ef\u80fd\u56e0\u4e3a\u5f15\u7528\u6539\u53d8\u800c\u91cd\u65b0\u6e32\u67d3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"// CounterComponent.js\nexport const CounterComponent = ({ value }) => {\n  const dispatch = useDispatch()\n  const incrementCounter = useCallback(() => dispatch({ type: 'increment-counter' }), [dispatch])\n\n  return (\n    <View>\n      <Text>{value}</Text>\n      <MyIncrementButton onIncrement={incrementCounter} />\n    </View>\n  )\n}\n\n// IncrementButton.js\nconst MyIncrementButton = ({ onIncrement }) => <Button onClick={onIncrement}>Increment counter</Button>\n\nexport default Taro.memo(MyIncrementButton)\n")),(0,r.kt)("h3",o({},{id:"usestore"}),(0,r.kt)("inlineCode",{parentName:"h3"},"useStore")),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://react-redux.js.org/api/hooks#usestore"}),"useStore")," \u8fd4\u56de\u4e00\u4e2a store \u5f15\u7528\uff0c\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," \u7ec4\u4ef6\u5f15\u7528\u5b8c\u5168\u4e00\u81f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="\u4f7f\u7528"',title:'"\u4f7f\u7528"'}),"const store = useStore()\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2a hook \u53ef\u80fd\u5e76\u4e0d\u7ecf\u5e38\u4f7f\u7528\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"useSelector")," \u5927\u90e8\u5206\u60c5\u51b5\u662f\u4f60\u7684\u7b2c\u4e00\u9009\u62e9\uff0c\u5982\u679c\u9700\u8981\u66ff\u6362 reducers \u7684\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u4f7f\u7528\u5230\u8fd9\u4e2a API\u3002")),(0,r.kt)("h4",o({},{id:"\u4f7f\u7528\u6848\u4f8b-2"}),"\u4f7f\u7528\u6848\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import { Component } from 'react'\nimport { useStore } from 'react-redux'\n\nexport const CounterComponent = ({ value }) => {\n  const store = useStore()\n\n  // EXAMPLE ONLY! Do not do this in a real app.\n  // The component will not automatically update if the store state changes\n  return <div>{store.getState()}</div>\n}\n")),(0,r.kt)("h2",o({},{id:"\u6301\u4e45\u5316"}),"\u6301\u4e45\u5316"),(0,r.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/rt2zz/redux-persist"}),"redux-presist")," \u5bf9 store \u7684\u6570\u636e\u8fdb\u884c\u6301\u4e45\u5316\u3002"),(0,r.kt)("p",null,"\u7528\u6cd5\u53ca\u76f8\u5173\u8ba8\u8bba\u8bf7\u53c2\u8003 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/6548"}),"#6548"),"\uff0c\u5176\u4e2d\u6709\u4e24\u4e2a\u9700\u8981\u6ce8\u610f\u7684\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"persistConfig")," \u628a storage API \u66ff\u6362\u4e3a Taro Storage API\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/imtcn/redux-persist-taro-storage"}),"redux-persist-taro-storage"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<PersistGate>")," \u7684\u4f7f\u7528\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/6548#issuecomment-816529998"}),"@ryougifujino \u7684\u56de\u7b54"),"\u3002")))}m.isMDXComponent=!0}}]);