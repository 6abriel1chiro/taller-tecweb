document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const addTaskButton = document.getElementById("addTaskButton"); // New button element

  // Event listener for adding tasks using the "Add Task" button
  addTaskButton.addEventListener("click", function () {
    if (taskInput.value.trim() !== "") {
      addTask(taskInput.value.trim());
      taskInput.value = "";
    }
  });

  // Event listener for adding tasks using the Enter key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && taskInput.value.trim() !== "") {
      addTask(taskInput.value.trim());
      taskInput.value = "";
    }
  });

  // Function to add a new task
  function addTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
              <span>${taskText}</span>
              <button class="delete-btn">Delete</button>
          `;
    taskList.appendChild(taskItem);

    // Event listener for deleting tasks
    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
      taskItem.remove();
    });
  }
});
