const Mock = require('mockjs');
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

const banners = [
    'https://s1.ax1x.com/2020/05/14/YDhagx.jpg',
    'https://s1.ax1x.com/2020/05/14/YDhU81.jpg',
    'https://s1.ax1x.com/2020/05/14/YDhBDO.jpg',
    'https://s1.ax1x.com/2020/05/14/YDhoVg.jpg',
    'https://s1.ax1x.com/2020/05/14/YD4FR1.jpg'
]
const List = [{
    id: 0,
    isTop: true,
    banner: banners[0],
    isHot: true,
    pubTime: +Mock.Random.date('T'),
    title: '看一遍闭着眼都会安装Lua了',
    summary: 'Lua 是一种轻量小巧的脚本语言，能为应用程序提供灵活的扩展和定制功能。',
    content: '',
    viewsCount: 4045,
    commentsCount: 99
}]
for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@increment',
        'isTop|1-4': true,
        'banner|+1': banners,
        'isHot|1-3': true,
        pubTime: +Mock.Random.date('T'),
        title: Mock.Random.ctitle(10,20),
        summary: Mock.Random.cparagraph(),
        content: baseContent,
        viewsCount: '@integer(300, 5000)',
        commentsCount: '@integer(10, 200)'
    }))
}

export default [
    {
        url: '/post/list',
        type: 'get',
        response: config => {
            let {page = 1, size = 10} = config.query;
            page = page instanceof Number ? page : parseInt(page)
            size = size instanceof Number ? size : parseInt(size)
            const pageList = List.filter((item, index) => index < size * page && index >= size * (page - 1));
            return {
                code: 20000,
                data: {
                    total:List.length,
                    items:pageList.sort((a,b)=>a.isTop===b.isTop?0:a.isTop?-1:1),
                    hasNextPage: page * size < List.length,
                    page: page,
                    size: size
                }
            }
        }
    }
]