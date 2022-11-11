<template>
  <div>
    <input type="text" v-model="wantToWatch" @keyup.enter="addMovie">
    <button @click="addMovie">Add</button>
  </div>
</template>

<script>
export default {
  name: 'WatchListForm',
  data() {
    return {
      wantToWatch: null,
    }
  },
  methods: {
    addMovie() {
      this.$emit('add-movie', this.wantToWatch)
      this.wantToWatch = null
    }
  }
}
</script>

<style>

</style>