<template>
    <ul>
        <li class="film-list-item" v-for="item in nowplaying" :key="item.id">
            <img :src="item.cover.origin" alt=""/>
            <div>
                <h2>{{item.name}}</h2>
                <p>{{item.intro}}</p>
                <p>{{item.cinemaCount}}家影院正在上映{{item.scheduleCount}}</p>
                <div class="score">
                    {{item.grade}} <i class="iconfont icon-arrow-right"></i>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                nowplaying : [],
                page : 1,
                count : 5
            }
        },
        created(){
            var _this = this;
            let url = 'http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/film/now-playing?__t=1489757848979&page='+this.page+'&count='+this.count;
            axios.get(url)
                    .then(function(response){
                        // 成功时执行的方法，response返回的数据
                        // console.log(JSON.parse(response.data).data.films);
                        _this.nowplaying = JSON.parse(response.data).data.films;
                    }).catch(function(error){
                        console.log(error);
                    });
        },
        mounted(){
            var _this = this;
            window.addEventListener('scroll',function(){
                if(document.body.scrollTop + window.innerHeight >= document.body.offsetHeight) {
                    _this.page++;
                    let url = 'http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/film/now-playing?__t=1489757848979&page='+_this.page+'&count='+_this.count;
                    axios.get(url)
                            .then(function(response){
                                // 成功时执行的方法，response返回的数据
                                // console.log(JSON.parse(response.data).data.films);
                                let tmp = JSON.parse(response.data).data.films;
                                tmp.map(function(item,index){
                                    _this.nowplaying.push(item);
                                });
                            }).catch(function(error){
                                console.log(error);
                            });
                }
            });
        }
    }
</script>
<style lang="less" scoped>
.film-list-item {
	margin-top: 20px;
	border-bottom: 1px dotted #ccc;
	padding-bottom: 20px;
	display: flex;

	img {
		width: 60px;
		height: 82px;
		margin-right: 10px;
	}
	div {
		line-height: 28px;
		position: relative;
		flex-grow:1;
        h2{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width:75%;
        }
		.score {
			position: absolute;
			right: 10px;
			top: 0px;
			font-size: 16px;
			color: #fc7103;
			i {
				font-size: 12px;
				color:#999;
				vertical-align: middle;	
			}
		}	
	}
}
</style>