import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(Vuex)

const state = {
  movies: '',
  start: 0,
  count: 5,
  total: 0,
  isEnd: false,
  movie: '',
  celebrity: '',
  loading: true
}

const getters = {
}

const mutations = {
  GET_MOVIES: (state, res) => {
    if (state.movies === '') {
      state.movies = res.data.subjects
    } else {
      state.movies = state.movies.concat(res.data.subjects)
    }
    state.total = res.data.total
    state.start += 5
    if (state.start > state.total) {
      state.isEnd = true
    }
  },
  GET_MOVIE: (state, res) => {
    state.movie = res.data
  },
  GET_CELEBRITY: (state, res) => {
    state.celebrity = res.data
  },
  UPDATE_START: (state, val) => {
    state.start = val
  },
  UPDATE_MOVIES: (state, val) => {
    state.movies = val
  },
  UPDATE_LOADING: (state, val) => {
    state.loading = val
  }
}

const actions = {
  getMovies ({commit, state}, url) {
    Vue.axios.get(url)
      .then((res) => {
        commit('GET_MOVIES', res)
        state.loading = false
      })
      .catch((err) => {
        console.log(err)
        state.loading = false
      })
  },
  getMovie ({commit, state}, url) {
    Vue.axios.get(url)
      .then((res) => {
        commit('GET_MOVIE', res)
        state.loading = false
      })
      .catch((err) => {
        console.log(err)
        state.loading = false
      })
  },
  getCelebrity ({commit, state}, url) {
    Vue.axios.get(url)
      .then((res) => {
        commit('GET_CELEBRITY', res)
        state.loading = false
      })
      .catch((err) => {
        console.log(err)
        state.loading = false
      })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
