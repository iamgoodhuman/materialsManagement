import axios from 'axios'
const service = axios.create({
  baseURL: '/', // 设置统一的请求前缀
});

service.interceptors.request.use(
  config => {
    return config;
  }, 
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(res=>{
  return res
})
export default service