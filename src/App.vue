<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
import { mapActions } from 'vuex'
import namespaces from '@/namespaces.json'

export default {
  data() {
    return {
      key: 'yycrv',
      proposal: {},
    }
  },
  computed: {
    namespace() {
      return namespaces[this.key]
        ? namespaces[this.key]
        : { token: this.key, verified: [] }
    },
    payload() {
      return this.proposal.msg.payload
    },
    ts() {
      return (Date.now() / 1e3).toFixed()
    }
  },
  methods: {
    ...mapActions(['init']),
  }
}
</script>


<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
