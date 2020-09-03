<template>
  <section class="home theme-dark">
    <Header></Header>
    <section class="container">
      <section class="logo">🐝</section>
      <p class="introduction">Bee2 is ready</p>
      <h3 class="h-title">🍯 You have&nbsp;<span>{{ balance }}&nbsp;BEE</span> 🍯</h3>
      <!-- <h3 class="h-title"></h3> -->
      <section class="h-total">
        <section class="h-total-block">
          <div class="p2">
            <p class="total-title">Your BEE Balance</p>
            <div class="price">
              <b>{{ balance }}</b>
            </div>
          </div>
          <div class="line"></div>
          <div class="p1 total">
            <span>Pending harvest</span>
            <span>{{ pendingHarvest }} BEE</span>
          </div>
        </section>

        <section class="h-total-block">
          <div class="p2">
            <p class="total-title">Total BEE Supply</p>
            <div class="price">
              <b>500,000,0</b>
            </div>
          </div>
        </section>

        <!-- <section class="h-total-block">
          <div>
            See more stake&nbsp;➡️
          </div>
        </section> -->
      </section>

      <router-link :to="{name: 'Stake'}" class="h-more">
        ⛏ See More Stake
      </router-link>
    </section>
    <Footer></Footer>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import namespaces from '@/namespaces.json'

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      balance: 0,
      pendingHarvest: 0,
    }
  },
  computed: {
    ...mapState(['web3'])
  },
  watch: {
    'web3.account': {
      deep: true,
      handler(val) {
        if (val) {
          this.getDataFunc()
        }
      }
    }
  },
  mounted() {
    this.getDataFunc()
  },
  methods: {
    ...mapActions(['init', 'getBalance', 'balanceOf', 'earned']),

    async getDataFunc() {
      // bee balance
      if (!this.web3.account) return
      let balance = await this.balanceOf({
        contract: namespaces.bee.address,
        abiName: 'YAMETHPool',
        account: this.web3.account,
      })
      console.log('balance', balance)
      this.balance = balance

      console.log(this.config)

    let earned = await this.earned({
        contract: this.config.multicall,
        abiName: 'YAMETHPool',
        account: this.web3.account,
      })
      console.log('earned', earned)
      this.pendingHarvest = earned


    }
  }
}
</script>

<style lang="less" scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  width: 100%;
  display: flex;
  max-width: 1100px;
  align-items: center;
  flex-direction: column;
  margin: 100px auto 3rem;
}

.h-title {
  margin-top: 80px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  padding: 0;
}

.h-total {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-bottom: 2rem;
  justify-content: center;
  &-block {
    margin: 10px 15px;
    max-width: 100%;
    min-width: 360px;
    overflow: hidden;
    box-shadow: none;
    border-radius: 10px;
    color: #fff;
    border: 1px solid #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    .p1 {
      padding: 8px 16px;
    }
    .p2 {
      padding: 16px;
    }
    .total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      line-height: 20px;
    }
    .total-title {
      padding: 0;
      margin: 0;
      font-size: 16px;
      line-height: 22px;
    }
    .price {
      display: flex;
      flex-wrap: wrap;
      font-size: 20px;
      align-items: center;
      line-height: 48px;
      margin-top: 10px;
      b {
        font-size: 36px;
      }
    }
    .line {
      width: 100%;
      height: 1px;
      background-color: #dcdcdc;
    }
  }
}

.h-more {
  color: #fff;
  text-decoration: none;
  margin-top: 100px;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
  }
}


.logo {
  width: 120px;
  height: 120px;
  margin-right: 10px;
  font-size: 120px;
  margin: 0 auto;
}
.introduction {
  font-family: KaushanScript-Regular;
  font-size: 40px;
  padding: 0;
  margin: 0;
  text-align: center;
  line-height: 60px;
}
</style>
