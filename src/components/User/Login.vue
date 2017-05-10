<template>
    <form class="login-form">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="输入手机号/邮箱" />
            <div class="input-bg"></div>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="输入密码/验证码" />
            <div class="input-bg"></div>
        </div>
        <input type="button" class="center-block" value="登录"/>
    </form>
</template>
<script>
    export default{}
</script>
<style lang="less" scoped>
.login-form{
    padding: 0px 31px 0px 31px;
    .form-group{
        margin: 30px 0 0;
        position: relative;
    }
    .form-control{
        border: none;
        background-color: #ebebeb;
        border-radius: 0px;
        box-shadow: none;
        outline: none;
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
    }
    .input-bg{
        position: absolute;
        top: 20px;
        height: 12px;
        width: 100%;
        border: solid #c4c4c4;
        border-width: 0 1px 1px 1px;
    }
    .center-block{
        width: 163px;
        background-color: #fe8233;
        color: #fff;
        border: none;
        border-radius: 36px;
        margin-top: 45px;
        padding: 8px 12px;
        font-size: 15px;
        outline: none;
        display: block;
        margin-right: auto;
        margin-left: auto;
    }
}
input{
    font: 12px/1.5 Tahoma, Helvetica, Arial, sans-serif;
    font-family: 'Microsoft YaHei', Tahoma, Helvetica, Arial, sans-serif;
    margin: 0;
}
</style>