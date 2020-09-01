<template>
  <section class="vision-mission">
    <Header></Header>
    <section class="container">
      <h1 class="title">
        Vision - Mission
      </h1>
      <div class="mb">
        <h3 class="MuiTypography-root MuiTypography-h3">Vision</h3>
        <p>To bring fairness, true value, and innovation to yield farming</p>
      </div>
      <div class="mb">
        <h3 class="MuiTypography-root MuiTypography-h3">Mission</h3>
        <ul>
          <li><b>Accessibility:</b> Bring farming to everyone</li>
          <li><b>Governance:</b> Provide next generation, on-chain voting</li>
          <li><b>Profitability:</b> Reward long-term YFV stakeholders</li>
          <li>
            <b>Insurance:</b> Protect community funds and provide peace of mind
          </li>
        </ul>
        <div>
          <h4 class="MuiTypography-root MuiTypography-h4">
            1. Accessibility
          </h4>
          <p>
            YFV’s emission schedule was purposefully designed for a much longer
            period, allowing for multiple staking asset options and pools in
            order to reach the broader community. With an easy-to-use user
            interface and detailed instructions, YFV is designed with
            accessibility and user experience in mind.
          </p>
          <h4 class="MuiTypography-root MuiTypography-h4">2. Governance</h4>
          <p>
            YFV enables access to a sleeker and more effective on-chain voting
            model that introduces flexible voting parameters. The governance
            model is first of its kind and allows for free of cost and publicly
            verifiable votes by YFV holders. Additionally, the model
            incentivizes YFV holders with vETH and vUSD to cover gas costs. The
            platform will continue to evolve through community participation to
            best serve its interests.
          </p>
          <h4 class="MuiTypography-root MuiTypography-h4">
            3. Profitability
          </h4>
          <p>
            YFV will utilize flexible and optimized vault strategies that
            support small caps tokens/coins. Vault strategies developed by the
            team will always be delivered without fees, leaving it to YFV
            Holders to decide on appropriate parameters.
          </p>
          <p>
            Alongside the value vaults, YFValue will provide an optimized
            aggregator that ensures the best possible price/liquidity for
            trading YFV. All profit from the aggregator will be distributed to
            YFV Holders.
          </p>
          <h4 class="MuiTypography-root MuiTypography-h4">4. Insurance</h4>
          <p>
            An insurance treasury through contributions of the YFV team and
            community funds will be used to engage and integrate an insurance
            protocol, such as Nexus Mutual, to further reduce risk on behalf of
            all YFV stakeholders.
          </p>
        </div>
      </div>
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
.vision-mission {
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
