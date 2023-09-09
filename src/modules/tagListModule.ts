const itemKey = "tagList"



let tagListModule:tagList = {
  data:[],
  fetch(){
    this.data = JSON.parse(window.localStorage.getItem(itemKey) || "[]") as tagData[];
    return this.data
  },
  create(tag:tagData){
    let names = this.data.map(item => item.name)

    if (names.indexOf(tag.name) >= 0) {
      return "duplication"
    }
    this.data = this.fetch()
    this.data.push(tag);
    this.save();
    return "success"
  },

  save(){
    window.localStorage.setItem(itemKey,JSON.stringify(this.data));
  }
}

export default tagListModule;