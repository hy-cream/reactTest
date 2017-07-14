import fetch from 'dva/fetch';

// function parseJSON(response) {
//   return response.json();
// }

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  //先要fetch 获得response
  const response = await fetch(url, options);
  console.log(response)
  checkStatus(response);
  //再把数据
  const data = await response.json();
  console.log(data)
  const ret = {
    data,
    headers: {}
  };
  if(response.headers.get('x-total-count')){
    ret.headers['x-total-count'] = response.headers.get('x-total-count');
  }
  return ret;
  // return fetch(url, options)
  //   .then(checkStatus)
  //   .then(parseJSON)
  //   .then(data => ({ data }))
  //   .catch(err => ({ err }));
}
