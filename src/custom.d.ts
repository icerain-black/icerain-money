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

type tagList = {
  data:tagData[];
  fetch:() => tagData[];
  create:(tag:tagData) => "success" | "duplication";
  save:() => void;
}