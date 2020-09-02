<template>
  <jazzicon
    :address="address"
    :diameter="parseInt(size) || 22"
    class="c-avatar"
  />
</template>

<script>
export default {
  props: ['address', 'size']
}
</script>


<style lang="less" scoped>
.c-avatar {
  display: flex;
  align-items: center;
}
</style>