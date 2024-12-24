import { data } from '../data.js'

export const getTask = (req, res) => {
    const { id } = req.query

    // If there is no id query then all datas are send
    try {
        if (!id)
            return res.status(200).json({ success: true, data: [...data] });

        // If there is id Quest then the speceficData send
        const reqData = data.find(d => d.id === Number(id));
        if (reqData) {
            return res.status(200).json(
                {
                    success: "True",
                    data: reqData
                }
            )
        } else {
            return res.status(404).json({ success: false, message: "No Task found with this id" })

        }
    }
    catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}

export const addTask = (req, res) => {
    try {
        const { task } = req.body
        data.push({ id: data.length + 1, task: task })
        return res.status(201).json({ success: true, data: [...data] })
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}

export const editTask = (req, res) => {
    try {
        const { id, task } = req.body
        const newData = data.map((d) => {
            if (d.id === Number(id)) {
                d.task = task;
            }
            return d;
        })
        return res.status(200).json({ success: true, data: [...newData] })
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}

export const deleteTask = (req, res) => {
    try {
        const { id } = req.body
        const newData = data.filter(d => d.id !== Number(id))
        return res.status(200).json({ success: true, data: [...newData] })
    } catch (error) {
        return res.status(500).json({ success: false, error: error })
    }
}     