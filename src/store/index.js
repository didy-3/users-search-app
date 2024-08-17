import { createStore } from 'vuex'
export default createStore({
  state: {
    loading: false,
    employeesList: [],
    employeeChosen: null,
    searchState: 'Начните поиск'
  },
  getters: {
  },
  mutations: {
    setLoading(state, data) {
      state.loading = data
    },
    setEmployeesList(state, data) {
      state.employeesList = data
    },
    setEmployeeChosen(state, data) {
      state.employeeChosen = data
    },
    setSearchState(state, data) {
      state.searchState = data
    },
  },
  actions: {
    async getEmployeesList({ state, commit }, names) {
      commit('setLoading', true)
      let filter = names.map(it => 'name_like=' + it).join('&')
      let res = await fetch('https://jsonplaceholder.typicode.com/users?' + filter)
        .then((response) => {
          if (response.status != 200)
            commit('setSearchState', 'Произошла ошибка')
          return response.json()
        })
        .catch(() => {
          commit('setSearchState', 'Произошла ошибка')
          commit('setLoading', true)
        })
      if (state.employeeChosen != null && !res.some(it => it.id == state.employeeChosen.id))
        commit('setEmployeeChosen', null)
      if (res.length == 0)
        commit('setSearchState', 'ничего не найдено')
      commit('setEmployeesList', res)
      commit('setLoading', false)
    }
  },
  modules: {
  }
})