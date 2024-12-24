import { addNewTask, showNotCompletedTaskWithDelEventListner } from './todo.js'

const addTaskBtn = document.getElementById("add-task-btn");

showNotCompletedTaskWithDelEventListner()


addTaskBtn.addEventListener("click", addNewTask);

