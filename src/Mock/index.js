
const Mock = require('mockjs');
import { param2Obj } from '../utils'

// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '200-600'
});
function XHR2ExpressReqWrap(respond) {
    return function(options) {
        let result = null
        if (respond instanceof Function) {
            const { body, type, url } = options
            result = respond({
                method: type,
                body: JSON.parse(body),
                query: param2Obj(url)
            })
        } else {
            result = respond
        }
        return Mock.mock(result)
    }
}


// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', true, /\.js$/);
files.keys().forEach((key) => {
    if (key === './index.js') return;
    files(key).default.forEach(item => {
        let {url,type,response} = item;
        // 注册所有的mock服务
        Mock.mock(new RegExp('^' + url), type, XHR2ExpressReqWrap(response));
    })
});
