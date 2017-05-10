<template>
    <div class="home-container">
        <m-carousel></m-carousel>
        <m-nowplaying></m-nowplaying>
        <m-comingsoon></m-comingsoon>
    </div>
</template>
<script>
    import Carousel from './Carousel'
    import NowPlaying from './NowPlaying'
    import ComingSoon from './ComingSoon'
    export default{
        components : {
            'm-carousel' : Carousel,
            'm-nowplaying' : NowPlaying,
            'm-comingsoon' : ComingSoon
        }
    }
</script>
<style lang="less" scoped>

</style>