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
import { Component } from 'vue-property-decorator';
import {mixins} from "vue-class-component"

import DefaultButton from "@/components/DefaultButton.vue"

import TagHelper from "@/mixin/tagHelper";


@Component({
  components:{
    DefaultButton
  }
})
export default class Labels extends mixins(TagHelper){
  get tagList(){
    return this.$store.state.tagList;
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
  margin-top: 100 - 16px;
}
</style>
