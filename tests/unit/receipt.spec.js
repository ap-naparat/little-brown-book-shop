import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import Receipt from "@/components/Receipt.vue"

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    bookList: [],
    paidAmount: '',
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
  actions: {
    clearTransaction: jest.fn()
  },
  getters: {}
})

describe("Receipt", () => {
    describe('When mount receipt component', () => {
        it("Should return component", () => {
            const wrapper = shallowMount(Receipt, { 
              store, 
              localVue 
            })
            expect(wrapper.exists()).toBe(true)
        })
    })
    describe('When call clear transaction function', () => {
        it('Should clear transaction', () => {
            const wrapper = shallowMount(Receipt, { 
              store, 
              localVue 
            })
            wrapper.find('a').trigger('click')
        })
    })
})