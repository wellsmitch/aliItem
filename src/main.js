// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Tabs, Button, DatePicker, Form, Menu, Layout, Icon, Collapse, Steps, Message, Alert, Drawer, message, Input  } from 'ant-design-vue';
import '../static/fonts/iconfont.css'
import '@/utils/vueCps.js'
import store from './store/store'
/*
 跟'ant-design-vue.d.ts 文件'
 如果暴漏出来的是类对象  即可  通过use 的方法
 如果暴漏出来的是非类对象  通过Vue.prototype.$message = message 这种方法进行组件的注入
 */
Vue
  .use(Button)
  .use(DatePicker)
  .use(Layout)
  .use(Menu)
  .use(Icon)
  .use(Collapse)
  .use(Steps)
  .use(Message)
  .use(Alert)
  .use(Drawer)
  .use(Tabs)
  .use(Form)
  .use(Input)
;Vue.prototype.$message = message ;
router.beforeEach(function (to,from,next) {
  console.log(to, from, next);
if(to.name === 'login') {
  // 控制菜单  ---> App.vue
  Vue.prototype.menuShow = false;
}else {
  console.log(222);
  Vue.prototype.menuShow = true;
}

  next({
    query: {
      path: '/cssIndex',
      meta: {
        title: 'html'
      },
      params: {title: 'html'}
    }
  });
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
