<template>
  <svg class="icon" aria-hidden="true" @click="$emit('click',$event)">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>
  
<script lang='ts'>
import "../../public/js/icon_font.js"


export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      default: "icon-licai"
    }
  }
}

</script>
  
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>