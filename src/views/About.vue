<template>
  <div class="about">
    <div class="about-inner">
      <img src="@/assets/svg/about/bee2-logo.png" alt="" class="bee2-logo"/>
      <img src="@/assets/svg/about/bee2-text.svg" alt="" class="bee2-text"/>
      <img src="@/assets/svg/about/slogan.svg" alt="" class="slogan"/>
      <div class="about-btm">
        <div class="app-wrap">
          <div class="app-btn">
            <a href="https://bee2.finance/">
              <img src="@/assets/svg/about/LaunchApp.svg" alt="">
            </a>
          </div>
          <img src="@/assets/svg/about/arrow.svg" alt="" class="arrow"/>
        </div>
        <div class="token-wrap">
          <div class="token-inner">
            <a href="https://etherscan.io/token/0xcd4292701995f4707ae63fb1a48d80db2c5f04d4" class="bee-logo" >
              <img src="@/assets/svg/about/bee-logo.png" alt="" />
            </a>
            <img src="@/assets/svg/about/triangle.svg" alt="" class="triangle" />
          </div>
          <div class="token-inner">
            <a href="https://etherscan.io/token/0x932441a0F11482CB5f8B8900aB981a39806F88fa" class="honey-logo" >
              <img src="@/assets/svg/about/honey-logo.png" alt=""  />
            </a>
            <img src="@/assets/svg/about/triangle.svg" alt="" class="triangle" />
          </div>
        </div>
      </div>
    </div>
    <Footer class="footer"/>
    <div class="circle-btm">
      <img src="@/assets/svg/about/circle-x.svg" alt="" class="circle-x"/>
      <img src="@/assets/svg/about/circle-m.svg" alt="" class="circle-l"/>
    </div>
    <div class="circle-top">
      <img src="@/assets/svg/about/circle-m.svg" alt=""/>
    </div>
    <div class="circle-right">
      <img src="@/assets/svg/about/circle-s.svg" alt=""/>
    </div>
    <!-- <h1>This is an about page</h1> -->
    <!-- <img src="@/assets/svg/about/slogan.svg" alt=""/>

    <img src="@/assets/svg/about/triangle.svg" alt=""/>
    <img src="@/assets/svg/about/arrow.svg" alt=""/>

    <img src="@/assets/svg/about/bee2-logo.png" alt=""/>
    <img src="@/assets/svg/about/bee-logo.png" alt=""/>
    <img src="@/assets/svg/about/honey-logo.png" alt=""/>

    <img src="@/assets/svg/about/circle-l.svg" alt=""/>
    <img src="@/assets/svg/about/circle-m.svg" alt=""/>
    <img src="@/assets/svg/about/circle-s.svg" alt=""/> -->
  </div>
</template>

<style lang="less" scoped>
.footer {
  position: absolute;
  bottom: 0;
}
.circle-btm {
  position: absolute;
  bottom: -400px;
  right: 100px;
  z-index: 1;
  overflow: hidden;
  .circle-l {
    width: 800px;
  }
  .circle-x {
    width: 50px;
    position: absolute;
    left: 150px;
  }
}
.circle-top {
  position: absolute;
  top: -200px;
  left: -100px;
  z-index: 1;
  img {
    width: 400px;
  }
}
.circle-right {
  position: absolute;
  top: 100px;
  right: 100px;
  img {
    width: 142px;
  }
}
.about {
  background: rgb(254, 200, 76);
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  .about-inner {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
    padding-left: 200px;
    padding-bottom: 200px; 
    z-index: 10;
  }
  .bee2-logo {
    width: 120px;
    margin-bottom: 10px;
    z-index: 10;
  }
  .bee2-text {
    width: 600px;
    margin-bottom: 10px;
  }
  .slogan {
    width: 500px;
    margin-bottom: 20px;
  }
  .app-btn {
    padding: 20px 10px 10px;
    img {
      width: 200px;
    }
  }
  .arrow {
    width: 180px;
  }
  .bee-logo, .honey-logo {
    img {
      width: 78px;
    }
  }
  .triangle {
    width: 13px;
  }
  .about-btm {
    display: flex;
    flex-direction: row;
    align-items: center;
    .app-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 20px;
    }
    .token-wrap {
      display: flex;
      flex-direction: row;
      .token-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
      }
    }
  }
}
.slogan {
  font-family:'ArialRoundedMTBold', 'Arial Rounded MT Bold', sans-serif;
  font-size:8.676px;
}
</style>