import createId from "@/tools/createId"

const itemKey = "tagList";

let data: tagData[] = [];

const tagListStore: tagListStore = {
  createTag: () => {
    let tagName = prompt("请输入添加的标签名");
    if (tagName) {
      data = tagListStore.fetchTags();
      if (data.find(item => item.name === tagName)) {
        alert("标签重复！");
        return "duplication";
      }

      data.push({
        id: createId(),
        name:tagName
      });
      tagListStore.saveTags();
      return "success";
    }
  },

  removeTag: (id) => {
    let index = data.findIndex(item => item.id === id);
    if (index >= 0) {
      data.splice(index, 1);
      tagListStore.saveTags();
      return "success";
    }
    return "fail"
  },

  updateTag: (id, newName) => {
    let index = data.findIndex(item => item.id === id);
    if (index >= 0) {
      data[index].name = newName;
      tagListStore.saveTags();
    }
  },

  saveTags() {
    window.localStorage.setItem(itemKey, JSON.stringify(data));
  },

  fetchTags() {
    data = JSON.parse(window.localStorage.getItem(itemKey) || "[]") as tagData[];
    return data;
  },
}

tagListStore.fetchTags();

export default tagListStore;