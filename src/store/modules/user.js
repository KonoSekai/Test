import {
    login,
    logout,
    getUserInfo
} from '@/api/user'
import {setToken, getToken} from '@/libs/util'

const state = {
    user: {
        email: '',
        nickname: '',
        sign: '',
        avatar: '',
        banner: '',
        lastLogged: '',
    },
    token: ''
}

const getters = {
    getUser: state => state.user,
    getToken: state => state.token,
    getLogged: state => !(undefined === state.token || null === state.token || '' === state.token)
}

const mutations = {
    setUser: (state, user) => state.user = user,
    setAvatar: (state, avatar) => state.user.avatar = avatar,
    setEmail: (state, email) => state.user.email = email,
    setNickname: (state, nickname) => state.user.nickname = nickname,
    setToken: (state, token) => state.token = token
}

const actions = {
    getUserInfo: ({state, commit}, email) => {
        return new Promise((resolve, reject) => {
            try {
                getUserInfo(email).then(res => {
                    if (res.success) {
                        commit('setUser', res.data)
                        resolve(res)
                    } else {
                        console.log(res)
                        reject(res)
                    }
                }).catch(err => {
                    console.log(err)
                })
            } catch (err) {
                console.log(err)
            }
        })
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}