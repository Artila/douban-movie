<template>
	<header>
    <div class="m-header">
      <span>豆瓣电影</span>
    </div>
    <div class="m-search">
      <input v-model="q" @keyup.enter="submit" type="text" placeholder="请输入搜索内容">
    </div>
    <div class="m-tab">
      <router-link to="/in_theaters">正在热映</router-link>
      <router-link to="/coming_soon">即将上映</router-link>
      <router-link to="/top250">top250</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        q: ''
      }
    },
    methods: {
      submit: function () {
        this.$router.push({
          path: '/search',
          query: {
            q: this.q
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .m-header {
    height: 1.62318841rem;
    line-height: 1.62318841rem;
    text-align: left;
    background: #1caf8b;
    color: #ffffff;
    font-size: 0;
    span {
    	padding-left: 0.77294686rem;
    	font-size: 0.61835749rem;
    }
  }
  .m-search {
    position: relative;
    height: 1.39130435rem;
    font-size: 0;
    overflow: hidden;
    input {
      /*padding: 0.42512077rem 0 0.42512077rem 6px;*/
      padding-left: 6px;
      width: 100%;
      height: 1.39130435rem;
      font-size: 0.5410628rem;
      background: #f5f5f5;
      color: #757575;
      border: 1px solid #f5f5f5;
      overflow: hidden;
    }
  }
  .m-tab {
    height: 1.54589372rem;
    line-height: 1.54589372rem;
    background: #1caf8b;
    color: #ffffff;
    font-size: 0;
    a {
      display: inline-block;
      width: 33.33%;
      font-size: 0.61835749rem;
      text-align: center;
      text-decoration:none;
      color: #ffffff;
    }
  }
</style>
