<template>
    <div class="hot">
        <div class="title">
            <span></span>
            <div>热门文章</div>
            <span></span>
        </div>
        <ul class="hot-list">
            <li>如何用 es6+ 写出优雅的 js 代码</li>
            <li>如何用 es6+ 写出优雅的 js 代码</li>
            <li>如何用 es6+ 写出优雅的 js 代码</li>
            <li>如何用 es6+ 写出优雅的 js 代码</li>
            <li>如何用 es6+ 写出优雅的 js 代码</li>
            <li>如何用 es6+ 写出优雅的 js 代码</li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .hot{
        .title{
            display:flex;
            align-items: center;
            margin-bottom:20px;
            span{
                display:inline-block;
                width: 10px;
                border-top:1px solid #ebedf0;
            }
            span:last-child{
                flex-grow: 1
            }
            div{
                color: #000;
                font-size: 16px;
                padding:0 10px;
            }
        }
        .hot-list{

            li{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 14px;
                line-height: 32px;
                color: #8590a6;
                cursor: pointer;
                padding: 0 20px;
                box-sizing: border-box;
            }
            :hover{
                    background: #f0f2f5;
                    color:#1890ff;
                }
        }
    }
</style>