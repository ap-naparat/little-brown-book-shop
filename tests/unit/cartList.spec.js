import Vuex from "vuex"
import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from "@vue/test-utils"
import CartList from "@/components/CartList.vue"
import Payment from '@/components/Payment.vue'
import router from '@/router/index.js';

const localVue = createLocalVue()
localVue.use(Vuex)
// const router = new VueRouter({routes: [
//     {path: '/payment', name: 'payment', component: Payment},
//     {path: '/checkout', name: 'payment', component: Payment},
// ]})
const store = new Vuex.Store({
  state: {
    bookList: [
      {
          code: '1',
          title: 'Harry Potter1',
          quantity: 1,
          discount:true,
          price: 1000,
      },
      {
         code: '2',
         title: 'Harry Potter2',
         quantity: 1,
         discount:true,
         price: 1000,
      },
      {
         code: '2',
         title: 'Harry Potter3',
         quantity: 1,
         discount:true,
         price: 1000,
      },
      {
         code: '3',
         title: 'cartoon',
         quantity: 3,
         discount:false,
         price: 100,
      }
    ],
    paidAmount: '3000',
    inCart: [
     {
         code: '1',
         title: 'Harry Potter1',
         quantity: 1,
         discount:true,
         price: 1000,
     },
     {
        code: '2',
        title: 'Harry Potter2',
        quantity: 1,
        discount:true,
        price: 1000,
     },
     {
        code: '2',
        title: 'Harry Potter2',
        quantity: 1,
        discount:true,
        price: 1000,
     },
     {
        code: '3',
        title: 'cartoon',
        quantity: 3,
        discount:false,
        price: 100,
     }
    ]
  },
  getters: {
    cartList: state => {
      return state.inCart.map(({ code, quantity }) => {
        const book = state.bookList && state.bookList.find(list => list.code === code)
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
    sumDiscount: (state, getters) => {
        return getters.getDiscount && getters.getDiscount.reduce((acc, curr) => {
          return acc + curr.discountAmount
        }, 0)
    },
    total: (state, getters) => {
        let total = 0
        state.inCart && state.inCart.forEach(list => {
          total += list.price * list.quantity
        })
        return total
    },
    totalNet: (state, getters) => {
        return getters.total - getters.sumDiscount
    },
    cashBack (state, getters) {
        const paidAmountNumber = parseInt(state.paidAmount, 10)
        console.log(paidAmountNumber, 'paidAmountNumber')
        if (paidAmountNumber > getters.totalNet) {
          console.log('innnnn')
          return parseInt(state.paidAmount, 10) - parseInt(getters.totalNet, 10)
        }
        return 0
    }
  }
})

describe("CartList", () => {
    describe('When call cartList Component', () => {
        it("Should render component", () => {
            const wrapper = shallowMount(CartList, { 
              store, 
              router,
              localVue 
            })
            expect(wrapper.exists()).toBe(true)
        })
    })
})