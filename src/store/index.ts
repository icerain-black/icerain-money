import Vue from 'vue'
import Vuex from 'vuex'

import recordListStore from "@/store/recordListStore"
import tagListStore from "@/store/tagListStore"


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    recordListStore,
    tagListStore
  }
})

store.commit("fetchRecord")
store.commit("fetchTags")

export default store;
