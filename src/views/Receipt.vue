<template>
  <div class="receipt">
    <Receipt />
  </div>
</template>

<script>
// @ is an alias to /src
import Receipt from '@/components/Receipt.vue'

export default {
  name: 'RECEIPT',
  components: {
    Receipt
  }
}
</script>
<style lang="scss">
  .receipt {
    margin-top: 80px;
    h1 {
      font-size: 4em;
      color: #07b53b;
    }
  }
</style>
