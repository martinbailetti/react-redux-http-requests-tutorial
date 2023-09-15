export const localStorageSave = (name, obj) => {
  localStorage.setItem("auth", JSON.stringify(obj));
};
export const localStorageGet = (name) => {
  let item = localStorage.getItem(name);

  if (item) {
    try {
      const json = JSON.parse(item);
      return json;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};
