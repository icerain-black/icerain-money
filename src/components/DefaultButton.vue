<template>
  <button @click="$emit('click',$event)">
    <slot></slot>
  </button>  
</template>
  
<script lang='ts'>
import Vue from "vue";
import { Component } from 'vue-property-decorator';

@Component({
})
export default class Labels extends Vue {

}

</script>
  
<style lang="scss" scoped>
button{
  background-color: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  margin-right: 16px;
  box-sizing: border-box;
  min-width: 96px;
}
  
</style>