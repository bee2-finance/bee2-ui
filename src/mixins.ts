import config from '@/helpers/config'
import store from '@/store'
import { shorten, etherscanLink } from '@/helpers/utils'

// @ts-ignore
const modules = Object.entries(store.state).map(module => module[0])

import { mapState } from 'vuex'

export default {
  data() {
    return {
      config
    }
  },
  computed: {
    ...mapState(modules)
  },
  methods: {
    _shorten(str: string, key: string): string {
      if (key === 'symbol')
        return str.length > 7 ? `${str.slice(0, 7).trim()}...` : str
      if (key === 'name')
        return str.length > 64 ? `${str.slice(0, 64).trim()}...` : str
      return shorten(str)
    },
  }
}
