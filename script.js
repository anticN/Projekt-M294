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

const createChangebox = (id, title, completed) => {
    const checkId = id 
    const changeBox = document.createElement("input")
    changeBox.type = "checkbox"
    changeBox.className = "changeBox"
    return changeBox
}

const createChange = (id, completed) => {
    const changeTitle = document.createElement("button")
    changeTitle.type = "button"
    changeTitle.innerText = "🖊"
    changeTitle.className = "changeTitle"
    return changeTitle
}

function changeTaskstate(checkId, checkTitle, checkComplete){
    const complete = checkComplete
    fetch('http://127.0.0.1:3000/auth/cookie/tasks', {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-type": "application/json"
        }, body: JSON.stringify({id: checkId, completed: !complete}),
    })
     .then((data) => {
        console.log("Success:", data)
     })
     .then(window.location.reload())
    }

    function changeTask(checkId, checkCompleted){
        const newTitle = prompt("Geben Sie den neuen Namen ein", "Neuer Name")

        fetch('http://127.0.0.1:3000/auth/cookie/tasks', {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-type": "application/json"
            }, body: JSON.stringify({id: checkId, title: newTitle, completed: checkCompleted}),
        })
         .then((data) => {
            console.log("Success:", data)
         })
         .then(window.location.reload())
        }

function deleteTask(id){
    fetch(`http://127.0.0.1:3000/auth/cookie/task/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Content-type": "application/json"
        }
    })
    location.reload();
    alert(`Die Aufgabe wurde gelöscht`)
}

function renderTasks(tasks){
    const tableBody = document.querySelector("tbody")
    tasks.forEach((task) => {
        const tableRow = document.createElement("tr"); 
        tableRow.append(createCell(task.id), createCell(task.title), createCell(task.completed));
        const delButton = createButton(task.id);
        const changeBox = createChangebox(task.id, task.title, task.completed);
        const changeTitle = createChange(task.id, task.completed);
        changeBox.checked = task.completed
        tableRow.append(changeBox);

        changeBox.addEventListener("click", () => {
            changeTaskstate(task.id, task.title, task.completed)
        })
        tableRow.append(changeTitle);
        changeTitle.addEventListener("click", () => {
            changeTask(task.id, task.completed)
        })
        tableRow.append(delButton);
        tableBody.appendChild(tableRow);
        delButton.addEventListener("click", () => {
            deleteTask(task.id)
            indexTasks()
        });
    })
}


function indexTasks() {
    fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
        credentials: "include"
    })
    .then((response) => { 
        return response.json()})
    .then((data) => {
        return renderTasks(data)})
}




document.addEventListener("DOMContentLoaded", () => {
    const updateTask = document.getElementById("updateTask");
        indexTasks();
})
