<template>
  <div class="home">
    <h1>Little Brown Book Shop</h1>
    <List />
  </div>
</template>

<script>
import List from '@/components/List.vue'

export default {
  name: 'HOME',
  components: {
    List
  }
}
</script>

<style lang="scss" scoped>
  .home {
    margin-top: 80px;
    h1 {
      font-size: 3em;
      color: #07b53b;
    }
  }
</style>
