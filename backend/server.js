import express from 'express'
import routes_todo from './routes/todo.routes.js'
const app = express();


app.use(express.json())


// api to get the task list
// app.get("/api/todo/", (req, res) => {
//     const { id } = req.query

//     // If there is no id query then all datas are send
//     if (!id)
//         return res.status(200).json({ success: "true", data: [...data] });

//     // If there is id Quest then the speceficData send
//     const reqData = data.find(d => d.id === Number(id));
//     return res.status(200).json(
//         {
//             success: "True", 
//             data: reqData
//         }
//     )
// });

app.use("/api/todo/", routes_todo);

app.listen(5000, () => {
    console.log("Server started at port 5000...");
});