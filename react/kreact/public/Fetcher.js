import { message } from 'antd';

class Fetcher {
  post(url, data, fn) {
    this.postRequest(url, data)
      .then(response => response.json())
      .catch(error => message.error('请求出错了请联系技术人员！！！'))
      .then(response => {
        if (response.state == 1) {
          fn(response);
        }
        else {
          if (response.notice)
            message.info(response.notice);
          else
            message.error('出错了请联系技术人员！！！');
        }
      });
    // .catch(error => message.error('请求出错了请联系技术人员！！！'));
  }

  postRequest(url, data) {
    return fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      mode: 'cors',
      body: this.params(data)
    });
  }

  params(d) {
    var dic = {}
    for (let k in d) {
      var key = k;
      if (typeof (d[k]) == 'object') {
        this.recParams(d[k], dic, key);
      }
      else {
        dic[key] = d[k];
      }
    }

    var arr = [];

    for (let k in dic) {
      arr.push(encodeURIComponent(k) + '=' + encodeURIComponent(dic[k]));
    }

    return arr.join('&');
  }

  recParams(d, dic, key) {
    for (let k in d) {
      key += '[' + k + ']';
      if (typeof (d[k]) == 'object') {
        this.recParams(d[k], dic, key);
      }
      else {
        dic[key] = d[k];
      }
    }
    return dic;
  }
}

export default Fetcher;