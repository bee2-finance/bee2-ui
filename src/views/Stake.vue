<template>
  <section class="staking">
    <Header></Header>
    <section class="container">
      <section class="logo">
      <honey />
      </section>
      <!-- <section class="logo">🐝</section> -->
      <p class="introduction">Select A Garden And Earn BEE 🐝.</p>

      <!-- <p class="des">Earn BEE tokens by staking Tokens.</p> -->

      <ul class="item">
        <li v-for="(item, name, index) in farmList" :key="index">
          <!-- <div class="label">3X</div> -->
          <div class="kyOvTV" v-if="item.hot"></div>
          <div class="pool-container">
            <div class="item-logo">
              {{ item.icon }}
            </div>
            <h4 class="item-title">{{ item.name }}</h4>
            <div class="item-des">
              <p>Deposit {{ item.symbol }}</p>
              <p>Earn BEE</p>
            </div>

            <router-link :to="{ name: 'StakeId', params: { id: item.symbol.toLocaleLowerCase() } }" class="item-btn">
              Select
            </router-link>

            <div class="total">
              <span>TOTAL STAKED</span>
              <span>{{ item.totalStaked !== undefined ? formatUnitBalance(item.totalStaked) : 'loading' }}</span>
            </div>
          </div>
        </li>
        <li>
          <SoonCard />
        </li>
      </ul>
      
    </section>
    <Footer></Footer>
  </section>
</template>

<script>

import farm from '../farm.json'
import honey from '@/components/honey'
import SoonCard from '@/components/SoonCard'
import { mapActions, mapState } from 'vuex'
import contract from '@/contract.json'
import { formatUnitBalance } from '@/helpers/utils'

export default {
  name: 'Home',
  components: {
    honey,
    SoonCard
  },
  data() {
    return {
      farmList: farm,
    }
  },
  computed: {
  ...mapState(['web3']),
  },
  watch: {
    'web3.account': {
      deep: true,
      handler(val) {
        if (val) {
          this.getData()
        }
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapActions([
      'totalSupply'
    ]),
    formatUnitBalance(val) {
      return formatUnitBalance(val)
    },
    async getData() {
      if (!this.web3.account) return
      let farmList = this.farmList
      for (const key in farmList) {
        let res = await this.totalSupply({
          contract: contract.pool[key].address,
          abiName: contract.pool[key].symbol,
          decimals: farmList[key].decimals,
        })
        farmList[key].totalStaked = res
      }
      this.farmList = {}
      this.farmList = farmList
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
  display: flex;
  align-content: center;
  justify-content: center;
}
.introduction {
  font-family: KaushanScript-Regular;
  font-size: 30px;
  padding: 0;
  margin: 0;
  text-align: center;
  line-height: 30px;
}

.item {
  margin: 60px 0 0 0;
  padding: 0;
  &::after {
    display: block;
    content: "";
    width: 0;
    height: 0;
    clear: both;
  }
  li {
    position: relative;
    width: 260px;
    min-height: 360px;
    margin: 20px 20px;
    float: left;
    list-style: none;
    text-align: center;
    box-sizing: border-box;
    box-shadow:  5px 5px 10px #a9ccc8, 
             -5px -5px 10px #bbe2dd;
    border-radius: 20px;
    transition: all .2s;
    .pool-container {
      padding: 20px;
      z-index: 10;
      position: relative;
      background: #B2D7D2;
      border-radius: 20px;
    }
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
      font-size: 24px;
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
      display: inline-block;
      margin: 40px 0 0 0;
      color: #001f3f;
      text-decoration: none;
      padding: 12px 40px;
      box-sizing: border-box;
      box-shadow:  5px 5px 4px #a4c6c1, -1px -1px 12px #c0e8e3;
      border-radius: 10px;
      cursor: pointer;
      transition: all .3s;
      &:hover {
        background: #a0c2bd // linear-gradient(145deg, #bee6e1, #a0c2bd);
      }
    }
  }
}

.total {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    border-radius: 20px;
    background: #a7cac5;
    color: #333;
    width: 100%;
    margin-top: 20px;
    line-height: 32px;
    font-size: 12px;
    border: 1px solid #b4d7d2;
    text-align: center;
    padding: 0px 12px;
}
.kyOvTV {
    background: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 154, 0) 10%, rgb(208, 222, 33) 20%, rgb(79, 220, 74) 30%, rgb(63, 218, 216) 40%, rgb(47, 201, 226) 50%, rgb(28, 127, 238) 60%, rgb(95, 21, 242) 70%, rgb(186, 12, 248) 80%, rgb(251, 7, 217) 90%, rgb(255, 0, 0) 100%);
    border-radius: 20px;
    filter: blur(4px);
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    z-index: 0;
}
.label{
  font-size:13px;
  line-height:32px;
  background:orange;
  position:absolute;
  right:0;
  top:0;
  z-index:11;
  padding:0 2em;
  transform-origin:left bottom;
  transform:translate(29.29%,-100%) rotate(45deg);
  text-indent:0;
}

.corner::before {
  position: absolute;
  top: 0.3rem;
  right: -0.5rem;
  z-index: 1;
  padding-left: 0.625rem;
  font-weight: bold;
  line-height: 0px;
  color: #ffffff;
  height: 0px;
  border: 0.9375rem solid #EC2027;
  border-left-color: transparent;
  content: "3X";
  box-shadow: 0px 0.3125rem 0.3125rem -0.3125rem #000;
  z-index: 11;
}

.corner::after {
  content: "";
  position: absolute;
  top: 2.1875rem;
  right: -0.5rem;
  border: 0.25rem solid #89540c;
  border-right-color: transparent;
  border-bottom-color: transparent;
  z-index: 11;
}

@media screen and (max-width: 900px) {
  ul.item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
