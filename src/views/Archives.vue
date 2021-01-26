<template>
  <div class="archives">
      <template>
        <a-timeline>
          <a-timeline-item>Nice! 61 posts in total. Keep on posting.</a-timeline-item>
          <a-timeline-item color="red">
              <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
              <span>2020...</span>
          </a-timeline-item>
          <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
          <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
        </a-timeline>
      </template>
      <template>
        <a-pagination v-model="current" :total="50" show-less-items />
      </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 2,
    };
  },
};
</script>
<style lang="less" scoped>
  .archives{
    padding: 40px 20px;
  }
  p{
    font-size: 20px;
  }
</style>