<template>
  <div>
    <h1>WatchList</h1>
    <WatchListForm/>
    <ul>
      <WatchListItem/>
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
  }
}
</script>

<style>

</style>