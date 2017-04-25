export default class Router {
    constructor(){
        this.routes = {};
        this.currentUrl = '';
    }
    init(){
        window.addEventListener('load', this.refresh.bind(this), false);
        window.addEventListener('hashchange', this.refresh.bind(this), false); 
    }
    route(path, callback = function(){}){
        this.routes[path] = callback;
    }
    refresh(){
        this.currentUrl = location.hash.slice(1) || '/';
        this.routes[this.currentUrl]();
    }
}
// 上面路由系统 Router 对象实现，主要提供三个方法

// init 监听浏览器 url hash 更新事件
// route 存储路由更新时的回调到回调数组routes中，回调函数将负责对页面的更新
// refresh 执行当前url对应的回调函数，更新页面
//or es5
// function Router() {
//     this.routes = {};
//     this.currentUrl = '';
// }
// Router.prototype.route = function(path, callback) {
//     this.routes[path] = callback || function(){};
// };
// Router.prototype.refresh = function() {
//     this.currentUrl = location.hash.slice(1) || '/';
//     this.routes[this.currentUrl]();
// };
// Router.prototype.init = function() {
//     window.addEventListener('load', this.refresh.bind(this), false);
//     window.addEventListener('hashchange', this.refresh.bind(this), false);
// }
// window.Router = new Router();
// window.Router.init();