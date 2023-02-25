const clearCompleted = () => {
  if (Array.isArray(todoObjects) && todoObjects.length) {
    const incomplete = todoObjects.filter((todo) => !todo.completed);
    incomplete.forEach((todo, index) => {
      todo.index = index;
    });
    localStorage.setItem("todoObjects", JSON.stringify(incomplete));
  }
};
