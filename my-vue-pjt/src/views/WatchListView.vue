<template>
  <div>
    <h1>WatchList</h1>
    <WatchListForm
      @add-movie="addMovie"
    />
    <ul style="list-style-type: none">
      <WatchListItem
        v-for="(wishMovie, index) in watchList"
        :key="index"
        :wishMovie="wishMovie"
      />
    </ul>
  </div>
  
</template>

<script>
import WatchListForm from '../components/WatchListForm'
import WatchListItem from '../components/WatchListItem'


export default {
  name: 'WatchListView',
  components: {
    WatchListForm,
    WatchListItem,
  },
  computed: {
    watchList() {
      return this.$store.state.watchList
    }
  },
  methods: {
    addMovie(wantToWatch) {
      this.$store.commit('ADD_MOVIE', wantToWatch)
    }
  }
}
</script>

<style>

</style>