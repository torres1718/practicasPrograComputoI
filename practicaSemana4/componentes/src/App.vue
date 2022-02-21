<template>
  <div id="app">
      <list-products title="List Products"/>
      <!--cart-items :cartItems="cartItems" :itemCount="itemCount"/-->
    
  </div>
</template>

<script>
import ListProducts from './components/ListProducts.vue'
//import CartItems from './components/ListProducts.vue'

export default {
  name: 'App',
  components: {
    ListProducts,
    //CartItems
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>