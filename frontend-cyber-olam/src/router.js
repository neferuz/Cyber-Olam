import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Tournament from './pages/Tournament.vue'
import Page2 from './pages/Page2.vue'
import News from './pages/News.vue'
import Stream from './pages/Stream.vue'
import Ranking from './pages/Ranking.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/tournaments', component: Tournament },
  { path: '/page2', component: Page2 },
  { path: '/news', component: News },
  { path: '/streams', component: Stream },
  { path: '/ranking', component: Ranking },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 