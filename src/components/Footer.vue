<template>
  <footer class="footer">
    <div class="footer-link">
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
    </div>
    <div class="footer-icon">
      <a
        href="https://github.com/yfv-finance/audit"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        ><img src="https://yfv.finance/static/media/github.eb93cde4.svg" alt=""/></a
      ><a
        href="https://medium.com/@yfv.finance"
        target="_blank"
        rel="noopener noreferrer"
        title="Medium"
        ><img src="https://yfv.finance/static/media/medium.012d1912.svg" alt=""/></a
      ><a
        href="https://twitter.com/FinanceYfv"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
        ><img src="https://yfv.finance/static/media/twitter.94e1a815.svg" alt=""/></a
      ><a
        href="https://discord.gg/Dpvd7tp"
        target="_blank"
        rel="noopener noreferrer"
        title="Discord"
        ><img src="https://yfv.finance/static/media/discord.2f535a9a.svg" alt=""/></a
      ><a
        href="https://t.me/FinanceYFV"
        target="_blank"
        rel="noopener noreferrer"
        title="Telegram Finance YFV"
        ><img src="https://yfv.finance/static/media/telegram.dfff36b6.svg" alt=""/></a
      ><a
        href="https://t.me/YFV_Announcements"
        target="_blank"
        rel="noopener noreferrer"
        title="Telegram YFV Announcements"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAt1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8QiqlJAAAAPHRSTlMAgpnv5b1rBvrzCtrQo6B0SCPNx7Csjol9b1Q6G/XpYVgzJRUS4NbDsqdlNy0pHw63jFxQPNKzREArkncl1BqDAAACLklEQVRIx+3V2XbaMBSF4e15AEyYpzAFSICEmWZo9/s/Vx0bEMYqKO7qVfNd6eZfWkg6Bv/GMHjPHuc5cbK2VeqcZWzrrIZ7jzO2LKJNO0P6YJHsYMX1V8v7XcCQES69rnLVzDHUY+xxBFToK7Z90n16+sGTNeq8V4wD9hCi0O/zQTHWaRSmVYuCPv9CfGlos6QYv7g8Z8wGqHGES/52WpCcxLLZms/tRiEfnzaAR+LCXjdI1qSX1Wj0AZQ0hsJNOcG5VfFwFxVZnCOtaFHKk208UIfQ0T0evMriFllFrEwNGt9Oz66Yp6BL3zTJu3jpuObYdRFrT5kgnxeDNBB7JrmNNm2aqTuUxrbnnk6yyCaAXVU0QSe+Tc+BlD9OXH39bNPuFhojFm5yBhWeKTgIGNvcfG91g2dy4TmuedC+Wo7sChM0YCXuanklvZu5TLAWwKLHI/PPZWHCpNwgej5CQV4utBwvNRD6eeuJ+H2LKdYLQjWee063RYMp3hyfkqfXddIt04L4xVhMeJIcVGpj8y0e4jKT6rKf3NbNxIvy48lOTcUAcu+NsnhRkU6XF659Ez+0z147DjJTTFy1aA3FlyVlCjUbSjSVUn9GmTuluEWpsVKsUeYRfxEHanGDMnaWf00xUjeJORwm35jnqMUWQx3gvpwaqdvCxvuIVq8i3ijGOfaWiP1KjdQNDjnC0d4UI6Vimd9D8KtR24MaR/adqiGj54o3KSGrnWbj2//oN21r1mJjrCYtAAAAAElFTkSuQmCC"
          alt=""/></a
      ><a
        href="https://gov.yfv.finance/"
        target="_blank"
        rel="noopener noreferrer"
        title="Forum"
        ><img src="https://yfv.finance/static/media/forum.f830f73f.svg" alt=""/></a
      ><a
        href="mailto:contact@yfv.finance"
        target="_blank"
        rel="noopener noreferrer"
        title="Email Us"
        ><img src="https://yfv.finance/static/media/email.69f9b8c0.svg" alt=""
      /></a>
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
