// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.http.interceptors.push(function(request, next){
  // console.log(request);
  // console.log(this)//此处this为请求所在页面的Vue实例
  this.isShow = true
  // continue to next interceptor
  next(function (response)  {//在响应之后传给then之前对response进行修改和逻辑判断。对于token时候已过期的判断，就添加在此处，页面中任何一次http请求都会先调用此处方法

    this.isShow = false
    return response;

  });
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
