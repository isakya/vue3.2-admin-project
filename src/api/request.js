import axios from 'axios'
import { ElMessage } from 'element-plus/lib/components'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timerout: 5000
})

service.interceptors.response.use(response => {
  const { data, meta } = response.data
  if (meta.status === 200 || meta.status === 201) {
    return data
  } else {
    ElMessage.error(meta.msg)
    return Promise.reject(new Error(meta.msg))
  }
}, error => {
  error.response && ElMessage.error(error.response.data)
  return Promise.reject(new Error(error.response.data))
})

export default service
