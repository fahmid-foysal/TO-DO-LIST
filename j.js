// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() === "") {
      alert("Please enter a task!");
      return;
    }
  
    const li = document.createElement('li');
    li.textContent = taskInput.value;
  
    // Add a remove button to each task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
      taskList.removeChild(li);
    };
  
    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = "";
  }
  