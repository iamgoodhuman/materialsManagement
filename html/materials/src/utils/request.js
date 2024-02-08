import axios from 'axios'
const service = axios.create({
  baseURL: 'http://localhost:8888', // 设置统一的请求前缀
  timeout: 10000, // 设置统一的超时时长
});

service.interceptors.request.use(
  config => {
    // 删除重复的请求
    removePending(config);
    // 如果repeatRequest不配置，那么该请求则不能多次请求
    !config.repeatRequest && addPending(config)
    return config;
  }, 
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    // 删除重复的请求
    removePending(response.config);
    return response;
  },
  error => {
    // 删除重复的请求
    error.config && removePending(error.config);
    return Promise.reject(error);
  }
);
export default service