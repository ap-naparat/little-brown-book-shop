<template>
  <div class="checkout">
    <Checkout />
  </div>
</template>

<script>
// @ is an alias to /src
import Checkout from '@/components/Checkout.vue'

export default {
  name: 'CHECKOUT',
  components: {
    Checkout
  }
}
</script>
<style lang="scss">
  .checkout {
    margin-top: 80px;
    h1 {
      font-size: 4em;
      color: #07b53b;
    }
  }
</style>
