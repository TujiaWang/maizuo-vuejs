<template>
    <Header> 
        <nav class="app-hd">
            <div class="nav-left" @click="showNav=!showNav">
                <span><i class="iconfont icon-list"></i></span>
                <h1>卖座电影</h1>
            </div>
            <div class="nav-right">
                <div class="city-btn">
                    <span>北京</span>
                    <i class="iconfont icon-dropdown"></i>
                </div>
                <div class="user-btn">
                    <i class="iconfont icon-user"></i>
                </div>
            </div>
        </nav>
        <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
            <div class="sidebar-container" v-if="showNav">
                <div class="sidebar">
                    <ul>
                        <li @click="showNav=!showNav">
                            <router-link to="/">
                                <span>首页</span>
                                <i class="iconfont icon-arrow-right"></i>
                            </router-link>
                        </li>
                        <li @click="showNav=!showNav">
                            <router-link to="/film">
                                <span>影片</span>
                                <i class="iconfont icon-arrow-right"></i>
                            </router-link>
                        </li>
                        <li @click="showNav=!showNav">
                            <router-link to="/cinema">
                                <span>影院</span>
                                <i class="iconfont icon-arrow-right"></i>
                            </router-link>
                        </li>
                        <li @click="showNav=!showNav">
                            <router-link to="login">
                                <span>我的</span>
                                <i class="iconfont icon-arrow-right"></i>
                            </router-link>
                        </li>
                        <li @click="showNav=!showNav">
                            <router-link to="/card">
                                <span>卖座卡</span>
                                <i class="iconfont icon-arrow-right"></i>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </Header>
</template>
<script>
    export default{
        data(){
            return {
                showNav : false
            }
        }
    }
</script>
<style lang="less" scoped>
.app-hd {
	position: fixed;
	width: 100%;
	height: 50px;
	left:0;
	top:0;
	background: #282828;
	color : #9a9a9a;
	display: flex;
	justify-content : space-between;
    z-index: 9998;
	.nav-left {
		display: flex;
		align-items: center;

		span {
			width: 48px;
			text-align: center;
			color : #999;
			border-right: 1px solid #222;
			box-shadow: 1px 0 1px #363636;
			height: 50px;
			line-height: 50px;
		}

		h1 {
			font-size: 14px;
			color: #efefef;
			padding: 0 15px;
		}
	}

	.nav-right {
		display: flex;
		align-items: center;

		.user-btn {
			margin: 0 15px;
		}
	}
}
.sidebar-container {
	position: fixed;
	top:50px;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0,0,0,0.5);
	z-index: 9999;
	.sidebar {
		position: absolute;
		top:0;
		bottom: 0;
		left: 0;
		right: 110px;
		background: #282828;
		border-top: 1px solid #222;
		box-shadow: 0 1px 1px #363636 inset;
		box-sizing: border-box;
		z-index: 9998;
		li {
			color: #9a9a9a;
			font-size: 14px;
			height: 50px;
			line-height: 50px;
			margin: 0 15px;
			border-bottom: 1px dotted #333;
            a{
                color: #9a9a9a;
			    font-size: 14px;
                display: flex;
			    justify-content : space-between;
            }
			i {
				font-size: 12px;
			}
		}
	}
}
</style>