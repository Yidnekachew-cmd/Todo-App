const clearCompleted = (todoList) => {
  const incomplete = todoList.filter((todo) => !todo.completed);
  incomplete.forEach((element, index) => {
    element.index = index + 1;
  });
  return incomplete;
};

export default clearCompleted;
