const { getStorage, setStorage } = require('./storage.js');

export default class Check {
  static check = (option, desc) => {
    const array = getStorage();
    array.forEach((checkItem) => {
      if (checkItem.description === desc) {
        checkItem.completed = option;
      }
    });
    setStorage(array);
  }
}
