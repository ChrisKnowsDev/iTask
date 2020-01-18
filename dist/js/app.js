// UI Vars
const taskAmount = document.querySelector('.amount'),
  addIcon = document.querySelector('.fa-plus'),
  filterIcon = document.querySelector('.fa-plus'),
  addInput = document.querySelector('#add-task'),
  filterInput = document.querySelector('#filter-tasks'),
  list = document.querySelector('.collection'),
  clearBtn = document.querySelector('.clear');

// App Vars
let taskCount = 0;

// Listen for user submit add task
addIcon.addEventListener('click', addTask);

// Add task
function addTask() {
  addIcon.style.display = 'none';
  addInput.style.display = 'inline-block';
  addInput.focus();

  // Listen for user submit on add task input
  addInput.addEventListener('keyup', getUserSubmit);
}

// Get user submit
function getUserSubmit(e) {
  let userInput = addInput.value;
  // check if user presses enter
  if (e.keyCode === 13) {
    addInput.value = '';
    addIcon.style.display = 'inline-block';
    addInput.style.display = 'none';

    // Create li and inner html
    createLi(userInput);

    e.preventDefault();
  }
}

// Create Li
function createLi(value) {
  // Creates li and inner html links/icons
  const li = document.createElement('li'),
    liInput = document.createElement('input'),
    editLink = document.createElement('a'),
    editIcon = document.createElement('i'),
    deleteLink = document.createElement('a'),
    deleteIcon = document.createElement('i');

  // Add classes to icons
  editIcon.classList.add('fas', 'fa-pencil-alt');
  deleteIcon.classList.add('fas', 'fa-trash');

  // Append icons to link
  editLink.appendChild(editIcon);
  deleteLink.appendChild(deleteIcon);

  // Append input value to li
  liInput.value = value;
  li.appendChild(liInput);

  // Append links to li
  li.appendChild(editLink);
  li.appendChild(deleteLink);

  // Append li to list
  list.appendChild(li);
}
