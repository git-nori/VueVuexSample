import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const Form = {
    namespaced: true,
    state: {
        component: ["TextareaComp", "StringComp"]
    },
    mutations: {},
    actions: {
    },
    getters: {
        getComponent(state, getters, rootState) {
            return state.component[rootState.stepCount]
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

const Textarea = {
    namespaced: true,
    state: {
        errorMsg: "入力は必須です",
    },
    getters: {
        getError(state, getters, rootState) {
            if (rootState.errorFlg) {
                return null
            } else {
                return state.errorMsg
            }
        }
    }
}

const String = {
    namespaced: true,
    getters: {
        getString(state, getters, rootState) {
            return rootState.impression
        }
    }
}

const Button = {
    namespaced: true,
    state: {
        button: ["confirm", "check", "top page"],
    },
    mutations: {},
    actions: {
        buttonAction({ commit, state, rootState }) {
            // 画面上で入力値が入っている場合
            if (rootState.errorFlg) {
                commit('setStepCount', null, { root: true })  // rootへのアクセス
            }
            if (rootState.stepCount === 2) {
                router.push('thanks')  // URLが'/thanks'のページへ遷移(template内に<router-liink to="/thanks">を記述するのと同じ動作)
            }
            if (rootState.stepCount === 3) {
                commit('reset', null, { root: true })
                router.push('/')
            }
        }
    },
    getters: {
        getButton(state, getters, rootState) {
            return state.button[rootState.stepCount]  // rootStateのstepCountの値に応じてbutton配列の文字列を返す
        }
    }
}

export default new Vuex.Store({
    state: {
        stepCount: 0,
        impression: "",
        errorFlg: false
    },
    mutations: {
        setStepCount(state) {
            state.stepCount++
        },
        reset(state) {
            state.stepCount = 0
            state.impression = ""
            state.errorFlg = false
        },
        updateImpression(state, value) {
            state.impression = value
            if (state.impression) {
                state.errorFlg = true
            } else {
                state.errorFlg = false
            }
        }
    },
    modules: {
        Form,
        Head,
        Textarea,
        String,
        Button
    }
})
