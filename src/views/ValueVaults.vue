<template>
  <section class="value-vaults">
    <Header></Header>
    <section class="container">
      <h2 class="MuiTypography-root jss506 MuiTypography-h2">
        YFV Value Vault
      </h2>
      <p>
        Value Vault is the next core feature of YFValue in order to achieve
        long-term profitability of the token. More technical details and
        concept of Value Vaults will be introduced shortly. Stay tuned.
      </p>
      <p>Supported tokens at launch (Week 2 of September 2020):</p>
      <ul>
        <li>WETH</li>
        <li>WBTC</li>
        <li>renBTC</li>
      </ul>
      <p>
        More tokens will be added upon community proposal and voting system.
      </p>
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
.value-vaults {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.container {
  flex: 1;
  width: 100%;
  display: flex;
  max-width: 900px;
  padding-top: 20px;
  flex-direction: column;
  justify-content: flex-start;
  margin: 40px auto 3rem;
}
.title {
  margin: 1rem;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
}
.mb {
  margin-bottom: 1rem;
}
</style>
