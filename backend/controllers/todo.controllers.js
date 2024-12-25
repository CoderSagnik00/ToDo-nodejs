import { createTask, delTask, readTask } from '../db/todo.db.js';

export const getTask = async (req, res) => {
    const { id } = req.query

    // If there is no id query then all datas are send
    try {
        if (!id) {
            const data = await readTask()
            return res.status(200).json({ success: true, data: data });
        }

        // If there is id Quest then the speceficData send
        const reqData = await readTask(id);
        if (reqData) {
            return res.status(200).json(
                {
                    success: true,
                    data: reqData
                }
            )
        } else {
            return res.status(404).json({ success: false, message: "No Task found with this id" })

        }
    }
    catch (error) {
        console.log(error);

        return res.status(500).json({ success: false, error: error })
    }
}

export const addTask = async (req, res) => {

    try {
        const { task } = req.body
        await createTask(task);
        return res.status(201).json({ success: true, message: "Task Added" })
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}

// export const editTask = (req, res) => {
//     try {
//         const { id, task } = req.body
//         const newData = data.map((d) => {
//             if (d.id === Number(id)) {
//                 d.task = task;
//             }
//             return d;
//         })
//         return res.status(200).json({ success: true, data: [...newData] })
//     } catch (error) {
//         return res.status(500).json({ success: false, error: error })
//     }
// }

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.body

        if (await delTask(id) === 1) {
            return res.status(200).json({ success: true, message: "Task Deleted" })
        } else {
            return res.status(400).json({ success: false, message: "task Not found" })
        }
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}     