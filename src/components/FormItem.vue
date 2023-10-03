<template>
  <div class="FormItem">
    <label :style="`background-color:${backgroundColor}`">{{ title }}
      <input type="text" :value="value" @input="updateTag($event.target.value)"  :placeholder="tip">
    </label>
  </div>
</template>
  
<script lang='ts'>
import Vue from 'vue';
import { Component,Prop} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop({type:String}) value!:string;
  @Prop({type:String,default:"字段名"}) title!:string;
  @Prop({type:String,default:"提示字段"}) tip!:string;
  @Prop({default:"#f5f5f5"}) backgroundColor!:string;

  updateTag(value:string){
    this.$emit("update:value",value)
  }
}
</script>
  
<style lang="scss" scoped>
.FormItem {
  >label {
    display: flex;
    background-color: white;
    align-items: center;
    padding-left: 16px;
    font-size: 14px;

    >input {
      display: block;
      margin-left: 16px;
      background-color: transparent;
      border: none;
      color: #544747;
      flex-grow: 1;
      line-height: 40px;
      padding-right: 16px;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>