import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    watchList: []
  },
  getters: {
  },
  mutations: {
    ADD_MOVIE(state, wantToWatch) {
      const movieInfo = {
        title: wantToWatch,
        isWatched: false,
      }
      state.watchList.push(movieInfo)
    },
    UPDATE_MOVIE(state, wishMovie) {
      state.watchList = state.watchList.map((movie) => {
        if (movie === wishMovie) {
          movie.isWatched = !movie.isWatched
        } 
        return movie
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
