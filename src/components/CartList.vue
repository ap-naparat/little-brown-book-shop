<template>
    <div v-if="cart.length !== 0">
        <div class="checkout__content">
          <table class="table__list">
            <thead>
                <tr>
                    <th>List</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th v-if="showRemove">Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cart" :key="item.code">
                    <td>{{ item.title }}</td>
                    <td>x{{ item.quantity }}</td>
                    <td>{{ item.price }} ฿</td>
                    <td v-if="showRemove"><button class="button__remove" @click="removeFromCart(index)">Remove</button></td>
                </tr>
            </tbody>
        </table>
        </div>
        <div class="checkout__content">
          <div class="cart__footer">
              <h2 class="cart__text--nomargin cart__text--left">Summary</h2>
              <div class="cart__flex">
                <span><p>Subtotal: </p></span>
                <span><p>{{ total }} ฿</p></span>
              </div>
              <div class="cart__flex">
                <span><p>Discount: </p></span>
                <span><p>{{ sumDiscount }} ฿</p></span>
              </div>
              <div class="cart__flex">
                <span class="cart__footer--bold"><h3>Total: </h3></span>
                <span><h3 class="cart__footer--green">{{ totalNet }} ฿</h3></span>
              </div>
              <div class="cart__flex" v-if="showChange">
                <span class="cart__footer--bold"><p>Change: </p></span>
                <span><p>{{ cashBack }} ฿</p></span>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { mapGetters } from 'vuex'
export default {
  name: 'CartList',
  data () {
    const routepath = this.$route.path === '/payment' || this.$route.path === '/receipt' ? this.showRemove = false : this.showRemove = true
    const routereceipt = this.$route.path === '/receipt' ? this.showChange = true : this.showChange = false
    return {
      isActive: false,
      showRemove: routepath,
      showChange: routereceipt
    }
  },
  computed: {
    ...mapGetters({
      cart: 'cartList',
      numInCart: 'numInCart',
      getDiscount: 'getDiscount',
      total: 'total',
      sumDiscount: 'sumDiscount',
      totalNet: 'totalNet',
      cashBack: 'cashBack'
    }),
    appIcon () {
      return faShoppingCart
    }
  },
  methods: {
    removeFromCart (index) {
      this.$store.dispatch('removeFromCart', index)
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  li {
    font-size: 18px;
    background: #fff;
    width: 15%;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 30px;
    margin: 0 10px;
    height:200px;
    a {
      text-align: center;
    }
  }
}
.table {
    &__list {
       width: 100%;
       border-spacing: 0px;
        tr {
            th {
              font-weight: bold;
              text-align: left;
              font-size:22px;
              @media (max-width: 600px) {
                font-size: 14px;
              }
            }
            td {
              padding: 10px 0;
              width: 35%;
              border-bottom: 1px solid #000;
              text-align:left;
              &:first-child {
                width: 47%;
              }
              @media (max-width: 600px) {
                font-size: 12px;
              }
            }
        }
    }
}
.cart {
  &__text {
    &--left {
      text-align: left;
    }
    &--nomargin {
      margin: 0;
    }
  }
  &__footer {
      margin: 20px auto;
      display: block;
      p {
        margin: 0;
      }
      h3 {
        text-align: right;
        font-size:1.5em;
        margin: 0;
        font-weight: bold;
      }
      &--green {
        color: #07b53b;
      }
      &--bold {
        font-weight: bold;
      }
  }
  &__flex {
    display: flex;
    justify-content: space-between;
    border-bottom:1px dashed lightgrey;
    padding: 10px 0;
  }
}
</style>
