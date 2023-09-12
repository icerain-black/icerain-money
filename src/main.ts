import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Nav from "@/components/Nav.vue"
import Layout from "@/components/Layout.vue"
import Icon from "@/components/Icon.vue"

import tagListModule from "@/modules/tagListModule"


Vue.config.productionTip = false;
Vue.component("Nav", Nav);
Vue.component("Layout", Layout);
Vue.component("Icon", Icon);

window.createTag = () => {
  let tagName = prompt("请输入添加的标签名");
  if (tagName) {
    let message = tagListModule.create(tagName);
    if (message === "duplication") {
      alert("标签重复！");
    }
  }
}

window.removeTag = (id) => {
  return tagListModule.remove(id);
}

window.updateTag = (id,newName) => {
  return tagListModule.updata(id,newName);
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
