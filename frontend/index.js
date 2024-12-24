import toastr from "toastr";
import 'toastr/build/toastr.min.css'
const tasks = document.getElementById("tasks");
const addTaskBtn = document.getElementById("add-task-btn");

const clearTheShownTask = async () => {
    while (tasks.firstChild) {
        tasks.removeChild(tasks.firstChild)
    }

}

const showNotCompletedTask = async () => {
    await clearTheShownTask()
    const response = await fetch("http://localhost:5000/api/todo").then(
        async (response) => {
            const data = await response.json()
            return data;
        }
    ).catch(error => console.error(error));

    if (response['success'] === true) {
        const data = [...response['data']];

        // If there is no task in database
        if (data.length < 1) {
            const listItem = document.createElement('li');
            listItem.className = 'text-sm text-center';
            listItem.textContent = 'No Task Found 🥱'
            tasks.appendChild(listItem)
            return;
        }

        // If there are task in database
        data.forEach(e => {
            const listItem = document.createElement('li');
            const paragraph = document.createElement('p');
            const image = document.createElement('img');
            listItem.id = `task-{${e['id']}}`;
            listItem.className = 'flex space-x-2 cursor-pointer'
            image.src = './resource/check_box_outline_blank_24dp__FILL0_wght400_GRAD0_opsz24.svg';
            image.className = 'm-1';
            image.alt = 'checkbox';
            paragraph.textContent = e['task']

            listItem.appendChild(image);
            listItem.appendChild(paragraph);
            tasks.appendChild(listItem);
        });
    }

}

const addNewTask = async () => {
    const newTask = { 'task': document.getElementById("new-task").value };
    const response = await fetch("http://localhost:5000/api/todo", {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }).then(async (response) => {
        const data = await response.json();
        return data;
    })
    toastr.options = {
        closeButton: true,
        positionClass: 'toast-top-center',
        timeOut: '3000',
    };
    if (response['success'] === true) {
        toastr.success("Task Added");
        await showNotCompletedTask();
    } else {
        toastr.error("Can't Add Task");
    }
}



addTaskBtn.addEventListener("click", addNewTask)

showNotCompletedTask()