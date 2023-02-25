// Get data from the local storage
const getData = (todoList) => {
  const data = localStorage.getItem('todoList');
  if (data) {
    todoList = JSON.parse(data);
  }
  return todoList;
};

// Add data to the local storage
const addData = (todoList) => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

export { getData, addData };
