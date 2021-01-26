<template>
    <div class="info">
        <div class="avatar"></div>
        <h2 class="name">嫌疑人</h2>
        <h5 class="sign">几块腹肌看看看</h5>
        <ul class="other">
            <li>
                <a-icon type="github" />
                <a>github</a>
            </li>
            <li>
                <a-icon type="github" />
                <a>掘金</a>                
            </li>
        </ul>
        <p v-if="visable">个人笔记网站，请访问 <span>alvin's note</span></p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            visable:true
        }
    }
}
</script>
<style lang="less" scoped>
    .info{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        .avatar{
            width: 132px;
            height: 132px;
            background:url('../../assets/images/avatar.jpg') no-repeat;
            background-size: 100% 100%;
            border-radius:50%;
        }
        h2{
            width: 100%;
            text-align:center;
            margin-top:10px;
            font-size:20px;
        }
        h5{
            width: 100%;
            text-align:center;
            font-size: 8px;
        }
        .other{
            display:flex;
            justify-content: center;
            align-items: center;
            :hover{
                    border-radius: 4px;
                    background: #eee;
                }
            li{
                padding:3px 5px;
                cursor: pointer;
                
                a{
                    color:#111;
                    padding-left:5px;
                }
            }
        }
        p{
            background-color: #e6f7ff;
            border: 1px solid #91d5ff;
            padding: 8px 15px;
            border-radius:4px;
            width: 100%;
            text-align: center;
            span{
                color:#1890ff;
            }
        }
    }
</style>