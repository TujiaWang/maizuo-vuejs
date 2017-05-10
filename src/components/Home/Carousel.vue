<template>
    <div class="carousel-container">
        <swiper :options="swiperOption">
            <swiper-slide v-for="slide in swiperSlides" :key="slide.id"><img :src="slide.imageUrl" alt=""></swiper-slide>
        </swiper>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import axios from 'axios'
    export default{
        data(){
            return {
                swiperOption: {
                    // swiper configs 所有的配置同swiper官方api配置
                    autoplay: 2000,
                    autoplayDisableOnInteraction : false,
                    loop:true
                },
                swiperSlides: {}
            }
        },
        components : {
            swiper,
            swiperSlide
        },
        created(){
            var _this = this;
            axios.get('http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/billboard/home?__t=1489757848973')
                    .then(function(response){
                        // 成功时执行的方法，response返回的数据
                        // console.log(JSON.parse(response.data).data.billboards);
                        _this.swiperSlides = JSON.parse(response.data).data.billboards;
                    }).catch(function(error){
                        console.log(error);
                    });
        }
    }
</script>
<style lang="less" scoped>
    .carousel-container{
        img{
            width:100%;
        }
    }
</style>