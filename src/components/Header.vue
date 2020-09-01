<template>
  <header class="header">
    <section class="h-container">
      <section class="h-logo">
        <span>🐝</span>
        <section class="h-logo-text">
          <h1>MayFly</h1>
          <p>This is a civilian project</p>
        </section>
      </section>

      <nav class="h-nav">
        <router-link :to="{ name: 'Home' }" :class="$route.name === 'Home' && 'active'" >Home</router-link>
        <router-link :to="{ name: 'Staking' }" :class="$route.name === 'Staking' && 'active'" >Stake</router-link>
        <router-link :to="{ name: 'Voting' }" :class="$route.name === 'Voting' && 'active'" >Vote</router-link>
        <router-link :to="{ name: 'VisionMission' }" :class="$route.name === 'VisionMission' && 'active'" >Vision - Mission</router-link>
        <router-link :to="{ name: 'ValueVaults' }" :class="$route.name === 'ValueVaults' && 'active'" >Vaults</router-link>
      </nav>

      <section class="h-wallet">
        <button>
          Connect Wallet
        </button>
      </section>
    </section>
  </header>
</template>

<style lang="less" scoped>
.header {
  width: 100%;
  box-sizing: border-box;
  .h-container {
    display: flex;
    padding: 12px 24px 0;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .h-logo {
    display: flex;
    min-width: 270px;
    align-items: center;
    span {
      font-size: 50px;
      width: 50px;
      height: 50px;
      display: inline-block;
      margin-right: 10px;
    }
  }
  .h-logo-text {
    h1 {
      margin: 0;
      padding: 0;

      display: block;
      font-size: 1.3em;
      font-weight: 700;
      letter-spacing: 0.3px;
      color: #fff;
    }
    p {
      color: #fff;
      margin: 0;
      padding: 0;
    }
  }

  .h-nav {
    display: flex;
    flex-wrap: wrap;
    a {
      color: #c4c4c4;
      margin: 0 15px;
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      font-weight: 600;
      &.active {
        color: #ffffff;
      }
    }
  }
  .h-wallet {
    min-width: 270px;
    text-align: right;
    button {
      color: #fafafa;
      box-shadow: #17191b 4px 4px 8px, rgb(20 28 37) -8px -8px 16px;
      background-color: rgba(154,154,154,.2);
      padding: 10px 24px;
      font-size: 0.875rem;
      min-width: 64px;
      box-sizing: border-box;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-family: "Open Sans",Roboto,Arial,sans-serif;
      font-weight: 500;
      line-height: 1.75;
      border-radius: 50px;
      border: 0;
      cursor: pointer;
      margin: 0;
      display: inline-flex;
      outline: 0;
      position: relative;
      align-items: center;
      user-select: none;
      vertical-align: middle;
      -moz-appearance: none;
      justify-content: center;
      text-decoration: none;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
}
</style>
