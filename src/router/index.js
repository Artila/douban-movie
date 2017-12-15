import Vue from 'vue'
import Router from 'vue-router'
import ComingSoon from '@/components/ComingSoon'
import MovieDetail from '@/components/MovieDetail'
import CelebrityDetail from '@/components/CelebrityDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ComingSoon',
      component: ComingSoon
    },
    {
      path: '/search',
      component: ComingSoon
    },
    {
      path: '/in_theaters',
      component: ComingSoon
    },
    {
      path: '/coming_soon',
      component: ComingSoon
    },
    {
      path: '/top250',
      component: ComingSoon
    },
    {
      path: '/subject/:id',
      component: MovieDetail
    },
    {
      path: '/celebrity/:id',
      component: CelebrityDetail
    }
  ]
})
