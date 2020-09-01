<template>
  <section class="staking">
    <Header></Header>
    <section class="container">
      <section class="logo">🐝</section>
      <p class="introduction">Select A Farm To Stake</p>

      <p class="des">Earn Bee2 tokens by staking Uniswap V2 LP Tokens.</p>

      <ul class="item">
        <li v-for="item in 4" :key="item">
          <div class="item-logo">
            🍣
          </div>
          <h4 class="item-title">Sushi Party!</h4>
          <div class="item-des">
            <p>BEE2 BEE2-ETH UNI-V2 LP</p>
            <p>Earn Bee2</p>
          </div>

          <router-link :to="{ name: 'StakeId', params: { id: item } }" class="item-btn">
            Farm
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
    return {

    }
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
  &::after {
    display: block;
    content: "";
    width: 0;
    height: 0;
    clear: both;
  }
  li {
    width: calc(33.333% - 20px);
    margin: 30px 10px;
    float: left;
    list-style: none;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: all .2s;
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
      margin: 56px 0 0 0;
      color: #fff;
      text-decoration: none;
      border: 2px solid #808080;
      padding: 12px 40px;
      box-sizing: border-box;
      border-radius: 20px;
      cursor: pointer;
      transition: all .3s;
      &:hover {
        border-color: #fff;
      }
    }
  }
}
</style>
