function createId() {
  let rootData = Date.now();
  rootData = rootData - 114 - 514 - 1919 + 810;
  return rootData.toString();
}

export default createId;