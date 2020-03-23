<template>
    <div class="receipt__wrapper">
        <h2>Little Brown Book Shop</h2>
        <p>Address: Gaysorn Tower</p>
        <h2>CASH RECEIPT</h2>
        <CartList />
        <h3>THANK YOU</h3>
        <a class="button__back" @click="clearTransaction()">Back to shop</a>
    </div>
</template>
<script>
import CartList from '@/components/CartList.vue'
export default {
  name: 'Receipt',
  components: {
    CartList
  },
  methods: {
    clearTransaction () {
      this.$store.dispatch('clearTransaction', [])
      window.location.href = '/'
    }
  }
}
</script>

<style lang="scss">
.receipt {
    &__wrapper {
      width: 50%;
      border: 1px dashed #000;
      margin: 0 auto;
      padding: 30px;
      @media (max-width: 600px) {
        width: 75%;
      }
    }
    &__payment {
      display: flex;
      flex: 1 1;
    }
}
.button {
  &__back {
    cursor: pointer;
    &:hover {
      color: #07b53b;
    }
  }
}
</style>
