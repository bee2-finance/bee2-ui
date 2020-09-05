<template>
  <header class="header">
    <section class="h-container">
      <!-- logo -->
      <section class="h-logo">
        <span>🐝</span>
        <section class="h-logo-text">
          <h1>Bee2</h1>
        </section>
      </section>
      <!-- nav -->
      <nav class="h-nav">
        <router-link
          :to="{ name: 'Home' }"
          :class="$route.name === 'Home' && 'active'"
          >Home</router-link
        >
        <router-link
          :to="{ name: 'Stake' }"
          :class="$route.name === 'Stake' && 'active'"
          >Garden</router-link
        >
        <router-link
          :to="{ name: 'Voting' }"
          :class="$route.name === 'Voting' && 'active'"
          >Vote</router-link
        >
      </nav>
      <!-- connect button -->
      <section class="h-wallet">
        <!-- show account -->
        <template v-if="$auth.isAuthenticated && !wrongNetwork && web3.account">
          <el-button @click="accountDialogVisible = true">
            <div class="account">
              <Avatar :address="web3.account" size="16" />
              <span v-text="_shorten(web3.account)" />
            </div>
          </el-button>
        </template>
        <!-- network wrong -->
        <el-button v-if="web3.injectedLoaded && wrongNetwork" class="text-red">
          Wrong network
        </el-button>
        <!-- connect wallet -->
        <el-button
          v-if="showLogin || !web3.account"
          @click="accountDialogVisible = true"
          :loading="loading"
        >
          Connect wallet
        </el-button>
      </section>
    </section>

    <!-- connect wallet -->
    <el-dialog :visible.sync="accountDialogVisible" width="390px" custom-class="wallet-dialog">
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
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      accountDialogVisible: false,
      loading: false,
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
    wrongNetwork() {
      // console.log('wrongNetwork', this.config, this.web3)
      return this.config.chainId !== this.web3.injectedChainId
    },
    showLogin() {
      return (
        (!this.$auth.isAuthenticated && !this.web3.injectedLoaded) ||
        (!this.$auth.isAuthenticated && !this.wrongNetwork)
      )
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
  },
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  box-sizing: border-box;
  .h-container {
    display: flex;
    padding: 12px 24px 0;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .h-logo {
    display: flex;
    min-width: 270px;
    align-items: center;
    span {
      font-size: 50px;
      width: 50px;
      height: 50px;
      display: inline-block;
      margin-right: 10px;
    }
  }
  .h-logo-text {
    h1 {
      margin: 0;
      padding: 0;

      display: block;
      font-size: 1.3em;
      font-weight: 700;
      letter-spacing: 0.3px;
      color: #001f3f;
    }
    p {
      color: #001f3f;
      margin: 0;
      padding: 0;
    }
  }

  .h-nav {
    display: flex;
    flex-wrap: wrap;
    a {
      color: #071F3D;
      margin: 0 15px;
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      font-weight: 500;
      &.active {
        color: #618a22;
        font-size: 800;
      }
    }
  }
  .h-wallet {
    min-width: 270px;
    text-align: right;
    button {
      color: #001f3f;
      // box-shadow: #17191b 4px 4px 8px, rgb(20 28 37) -8px -8px 16px;
      background-color: rgba(154, 154, 154, 0.2);
      padding: 10px 24px;
      font-size: 0.875rem;
      min-width: 64px;
      box-sizing: border-box;
      // transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      //   box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      //   border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-family: "Open Sans", Roboto, Arial, sans-serif;
      font-weight: 500;
      line-height: 1.75;
      border-radius: 50px;
      border: 0;
      cursor: pointer;
      margin: 0;
      display: inline-flex;
      outline: 0;
      position: relative;
      align-items: center;
      user-select: none;
      vertical-align: middle;
      -moz-appearance: none;
      justify-content: center;
      text-decoration: none;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
}

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


.text-red {
  color: #ff3856;
}
</style>
