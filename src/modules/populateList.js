const listContainer = document.querySelector('.list-container');
// populate list
const populateList = (lists) => {
  listContainer.innerHTML = '';
  listContainer.append(...lists);
};

export default populateList;
