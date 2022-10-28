
const input = document.getElementById("input")
const button = document.getElementById("button")
const todoList = document.getElementById("todoList")
const hthree = document.getElementById("hthree")
input.style.border = "hidden"
input.style.borderRadius = "5px"
input.style.backgroundColor = "gold"
button.style.border = "hidden"
button.style.borderRadius = "5px"
button.style.backgroundColor = "gold"
button.style.color = "gray"
hthree.style.color = "coral"
button.addEventListener("click", function () {
    const newTask = document.createElement("p")
    newTask.innerHTML = input.value;
    todoList.appendChild(newTask)
    input.value = "";
    // console.log(newTask)
    newTask.addEventListener("click",function () {
        newTask.style.textDecoration = "line-through";
        newTask.style.textDecorationColor = "gold";
    });
    newTask.addEventListener("dblclick",function () {
        todoList.removeChild(newTask);
    });
});
