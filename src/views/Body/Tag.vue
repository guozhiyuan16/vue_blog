<template>
    <div class="tag">
        <div class="title">
            <span></span>
            <div>热门文章</div>
            <span></span>
        </div>
        <div class="tag-list">
            <a-tag color="pink">
                pink
            </a-tag>
            <a-tag color="red">
                red
            </a-tag>
            <a-tag color="orange">
                orange
            </a-tag>
            <a-tag color="green">
                green
            </a-tag>
            <a-tag color="cyan">
                cyan
            </a-tag>
            <a-tag color="blue">
                blue
            </a-tag>
            <a-tag color="purple">
                purple
            </a-tag>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.tag{
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
    .tag-list{
        padding-left: 1px;
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
    }
}
.ant-tag{
    margin-bottom:10px;
}
</style>