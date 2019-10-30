import axios from 'axios'
import { Notification } from 'element-ui'
let qs = require('qs')
let myAjax = axios.create({})
/**
 * 统一定义默认类型请求context-type
 *
 */
export const ajaxGetData = dataParams => {
  return myAjax.get(dataParams.url, { params: dataParams.params })
}
//(multipart/form-data)传递
export const ajaxPostData = dataParams => {
  return myAjax.post(dataParams.url, qs.stringify(dataParams.params))
}

/**
 * 统一定义JSON类型请求context-type(application/json)
 *
 */

export const ajaxPostJsonData = dataParams => {
  return myAjax({ url: dataParams.url, method: 'post', params: dataParams.params, data: dataParams.dataBody, headers: { 'Content-Type': 'application/json' } })
}

export const ajaxPutJsonData = dataParams => {
  return myAjax({ url: dataParams.url, method: 'put', params: dataParams.params, data: dataParams.dataBody, headers: { 'Content-Type': 'application/json' } })
}

export const ajaxDeleteJsonData = dataParams => {
  return myAjax({ url: dataParams.url, method: 'delete', params: dataParams.params, data: dataParams.dataBody, headers: { 'Content-Type': 'application/json' } })
}


/**
 * 全部请求拦截器处理
 */
myAjax.interceptors.request.use(function(config) {
    /**
     * 统一封装tokenId信息  如果请求参数
     */
    return config
  },
  function(error) { return Promise.reject(error) }
)

myAjax.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return response
    } else {
      return Promise.reject({ status: response.status, response: { data: response.data.err || '请求失败！' } })
    }
  },
  () => {
    //后端挂掉或者前端跨域时候时候返回 
     return  Notification.error({ title: '提示', message: '网络或请求异常，请稍后再试!', offset: 100 })
  })
