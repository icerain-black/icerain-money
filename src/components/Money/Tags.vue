<template>
  <div class="tags">
    <ul class="current">
      <li v-for="(tag,index) in tagList" 
      @click="tagToggle(tag)"
      :class="{selected:selectedTags.indexOf(tag)>=0}"
      :key="index"
      >
        {{ tag }}
      </li>
    </ul>
    <div class="new">
      <button class="add-tag" @click="addTag">新增标签</button>
    </div>
  </div>
</template>
  
<script lang='ts'>
import Vue from 'vue';
import { Component,Prop } from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop(Array)readonly tagList : string[] | undefined;
  selectedTags:string[] = [];

  tagToggle(tag:string){
    let index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index,1);
    }else{
      this.selectedTags.push(tag);
    }
    this.$emit("update:value",this.selectedTags);
  }

  addTag(){
    let name = prompt("请添加标签");
    if (name === "" || name === null) {
      return;
    }
    this.$emit("updateTags",name);
  }
}
</script>
  
<style lang="scss" scoped>
@use "sass:math";
.tags {
  font-size: 14px;
  padding: 16px;

  >.current {
    display: flex;
    font-size: 14px;
    flex-wrap: wrap;

    >li {
      $h: 24px;

      height: $h;
      border-radius: math.div($h, 2);
      line-height: $h;
      background-color: #d9d9d9;
      padding: 0 16px;
      margin-right: 16px;
      margin-top: 6px;
      &.selected{
        background-color: red;
        color: white;
      }
    }
  }

  >.new {
    padding-top: 16px;

    .add-tag {
      border: none;
      color: #999;
      background: transparent;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }

}
</style>