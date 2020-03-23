<template>
    <div class="checkout__wrapper">
        <div v-if="cart.length !== 0">
          <div class="">
            <h2>Shopping Cart <font-awesome-icon :icon="appIcon" /></h2>
            <CartList />
            <router-link class="button__middle" to="/payment">Checkout</router-link>
          </div>
        </div>
        <div v-if="cart.length === 0">
          <h3>Your shopping cart is empty</h3>
          <router-link to="/">Go Shopping Now</router-link>
        </div>
    </div>
</template>
<script>
import CartList from '@/components/CartList.vue'
import { mapGetters } from 'vuex'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// @ is an alias to /src
export default {
  name: 'Checkout',
  components: {
    // Payment,
    CartList
  },
  computed: {
    ...mapGetters({
      cart: 'cartList'
    }),
    appIcon () {
      return faShoppingCart
    }
  }
}
</script>

<style lang="scss">
.checkout {
    &__wrapper {
      width: 80%;
      padding: 30px;
      margin: 0 auto;
    }
    &__content {
      border: 1px solid lightgray;
      margin: 0 0 25px;
      padding: 20px 40px;
      @media (max-width: 600px) {
        padding: 20px;
      }
    }
}
</style>
