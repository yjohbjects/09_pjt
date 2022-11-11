import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    watchList: [],
    movies: [],
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
    },
    GET_MOVIE_DATA(state, movieData) {
      state.movies = movieData
    }
  },
  actions: {
  },
  modules: {
  }
})
