<template>
  <div class="loading">
    <img src="../assets/loading_green.gif" alt="loading">
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="less">
  @import "../assets/base.less";

  .loading {
    margin: 100/@rem;
    text-align: center;
    img {
      width: 100/@rem;
    }
  }
</style>
