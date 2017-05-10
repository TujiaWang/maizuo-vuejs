<template>
    <div class="coming-container">
        <div class="dividing-line"><h2>即将上映</h2></div>
        <ul>
            <li class="coming-item" v-for="item in comingsoon" :key="item.id">
                <img :src="item.cover.origin" />
                <div>
                    <h2>{{item.name}}</h2>
                    <span>{{item.premiereAt}}</span>
                </div>
            </li>
        </ul>
        <div class="more-button"><router-link to="/film">更多即将上映电影</router-link></div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                comingsoon : []
            }
        },
        created(){
            var _this = this;
            axios.get('http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/film/coming-soon?__t=1489757848983&page=1&count=3')
                    .then(function(response){
                        // 成功时执行的方法，response返回的数据
                        // console.log(JSON.parse(response.data).data.films);
                        _this.comingsoon = JSON.parse(response.data).data.films;
                    }).catch(function(error){
                        console.log(error);
                    });
        }
    }
</script>
<style lang="less" scoped>
.coming-container {
	
	.dividing-line {
		position: relative;
		margin-top: 30px;
		margin-bottom: 30px;
		border-bottom: 1px solid #a8a8a8;

		&>h2 {
			width: 65px;
			height: 20px;
			margin: 0 auto;
			margin-bottom: -10px;
			border-radius: 5px;
			font-size: 10px;
			line-height: 20px;
			text-align: center;
			color: #eee;
			background-color: #a7a7a7;
		}
	}
	.coming-item {
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
			display: flex;
			justify-content : space-between;
			span {
				color : RGB(245, 162, 125);
			}
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