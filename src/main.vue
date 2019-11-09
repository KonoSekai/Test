<template>
    <main>
        <Header/>
        <Section/>
        <Footer/>
    </main>
</template>

<script>
    import Header from '@/components/header'
    import Section from '@/components/section'
    import Footer from '@/components/footer'

    export default {
        name: 'Main',
        components: {Header, Section, Footer}
    }
</script>

<style lang="less">
    @import 'main';
</style>