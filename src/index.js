import './index.css';
import Icon from './Icon/more.svg';
import IconOne from './Icon/Cached.svg';
import IconTwo from './Icon/add.svg';

// select elements and store them in a variable
const listContainer = document.querySelector('.list-container');
let listItem = document.createElement('li');
const refreshLogo = document.querySelector('.refresh');
refreshLogo.innerHTML = ` <img src="${IconOne}" alt="Cached logo" />`;
const addLogo = document.querySelector('.add-logo');
addLogo.innerHTML = ` <img src="${IconTwo}" alt="add logo" />`;

// create array to store the task in the form of objects
const todoList = [
  {
    index: 1,
    description: 'playing keyboard',
    completed: false,
  },
  {
    index: 2,
    description: 'play football',
    completed: false,
  },
  {
    index: 3,
    description: 'coding',
    completed: false,
  },
];

// function to display the todo list
const displayTodos = () => {
  for (let i = 0; i < todoList.length; i += 1) {
    listItem = document.createElement('li');
    listItem.classList = 'list-item';
    listItem.innerHTML = `
      <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            class="checkbox-${i}"
          />

          <p class="list-para">${todoList[i].description}</p>
          <div class="dot"><img src="${Icon}" alt="more logo" /></div>`;
    listContainer.appendChild(listItem);
  }
};

// calling the function to display
displayTodos();
