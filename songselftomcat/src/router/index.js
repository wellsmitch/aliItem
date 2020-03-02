import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/web/index'

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['@/components/login'], resolve)
    },
    {
      path: '/webIndex',
      meta: {
        requireAuth: true,
        titleText:'html'
      },
      query: "{params: {title: 'html'}}", // 这里传不过去
      name: 'webIndex',

      component: (resolve) => require(['@/components/web/index'], resolve)
    },
    {
      path: '/angularIndex',
      name: 'angularIndex',
      component: (resolve) => require(['@/components/web/angular'], resolve)
    },
    {
      path: '/h5PlusIndex',
      name: 'h5PlusIndex',
      component: (resolve) => require(['@/components/web/h5plus'], resolve)
    },
    {
      path: '/muiIndex',
      name: 'muiIndex',
      component: (resolve) => require(['@/components/web/mui'], resolve)
    },
    {
      path: '/reactIndex',
      name: 'reactIndex',
      component: (resolve) => require(['@/components/web/react'], resolve)
    },
    {
      path: '/vueIndex',
      name: 'vueIndex',
      component: (resolve) => require(['@/components/web/vue'], resolve)
    },
    {
      path: '/cssIndex',
      name: 'cssIndex',
      component: (resolve) => require(['@/components/web/cssindex'], resolve)
    },
    {
      path: '/wxSmallIndex',
      name: 'wxSmallIndex',
      component: (resolve) => require(['@/components/web/wxprogress'], resolve)
    },
    // java
    {
      path: '/javaBaseIndex',
      name: 'javaBaseIndex',
      component: (resolve) => require(['@/components/java/base'], resolve)
    },
    {
      path: '/mybatisIndex',
      name: 'mybatisIndex',
      component: (resolve) => require(['@/components/java/mybatis'], resolve)
    },

    // 数据库
    {
      path: '/mysqlIndex',
      name: 'mysqlIndex',
      component: (resolve) => require(['@/components/databasecon/mysql'], resolve)
    },

    {
      path: '*',
      // redirect: '/login'
      redirect: '/webIndex'
    }
  ]
})
