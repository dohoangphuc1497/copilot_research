const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
console.log("todoList", todoList);
function addTodo() {
    console.log("Add todo...");
    const inputValue = todoInput.value.trim();
    const isValid = /^[a-zA-Z\s]+$/.test(inputValue); // Regex to allow only letters and spaces

    if (inputValue === "") {
        console.log("Fill the todo");
        alert("Please enter a todo.");
    } else if (!isValid) {
        console.log("Invalid input");
        alert("Please enter only letters.");
    } else {
        const todoItem = document.createElement("li");
        todoItem.textContent = inputValue;
        todoList.appendChild(todoItem);
        localStorage.setItem("todo", inputValue);
        todoInput.value = "";
    }
}