import {createStore} from "vuex";
import axiosUrl from "@/axiosUrl.js";
import {data} from "autoprefixer";

export default createStore({
    state: {
        headerMenu: [],
        logoUrl: '',
        footerInfo: {},
        registration: {},
        statistics: {},
        short_description: '',
        research: [],
        main_video: {},
        researchDetail: {},
        instructions: [],
        publication: {},
        category: [],
        filteredPublications: [],
        videoCourses: [],
        videoCourseCategory: [],
        researchCategory: []

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
            state.short_description = shortDescription
        },
        setResearch(state, research) {
            state.research = research
        },
        setMainVideo(state, mainVideo) {
            state.main_video = mainVideo
        },
        setResearchDetail(state, researchDetail) {
            state.researchDetail = researchDetail
        },
        setInstructions(state, instructions) {
            state.instructions = instructions
        },
        setPublication(state, publication) {
            state.publication = publication
        },
        setCategory(state, category) {
            state.category = category
        },
        setFilteredPublications(state, publications) {
            state.filteredPublications = publications;
        },
        setVideoCourse(state, courses) {
            state.videoCourses = courses
        },
        setVideoCourseCategory(state, categories) {
            state.videoCourseCategory = categories;
        },
        setResearchCategory(state, researchCategory) {
            state.researchCategory = researchCategory;
        }
    },
    actions: {
        async getMenuItems({commit}) {
            try {
                const response = await axiosUrl.get('/menu/')
                commit('setHeaderMenu', response.data.header_menu)
                commit('setLogoUrl', response.data.logo_url);
                commit('setFooterInfo', response.data.footer.footer_info)
            } catch (error) {
                console.log('Error', error)
            }
        },
        async getIndex({commit}) {
            try {
                const response = await axiosUrl.get('/index/')
                commit('setRegistration', response.data.registration)
                commit('setStatistics', response.data.statistics)
                commit('setShortDescription', response.data.short_description)
                commit('setResearch', response.data.research)
                commit('setMainVideo', response.data.main_video)
            } catch (error) {
                console.log('Error', error)
            }
        },
        async getResearchDetail({commit}, id) {
            try {
                const response = await axiosUrl.get(`/research/${id}/`)
                commit('setResearchDetail', response.data)
            } catch (error) {
                console.log('Error', error)
            }
        },
        async getInstructions({commit}) {
            try {
                const response = await axiosUrl.get('/instruction/')
                commit('setInstructions', response.data)
            } catch (error) {
                console.log('Error', error)
            }
        },
        async getPublication({ commit }, { area, categorySlug } = {}) {
            try {
                let url = `/publication/?area=${area || ''}&page=1`;
                if (categorySlug) {
                    url += `&category__slug=${categorySlug}`;
                }
                const response = await axiosUrl.get(url);
                commit('setPublication', response.data);
                commit('setFilteredPublications', response.data.results);
            } catch (error) {
                console.log('Error', error);
            }
        },
        async getCategory({commit}) {
            try {
                const response = await axiosUrl.get('/publication/category/')
                commit('setCategory', response.data)
            } catch (error) {
                console.log('Error', error)
            }
        },
        async fetchVideoCourses({ commit }, url) {
            try {
                const response = await axiosUrl.get(url);
                commit('setVideoCourse', response.data);
            } catch (error) {
                console.log('Error', error);
            }
        },
        async getVideoCourseCategory({commit}) {
            try {
                const response = await axiosUrl.get('/videocourse/videocourse-category/');
                console.log('Fetched Video Course Categories:', response.data); // Add this line
                commit('setVideoCourseCategory', response.data);
            } catch (error) {
                console.log('Error', error);
            }
        },
        async getResearchCategory({commit}) {
            try {
                const response = await axiosUrl.get('/research/research-category')
                commit('setResearchCategory', response.data);
                console.log(response)
            } catch (error) {
                console.log('Error', error);
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
        mainVideo: state => state.main_video,
        researchDetail: state => state.researchDetail,
        instructions: state => state.instructions,
        publication: state => state.publication,
        category: state => state.category,
        filteredPublications: state => state.filteredPublications,
        videoCourses: state => state.videoCourses,
        videoCourseCategory: state => state.videoCourseCategory,
        researchCategory: state => state.researchCategory,
    }
})