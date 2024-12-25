import express from 'express'
import { addTask,  deleteTask, getTask } from '../controllers/todo.controllers.js';

const router = express.Router();

router.get("/", getTask);
router.post("/", addTask);
router.delete("/", deleteTask);

export default router;