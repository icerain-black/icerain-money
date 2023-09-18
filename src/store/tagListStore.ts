import createId from "@/tools/createId"
import store from "@/store"

type State = {
  tagList:tagData[]
}

type updateTagParams = {
  id:string,
  tagName:string
}

const tagListStore = {
  state: {
    tagList:[]
  } as State,

  mutations: {
    createTag(state:State) {
      let tagName = prompt("请输入添加的标签名");
      if (tagName) {
        store.commit("fetchTags");
        if (state.tagList.find(item => item.name === tagName)) {
          alert("标签重复！");
          return;
        }

        state.tagList.push({
          id: createId(),
          name: tagName
        });
        store.commit("saveTags");
      }
    },

    removeTag(state:State, id:string) {
      let index = state.tagList.findIndex(item => item.id === id);
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit("saveTags");
        return "success";
      }
      return "fail"
    },

    updateTag(state:State, updateTagParams:updateTagParams) {
      let index = state.tagList.findIndex(item => item.id === updateTagParams.id);
      if (index >= 0) {
        state.tagList[index].name = updateTagParams.tagName;
        store.commit("saveTags");
      }
    },

    fetchTags(state:State) {
      state.tagList = JSON.parse(window.localStorage.getItem("tagList") || "[]") as tagData[];
    },

    saveTags(state:State) {
      window.localStorage.setItem("tagList", JSON.stringify(state.tagList));
    },
  }
}

export default tagListStore;