import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://yapi.demo.qunar.com/mock/20630'

// 请求拦截
axios.interceptors.request.use(request => {
  return request
}, err => {
  return Promise.reject(err)
})

// 响应拦截
axios.interceptors.response.use(response => {
  if (+response.data.code === 200) {
    return response.data.data
  } else {
    Promise.reject(new Error('网络错误！'))
  }
}, err => {
  return Promise.reject(err)
})

Vue.prototype.$http = axios
