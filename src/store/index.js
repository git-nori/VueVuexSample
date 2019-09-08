import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const Form = {
    namespaced: true,
    state: {
        button: ["confirm", "check"]
    },
    mutations: {},
    actions: {
        buttonAction({ commit, state, rootState }) {
            commit('setStepCount', null, { root: true })  // rootへのアクセス
        }
    },
    getters: {
        getButton(state, getters, rootState) {
            console.log(state.button[rootState.stepCount])
            return state.button[rootState.stepCount]  // rootStateのstepCountの値に応じてbutton配列の文字列を返す
        }
    }
}

const Head = {
    namespaced: true,
    state: {
        title: ['感想を入力', '確認画面', '送信完了']
    },
    mutations: {},
    actions: {},
    getters: {
        getTitle(state, getters, rootState) {
            return state.title[rootState.stepCount]  // rootStateのstepCountの値に応じてtitle配列の文字列を返す
        }
    }
}

export default new Vuex.Store({
    state: {
        stepCount: 0
    },
    mutations: {
        setStepCount(state) {
            console.log('rootsetStepCount')
            state.stepCount++
        }
    },
    modules: {
        Form,
        Head
    }
})
