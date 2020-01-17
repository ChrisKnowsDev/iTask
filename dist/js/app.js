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
  console.log('Clicked');
}
