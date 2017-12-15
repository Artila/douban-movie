<template>
	<div class="celebrityDetail">
    <div class="details" v-if="celebrity">
      <header class="item-box">
        <div class="item-img fl">
          <img :src="celebrity.avatars.large" :alt="celebrity.name">
        </div>
        <div class="item-info fl">
          <h4>{{ celebrity.name }}</h4>
          <i class="score">{{ celebrity.gender }}</i>
          <p>
            <span>出生地：</span>
            <span>{{ celebrity.born_place }}</span>
          </p>
          <p>
            <span>其他名字：</span>
            <span v-if="aka" v-for="name in celebrity.aka_en">{{ name }} </span>
            <span v-if="!aka">{{ celebrity.name_en }}</span>
          </p>
          <p>
            <router-link :to="`${celebrity.mobile_url}`">豆瓣专题页</router-link>
          </p>
        </div>
      </header>

      <div class="item-works grids">
        <p>代表作品</p>
        <ul>
          <li v-for="work in celebrity.works" class="fl">
            <router-link :to="`/subject/${work.subject.id}`" class="grid">
              <img :src="work.subject.images.large">
              <p>{{ work.subject.title }}</p>
              <p class="small">
              <span v-for="role in work.roles">
                {{ role }}
              </span>
              </p>
            </router-link>
          </li>
        </ul>
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
        'celebrity'
      ]),
      aka () {
        if (this.celebrity.aka_en[0]) {
          return true
        } else if (this.celebrity.name_en) {
          return false
        }
      }
    },
    methods: {
      fetchData () {
        let url = '/api/movie' + this.$route.path
        this.$store.dispatch('getCelebrity', url)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/base.less";
</style>
