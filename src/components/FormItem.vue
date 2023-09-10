<template>
  <div class="FormItem">
    <label>{{ title }}
      <input type="text" v-model="notesText" @input="updateNotes"  :placeholder="tip">
    </label>
  </div>
</template>
  
<script lang='ts'>
import Vue from 'vue';
import { Component,Prop} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop({type:String,default:"字段名"}) title!:string;
  @Prop({type:String,default:"提示字段"}) tip!:string;

  notesText = ""

  updateNotes(){
    this.$emit("update:value",this.notesText)
    console.log(this)
  }
}
</script>
  
<style lang="scss" scoped>
.FormItem {
  >label {
    display: flex;
    background-color: #f5f5f5;
    align-items: center;
    padding-left: 16px;
    font-size: 14px;

    >input {
      display: block;
      margin-left: 16px;
      background-color: transparent;
      border: none;
      color: #999999;
      flex-grow: 1;
      line-height: 60px;
      padding-right: 16px;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>