<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">LITTLE BROWN BOOK SHOP </router-link>
      <router-link to="/checkout" id="nav__basket"><font-awesome-icon :icon="appIcon" /> {{ sumQuantity }} </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      cart: 'cartList',
      sumQuantity: 'sumQuantity'
    }),
    appIcon () {
      return faShoppingCart
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  z-index: 99;
  top: 0;
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid lightgray;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px 20px;
    &:hover {
      color: #07b53b;
    }
    &.router-link-exact-active {
      color: #07b53b;
      text-decoration: none;
    }
  }
  &__basket {
    font-size: 28px;
  }
}
.button {
  &__middle {
    background:#07b53b;
    padding: 10px 40px;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    margin: 10px auto;
    font-size:22px;
    text-decoration: none;
    border: 1px solid #07b53b;
    &:hover {
      background: #fff;
      border:1px solid 07b53b;
      color: #07b53b;
    }
    &:focus {
      outline: 0 none;
    }
    &:disabled {
      background: grey;
      border: 1px solid grey;
      pointer-events: none;
    }
  }
  &__remove {
    background: #ff0000;
    color: #fff;
    border: 0px;
    padding: 5px 20px;
    font-size:16px;
    cursor: pointer;
    border-radius: 5px;
    &:focus {
      outline: 0 none;
    }
  }
}
</style>
