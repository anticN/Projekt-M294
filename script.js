

const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
}

const createButton = (id) => {
    const buttId = id
    const button = document.createElement("button")
    button.innerText = "Delete";
    button.className = "delButton";
    return button
}

const createChangebox = (id) => {
    const checkId = id 
    const changeBox = document.createElement("input")
    changeBox.type = "checkbox"
    changeBox.className = "changeBox"
    return changeBox
}

const createChange = (id) => {
    const changeTitle = document.createElement("input")
    changeTitle.type = "button"
    changeTitle.innerText = "edit"
    changeTitle.className = "changeTitle"
    return changeTitle
}

function changeTaskstate(checkId){
    //const data = {id: checkId,
      //              completed: true}
    fetch('http://localhost:3000/tasks', {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        }, body: JSON.stringify({id: checkId, completed: true}),
    })
     //.then((response) => response.json())
     .then((data) => {
        console.log("Success:", data)
     })
     .then(window.location.reload())
    }

    function changeTask(checkId){
        const newTitle = prompt("Geben Sie den neuen Namen ein", "Neuer Name")

        fetch('http://localhost:3000/tasks', {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            }, body: JSON.stringify({id: checkId, title: newTitle}),
        })
         //.then((response) => response.json())
         .then((data) => {
            console.log("Success:", data)
         })
         .then(window.location.reload())
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
        const tableRow = document.createElement("tr"); 
        tableRow.append(createCell(task.id), createCell(task.title), createCell(task.completed));
        const delButton = createButton(task.id);
        const changeBox = createChangebox(task.id);
        const changeTitle = createChange(task.id);
        changeBox.checked = task.completed
        tableRow.append(changeBox);

        changeBox.addEventListener("click", () => {
            changeTaskstate(task.id)
            //indexTasks()
        })
        tableRow.append(changeTitle);
        changeTitle.addEventListener("click", () => {
            changeTask(task.id)
        })
        tableRow.append(delButton);
        tableBody.appendChild(tableRow);
        delButton.addEventListener("click", () => {
            deleteTask(task.id)
            indexTasks()
            //const test = document.createElement("h3")
            //test.innerText = `Die Aufgabe ${task.title} wurde gelöscht`

        });
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
    //const allTasks = document.getElementById("allTasks");
    //const newTask = document.getElementById("newTask");
    const updateTask = document.getElementById("updateTask");
     
        indexTasks();

    updateTask.addEventListener("click", () => {
        alert("Tes3")
    })
})
