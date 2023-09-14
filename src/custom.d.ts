type Recordltem = {
  tags:string[],
  notes:string,
  type:"-"|"+",
  amonut:number,
  createdTime:Date
}

type tagData = {
  id:string,
  name:string
}

type tagListStore = {
  createTag:() => void;
  removeTag:(id:string) => "success" | "fail";
  updateTag:(id:string,name:string) => void;
  saveTags:() => void;
  fetchTags:() => tagData[];
}

type recordListStore = {
  createRecord:(newRecord:Recordltem) => void;
  // data:Recordltem[];
  fetchRecord:() => Recordltem[];
  saveRecord:() => void;
}


type TypeDataSourse = {
  text:string,
  value:string
}