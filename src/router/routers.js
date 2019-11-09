export default [
    {
        path: '/',
        name: 'index',
        meta: {title: '首页'},
        component: () => import('@/views/home/home')
    },
    {
        path: '/item',
        name: 'item',
        meta: {title: '项目'},
        component: () => import('@/views/item/item')
    },
    {
        path: '/entry',
        name: 'entry',
        meta: {title: '条目'},
        component: () => import('@/views/entry/entry')
    },
    {
        path: '/collection',
        name: 'collection',
        meta: {title: '收藏'},
        component: () => import('@/views/collection/collection')
    },
    {
        path: '/order',
        name: 'order',
        meta: {title: '订单', requireAuth: true},
        component: () => import('@/views/order/order')
    },
    {
        path: '/album',
        name: 'album',
        meta: {title: '相册', requireAuth: true},
        component: () => import('@/views/album/album')
    },
    {
        path: '/error/404',
        name: 'error',
        meta: {title: '出错啦!'},
        component: () => import('@/views/error/error')
    },
    {
        path: '*',
        redirect: {name: 'error'}
    }
]