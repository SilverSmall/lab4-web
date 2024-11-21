import { ToDo } from "./logic.js";

const todo = new ToDo();
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");

function renderTasks() {
  taskList.innerHTML = "";
  todo.tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      ${task.text}
      <div>
        <button class="toggle">✔</button>
        <button class="delete">❌</button>
      </div>
    `;
    taskList.appendChild(li);

    li.querySelector(".toggle").addEventListener("click", () => {
      todo.toggleTask(index);
      renderTasks();
    });

    li.querySelector(".delete").addEventListener("click", () => {
      todo.deleteTask(index);
      renderTasks();
    });
  });
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = todo.addTask(taskInput.value);
  if (newTask) {
    taskInput.value = "";
    renderTasks();
  }
});

renderTasks();
