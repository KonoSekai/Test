<template>
    <header>
        <div class="wrapper">
            <navigator/>
        </div>
    </header>
</template>

<script>
    import Navigator from './navigator'

    export default {
        name: 'Header',
        components: {Navigator}
    }
</script>

<style lang="less">
    @import 'header';
</style>