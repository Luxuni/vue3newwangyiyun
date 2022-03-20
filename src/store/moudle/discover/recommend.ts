import {getBanner, getPersonalized} from "@/network/discover/recommend";
import {checkCode} from "@/store/exception";

interface stateInterface {
    banners: null,
    IncompletePersonalized: {}
}

export default {
    namespaced: true,
    status: {
        banners: null,
        IncompletePersonalized: {}
    },
    mutations: {
        GET_BANNER(state: stateInterface, value: any) {
            state.banners = value.banners;
        },
        GET_INCOMPLETE_PERSONALIZED(state: stateInterface, value: any) {
            state.IncompletePersonalized = value.result
        }
    },
    actions: {
        async getBanner(context: any, value: number) {
            const res = await getBanner(value)
            //检查返回参数
            checkCode(res.code)
            context.commit('GET_BANNER', res)
        },
        async getIncompletePersonalized(context: any, value: { limit: number, cookie?: string }) {
            const res = await getPersonalized(value.limit, value.cookie)
            //检查返回参数
            checkCode(res.code)
            context.commit('GET_INCOMPLETE_PERSONALIZED', res)
        }
    },
    getters: {}
}
