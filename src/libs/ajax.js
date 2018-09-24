import axios from "axios";
import qs from "qs";

function cleanRequest(req) {
  for (const i in req) {
    /* eslint guard-for-in: 0 */
    if (req[i] !== 0 && !req[i]) {
      delete req[i];
    }
  }
}

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = null;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

let ajax = {};
ajax.install = function(Vue) {
  axios.defaults.baseURL = location.protocol + "//47.105.43.207:80/()/banhunli";

  Vue.prototype.$http = axios;
  Vue.http = axios;

  axios.interceptors.request.use(
    function(request) {
      const params = request.params;
      const body = request.data;
      if (params) {
        cleanRequest(params);
      }
      if (body) {
        cleanRequest(body);
        if (body.append) {
          // formdata
          body.append("st", window.config.st);
        } else {
          // 普通表单
          body.st = window.config.st;
          request.data = qs.stringify(body);
        }
      }
      return request;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function(response) {
      if (response.status >= 400) {
        let msg = "";
        if (response.body && response.body.msg) {
          msg = response.body.msg;
        } else {
          msg = "接口请求失败";
          if (response.status) {
            msg += `(${response.status})`;
          }
        }
        alert(msg);
        return response;
      }
      const data = response.data;
      if (data) {
        if (data.ok === -100 && data.url) {
          window.location.href = data.url;
        }
        if (data.ok === 0) {
          switch (data.error_type) {
            case "alert": {
              alert(data.msg);
              break;
            }
            case "confirm": {
              if (!data.btn) {
                data.btn = {};
              }
              if (confirm(data.msg)) {
                if (data.btn.href) {
                  window.location.href = data.btn.url;
                }
              }
              break;
            }
            default:
            // 暂不处理
          }
        }
      }
      return response;
    },
    function(error) {
      // Do something with response error
      return Promise.reject(error);
    }
  );
};
export default ajax;
