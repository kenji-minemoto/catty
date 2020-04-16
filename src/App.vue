<template>
<div id="app">
  <Logo id="logo" />
  <Nav />
  <b-container>
    <transition mode="out-in">
      <router-view />
    </transition>
  </b-container>
  <pre>
    <a href="#" @click="clickSmoothScroll()">
      <font-awesome-icon icon="angle-double-up" id="icon" />
    </a>
  </pre>
  <Footer />
</div>
</template>

<script>
import Footer from './components/Footer.vue'
import Logo from './components/Logo.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Logo,
    Nav
  },
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#logo'),
        1500,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

pre {
  width: 100%;
  padding-top: 100px;
}

a {
  text-decoration: none;
  color: #888888;
}

a:hover {
  opacity: 0.8;
}

#icon {
  width: 30px;
  height: 30px;
}

.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
</style>
