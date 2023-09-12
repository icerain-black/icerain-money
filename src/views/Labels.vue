<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="(tag) in tagList" :key="tag.id" :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="icon-arrow-right"></Icon>
      </router-link>
    </div>
    <div class="createTag-wapper">
      <DefaultButton @click="addTag">新建标签</DefaultButton>
    </div>
  </Layout>
</template>
  
<script lang='ts'>
import Vue from "vue";
import { Component } from 'vue-property-decorator';

import DefaultButton from "@/components/DefaultButton.vue"
import store2 from "@/store/index2";

@Component({
  components:{
    DefaultButton
  }
})
export default class Labels extends Vue {
  tagList = store2.fetchTags();

  addTag(){
    store2.createTag()
    this.tagList = store2.fetchTags();
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
  
}
</style>
