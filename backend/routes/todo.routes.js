import express from 'express'
import { addTask, deleteTask, editTask, getTask } from '../controllers/todo.controllers.js';
import { data } from '../data.js';

const router = express.Router();

router.get("/", getTask);
router.post("/", addTask);
router.put("/", editTask);
router.delete("/", deleteTask);

export default router;