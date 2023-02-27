import Icon from '../Icon/more.svg';
import { getData, addData } from './localStorage.js';
import populateList from './populateList.js';

// adjusting index
const adjustIndex = (todoList) => {
  todoList.forEach((todo, index) => {
    todo.index = index + 1;
  });
};

// removing lists
const removeTodo = (index, todoList) => {
  todoList.splice(index, 1);
  adjustIndex(todoList);
};

// function to display the todo list
const displayTodos = (todoList) => {
  const input = document.getElementsByTagName('input')[0];
  getData(todoList);

  const listItems = todoList.map((myTodo, index) => {
    input.value = '';

    // Creating list item
    const listItem = document.createElement('li');
    listItem.classList = 'list-item';

    // assigning checkBox for each list
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'checkbox';
    checkBox.name = 'checkbox';

    // assigning paragraph for each list
    const para = document.createElement('input');
    para.type = 'text';
    para.className = 'list-para';
    para.id = `${myTodo.index}`;
    para.value = `${myTodo.description}`;
    para.style.border = 'none';
    para.style.outline = 'none';

    para.addEventListener('input', () => {
      todoList[index].description = para.value;
      addData(todoList);
    });

    checkBox.addEventListener('change', () => {
      if (myTodo.completed === true) {
        myTodo.completed = false;
        para.style.textDecoration = 'line-through';
      } else {
        myTodo.completed = true;
        para.style.textDecoration = 'none';
      }
      addData(todoList);
    });

    // assigning more image container for each list
    const imgDiv = document.createElement('div');
    imgDiv.className = 'dot';
    imgDiv.addEventListener('click', () => {
      imgDiv.previousElementSibling.style.display = 'block';
    });

    // assigning more image for each list
    const imgMore = document.createElement('img');
    imgMore.className = 'more';
    imgMore.alt = 'more logo';
    imgMore.src = `${Icon}`;

    // delete button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'remove';
    removeBtn.style.display = 'none';
    removeBtn.addEventListener('click', () => {
      removeTodo(index, todoList);
      adjustIndex(todoList);
      addData(todoList);
      populateList(displayTodos(todoList));
    });

    // append elements to the list element
    listItem.appendChild(checkBox);
    listItem.appendChild(para);
    listItem.appendChild(removeBtn);
    imgDiv.appendChild(imgMore);
    listItem.appendChild(imgDiv);
    return listItem;
  });
  return listItems;
};

export default displayTodos;
