<template>
    <div class="error">
        <div class="content">
            <div class="icon"></div>
            <div class="text">
                <div class="title">
                    <p>咦？世界线变动了，你好像来到了奇怪的地方。</p>
                    <p>看看其他内容吧~</p>
                </div>
                <router-link class="button" to="/"> 返回首页</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {name: 'error'}
</script>

<style lang="less">
    @import './error.less';
</style>