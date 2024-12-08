let todoList = document.getElementById('todo-list');
let todoInput = document.getElementById('todo-input');
let addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => add())
todoInput.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        if (event.key === "Enter") {
            add();
        }
    }
})

let completedBTN = document.createElement("button");

function add() {
    if (todoInput.value.trim() === "") {
        alert("pagl kuch likh TOH!!!!!!, This is not END SEM");
        return;
    }

    let newTodo = document.createElement("li");
    newTodo.classList.add("task-text");

  
    let taskDescription = document.createElement("p");
    taskDescription.classList.add("task-description");
    taskDescription.textContent = todoInput.value;
    newTodo.appendChild(taskDescription);

    let taskButtons = document.createElement("div");
    taskButtons.classList.add("task-buttons");

    let completedBTN = document.createElement("button");
    completedBTN.classList.add("completed-btn");
    completedBTN.innerText = "\u2713"; 
    taskButtons.appendChild(completedBTN);
    completedBTN.addEventListener('click', () => {
        newTodo.classList.toggle('completed');
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "\u00D7"; 
    taskButtons.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => remove());
    function remove() {
        deleteBtn.parentElement.parentElement.remove();
    }

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "\u270E"; 
    taskButtons.appendChild(editBtn);
    editBtn.addEventListener('click', () => edit());
    function edit() {
        let editInput = document.createElement("input");
        editInput.classList.add("edit-Input");
        let submitInput = document.createElement("button");
        submitInput.classList.add("submit-Input");
    
        submitInput.innerText = "Submit";
        newTodo.appendChild(editInput);
        newTodo.appendChild(submitInput);
    
        editInput.value = taskDescription.textContent;
        submitInput.addEventListener('click', () => {
            taskDescription.textContent = editInput.value;
            newTodo.removeChild(editInput);
            newTodo.removeChild(submitInput);
            newTodo.appendChild(taskButtons);
        });
    }
    

    newTodo.appendChild(taskButtons);
    todoList.appendChild(newTodo);
}


