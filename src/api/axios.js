/**
 * Created by xuyq on 2017/11/20.
 */
import axios from 'axios'
import Vue from 'vue'

axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置请求头
// axios.defaults.baseURL = 'localhost:8080/';   //配置接口地址
Vue.prototype.$http = axios //为vue原型添加axios对象