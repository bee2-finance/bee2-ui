<template>
  <section class="staking">
    <Header></Header>
    <section class="container">
      <div class="title">
        Rescue Process for YFV Locked In YFV Staking Pool
        <a
          href="https://link.medium.com/odnrkDGXj9"
          target="_blank"
          rel="noopener noreferrer"
          >(View details)</a
        >
      </div>
      <section class="container-table">
        <h2 class="title-select">
          Select a farm to stake
        </h2>
        <section class="stake">
          <el-table :data="poolTableData" style="width: 100%" class="stake">
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
    }
  },
}
</script>

<style lang="less" scoped>
.staking {
  min-height: 100vh;
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
.title {
  color: #fafafa;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 1rem;
  a {
    color: #fafafa;
    opacity: 0.8;
    font-size: 80%;
  }
}
.title-select {
  color: #a7a7a7;
  width: 100%;
  min-width: 100%;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 2rem 20px;
}
</style>
