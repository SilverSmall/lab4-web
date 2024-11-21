export class ToDo {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  addTask(taskText) {
    if (taskText.trim() === "") return null;
    const task = { text: taskText, completed: false };
    this.tasks.push(task);
    this.saveTasks();
    return task;
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  toggleTask(index) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
