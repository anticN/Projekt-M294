const { all } = require("express/lib/application");
/*
const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
}
*/

document.addEventListener("DOMContentLoaded", () => {
    const allTasks = document.getElementById("allTasks");
    const newTask = document.getElementById("newTask");
    const updateTask = document.getElementById("updateTask");
    const delTask = document.getElementById("delTask");

    allTasks.addEventListener("click", () => {
        alert("Test")
    });
    
    newTask.addEventListener("click", () => {
        alert("Test2")
    });

    updateTask.addEventListener("click", () => {
        alert("Tes3")
    })

    delTask.addEventListener("click", () => {
        alert("Test4")
    })


})