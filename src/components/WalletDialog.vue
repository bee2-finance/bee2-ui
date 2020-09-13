<template>
  <!-- connect wallet -->
  <el-dialog
    :visible.sync="accountDialogVisible"
    width="390px"
    custom-class="wallet-dialog"
  >
    <div v-if="!web3.account">
      <p class="wallet-title">Connect wallet</p>
      <div
        v-for="(item, id, i) in walletList"
        :key="i"
        @click="handleLogin(id)"
        class="wallet-list"
      >
        <img
          :src="
            `https://raw.githubusercontent.com/bonustrack/lock/master/connectors/assets/${id}.png`
          "
          height="28"
          width="28"
        />
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div v-else>
      <p class="wallet-title">Account</p>

      <a
        class="wallet-list"
        :href="`https://etherscan.io/address/${web3.account}`"
        target="_blank"
      >
        <div class="account">
          <Avatar :address="web3.account" size="16" />
          <span class="wallet-account" v-text="_shorten(web3.account)" />
        </div>
      </a>
      <a href="javascript:;" @click="handleLogout" class="wallet-list sign-out">
        Sign out
      </a>
    </div>
  </el-dialog>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'WalletDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      accountDialogVisible: false
    }
  },
  watch: {
    accountDialogVisible(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.accountDialogVisible = val
    }
  },
  computed: {
    walletList() {
      if (this.config && this.config.connectors) {
        let wallet = this.config.connectors
        let walletList = {}

        for (const key in wallet) {
          if (
            wallet[key].name === 'MetaMask' ||
            wallet[key].name === 'WalletConnect'
          ) {
            walletList[key] = wallet[key]
          }
        }
        return walletList
      } else {
        return {}
      }
    },
  },
  methods: {
    ...mapActions(['login', 'logout']),
    async handleLogin(connector) {
      try {
        this.loading = true
        await this.login(connector)
        this.loading = false
        this.accountDialogVisible = false
      } catch (e) {
        console.log('error login: ', e)
      }
    },
    async handleLogout() {
      await this.logout()
      // this.$emit('close')
      this.accountDialogVisible = false
    },
  }
}
</script>
<style lang="less" scoped>
.account {
  display: flex;
  align-items: center;
  span {
    margin-left: 6px;
  }
}

.wallet-title {
  font-size: 22px;
  padding: 0;
  margin: 0 0 40px 0;
  text-align: center;
  color: #000;
  font-weight: bold;
}

.wallet-list {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  cursor: pointer;
  border: 1px solid #071F3D;
  background-color: transparent;
  border-radius: 23px;
  padding: 0 24px;
  outline: none;
  line-height: 46px;
  height: 46px;

  &:hover {
    background-color: rgba(154, 154, 154, 0.2);
    // background-color: rgb(247, 242, 244);
  }

  span {
    color: #111111;
    font-size: 16px;
    font-weight: 400;
  }

  img {
    margin-right: 4px;
    height: 28px;
  }
}

/deep/ .wallet-dialog {
  .el-dialog__header {
    padding: 0;
  }
}

.sign-out {
  color: #ff3856;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
}
.wallet-account {
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}
</style>