<template>
  <footer class="footer">
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
        title="Telegram"
        ><img src="@/assets/svg/telegram.svg" alt=""/></a
      >
      <a
        href="https://github.com/bee2-finance"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
        ><img src="@/assets/svg/github.svg" alt=""/></a
      >
    </div>
  </footer>
</template>

<style lang="less" scoped>
.footer {
  width: 100%;
  // padding: 2rem 0 0.5rem;
  z-index: 10;
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
      color: #001f3f;
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
