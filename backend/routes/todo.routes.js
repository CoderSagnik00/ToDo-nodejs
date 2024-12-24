import express from 'express'
import { addTask, editTask, deleteTask, getTask } from '../controllers/todo.controllers.js';

const router = express.Router();

router.get("/", getTask);
router.post("/", addTask);
router.put("/", editTask);
router.delete("/", deleteTask);

export default router;