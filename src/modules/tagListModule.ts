const itemKey = "tagList"

let tagListModule:tagList = {
  data:[],

  create(tag:tagData){
    let id = this.data.map(item => item.id);

    if (id.indexOf(tag.id) >= 0) {
      return "duplication";
    }
    this.data = this.fetch();
    this.data.push(tag);
    this.save();
    return "success";
  },

  remove(id){
    let index = this.data.findIndex(item => item.id === id);
    this.data.splice(index,1);
    this.save();
  },

  updata(id,newName){
    let index = this.data.findIndex(item => item.id === id);
    if (index >= 0) {
      this.data[index].name = newName;
      this.save();
    }
  },

  fetch(){
    this.data = JSON.parse(window.localStorage.getItem(itemKey) || "[]") as tagData[];
    return this.data;
  },

  save(){
    window.localStorage.setItem(itemKey,JSON.stringify(this.data));
  }
}

export default tagListModule;