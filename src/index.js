import './index.css';
import IconOne from './Icon/Cached.svg';
import IconTwo from './Icon/add.svg';
import addTodo from './modules/addTodo.js';
import populateList from './modules/populateList.js';
import displayTodos from './modules/displayTodo.js';
import clearCompleted from './modules/clear.js';
import { addData } from './modules/localStorage.js';

// select elements and store them in a variable
const clear = document.querySelector('.clear');
const refreshLogo = document.querySelector('.refresh');
refreshLogo.innerHTML = ` <img src="${IconOne}" alt="Cached logo" />`;
const addLogo = document.querySelector('.add-logo');
addLogo.innerHTML = ` <img src="${IconTwo}" alt="add logo" />`;
const input = document.getElementsByTagName('input')[0];
const add = document.querySelector('.add-logo');

// creating an empty array
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// Event listener for adding user input values
add.addEventListener('click', (e) => {
  e.preventDefault();
  const inputData = input.value.trim();
  if (inputData !== '') {
    addTodo(todoList);
  }
});

// Event listener for adding user input values
input.addEventListener('keyup', (e) => {
  e.preventDefault();
  const inputData = input.value.trim();
  if (inputData !== '' && e.keyCode === 13) {
    addTodo(todoList);
  }
});

clear.addEventListener('click', () => {
  todoList = clearCompleted(todoList);
  addData(todoList);
  populateList(displayTodos(todoList));
});

// calling the function to display
if (todoList.length) populateList(displayTodos(todoList));
