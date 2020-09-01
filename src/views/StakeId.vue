<template>
  <section class="staking">
    <Header></Header>
    <section class="container">
      <section class="logo">🍣</section>
      <p class="introduction">Sushi party!</p>

      <p class="des">Earn Bee2 tokens by staking Uniswap V2 LP Tokens.</p>

      <ul class="item">
        <li>
          <div>
            <div class="item-logo">
              🍣
            </div>
            <h4 class="item-title">Sushi Party!</h4>
            <div class="item-des">
              <p>Bee2 Earned</p>
            </div>
          </div>

          <router-link
            :to="{ name: 'StakeId', params: { id: 1 } }"
            class="item-btn"
          >
            Harvest
          </router-link>
        </li>
        <li>
          <div class="item-logo">
            🍣
          </div>
          <h4 class="item-title">Sushi Party!</h4>
          <div class="item-des">
            <p>Bee2-ETH UNI-V2 LP Tokens Staked</p>
          </div>

          <router-link
            :to="{ name: 'StakeId', params: { id: 1 } }"
            class="item-btn"
          >
            Approve SUSHI-ETH UNI-V2 LP
          </router-link>
        </li>
      </ul>
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
    return {}
  },
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
    height: 345px;
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
</style>
