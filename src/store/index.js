import {createStore} from "vuex";
import axiosUrl from "@/axiosUrl.js";
export default createStore({
    state: {
        headerMenu: [],
        logoUrl: '',
        footerInfo: {},
        registration: {},
        statistics: {},
        short_description: '',
        research: [],
        main_video: {}
    },
    mutations: {
        setHeaderMenu(state, item) {
            state.headerMenu = item
        },
        setLogoUrl(state, logo) {
            state.logoUrl = logo
        },
        setFooterInfo(state, info) {
            state.footerInfo = info
        },
        setRegistration(state, info) {
            state.registration = info
        },
        setStatistics(state, statistics) {
            state.statistics = statistics
        },
        setShortDescription(state, shortDescription) {
            state.shortDescription = shortDescription
        },
        setResearch(state, research) {
            state.research = research
        },
        setMainVideo(state, mainVideo) {
            state.mainVideo = mainVideo
        }
    },
    actions: {
        async getMenuItems({commit}) {
            try {
                const response = await axiosUrl.get('menu/')
                commit('setHeaderMenu', response.data.header_menu)
                commit('setLogoUrl', response.data.logo_url);
                commit('setFooterInfo', response.data.footer.footer_info)
            } catch (error) {
                console.log('Error', error)
            }
        },
        async getIndex({commit}) {
            try {
                const response = await axiosUrl.get('index/')
                commit('setRegistration', response.data.registration)
                console.log(response)
                commit('setStatistics', response.data.statistics)
                commit('setShortDescription', response.data.shortDescription)
                commit('setResearch', response.data.research)
                commit('setMainVideo', response.data.main_video)
            } catch (error) {
                console.log('Error', error)
            }
        }
    },
    getters: {
        headerMenu: state => state.headerMenu,
        logoUrl: state => state.logoUrl,
        footerInfo: state => state.footerInfo,
        registration: state => state.registration,
        statistics: state => state.statistics,
        shortDescription: state => state.short_description,
        research: state => state.research,
        mainVideo: state => state.main_video
    }
})