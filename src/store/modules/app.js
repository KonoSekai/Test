const state = {
    redirect: '/',
    visible: false
}
const getters = {
    getRedirect: state => state.redirect,
    getVisible: state => state.visible
}

const mutations = {
    setVisible: (state, visible, redirect) => {
        state.visible = visible
        state.redirect = redirect
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}