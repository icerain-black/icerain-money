<template>
  <ul class="types">
    <li :class="type === '-' && 'selected'" @click="changeType('-')">支出</li>
    <li :class="type === '+' && 'selected'" @click="changeType('+')">收入</li>
  </ul>
</template>
  
<script lang="ts">
import Vue from 'vue';
import { Component,Prop } from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop(String)readonly type !:string

  changeType(type:string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type error");
    }

    this.$emit("update:value",type);
  }

}
</script>
  
<style lang="scss" scoped>
.types {
  display: flex;
  font-size: 24px;
  background-color: #c4c4c4;

  >li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    flex-grow: 1;
    position: relative;

    &.selected::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      height: 4px;
      background-color: #333;
    }
  }
}
</style>