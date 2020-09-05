<template>
  <section class="staking">
    <Header></Header>
    <section class="container">
      <!-- <section class="logo">
        {{ farmId.icon }}
      </section> -->
      <p class="introduction">
        {{ farmId.name }}
      </p>

      <p class="des">Earn BEE tokens by staking {{ farmId.symbol.toLocaleUpperCase() }} Tokens.</p>

      <ul class="item">
        <li>
          <div>
            <div class="item-logo">{{ farmId.icon }}</div>
            <h4 class="item-title">{{ formatUnitBalance(stakeVal) }}</h4>
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
        <li>
          <div>
            <div class="item-logo">🐝</div>
            <h4 class="item-title">{{ formatUnitBalance(earnedVal) }}</h4>
            <div class="item-des">
              <p>BEEs Earned</p>
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
            <div class="item-logo">🍯</div>
            <h4 class="item-title">{{ formatUnitBalance(honeyVal) }}</h4>
            <div class="item-des">
              <p>HONEYs Earned</p>
            </div>
          </div>

          <a
            href="javascript:;"
            class="item-btn"
            @click="harvestHoneyFunc"
          >
            Harvest
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
import contract from '@/contract.json'
import { formatUnitBalance } from '@/helpers/utils'

console.log('contract', contract)

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      farm: farm,
      approveValue: 0,
      stakeVal: '0.0000',
      earnedVal: '0.0000',
      honeyVal: '0.0000',
    }
  },
  computed: {
    ...mapState(['web3']),
    farmId() {
      return this.farm[this.$route.params.id] || {}
    },
    // get address to route params
    stakeAddress() {
      let name = this.$route.params.id
      return name ? contract.stake[name.toLocaleLowerCase()].address : ''
    },
    // get address to route params
    poolAddress() {
      let name = this.$route.params.id
      return name ? contract.pool[name.toLocaleLowerCase()].address : ''
    },
    // get abi key to route params
    poolAbiKey() {
      let name = this.$route.params.id
      return name ? contract.pool[name.toLocaleLowerCase()].symbol : ''
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
    ...mapActions([
      'earned', 'harvest', 'unStake',
      'exit', 'balanceOf', 'approve',
      'approveState', 'stake', 'getEarnedHoney',
      'harvestHoney'
    ]),


    formatUnit(unit) {
      return unit === 0 ? '0.0000' : unit 
    },
    formatUnitBalance(val) {
      return formatUnitBalance(val)
    },

    async getDataFunc() {
      if (!this.web3.account) return

      // stake
      let balanceOfRes = await this.balanceOf({
          contract: this.poolAddress,
          abiName: this.poolAbiKey,
          account: this.web3.account,
        })
      this.stakeVal = this.formatUnit(balanceOfRes)

      // harvest bee
      let earnedRes = await this.earned({
        contract: this.poolAddress,
        abiName: this.poolAbiKey,
        account: this.web3.account,
      })
      this.earnedVal = this.formatUnit(earnedRes)

      // harvest honey
      let honeyRes = await this.getEarnedHoney({
        contract: this.poolAddress,
        abiName: this.poolAbiKey,
        account: this.web3.account,
      })
      this.honeyVal = this.formatUnit(honeyRes)

      this.approveStateFunc()
    },
    // approve state
    async approveStateFunc() {
      if (!this.web3.account) return

      let res = await this.approveState({
        contract: this.stakeAddress,
        abiName: 'ERC20',
        account: this.web3.account,
        poolContract: this.poolAddress
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
        contract: this.stakeAddress,
        abiName: 'ERC20',
        poolContract: this.poolAddress
      })
      console.log('res', res)
    },
    // state
    async stakedFunc(amount) {
      if (!this.web3.account) return

      let res = await this.stake({
        contract: this.poolAddress,
        abiName: this.poolAbiKey,
        amount: amount
      })
      console.log('res', res)
    },

    // user harvest
    async harvestFunc() {
      if (this.earnedVal > 0) {
        if (!this.web3.account) return

        await this.harvest({
          contract: this.poolAddress,
          abiName: this.poolAbiKey,
        })

        this.approveStateFunc()
      }
    },
    // user harvest
    async harvestHoneyFunc() {
      if (this.earnedVal > 0) {
        if (!this.web3.account) return

        await this.harvestHoney({
          contract: this.poolAddress,
          abiName: this.poolAbiKey,
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
            contract: this.poolAddress,
            abiName: this.poolAbiKey,
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
          contract: this.poolAddress,
          abiName: this.poolAbiKey,
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
  margin: 50px auto 3rem;
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
    box-shadow:  5px 5px 10px #a9ccc8, 
             -5px -5px 10px #bbe2dd;
    border-radius: 20px;
    // border: 1px solid transparent;
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
      color: #001f3f;
      text-decoration: none;
      box-shadow:  5px 5px 4px #a4c6c1, -1px -1px 12px #c0e8e3;
      padding: 0 40px;
      box-sizing: border-box;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background: #a0c2bd;
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
  color: #001f3f;
  text-decoration: none;
  box-shadow:  5px 5px 4px #a4c6c1, -1px -1px 12px #c0e8e3;
  padding: 0 40px;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #a0c2bd;
  }
}
@media screen and (max-width: 900px) {
  ul.item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
