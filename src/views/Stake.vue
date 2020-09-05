<template>
  <section class="staking">
    <Header></Header>
    <section class="container">
      <section class="logo">
      <honey />
      </section>
      <!-- <section class="logo">🐝</section> -->
      <p class="introduction">select a garden and earn BEE🐝.</p>

      <!-- <p class="des">Earn BEE tokens by staking Tokens.</p> -->

      <ul class="item">
        <li v-for="(item, index) in farm" :key="index">
          <div class="item-logo">
            {{ item.icon }}
          </div>
          <h4 class="item-title">{{ item.name }}</h4>
          <div class="item-des">
            <p>Deposit {{ item.symbol.toLocaleUpperCase() }}</p>
            <p>Earn BEE</p>
          </div>

          <router-link :to="{ name: 'StakeId', params: { id: item.symbol.toLocaleLowerCase() } }" class="item-btn">
            Select
          </router-link>
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

export default {
  name: 'Home',
  components: {
    honey,
    SoonCard
  },
  data() {
    return {
      farm: farm
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
  // font-family: KaushanScript-Regular;
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
    width: 260px;
    margin: 20px 20px;
    float: left;
    list-style: none;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow:  5px 5px 10px #a9ccc8, 
             -5px -5px 10px #bbe2dd;
    border-radius: 20px;
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
</style>
