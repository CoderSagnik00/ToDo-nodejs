import express from 'express'
import routes_todo from './routes/todo.routes.js'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';

const app = express();


app.use(express.json())


app.use(cors())

app.use("/api/todo/", routes_todo);

app.listen(5000, () => {
    console.log("Server started at port 5000...");
    connectDB();
});