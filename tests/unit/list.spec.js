import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import List from "@/components/List.vue"

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    search: '',
    bookList: [
        {
            code: '1',
            title: 'Harry Potter1',
            discount:true,
            price: 1000,
        },
        {
           code: '2',
           title: 'Harry Potter2',
           discount:true,
           price: 1000,
        },
        {
           code: '3',
           title: 'Harry Potter3',
           discount:true,
           price: 1000,
        },
        {
           code: '3',
           title: 'cartoon',
           discount:false,
           price: 100,
        }
       ],
    paidAmount: '',
    inCart: []
  },
  getters: {
    bookList: state => state.bookList
  }
})

describe("List", () => {
    describe('When mount list component', () => {
        it("Should render list", () => {
            const wrapper = shallowMount(List, { 
              store, 
              localVue 
            })
            expect(wrapper.exists()).toBe(true)
        })
    })
})