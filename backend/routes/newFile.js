import { deleteTask } from '../controllers/todo.controllers';
import { router } from './todo.routes';

router.delete("/", deleteTask);
