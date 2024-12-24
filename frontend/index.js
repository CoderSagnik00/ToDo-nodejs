import { addNewTask, showNotCompletedTask } from './todo.js'
const addTaskBtn = document.getElementById("add-task-btn");


addTaskBtn.addEventListener("click", addNewTask)


showNotCompletedTask()