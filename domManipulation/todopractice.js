const input = document.getElementById("input");
const button = document.getElementById("button")
const todoList = document.getElementById("todoList")
let count = 1;

function Addtask() {
    todoList.innerHTML += `${count} ${input.value} <br>`;
    input.value = ""
    count++
}
