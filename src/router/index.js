import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import InstructionsView from '../views/InstructionsView.vue'
import PublicationsView from "@/views/PublicationsView.vue";
import ResearchView from "@/views/ResearchView.vue";
import VideoLessonsView from "@/views/VideoLessonsView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
      {
      path: '/about',
      name: 'about',
      component: AboutView
    },
      {
      path: '/instructions/:id',
      name: 'instructions',
      component: InstructionsView
    },
      {
      path: '/publications',
      name: 'publications',
      component: PublicationsView
    },
      {
      path: '/research',
      name: 'research',
      component: ResearchView
    },{
      path: '/videoLessons',
      name: 'videoLessons',
      component: VideoLessonsView
    },
  ]
})

export default router
