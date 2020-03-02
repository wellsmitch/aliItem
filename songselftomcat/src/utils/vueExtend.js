// vue prototype extend

import Vue from 'vue'

// 返回上个界面
Vue.prototype.back = function (callback) {
  this.$router.go(-1);
};


