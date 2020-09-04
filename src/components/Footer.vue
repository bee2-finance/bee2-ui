<template>
  <footer class="footer">
    <!-- <div class="footer-link">
      <a
        href="https://etherscan.io/token/0x45f24BaEef268BB6d63AEe5129015d69702BCDfa"
        target="_blank"
        rel="noopener noreferrer"
        >Token Contract</a
      ><a
        href="https://coinmarketcap.com/currencies/yfvalue/"
        target="_blank"
        rel="noopener noreferrer"
        >CoinMarketCap</a
      ><a
        href="https://www.coingecko.com/en/coins/yfvalue#markets"
        target="_blank"
        rel="noopener noreferrer"
        >CoinGecko</a
      ><a
        href="https://app.uniswap.org/#/swap?inputCurrency=0xdAC17F958D2ee523a2206206994597C13D831ec7&amp;outputCurrency=0x45f24BaEef268BB6d63AEe5129015d69702BCDfa"
        target="_blank"
        rel="noopener noreferrer"
        >Uniswap USDT-YFV</a
      ><a
        href="https://balancer.exchange/#/swap/0x45f24baeef268bb6d63aee5129015d69702bcdfa"
        target="_blank"
        rel="noopener noreferrer"
        >Balancer Swap</a
      ><a href="/audit">Audit</a>
    </div> -->
    <div class="footer-icon">
      <a
        href="https://medium.com/@bee2.finance"
        target="_blank"
        rel="noopener noreferrer"
        title="Medium"
        ><img src="@/assets/svg/medium.svg" alt=""/></a
      ><a
        href="https://twitter.com/bee2_finance"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
        ><img src="@/assets/svg/twitter.svg" alt=""/></a
      ><a
        href="https://discord.gg/CuDP4jK"
        target="_blank"
        rel="noopener noreferrer"
        title="Discord"
        ><img src="@/assets/svg/discord.svg" alt=""/></a
      ><a
        href="https://t.me/bee2_finance"
        target="_blank"
        rel="noopener noreferrer"
        title="Telegram Finance YFV"
        ><img src="@/assets/svg/telegram.svg" alt=""/></a
      >
    </div>
  </footer>
</template>

<style lang="less" scoped>
.footer {
  width: 100%;
  padding: 2rem 0 0.5rem;
  .footer-link {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  a {
    color: rgba(255, 255, 255, 0.6);
    margin: 5px 15px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #fff;
    }
    img {
      height: 24px;
      transition: all 0.2s;
    }
  }
  .footer-icon {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 16px;
  }
}
</style>
