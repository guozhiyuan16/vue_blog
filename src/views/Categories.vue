<template>
  <div class="categories">
    <h3>Categories</h3>
    <p><span>13</span>categories in total</p>
    <ul class="groups">
      <li>
          <a-badge count="0" show-zero>
            <a-tag color="purple">
                purple
            </a-tag>
          </a-badge>
      </li>    
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.categories{
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  h3{
    font-size:24px;
  }
  p{
    margin-bottom:50px;
  }
  .groups{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    padding:0 130px;
    box-sizing: border-box;
    li{
      margin-right: 30px;
      margin-bottom: 20px;
    }
  }
}
</style>
