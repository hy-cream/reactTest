/**
 * Created by hao.cheng on 2017/4/16.
 */
import axios from 'axios';
import { get } from './tools';
import * as config from './config';
import { message } from 'antd';

const baseUrl = 'http://127.0.0.1:9220';
export const getPros = () => axios.post('http://api.xitu.io/resources/github', {
    category: "trending",
    period: "day",
    lang: "javascript",
    offset: 0,
    limit: 30
}).then(function (response) {
    return response.data;
}).catch(function (error) {
    console.log(error);
});

export const npmDependencies = () => axios.get('./npm.json').then(res => res.data).catch(err => console.log(err));

export const weibo = () => axios.get('./weibo.json').then(res => res.data).catch(err => console.log(err));

const GIT_OAUTH = 'https://github.com/login/oauth';
export const gitOauthLogin = () => axios.get(`${GIT_OAUTH}/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin`);
export const gitOauthToken = code => axios.post('https://cors-anywhere.herokuapp.com/' + GIT_OAUTH + '/access_token', {...{client_id: '792cdcd244e98dcd2dee',
    client_secret: '81c4ff9df390d482b7c8b214a55cf24bf1f53059', redirect_uri: 'http://localhost:3006/', state: 'reactAdmin'}, code: code}, {headers: {Accept: 'application/json'}})
    .then(res => res.data).catch(err => console.log(err));
export const gitOauthInfo = access_token => axios({
    method: 'get',
    url: 'https://api.github.com/user?access_token=' + access_token,
}).then(res => res.data).catch(err => console.log(err));

// easy-mock数据交互
// 管理员权限获取
export const admin = () => get({url: config.MOCK_AUTH_ADMIN});

// 访问权限获取
export const guest = () => get({url: config.MOCK_AUTH_VISITOR});

// 提交创建表单
export const submitFormRequest = (data) => {
    console.log(data,'====================')
    axios.post(`${baseUrl}/migration/datax/job`, data)
    .then((response) => {
        if (response.errorno === 0) {
            message.success('创建成功');
        } else {
            message.error('创建失败');
        }
    })
}

// 停止
export const pauseRequest = (jobId) => {
    axios.get(`${baseUrl}/migration/hbase_es/pause/${jobId}`)
    .then((response) => {
        if (response.errorno === 0) {
            message.success('停止成功');
        } else {
            message.error('停止失败');
        }
    })
}

// 重启
export const restartRequest = (jobId) => {
    axios.get(`${baseUrl} /migration/hbase_es/restart/${jobId}`)
    .then((response) => {
        if (response.errorno === 0) {
            message.success('重启成功');
        } else {
            message.error('重启失败');
        }
    })
}

// 取消
export const cancelRequest = (jobId) => {
    axios.get(`${baseUrl}/migration/hbase_es/stop/${jobId}`)
    .then((response) => {
        if (response.errorno === 0) {
            message.success('取消成功');
        } else {
            message.error('取消失败');
        }
    })
}

// 获取历史列表
export const fetchListRequest = () => 
    axios.get(`${baseUrl}/migration/job/oldJob`);