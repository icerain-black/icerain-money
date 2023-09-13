import Vue from 'vue'
import Vuex from 'vuex'

import createId from "@/tools/createId"


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordItemList:[] as Recordltem[],
    tagList:[] as tagData[]
  },
  getters: {
  },
  mutations: {
    //record
    fetchRecord(state){
      state.recordItemList = JSON.parse(window.localStorage.getItem("recordList") || "[]") as Recordltem[]
    },
    createRecord(state,newRecord){
      newRecord.createdTime = new Date(Date.now());
      state.recordItemList.push(JSON.parse(JSON.stringify(newRecord)))
      store.commit("saveRecord");
    },
    saveRecord(state){
      window.localStorage.setItem("recordList",JSON.stringify(state.recordItemList));
    },


    //tag
    createTag(state){
      let tagName = prompt("请输入添加的标签名");
      if (tagName) {
        store.commit("fetchTags");
        if (state.tagList.find(item => item.name === tagName)) {
          alert("标签重复！");
        }
  
        state.tagList.push({
          id: createId(),
          name:tagName
        });
        store.commit("saveTags");
      }
    },

    removeTag(state,id){
      let index = state.tagList.findIndex(item => item.id === id);
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit("saveTags");
        return "success";
      }
      return "fail"
    },

    updateTag(state,{id,tagName}){
      let index = state.tagList.findIndex(item => item.id === id);
      if (index >= 0) {
        state.tagList[index].name = tagName;
        store.commit("saveTags");
      }
    },

    fetchTags(state){
      state.tagList = JSON.parse(window.localStorage.getItem("tagList") || "[]") as tagData[];
    },

    saveTags(state){
      window.localStorage.setItem("tagList", JSON.stringify(state.tagList));
    },
  },
  actions: {
  },
  modules: {
  }
})

store.commit("fetchRecord")
store.commit("fetchTags")

export default store;
