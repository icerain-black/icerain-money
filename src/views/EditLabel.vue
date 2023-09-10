<template>
  <Layout>
    <div class="EditLable">
      <Icon name="icon-arrow-left"></Icon>
      <span>EditLabel page</span>
      <FormItem title="标签名" tip="请输入更改后的标签名"/>

    </div>
  </Layout>   
</template>
  
<script lang='ts'>
import Vue from "vue";
import { Component } from 'vue-property-decorator'; 

import FormItem from "@/components/FormItem.vue"

import tagListModule from "@/modules/tagListModule";

@Component({
  components:{
    FormItem
  }
})
export default class EditLable extends Vue{
  created(){
    let tagList = tagListModule.fetch();
    let tag = tagList.filter(item => item.id === this.$route.params.id)[0]
    if (!tag) {
      this.$router.replace({
        name:"404"
      })
    }
  }
}
</script>
  
<style lang="scss" scoped>
  
</style>