const setStorage = (todoList) => {
  localStorage.setItem('todos', JSON.stringify(todoList));
};
const getStorage = () => {
  let store;
  if (!localStorage.getItem('todos')) {
    store = [];
  } else {
    store = JSON.parse(localStorage.getItem('todos'));
  }
  return store;
};

module.exports = {
  getStorage,
  setStorage,
};
