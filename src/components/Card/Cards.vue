<template>
    <div class="card">
        <div class="card-tab">
            <span :class="currentShow('card')" @click="current='card'">卖座卡</span>
            <span :class="currentShow('ecard')" @click="current='ecard'">电子卖座卡</span>
        </div>
        <m-card v-if="current=='card'"></m-card>
        <m-ecard v-else></m-ecard>
    </div>
</template>
<script>
    import Card from './Card'
    import Ecard from './Ecard'
    export default{
        data(){
            return {
                current : 'card'
            }
        },
        methods : {
            currentShow : function(txt){
                return this.current == txt ? 'on' : '';
            }
        },
        components : {
            'm-card' : Card,
            'm-ecard' : Ecard
        }
    }
</script>
<style lang="less" scoped>
.card{
    margin: 0 15px;
    .card-tab{
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