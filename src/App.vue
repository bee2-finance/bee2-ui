<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['init'])
  },
  mounted() {
    this.init()
  },
}
</script>


<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
