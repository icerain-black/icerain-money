<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="(tag,index) in tagList" :key="tag.id" :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="icon-arrow-right"></Icon>
      </router-link>
    </div>
    <div class="createTag-wapper">
      <button class="createTag" @click="addTag">新建标签</button>
    </div>
  </Layout>
</template>
  
<script lang='ts'>
import Vue from "vue";
import { Component } from 'vue-property-decorator';
import tagListModule from "@/modules/tagListModule";

import Icon from '@/components/Icon.vue';

@Component({
})
export default class Labels extends Vue {
  tagList = tagListModule.fetch();

  addTag(){
    let tagName = prompt("请输入添加的标签名");
    if (tagName) {
      let message = tagListModule.create({id:tagName,name:tagName});
      if (message === "duplication") {
        alert("标签重复！");
        return;
      }
      this.tagList = tagListModule.fetch();
    }
  }
}

</script>

<style lang="scss" scoped>
.tags {
  font-size: 16px;
  background-color: white;
  >.tag{
    padding: 0 16px;
    min-height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #e6e6e6;
    >.icon{
      width: 18px;
      height: 18px;
      color: #666;
    }
  }
}
.createTag-wapper{
  text-align: center;
  padding: 16px;
  margin-top: 44 - 16px;
  .createTag{
    background-color: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
  }
}
</style>
