import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import * as types from './mutation-type'

Vue.use(Vuex)
export const axiosHeaders = {
  headers: { 'secret-key': process.env.VUE_APP_API_KEY }
}
export default new Vuex.Store({
  state: {
    inCart: [],
    bookList: [],
    paidAmount: ''
  },
  getters: {
    bookList: state => state.bookList,
    inCart: state => state.inCart,
    numInCart: state => {
      return state.cartList.quantity
    },
    cartList: state => {
      return state.inCart.map(({ code, quantity }) => {
        const book = state.bookList.find(list => list.code === code)
        return {
          code: book.code,
          title: book.title,
          price: book.price,
          discount: book.discount,
          series: book.series,
          quantity
        }
      })
    },
    getDiscount: state => {
      const findUniuqe = Array.from(new Set(state.inCart))
      const result = findUniuqe.filter((data) => {
        return data.discount !== false
      })
      return state.inCart.map(({ discount, price }) => {
        if (!discount) return { discountAmount: 0 }
        if (discount) {
          let discountAmount
          switch (result.length) {
            case 2:
              discountAmount = price * 10 / 100
              break
            case 3:
              discountAmount = price * 11 / 100
              break
            case 4:
              discountAmount = price * 12 / 100
              break
            case 5:
              discountAmount = price * 13 / 100
              break
            case 6:
              discountAmount = price * 14 / 100
              break
            case 7:
              discountAmount = price * 15 / 100
              break
            default: return { discountAmount: 0 }
          }
          return { discountAmount }
        }
      })
    },
    total: (state) => {
      let total = 0
      state.inCart && state.inCart.forEach(list => {
        total += list.price * list.quantity
      })
      return total
    },
    sumDiscount: (state, getters) => {
      return getters.getDiscount.reduce((acc, curr) => {
        return acc + curr.discountAmount
      }, 0)
    },
    totalNet: (state, getters) => {
      return getters.total - getters.sumDiscount
    },
    sumQuantity (state) {
      return state.inCart.reduce((sum, p) => {
        return sum + p.quantity
      }, 0)
    }
  },
  mutations: {
    [types.ADD_TO_CART] (state, { code, price, discount }) {
      const record = state.inCart.find(p => p.code === code)
      if (!record) {
        state.inCart.push({
          code,
          price,
          discount,
          quantity: 1
        })
      } else {
        record.quantity++
      }
    },
    [types.REMOVE_FROM_CART] (state, index) {
      state.inCart.splice(index, 1)
    },
    [types.CLEAR_TRANSACTION] (state) {
      state.inCart = []
    },
    fetchBookList (state, { res }) {
      state.bookList = res.data.bookList
    }
  },
  actions: {
    addToCart (context, code) {
      context.commit(types.ADD_TO_CART, code)
    },
    removeFromCart (context, index) {
      context.commit(types.REMOVE_FROM_CART, index)
    },
    clearTransaction (context) {
      context.commit(types.CLEAR_TRANSACTION)
    },
    async fetchBookList ({ commit }) {
      await Axios.get(process.env.VUE_APP_API_ENDPOINT, axiosHeaders)
        .then(res => commit('fetchBookList', { res }))
        .catch(err => alert(err))
    }
  },
  modules: {
  }
})
