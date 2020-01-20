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

// Load all event listeners
loadAllEventListeners();

// All event listeners loaded into one function and called above
function loadAllEventListeners() {
  // Listen for user submit add task
  addIcon.addEventListener('click', addTask);

  // Listen for delete task
  list.addEventListener('click', deleteTask);

  // Listen for edit task
  list.addEventListener('click', editTask);

  // Listen for clear tasks
  clearBtn.addEventListener('click', clearTasks);
}

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
    // Check if input is empty on submit and if so alert
    if (addInput.value === '') {
      showAlert('You must enter something first');
    } else {
      addInput.value = '';
      addIcon.style.display = 'inline-block';
      addInput.style.display = 'none';

      // Create li and inner html
      createLi(userInput);

      // Add one to task count and update task amount
      taskCount += 1;
      taskAmount.textContent = taskCount;
    }

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

// Show Alert
function showAlert(msg) {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert';
  const container = document.querySelector('.container'),
    header = document.querySelector('header');
  alertDiv.appendChild(document.createTextNode(msg));
  container.insertBefore(alertDiv, header);

  // Timeout after 2secs
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 2000);
}

// Delete Task
function deleteTask(e) {
  if (e.target.classList.contains('fa-trash')) {
    if (confirm('You sure you want to delete this task?'))
      e.target.parentElement.parentElement.remove();
    // Subtract one to task count and update task amount
    taskCount -= 1;
    taskAmount.textContent = taskCount;
  }
}

// Edit Tasks
function editTask(e) {
  let input = e.target.parentElement.parentElement.firstChild;
  input.focus();
  input.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
      input.blur();
    }
  });
}

// Clear tasks
function clearTasks() {
  if (confirm('You sure, this will delete your entire list?')) {
    list.remove();
    taskAmount.textContent = 0;
  }
}
