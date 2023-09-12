import tagListModule from "@/modules/tagListModule"
import recordListModule from "@/modules/recordListModule"

const store2:store2 = {
  //recordList
  createRecord: (newRecord: Recordltem) => {
    recordListModule.create(newRecord)
  },

  //tagLis
  createTag: () => {
    let tagName = prompt("请输入添加的标签名");
    if (tagName) {
      let message = tagListModule.create(tagName);
      if (message === "duplication") {
        alert("标签重复！");
      }
    }
  },

  removeTag: (id) => {
    return tagListModule.remove(id);
  },

  updateTag: (id, newName) => {
    return tagListModule.updata(id, newName);
  }
}

export default store2