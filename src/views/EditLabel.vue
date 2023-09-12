<template>
  <Layout>
    <div class="EditLabel">
      <div class="navBar">
        <Icon @click="toLabelPage" class="left-icon" name="icon-arrow-left"></Icon>
        <span>编辑标签</span>
        <span class="right-icon"></span>
      </div>
      <FormItem :value="tag.name" @update:value="changeTagName" backgroundColor="white" title="标签名" tip="请输入更改后的标签名" />
      <div class="button-wapper">
        <DefaultButton @click="saveTag">保存</DefaultButton>
        <DefaultButton @click="deleteTag">删除标签</DefaultButton>
      </div>
    </div>
  </Layout>
</template>
  
<script lang='ts'>
import Vue from "vue";
import { Component } from 'vue-property-decorator';

import FormItem from "@/components/FormItem.vue"
import DefaultButton from "@/components/DefaultButton.vue"

import store2 from "@/store/index2";

@Component({
  components: {
    FormItem,
    DefaultButton
  }
})
export default class EditLable extends Vue {
  tag:tagData = {id:"null",name:"null"};
  tagName = this.tag.name;

  created() {
    const taglist = store2.fetchTags();
    const tag = taglist.filter(item => item.id === this.$route.params.id)[0];
    if (tag.name !== "null") {
      this.tag = tag
    }else{
      this.$router.replace({
        name: "404"
      })
    }
  }

  changeTagName(tagName:string){
    this.tagName = tagName
  }

  saveTag(){
    store2.updateTag(this.tag.id,this.tagName);
    this.toLabelPage()
  }

  deleteTag(){
    store2.removeTag(this.tag.id)
    this.$router.replace("/labels")
  }

  toLabelPage(){
    this.$router.push("/labels")
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