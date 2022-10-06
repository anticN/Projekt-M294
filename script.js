

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
    const delTask = document.getElementById("delTask"); 
    const newTaskForm = document.getElementById("newTaskForm")
    const newTaskInput = document.getElementById("newTaskInput"); 
    

    allTasks.addEventListener("click", () => {
        indexTasks();
    });

    updateTask.addEventListener("click", () => {
        alert("Tes3")
    })

    delTask.addEventListener("click", () => {
        alert("Test4")
    })
        
})
