const Mock = require('mockjs');
export default [
    {
        url: '/focus/list',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'Akina',
                        img: 'https://s1.ax1x.com/2020/05/14/YDfRnU.jpg',
                        href: 'https://zhebk.cn/Web/Akina.html'
                    },
                    {
                        id: 2,
                        title: '使用说明',
                        img: 'https://s1.ax1x.com/2020/05/14/YDf4AJ.jpg',
                        href: 'https://zhebk.cn/userAkina.html'
                    },
                    {
                        id: 3,
                        title: '文章归档',
                        img: 'https://s1.ax1x.com/2020/05/14/YDfT91.jpg',
                        href: 'https://zhebk.cn/archives.html'
                    }
                ]
            }
        }
    }
]