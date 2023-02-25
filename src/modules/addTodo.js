import { addData } from './localStorage.js';
import populateList from './populateList.js';
import displayTodos from './displayTodo.js';

// function to add user task to the array
const addTodo = (todoList) => {
  // create object to store each data
  const myTodo = {
    index: todoList.length + 1,
    description: '',
    completed: false,
  };

  // pass the value for the description and push it to the array
  const todoForm = document.getElementsByTagName('input')[0].value;
  myTodo.description = todoForm;
  todoList.push(myTodo);

  // updating local storage and render function
  addData(todoList);
  populateList(displayTodos(todoList));
};
export default addTodo;
