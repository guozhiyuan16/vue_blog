<template>
  <div class="home">
    <div>
      <ul class="article-list">
        <li class="article">
          <div class="title">
            <span></span>
            <div class="art-name"><router-link to="/article/101">热门文章</router-link></div>
            <div class="art-date">2020-12-11</div>
            <span></span>
          </div>
          <div class="content">
            <router-link to="/article/101">
              数据库设计
            </router-link>
          </div>
          <div class="statistics">
            <a-icon type="message" />
            <span>0</span>
            <a-icon type="eye" />
            <span>10</span>
            <div></div>
            <a-icon type="tags" />
            <a-tag color="pink"> pink </a-tag>
            <div></div>
            <a-icon type="folder" />
            <a-tag color="pink"> pink </a-tag>
          </div>
        </li>
      </ul>
      <template>
        <a-pagination :default-current="6" :total="500" />
      </template>
    </div>

    <div class="quick_nav">
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
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style lang="less" scoped>
.home {
  height: calc(100vh - 104px);
  overflow-y: scroll;

  .article-list {
    width: calc(100% - 292px);
    position: relative;

    .article {
      padding: 16px 24px;
      border: 1px solid #ebedf0;
      margin-bottom: 10px;
      -webkit-transition: all 0.2s linear;
      transition: all 0.2s linear;
      box-sizing: border-box;

      &:hover {
        background: #effbff;
        box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
      }

      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0;

        span {
          display: inline-block;
          width: 30px;
          border-top: 1px solid #ebedf0;

          &:last-child {
            width: 30px;
            flex: 1;
          }
        }
        .art-name {
          color: #394d69;
          font-size: 20px;
          padding: 0 20px;
          font-weight: 600;
          cursor: pointer;

          &:hover {
            color: #1890ff;
            font-size: 20px;
          }
        }
        .art-date {
        }
      }

      .content {
        cursor: pointer;
      }

      .statistics {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 20px;

        div {
          border-left: 1px solid rgba(0, 0, 0, 0.1);
          height: 14px;
          margin-right: 7px;
          margin-bottom: 10px;
        }
        i,
        span {
          margin-right: 7px;
          margin-bottom: 10px;
        }
      }
    }
  }

  .ant-pagination{
    float: right;
    margin-right: 292px;
  }

  .quick_nav {
    position: fixed;
    width: 260px;
    top: 110px;
    right: 20px;
    list-style-type: circle;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      span {
        display: inline-block;
        width: 10px;
        border-top: 1px solid #ebedf0;
        flex: 1;
      }

      div {
        color: #000;
        font-size: 16px;
        padding: 0 20px;
      }
    }
    .hot-list {
      li {
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
      :hover {
        background: #f0f2f5;
        color: #1890ff;
      }
    }
  }
}
</style>