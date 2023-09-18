<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script  lang="ts">
export default {
  name: "App"
}

</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

body {
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
  background-color: #f5f5f5;
  
  @media (min-width: 500px) {
    max-width: 500px;
    margin: 0 auto;
  }
}

</style>
