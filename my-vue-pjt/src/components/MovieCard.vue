<template>
<!-- <section> -->
<div class="w-25 my-3 mx-3" >
  <div class="card mx-3 my-3 h-100 w-100">
  <!-- <div class="card mx-3 my-3" style="height: 1000px">  -->
  <div>
    <img class="card-img-top" :src="poster_path"/>
  </div>
  <div>
    <h3 class="mt-4">{{ movie.title }}</h3><br>
  </div>


  <div class="mx-3">
    <p>{{ movie.overview }}</p>
  </div>
  
  </div>
</div>
<!-- </section> -->
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
  data() {
    return {
      default_path: 'https://image.tmdb.org/t/p/original',
    }
  },
  computed: {
    poster_path() {
      return this.default_path + this.movie.poster_path
    }
  }
}
</script>

<style>
section {
  /* Detail, List를 가로 배치 */
  display: flex; 
}
</style>