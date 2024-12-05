// variables
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector("#filter-todo");

// Add Event Listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(event) {
    // prevent the form from submitting
    event.preventDefault();

    // prevent adding an empty input
    if (todoInput.value === "") return;

    // a container for todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Append todoDiv to todo list
    todoList.appendChild(todoDiv);

    // create an Li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // create a complete button
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
    checkBtn.classList.add("complete-btn");
    todoDiv.appendChild(checkBtn);

    // create a trash button
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = `<i class="fas fa-xmark"></i>`;
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);

    todoInput.value = "";
}

function deleteTodo(e) {
    const item = e.target;
    // delete todo logic
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// filter function
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;

            case "done":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

            case "undone":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}