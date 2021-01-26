<template>
    <div class="basicyayout">
        <a-layout>
            <a-layout-header>
                <GlobalHeader></GlobalHeader>
            </a-layout-header>
            <a-layout-content>
                <GlobalBody></GlobalBody>
            </a-layout-content>
        </a-layout>
    </div>
</template>
<script>
import GlobalHeader from '@/components/Header/GlobalHeader';
import GlobalBody from '@/components/Body/GlobalBody';
export default {
    name:"BasicLayout",
    components:{
        GlobalHeader,
        GlobalBody
    }
}
</script>
<style scoped lang="less">
.basicyayout{
    height: 100vh;
	display: flex;
    overflow: hidden;
    background:#fff;
	.side {
		flex: none;
	}
	.ant-layout{
		overflow: hidden;
    }
    .ant-layout-header{
        background:#fff;
        box-shadow: 0 2px 8px #f0f1f2;
        padding:0;
        position: relative;
        z-index: 10;
    }
    .ant-layout-content{
        background:#fff;
        padding-top:40px;
        box-sizing: border-box;
        height: 100%;
    }
}
</style>