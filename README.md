This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## serviceWorker.js

https://www.jianshu.com/p/bd2d6ac7a721

可用于：（1）推送消息、（2）后台同步、（3）拦截和处理网络请求。

## react 设置代理(proxy) 实现跨域请求

使用creat-react-app构建的项目，可以直接在package.json下配置

"proxy": "http://api.xxxx.com"

## 用到的包

node-sass/sass-loader/axios/lodash/react-redux/redux/whatwg-fetch/es6-promise

npm install

import正确即可用

## 语法

import,extends,export

constructor中的prop相当于vue的props，this.state相当于vue的data

<SampleButton id="sample" borderWidth={2} onClick={onButtonClick} style={{ color: "red" }} />

## 路由

react-router4 是分布式路由，没有主控路由

console.log(this.props)可看到路由相关信息

react-router url参数更新 但是页面不更新的解决办法:使用 componentWillReceiveProps(newProps) 函数，当 props 改变时，我们就可以在该函数中通过 newProps.match.params.id 拿到新的url参数，进而进行更新

https://www.jianshu.com/p/a118a55edcbf

https://segmentfault.com/a/1190000010174260

## 手把手教程redux

https://www.cnblogs.com/HoChine/p/8963890.html

https://www.redux.org.cn/docs/basics/Reducers.html

## 发送请求

axios

whatwg-fetch es6-promise

## 待处理

react实现inputbox等组件，并展示

react简结
1. 项目结构
2. React指令 js的razor
3. 生命周期
4. 双向数据绑定原理
5. 请求后台资源axios和其它
6. 路由
7. 父子组件通信
8. 页面传参与获取
9. redux
10. cookie
11. 拦截器

## 参考链接
1. react组件数据 https://www.jianshu.com/p/7665a9971824
2. 详解react、redux、react-redux之间的关系 https://www.jianshu.com/p/728a1afce96d
3. 实例讲解react+react-router+redux https://www.cnblogs.com/jztan/p/damonare.html
4. React指令 https://www.cnblogs.com/r-mp/p/11217965.html