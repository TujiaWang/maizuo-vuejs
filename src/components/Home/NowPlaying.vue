<template>
    <div class="nowplaying-container">
        <ul>
            <li class="now-item" v-for="item in nowplaying" :key="item.id">
                <img :src="item.cover.origin" />
                <div>
                    <h2>{{item.name}}</h2>
                    <p>{{item.cinemaCount}}家影院上映{{item.scheduleCount}}</p>
                    <span>{{item.grade}}</span>
                </div>
            </li>
        </ul>
        <div class="more-button"><router-link to="/film">更多热映电影</router-link></div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                nowplaying : []
            }
        },
        created(){
            var _this = this;
            axios.get('http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/film/now-playing?__t=1489757848979&page=1&count=5')
                    .then(function(response){
                        // 成功时执行的方法，response返回的数据
                        // console.log(JSON.parse(response.data).data.films);
                        _this.nowplaying = JSON.parse(response.data).data.films;
                    }).catch(function(error){
                        console.log(error);
                    });
        }
    }
</script>
<style lang="less" scoped>
.now-item{
	margin : 15px 15px 0 15px;
	background: #f9f9f9;
	box-shadow: 0.5px 0.5px 1px #a8a8a8;
	img {
		width: 100%;
	}
	div {
		background: #fff;
		padding: 10px;
		line-height: 25px;
		position: relative;
		z-index: 9;
		span {
			position: absolute;
			right : 10px;
			top : 20px;
			color: #f78360;
			font-size: 16px;
		}
	}
}
.more-button {
    width: 160px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 30px;
    text-align: center;
    line-height: 30px;
    a{
        color: #616161;
        font-size: 12px;
    }
}
</style>