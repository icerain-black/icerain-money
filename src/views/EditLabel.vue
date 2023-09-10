<template>
  <Layout>
    <div class="EditLabel">
      <div class="navBar">
        <Icon class="left-icon" name="icon-arrow-left"></Icon>
        <span>编辑标签</span>
        <span class="right-icon"></span>
      </div>
      <FormItem backgroundColor="white" title="标签名" tip="请输入更改后的标签名" />
      <div class="button-wapper">
        <DefaultButton>删除标签</DefaultButton>
      </div>
    </div>
  </Layout>
</template>
  
<script lang='ts'>
import Vue from "vue";
import { Component } from 'vue-property-decorator';

import FormItem from "@/components/FormItem.vue"
import DefaultButton from "@/components/DefaultButton.vue"


import tagListModule from "@/modules/tagListModule";

@Component({
  components: {
    FormItem,
    DefaultButton
  }
})
export default class EditLable extends Vue {
  created() {
    let tagList = tagListModule.fetch();
    let tag = tagList.filter(item => item.id === this.$route.params.id)[0]
    if (!tag) {
      this.$router.replace({
        name: "404"
      })
    }
  }
}
</script>
  
<style lang="scss" scoped>
.EditLabel {
  >.navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    font-size: 16px;
    margin-bottom: 8px;
    background-color: white;

    >.left-icon {
      width: 18px;
      height: 18px;
    }
  }
  >.button-wapper{
    display: flex;
    justify-content: center;
    padding-top: 24px;
  }
}
</style>