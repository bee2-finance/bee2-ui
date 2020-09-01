<template>
  <section class="home theme-dark">
    <Header></Header>
    <section class="container">
      <p class="h-ol-title">ONLY FOR THOSE WITH LOCKED FUNDS IN YFV POOL 1:</p>
      <ol class="h-ol">
        <li>
          Visit
          <a href="https://yfv.finance/rescue/staking-pool-v1"
            >https://yfv.finance/rescue/staking-pool-v1</a
          >
          from your PC, using Metamask. mobile wallets and other wallets may
          have issue with dapp
        </li>
        <li>
          Connect your wallet if it's not connected. Verify by checking if the
          amount stuck is reflected correctly
        </li>
        <li>Press <b>Exit</b></li>
      </ol>
      <h3 class="h-title">⛏You have&nbsp;<span>0&nbsp;MayFly</span></h3>
      <section class="h-total">
        <section class="h-total-block">
          <div>
            <p>Total Value Locked (USD)</p>
            <section class="price">
              <span>💰</span>
              <b>$443,434,434,44</b>
            </section>
          </div>
        </section>

        <section class="h-total-block">
          <div>
            <p>MayFly Price</p>
          <section class="price">
            <span>🦋</span>
            <section><b>$34.33</b><small>(2323.USDT)</small></section>
          </section>
          </div>
        </section>

        <section class="h-total-block">
          <div>
            <section class="price-list"><small>Circulating:</small>&nbsp;<b>12331.32MayFly</b></section>
          <section class="price-list"><small>Total Supply:</small>&nbsp;<b>12331.32MayFly</b></section>
          <section class="price-list"><small>Burned:</small>&nbsp;<b>12331.32MayFly</b></section>
          </div>
        </section>
      </section>

      <h3 class="pools-title">MayFly/Pools</h3>
      <section class="pools">
        <el-table :data="poolTableData" style="width: 100%" class="pools">
          <el-table-column prop="icon" label="" width="75">
            <template>🦄</template>
          </el-table-column>
          <el-table-column prop="pool" label="Pool" width="230">
            <template>
              <div>Seed Pool v2</div>
              <div>USDT, USDC, TUSD, DAI</div>
            </template>
          </el-table-column>
          <el-table-column prop="staked" label="Staked" width="200">
            <template>
              <div>
                0
                <small></small>
              </div>
              <div>
                <small>of</small>
                78,463,754.54
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="claimable"
            label="MayFly Claimable"
            width="160"
          >
            <template>
              <div>0</div>
              <div><small>Claimed:</small> 0</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="totalValueLocked"
            label="Total Value Locked	"
            width="205"
          >
            <template>
              <div>$78,463,754.54</div>
            </template>
          </el-table-column>
          <el-table-column prop="rolInUsd" label="ROI in USD" width="230">
            <template>
              <div class="jss81">
                <span class="jss82">Hourly:</span
                ><span class="jss83">0.03%</span>
              </div>
              <div class="jss81">
                <span class="jss82">Daily:</span
                ><span class="jss83">0.66%</span>
              </div>
              <div class="jss81">
                <span class="jss82">Weekly:</span
                ><span class="jss83">4.64%</span>
              </div>
              <div class="jss81">
                <span class="jss82">APY (unstable):</span
                ><span class="jss83">242.16%</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </section>
    </section>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      poolTableData: [
        {
          icon: '',
          pool: '',
          staked: '',
          claimable: '',
          totalValueLocked: '',
          rolInUsd: '',
        },
        {
          icon: '',
          pool: '',
          staked: '',
          claimable: '',
          totalValueLocked: '',
          rolInUsd: '',
        },
        {
          icon: '',
          pool: '',
          staked: '',
          claimable: '',
          totalValueLocked: '',
          rolInUsd: '',
        },
        {
          icon: '',
          pool: '',
          staked: '',
          claimable: '',
          totalValueLocked: '',
          rolInUsd: '',
        },
        {
          icon: '',
          pool: '',
          staked: '',
          claimable: '',
          totalValueLocked: '',
          rolInUsd: '',
        },
        {
          icon: '',
          pool: '',
          staked: '',
          claimable: '',
          totalValueLocked: '',
          rolInUsd: '',
        },
        {
          icon: '',
          pool: '',
          staked: '',
          claimable: '',
          totalValueLocked: '',
          rolInUsd: '',
        },
        {
          icon: '',
          pool: '',
          staked: '',
          claimable: '',
          totalValueLocked: '',
          rolInUsd: '',
        },
        {
          icon: '',
          pool: '',
          staked: '',
          claimable: '',
          totalValueLocked: '',
          rolInUsd: '',
        },
        {
          icon: '',
          pool: '',
          staked: '',
          claimable: '',
          totalValueLocked: '',
          rolInUsd: '',
        },
      ],
    }
  },
}
</script>


<style lang="less" scoped>
.home {
  min-height: 100vh;
  text-align: center;
}

.container {
  flex: 1;
  width: 100%;
  display: flex;
  max-width: 1100px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto 3rem;
}

.h-ol-title {
  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
  max-width: 800px;
}
.h-ol {
  max-width: 800px;
  li {
    line-height: 1.43;
    font-weight: 400;
    letter-spacing: 0.8px;
    a {
      color: #fafafa;
    }
  }
}

.h-title {
  margin-top: 1rem;
  text-align: center;
  margin-bottom: 2rem;
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
    min-width: 250px;
    overflow: hidden;
    box-shadow: none;
    border-radius: 4px;
    color: #fafafa;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #293746;
    & > div {
      padding: 16px;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    p {
      padding: 0;
      margin: 0;
    }
    .price {
      display: flex;
      flex-wrap: wrap;
      font-size: 20px;
      margin-top: 10px;
      align-items: center;
      line-height: 28px;
    }
    .price-list {
      display: flex;
      justify-content: space-between;
      line-height: 22px;
    }
  }
}

.pools-title {
  color: #fafafa;
  margin-bottom: .5rem;
  padding: 0;
  margin-top: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
}

.pools {
  max-width: 1100px;
  margin: 0 auto;
}
</style>