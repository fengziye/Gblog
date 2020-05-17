const Mock = require('mockjs');
const List = [{
    id: 0,
    siteName: "FZY′blog",
    path: "https://www.fengziy.cn",
    desc: "一个It技术的探索者"
}]
const count = 15

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@increment',
        siteName: "@cname",
        path: "@url",
        desc: "@ctitle(5,20)"
    }))
}

export default [
    {
        url: '/friend',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: List
            }
        }
    }
]