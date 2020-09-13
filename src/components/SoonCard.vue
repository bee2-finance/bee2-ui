<template>
    <div class="card">
        <div class="item-logo">
            🌱 
        </div>
        <h4 class="item-title">More flowers will grow here soon...</h4>
    </div>
</template>
<style lang="less" scoped>
.card {
  height: 323px;
  padding: 20px;
    .item-logo {
      width: 80px;
      height: 80px;
      font-size: 60px;
      margin: 0 auto 20px;
    }

    .item-title {
        font-size: 20px;
        margin-top: 40px;
        padding: 0;
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
</style>