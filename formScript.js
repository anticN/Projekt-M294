document.addEventListener("DOMContentLoaded", () => {
    const newTaskForm = document.getElementById("newTaskForm")
    const newTaskInput = document.getElementById("newTaskInput");

    newTaskForm.addEventListener("submit", (event) => {
        //event.preventDefault()
        const data = {"title": newTaskInput.value};

        fetch("http://localhost:3000/tasks", {
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
    
            //const result = document.createElement("h3")
            const newDiv = document.createElement("div");
            const result = document.createTextNode(`Die Aufgabe ${newTaskInput.value} wurde hinzugefügt.`)
            newDiv.appendChild(result);
            //result.innerText = `Die Aufgabe ${newTaskInput.value} wurde hinzugefügt`
            //return result
            
            
        });
})