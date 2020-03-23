<template>
  <div>
    <div class="payment__content" v-if="cart.length !== 0">
      <div>Payment Method : Cash</div>
      <div class="payment__total">
        <label>Total : </label>
        <span>{{ totalNet }}</span>
      </div>
      <div>
        <label>Cash : </label>
        <input class="payment__amount" type="text" v-model="paidAmount"/>
      </div>
      <div>
          <label>Change : {{ cashBack }} ฿ </label>
      </div>
       <button to="/receipt" class="button__middle" @click="placeOrder()" :disabled="!validatePay">Place Order</button>
    </div>
    <div v-if="cart.length === 0">
      <h3>Please choose book to your cart before payment</h3>
      <router-link to="/">Go Shopping Now</router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Payment',
  computed: {
    ...mapGetters({
      totalNet: 'totalNet',
      cart: 'cartList',
      cashBack: 'cashBack',
      paidAmount: 'paidAmount'
    }),
    validatePay () {
      return (
        this.paidAmount > 0 && this.cashBack >= 0 && this.paidAmount >= this.totalNet
      )
    },
    paidAmount: {
      get () {
        return this.$store.state.paidAmount
      },
      set (value) {
        this.$store.commit('updateAmount', value)
      }
    }
  },
  methods: {
    placeOrder () {
      const self = this
      self.$router.push('/receipt')
    }
  }
}
</script>

<style lang="scss">
.payment {
    width: 80%;
    font-size:20px;
    padding:10px;
    margin:0 auto;
    text-align: left;
    &__content {
      border: 1px solid lightgrey;
      padding: 30px;
    }
    &__amount {
        font-size: 20px;
        border-radius: 10px;
        padding:10px 10px;
        border:1px solid grey;
        width: 50%;
        &:focus {
            outline: 0 none;
        }
    }
}
</style>
