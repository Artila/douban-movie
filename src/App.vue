<template>
	<div id="app">
		<m-header></m-header>
    <m-loading v-if="loading"></m-loading>
		<router-view></router-view>
	</div>
</template>

<script>
import MHeader from './components/Header'
import MLoading from './components/Loading'

export default {
  name: 'app',
  watch: {
    '$route': function () {
      this.start = 0
      this.movies = ''
      this.loading = true
    }
  },
  computed: {
    start: {
      get () {
        return this.$store.state.start
      },
      set (val) {
        this.$store.commit('UPDATE_START', val)
      }
    },
    movies: {
      get () {
        return this.$store.state.movies
      },
      set (val) {
        this.$store.commit('UPDATE_MOVIES', val)
      }
    },
    loading: {
      get () {
        return this.$store.state.loading
      },
      set (val) {
        this.$store.commit('UPDATE_LOADING', val)
      }
    }
  },
  components: {
    MHeader,
    MLoading
  }
}
</script>

<style lang="less">
  @import "assets/common.less";
</style>
