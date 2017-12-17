<template>
	<div class="comingSoon">
    <div class="content" v-if="movies">
      <ul>
        <li v-for="item in movies">
          <router-link :to="`/subject/${item.id}`" class="item-box">
            <div class="item-img fl">
              <img :src="item.images.large" :alt="item.title">
            </div>
            <div class="item-info fl">
              <h4>{{ item.title }}</h4>
              <i class="score">{{ item.rating.average }}</i>
              <p>
                <span>类型：</span>
                <span v-for="genre in item.genres">
                  {{ genre }}
                </span>
              </p>
              <p>
                <span>导演：</span>
                <router-link :to="`/celebrity/${director.id}`" v-for="director in item.directors" :key="director.id">
                  {{ director.name }}
                </router-link>
              </p>
              <p>
                <span>演员：</span>
                <router-link :to="`/celebrity/${cast.id}`" v-for="cast in item.casts" :key="cast.id">
                  {{ cast.name }}
                </router-link>
              </p>
              <p>
                {{ item.year }}年作品
              </p>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="waiting" @click="nextPage">
        <span v-if="isEnd">已经没有啦！</span>
        <span v-else>点击加载下一页内容</span>
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
      'start',
      'count',
      'total',
      'isEnd',
      'movies'
    ])
  },
  methods: {
    fetchData: function () {
      let path = this.$route.path.split('/')[1] ? this.$route.path.split('/')[1] : 'in_theaters'
      let url
      if (path.indexOf('search') !== -1) {
        url = '/api/movie/' + path + '?q=' + this.$route.query.q + '&start=' + this.start + '&count=' + this.count
      } else {
        url = '/api/movie/' + path + '?start=' + this.start + '&count=' + this.count
      }
      this.$store.dispatch('getMovies', url)
    },
    nextPage: function () {
      if (!this.isEnd) {
        this.fetchData()
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/base.less";

  .comingSoon {
    li {
      margin-top: 1px;
      height: 300/@rem;
      background: #fafbfc;
      overflow: hidden;
    }
  }
</style>
