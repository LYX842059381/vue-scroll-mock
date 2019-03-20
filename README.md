# demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
.
├── vue.config.js vue3.0的webpack配置文件重置入口
├── mock
|   ├── index.js 前端mock数据入口，使用express对相应的路由进行拦截，会优先于代理地址拦截
|   └── data.json 前端mock数据存放地方
├── public
|   ├── index.html 模板文件
|   └── favicon.ico
├── src
|   ├── api 统一接口管理，后续可添加错误处理，加载动画，登录验证等,别名配置为$api
|   ├── components 通用组件入口，别名配置为$components 
|   ├── assets 公共静态文件，别名配置为$assets
|      └── style 通用样式入口
|   ├── main.js
|   └── App.vue
├── .gitignore
├── node_modules
├── babel.config.js
├── package-lock.json
├── package.json
├── README.md
└── index.html