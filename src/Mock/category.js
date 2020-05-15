const Mock = require('mockjs');
export default [
    {
        url: '/category/list',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'JAVA',
                        href: '#'
                    },
                    {
                        id: 2,
                        title: 'SpringBoot',
                        href: '#',
                    },
                    {
                        id: 3,
                        title: 'MySql',
                        href: '#'
                    },
                    {
                        id: 4,
                        title: '随笔',
                        href: '#'
                    }
                ]
            }
        }
    }
]