<template>
  <div class="list__data">
    <span class="search" >
      <font-awesome-icon :icon="appIcon" class="search__icon" />
      <input type="text" v-model="search" placeholder="Search for books title..." />
    </span>
    <ul class="list">
      <li
        v-for="list in filteredList"
        :key="list.title"
        class="list-item"
      >
       <div class="list__mockimg"><img :src="list.image" :alt="list.title" /></div>
       <div class="text--overflow">Title: {{ list.title }}</div>
       <div>Price: {{ list.price }} ฿</div>
        <a class="button__add" @click="addToCart(list)">
          Add to Cart
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'list',
  data () {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters({
      bookList: 'bookList'
    }),
    filteredList () {
      const self = this
      return this.bookList.filter((list) => {
        return list.title.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
      })
    },
    appIcon () {
      return faSearch
    }
  },
  mounted () {
    this.$store.dispatch('fetchBookList')
  },
  methods: mapActions([
    'addToCart'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search {
  width: 90%;
  input {
    border-radius: 10px;
    font-size: 24px;
    padding:5px 10px;
    width: 45%;
    &:focus {
      outline: 0 none;
    }
    @media (max-width: 600px) {
      width: 70%;
    }
  }
  &__icon {
    font-size: 28px;
    margin: 0 10px;
  }
}
.text {
  &--overflow {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
.list {
  padding: 0;
  margin: 0;
  li {
    font-size: 16px;
    background: #fff;
    width: 13%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 15px;
    margin: 10px 10px;
    height:auto;
    text-align: left;
    a {
      text-align: center;
    }
    @media (max-width: 1366px) {
      width: 18%;
    }
    @media (max-width: 600px) {
      width: 35%;
    }
  }
  &__mockimg {
    width: 100%;
    img {
      max-width: 100%;
      object-fit: contain;
      height: 250px;
      display:block;
      margin: 15px auto;
      @media (max-width: 991px) {
        height: 200px;
      }
    }
  }
  &__data {
    position: relative;
    z-index: 2;
  }
}
.button {
  &__add {
    background:#07b53b;
    padding: 5px 20px;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    display: block;
    margin: 10px auto;
    border: 1px solid #07b53b;
    &:hover {
      background: #fff;
      border:1px solid 07b53b;
      color: #07b53b;
    }
  }
}
</style>
