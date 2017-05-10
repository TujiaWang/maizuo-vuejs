<template>
    <div class="films">
        <div class="film-tab">
            <span :class="currentShow('now')" @click="current='now'">正在热映</span>
            <span :class="currentShow('coming')" @click="current='coming'">即将上映</span>
        </div>
        <m-now v-if="current=='now'"></m-now>
        <m-coming v-else></m-coming>
    </div>
</template>
<script>
    import NowPlaying from './NowPlaying'
    import ComingSoon from './ComingSoon'
    export default{
        data(){
            return {
                current : 'now'
            }
        },
        methods : {
            currentShow : function(txt){
                return this.current == txt ? 'on' : '';
            }
        },
        components : {
            'm-now' : NowPlaying,
            'm-coming' : ComingSoon
        }
    }
</script>
<style lang="less" scoped>
.films{
    margin: 0 15px;
    .film-tab{
        height: 48px;
        line-height: 48px;
        font-size: 16px;
        display: flex;
        justify-content: space-around;

        span{
            flex-grow: 1;
            text-align: center;
            border-bottom: 1px solid #fe6e00;
            &.on{
                color: #fe6e00;
                border-bottom: 4px solid #fe6e00;
            }
        }
    }
}
</style>