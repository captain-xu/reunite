import Axios from 'axios';
import { ApiRequestError, ApiResultError } from './error';

function obj2str(obj) {
  let arr = [];
  for (let [k, v] of Object.entries(obj)) {
    arr.push(`${k}=${v}`);
  }
  return arr.join("&");
}

let client = Axios.create({
  timeout: 5000,
  paramsSerializer: params => obj2str(params),
  responseType: 'text',
  maxContentLength: Math.pow(1024, 2)
})

client.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      let { status, statusText } = error.response;
      if (statusText === undefined) {
        if (status === 200) {
          statusText = '成功'
        } else if (status === 400) {
          statusText = '请求不正确'
        } else if (status === 401) {
          statusText = '没有权限'
        } else if (status === 413) {
          statusText = '发送内容过大'
        } else if (status === 500) {
          statusText = '服务器内部错误'
        } else if (status === 502) {
          statusText = '服务暂时不可用'
        } else if (status === 504) {
          statusText = '服务器处理超时'
        } else {
          statusText = '请求服务出错'
        }
      }
      return Promise.reject(new ApiRequestError(status, statusText))
    }
    if (error.message.startsWith('timeout of ')) {
      return Promise.reject(new ApiRequestError(408, 'time out'))
    }
    return Promise.reject(new ApiRequestError(500, error.message))
  }
)

export const Request = (config) => {
  return client.request(config)
    .then(response => {

      if (response.status === 200 || response.status === 204) {
        return response.data
      }
      else if (response.status === 401) {

        let { casLoginUrl, appSecurityUrl, appRedirectParameter, casServiceParameter } = response.data.data;
        let encodeUrl = `${appSecurityUrl}?${appRedirectParameter}=${encodeURIComponent(window.location.href)}`;
        let loginUrl = `${casLoginUrl}?${casServiceParameter}=${encodeURIComponent(encodeUrl)}`;
        window.open(loginUrl, '_self');
        return;

      }

      let { code, resultMessage, data } = response.data;
      return Promise.reject(new ApiResultError(code, resultMessage || '服务异常', data))


    }, err => {

      return Promise.reject(err);
    })
}

export function getApi(url, params = {}) {
  return Request({
    url,
    method: 'GET',
    params
  })
}

export function postApi(url, data = {}) {
  console.log(url, 'url')
  return Request({
    url,
    method: 'POST',
    data: data
  })
}
