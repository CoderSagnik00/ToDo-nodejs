const tasks = document.getElementById("tasks");


const addNotCompletedTask = async () => {
    const response = await fetch("http://localhost:5000/api/todo").then(
        async (response) =>{
            const data = await response.json()
            return data;
        }
    ).catch(error => console.error(error));

    if (response['success'] === "true") {
        const data = response['data'];
        
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

addNotCompletedTask()