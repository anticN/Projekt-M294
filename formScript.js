document.addEventListener("DOMContentLoaded", () => {
    const newTaskForm = document.getElementById("newTaskForm")
    const newTaskInput = document.getElementById("newTaskInput");

    newTaskForm.addEventListener("submit", () => {
        const data = {"title": newTaskInput.value};

        fetch("http://127.0.0.1:3000/auth/cookie/tasks", {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
            console.log("Success:", data);
        })
        alert(`Die Aufgabe ${newTaskInput.value} wurde hinzugefügt`)
            const newDiv = document.createElement("div");
            const result = document.createTextNode(`Die Aufgabe ${newTaskInput.value} wurde hinzugefügt.`)
            newDiv.appendChild(result);            
        });
})