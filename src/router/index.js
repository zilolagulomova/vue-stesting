import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import InstructionsView from '../views/InstructionsView.vue'
import PublicationsView from "../views/PublicationsView.vue";
import ResearchView from "../views/ResearchView.vue";
import VideoLessonsView from "../views/VideoLessonsView.vue";
import ResearchDetail from "../views/ResearchDetail.vue";

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
            path: '/guide',
            name: 'guide',
            component: InstructionsView
        },
        {
            path: '/publication',
            name: 'publication',
            component: PublicationsView
        },
        {
            path: '/news',
            name: 'news',
            component: ResearchView
        },
        {
            path: '/tutorials',
            name: 'tutorials',
            component: VideoLessonsView
        },
        {
            path: '/research/:id',
            name: '/researchDetail',
            component: ResearchDetail,
        }
    ]
})

export default router
