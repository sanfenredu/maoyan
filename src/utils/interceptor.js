
import { Toast } from 'antd-mobile'
import axios from 'axios'
const interceptor = {
  init () { //axios拦截器
    // Add a request interceptor
      axios.interceptors.request.use(function (config) {
        // Do something before request is sent

        // 数据请求前，将组件库的 Toast轻提示打开

        Toast.loading('加载中...',2)


        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

      // Add a response interceptor
      axios.interceptors.response.use(function (response) {
        // Do something with response data

        //请求得到数据之后，关闭loading

        Toast.hide()

        return response;
      }, function (error) {
        // Do something with response error
        return Promise.reject(error);
      });
  }
}


export default interceptor