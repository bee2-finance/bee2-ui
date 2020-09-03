<template>
  <section class="staking">
    <Header></Header>
    <section class="container">
      <section class="logo">
        {{ farmId.icon }}
      </section>
      <p class="introduction">
        {{ farmId.name }}
      </p>

      <p class="des">Earn BEE tokens by staking {{ farmId.symbol.toLocaleUpperCase() }} Tokens.</p>

      <ul class="item">
        <li>
          <div>
            <div class="item-logo">🍯</div>
            <h4 class="item-title">{{ earnedVal }}</h4>
            <div class="item-des">
              <p>Bees Earned</p>
            </div>
          </div>

          <a
            href="javascript:;"
            class="item-btn"
            @click="harvestFunc"
          >
            Harvest
          </a>
        </li>
        <li>
          <div>
            <div class="item-logo">🐝</div>
            <h4 class="item-title">{{ stakeVal }}</h4>
            <div class="item-des">
              <p>{{ farmId.symbol.toLocaleUpperCase() }} Staked</p>
            </div>
          </div>

          <a
            href="javascript:;"
            class="item-btn"
            @click="approveStaked"
          >
          {{ approveValue > 0 ? 'Stake' : 'Approve' }}
          {{ farmId.symbol.toLocaleUpperCase() }}
          </a>

        </li>
      </ul>

      <!-- <button @click="getDataFunc">getDataFunc</button> -->
      <!-- <button @click="approveStateFunc">approve state {{ approveValue }} </button> -->
      <a href="javascript:;" class="other-button" @click="unStakeFunc">Unstake</a>
      <a href="javascript:;" class="other-button" @click="exitFunc">Harvest & Unstake</a>

    </section>
    <Footer></Footer>
  </section>
</template>

<script>
import farm from '../farm.json'
import { mapActions, mapState } from 'vuex'
import namespaces from '@/namespaces.json'

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      farm: farm,
      approveValue: 0,
      earnedVal: 0.000,
      stakeVal: 0.000,
    }
  },
  computed: {
    ...mapState(['web3']),
    farmId() {
      return this.farm[this.$route.params.id] || {}
    }
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
    ...mapActions(['earned', 'harvest', 'unStake', 'exit', 'balanceOf', 'approve', 'approveState', 'stake']),

    async getDataFunc() {
      if (!this.web3.account) return

      // harvest
      let earnedRes = await this.earned({
        contract:this.config.multicall,
        abiName: 'YAMETHPool',
        account: this.web3.account,
      })
      this.earnedVal = earnedRes

      // stake
      let balanceOfRes = await this.balanceOf({
          contract: this.config.multicall,
          abiName: 'YAMETHPool',
          account: this.web3.account,
        })
      this.stakeVal = balanceOfRes

      this.approveStateFunc()
    },
    // approve state
    async approveStateFunc() {
      if (!this.web3.account) return

      let res = await this.approveState({
        contract: namespaces.yycrv.address,
        abiName: 'YAM',
        account: this.web3.account,
      })

      console.log('approveValue', res)

      this.approveValue = res
    },

    // approve stated
    async approveStaked() {
      if (this.approveValue > 0) {
        this.$prompt('', 'Please input amount.', {
        confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
        }).then(({ value }) => {
          this.stakedFunc(value)
        }).catch(() => {
          //        
        })
      } else {
        // approve
        this.approveFunc()
      }
    },

    // approve
    async approveFunc() {
      if (!this.web3.account) return

      let res = await this.approve({
        contract: namespaces.yycrv.address,
        abiName: 'YAM',
      })
      console.log('res', res)
    },
    // state
    async stakedFunc(amount) {
      if (!this.web3.account) return

      let res = await this.stake({
        abiName: 'YAMETHPool',
        amount: amount
      })
      console.log('res', res)
    },

    // user harvest
    async harvestFunc() {
      if (this.earnedVal > 0) {
        if (!this.web3.account) return

        await this.harvest({
          abiName: 'YAMETHPool',
        })

        this.approveStateFunc()
      }
    },
    // user unStake
    async unStakeFunc() {
      if (this.stakeVal > 0) {
        if (!this.web3.account) return

        const confirmUnState = async value => {
          await this.unStake({
            abiName: 'YAMETHPool',
            amount: value
          })
        }

        this.$prompt('', 'Please input amount.', {
          confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
          }).then(({ value }) => {
            confirmUnState(value)
          }).catch(() => {
            //        
          })

        this.approveStateFunc()
      }
    },
    // user exit
    async exitFunc() {
      if (this.stakeVal > 0) {
        if (!this.web3.account) return

        await this.exit({
          abiName: 'YAMETHPool',
        })

        this.approveStateFunc()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.staking {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.container {
  flex: 1;
  width: 100%;
  max-width: 900px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin: 100px auto 3rem;
}
.des {
  font-size: 16px;
  text-align: center;
  padding: 0;
  margin: 10px 0;
}

.logo {
  width: 120px;
  height: 120px;
  margin-right: 10px;
  font-size: 100px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
}
.introduction {
  font-family: KaushanScript-Regular;
  font-size: 40px;
  padding: 0;
  margin: 0;
  text-align: center;
  line-height: 60px;
}

.item {
  margin: 60px 0 0 0;
  padding: 0;
  display: flex;
  justify-content: center;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 340px;
    margin: 30px 10px;
    list-style: none;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: all 0.2s;
    &:hover {
      // border: 1px solid #fff;
    }

    .item-logo {
      width: 80px;
      height: 80px;
      font-size: 60px;
      margin: 0 auto 20px;
    }

    .item-title {
      font-size: 30px;
      padding: 0;
      margin: 0;
      margin: 8px 0 0 0;
    }

    .item-des {
      font-size: 16px;
      margin-top: 8px;
      p {
        padding: 0;
        margin: 0;
        line-height: 24px;
      }
    }

    .item-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 56px 0 0 0;
      min-height: 64px;
      color: #fff;
      text-decoration: none;
      border: 2px solid #808080;
      padding: 0 40px;
      box-sizing: border-box;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        border-color: #fff;
      }
    }
  }
}


.other-button {
  width: 50%;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto 0;
  min-height: 64px;
  color: #fff;
  text-decoration: none;
  border: 2px solid #808080;
  padding: 0 40px;
  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    border-color: #fff;
  }
}
</style>
