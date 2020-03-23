<template>
  <div class="payment">
    <CartList />
    <Payment />
  </div>
</template>

<script>
// @ is an alias to /src
import Payment from '@/components/Payment.vue'
import CartList from '@/components/CartList.vue'

export default {
  name: 'PAYMENT',
  components: {
    Payment,
    CartList
  }
}
</script>
<style lang="scss">
  .payment {
    margin-top: 80px;
    h1 {
      font-size: 4em;
      color: #07b53b;
    }
  }
</style>
