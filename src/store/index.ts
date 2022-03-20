import {createStore, useStore as baseUseStore, Store} from "vuex";
import {InjectionKey} from 'vue'
import global from "./moudle/global"
import recommend from "./moudle/discover/recommend"

export interface State {
    recommend: {
        banners: any
        IncompletePersonalized:any
    };
}

export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore({
    // 公共模板直接在这里展开就可以
    ...global,
    modules: {
        recommend
    },
});

export function useStore() {
    return baseUseStore(key)
}
