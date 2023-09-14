<template>
  <ul class="types" :class="{[`types-`+classPrefix]:classPrefix}">
    <li v-for="(item, index) in typeDataSourse" :key="index"
    @click="changeSelected(item.value)"
    :class="classList(item)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>
  
<script lang='ts'>
import Vue from 'vue';
import { Component,Prop } from 'vue-property-decorator';

@Component
export default class Types extends Vue {


  @Prop(String)readonly initSelectedValue !:string
  @Prop({required:true})readonly typeDataSourse !:TypeDataSourse[]
  @Prop(String)readonly classPrefix !:string

  changeSelected(type:string) {
    this.$emit("update:value",type);
  }

  classList(item:TypeDataSourse){
    return{
      selected:this.initSelectedValue === item.value,
      ["types-item-"+this.classPrefix]:this.classPrefix
    }
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