

const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
}

const createButton = (id) => {
    const buttId = id
    const button = document.createElement("button")
    button.innerText = "Delete"
    button.className = "delButton"
    return button
}

function deleteTask(id){
    fetch(`http://localhost:3000/task/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
    location.reload();
}

function renderTasks(tasks){
    //const delButton = document.getElementsByClassName("delButton");
    const tableBody = document.querySelector("tbody")
    tasks.forEach((task) => {
        const tableRow = document.createElement("tr") 
        tableRow.append(createCell(task.id), createCell(task.title), createCell(task.completed));
        const delButton = createButton(task.id)
        tableRow.append(delButton)
        tableBody.appendChild(tableRow)
        delButton.addEventListener("click", () => {
            deleteTask(task.id)
            indexTasks()
        })
    })
}


function indexTasks() {
    fetch("http://localhost:3000/tasks")
    .then((response) => { 
        return response.json()})
    .then((data) => {
        return renderTasks(data)})
}




document.addEventListener("DOMContentLoaded", () => {
    const allTasks = document.getElementById("allTasks");
    const newTask = document.getElementById("newTask");
    const updateTask = document.getElementById("updateTask");
     
    

    allTasks.addEventListener("click", () => {
        indexTasks();
    });

    updateTask.addEventListener("click", () => {
        alert("Tes3")
    })
})
