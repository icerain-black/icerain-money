import createId from "@/tools/createId"

const itemKey = "tagList"

let tagListModule:tagList = {
  data:[],

  create(name:string){
    this.data = this.fetch();
    if (this.data.find(item => item.name === name)) {
      return "duplication";
    }

    this.data.push({
      id:createId(),
      name
    });
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