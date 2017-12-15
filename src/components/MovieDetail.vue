<template>
	<div class="movieDetail">
    <div class="details" v-if="movie">
      <header class="item-box">
        <div class="item-img fl">
          <img :src="movie.images.large" :alt="movie.title">
        </div>
        <div class="item-info fl">
          <h4>{{ movie.title }}</h4>
          <i class="score">{{ movie.rating.average }}</i>
          <p>
            <span>类型：</span>
            <span v-for="genre in movie.genres">
              {{ genre }}
            </span>
          </p>
          <p>
            <span>别名：</span>
            <span v-for="name in movie.aka">
              {{ name }}
            </span>
          </p>
        </div>
      </header>
      <!--演职表-->
      <div class="item-casts grids">
        <p>演职表</p>
        <ul class="clearfix">
          <li v-for="director in movie.directors" class="fl">
            <router-link :to="`/celebrity/${director.id}`" class="grid">
              <img :src="director.avatars.large">
              <p>{{ director.name }}</p>
              <p class="small">导演</p>
            </router-link>
          </li>
          <li v-for="cast in movie.casts" class="fl">
            <router-link :to="`/celebrity/${cast.id}`" class="grid">
              <img :src="cast.avatars.large">
              <p>{{ cast.name }}</p>
              <p class="small">演员</p>
            </router-link>
          </li>
        </ul>
      </div>
      <!--剧情简介-->
      <div class="item-summary">
        <h3>剧情简介</h3>
        <div class="item-summary-box">
          <p>{{ movie.summary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    created () {
      this.fetchData()
    },
    watch: {
      // 当路由发生变化，也就是链接变了，也需要重新获取数据
      '$route': 'fetchData'
    },
    computed: {
      ...mapState([
        'movie'
      ])
    },
    methods: {
      fetchData () {
        let url = '/api/movie' + this.$route.path
        this.$store.dispatch('getMovie', url)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/base.less";

  .item-summary {
    h3 {
      margin-top: 30/@rem;
      height: 36/@rem;
      line-height: 36/@rem;
    }
    .item-summary-box {
      p {
        margin-top: 30/@rem;
        line-height: 36/@rem;
        font-size: 24/@rem;
        text-indent: 2em;
        color: #666;
      }
    }
  }
</style>
