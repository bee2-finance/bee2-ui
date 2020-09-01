<template>
  <section class="voting">
    <Header></Header>
    <section class="container">
      <section class="container-table">
        <h2 class="title-select">
          What do you want to vote?
        </h2>
        <div class="table-tab">
          <a @click="tab = 0" href="javascript:;" :class="tab === 0 && 'active'">POOL VOTING</a>
          <a @click="tab = 1" href="javascript:;" :class="tab === 1 && 'active'">VIP VOTING</a>
        </div>
        <section class="stake">
          <el-table :data="poolTableData" style="width: 100%" class="stake" v-if="tab === 0">
            <el-table-column prop="icon" label="" width="98">
              <template>🦄</template>
            </el-table-column>
            <el-table-column prop="pool" label="Pool" width="349">
              <template>
                <div>Seed Pool v2</div>
                <div>USDT, USDC, TUSD, DAI</div>
              </template>
            </el-table-column>
            <el-table-column prop="contract" label="Contract" width="215">
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
            <el-table-column prop="claimable" label="" width="238">
              <template>
                <div>0</div>
                <div><small>Claimed:</small> 0</div>
              </template>
            </el-table-column>
          </el-table>
          <el-table :data="poolVipTableData" style="width: 100%" class="stake" v-if="tab === 1">
            <el-table-column prop="icon" label="" width="40">
              <template>🦄</template>
            </el-table-column>
            <el-table-column prop="pool" label="Proposal" width="500">
              <template>
                <div>Seed Pool v2</div>
                <div>USDT, USDC, TUSD, DAI</div>
              </template>
            </el-table-column>
            <el-table-column prop="claimable" label="" width="360">
              <template>
                <div>0</div>
                <div><small>Claimed:</small> 0</div>
              </template>
            </el-table-column>
          </el-table>
        </section>
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
    Footer,
  },
  data() {
    return {
      tab: 0,
      poolTableData: [
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
      ],
      poolVipTableData: [
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
        {
          icon: '',
          pool: '',
          contract: '',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.voting {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.container {
  width: 100%;
  max-width: 900px;
  align-items: center;
  margin: 40px auto 3rem;
  flex-direction: column;
  justify-content: flex-start;
}
.container-table {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
}
.stake {
  max-width: 900px;
  margin: 0 auto;
}
.title-select {
  color: #a7a7a7;
  width: 100%;
  min-width: 100%;
  padding: 0 0 0 20px;
  margin: 0 0 2rem 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
}
.table-tab {
  margin-bottom: 20px;
  a {
    border: 0;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: 0;
    align-items: center;
    user-select: none;
    border-radius: 0;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    padding: 6px 12px;
    overflow: hidden;
    position: relative;
    font-size: 0.875rem;
    max-width: 264px;
    min-width: 160px;
    box-sizing: border-box;
    min-height: 48px;
    text-align: center;
    flex-shrink: 0;
    font-weight: 500;
    line-height: 1.75;
    white-space: normal;
    color: #fff;
    border-bottom: 2px solid transparent;
    opacity: 0.7;
    &.active {
      opacity: 1;
      border-bottom: 2px solid #0a8f92;
    }
  }
}
</style>
