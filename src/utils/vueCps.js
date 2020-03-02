// vue public components
// Vue.component是全局注册组件的方法 缺点：即使不使用也会占用内存  通过叠加注册多个公共组件注意是component
import Vue from 'vue'

import menu_side from '@/modal/menuside.vue';


// Vue.component('menu_side', menu_side);
Vue.component('menu_side', (resolve) => require(['@/modal/menuside'], resolve));


