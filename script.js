

const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
}

function renderTasks(tasks){
    const tableBody = document.querySelector("tbody")
    tasks.forEach((task) => {
        const tableRow = document.createElement("tr") 
        tableRow.append(createCell(task.id), createCell(task.title), createCell(task.completed))
        tableBody.appendChild(tableRow)
    })
}


function indexTasks() {
    fetch("127.0.0.1:3000/tasks")
    .then((response) => response.json())
    .then((data) => renderTasks(data))
}



document.addEventListener("DOMContentLoaded", () => {
    const allTasks = document.getElementById("allTasks");
    const newTask = document.getElementById("newTask");
    const updateTask = document.getElementById("updateTask");
    const delTask = document.getElementById("delTask");

    allTasks?.addEventListener("click", () => {
        //event.preventDefault()
        indexTasks()
        window.stop()
    });
    
    
    const newTaskForm = document.getElementById("newTaskForm")
    const newTaskInput = document.getElementById("newTaskInput");  
    

    newTaskForm?.addEventListener("submit", () => {
        //event.preventDefault()
        const data = {"title": newTaskInput.value};

        fetch("http://127.0.0.1:3000/tasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
            console.log("Success:", data);
        })
    })
    

    updateTask.addEventListener("click", () => {
        alert("Tes3")
    })

    delTask.addEventListener("click", () => {
        
    })


})