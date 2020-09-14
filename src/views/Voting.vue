<template>
  <section class="voting">
    <Header></Header>
    <div class="container">
      <p>
        you click the link to vote.
        <a href="https://snapshot.page/#/bee2">https://snapshot.page/#/bee2</a>
      </p>
    </div>
    <Footer></Footer>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
}
</script>

<style lang="less" scoped>
.voting {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.container {
  flex: 1;
  width: 100%;
  max-width: 900px;
  align-items: center;
  margin: 40px auto 3rem;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 20px;
    margin: 100px 0 0;
    text-align: center;
  }
}
</style>
