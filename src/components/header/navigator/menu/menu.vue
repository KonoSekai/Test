<template>
    <div class="menu">
        <div class="item logo">
            <router-link to="/">
                <i>H</i>Sekai's&nbsp;<strong>Hobby</strong>&nbsp;Collection
            </router-link>
        </div>
        <div class="item" v-for="(item,index) in items">
            <router-link exact-active-class="active" :to="item.path">
                {{item.text}}
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Menu',
        data: () => ({
            items: [
                {path: '/item', text: '项目'},
                {path: '/entry', text: '条目'},
                {path: '/collection', text: '收藏'},
                {path: '/order', text: '订单'},
                {path: '/album', text: '相册'}
            ]
        })
    }
</script>
<style lang="less">
    @import 'menu';
</style>