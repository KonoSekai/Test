<template>
    <section>
        <bread-crumb-bar/>
        <router-view/>
    </section>
</template>

<script>
    import BreadCrumbBar from './bread-crumb-bar'

    export default {
        name: 'Section',
        components: {BreadCrumbBar}
    }
</script>

<style lang="less">
    @import 'section';
</style>