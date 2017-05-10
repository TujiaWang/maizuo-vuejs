<template>
    <div class="exchanege">
        <div class="cardquery">
            <label for="">卡号：</label>
            <input type="text" placeholder="请输入15位电子卖座卡号" />
            <div class="line"></div>
        </div>
        <input type="button" class="card_query_bottom" value="查询"/>
    </div>
</template>
<script>
    export default{}
</script>
<style lang="less" scoped>
.exchanege{
    margin-top: 20px;
    padding: 0 32px;
    .cardquery{
        margin-top: 30px;
        input {
            background-color: transparent;
            height: 34px;
            width: 55%;
            font-size: 14px;
            vertical-align: top;
            border: none;
            outline: medium;
            font: 12px/1.5 Tahoma, Helvetica, Arial, sans-serif;
            font-family: 'Microsoft YaHei', Tahoma, Helvetica, Arial, sans-serif;
        }
        label {
            font-weight: normal;
            line-height: 34px;
            margin: 0 15px 0 10px;
            float: left;
            display: inline-block;
            max-width: 100%;
        }
        .line {
            border-width: 0px 1px 1px;
            border-style: solid;
            border-color: #ccc;
            height: 5px;
            margin-top: -5px;
        }
    } 
} 
.card_query_bottom{
    width: 160px;
    margin: 25px auto 30px;
    border-radius: 18px;
    background-color: #fe8233;
    height: 36px;
    color: #fff;
    font-size: 14px;
    line-height: 36px;
    border: none;
    display: block;
} 
</style>