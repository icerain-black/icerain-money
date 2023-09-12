import recordList from "./recordListStore";
import tagList from "./tagListStore";

const store2 = {
  ...recordList,
  ...tagList
}

export default store2