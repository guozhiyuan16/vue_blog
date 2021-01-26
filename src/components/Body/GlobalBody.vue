<template>
    <div class="body">
        <a-row>
          <a-col :span="5">
              <div class="warpper">
                  <div>
                      <Info></Info>
                  </div>
                  <div>
                      <Hot></Hot>
                  </div>
                  <div>
                      <Tag></Tag>
                  </div>
              </div>
          </a-col>
          <a-col :span="19">
              <div class="content">
                <router-view></router-view>
              </div>
          </a-col>
        </a-row>
    </div>
</template>
<script>
import Info from "@/views/Body/Info";
import Hot from "@/views/Body/Hot";
import Tag from "@/views/Body/Tag";
export default {
    components:{
        Info,
        Hot,
        Tag
    }
}
</script>
<style lang="less" scoped>
.warpper{
    border-right: 1px solid #ebedf0;
    height: calc(100vh - 104px);
    overflow-y: auto;
}
.content{
    padding:0 0 0 20px;
}
</style>