// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** FUNCTIONS **********
const addItem = (e) => {
  e.preventDefault();
  //  console.log(grocery.value);
  const value = grocery.value;
  const id = new Date().getTime().toString();
  console.log(id);
  if (value && !editFlag) {
    const element = document.createElement("article");
    //add class
    element.classList.add("grocery-item");
    // add id
    const attr = document.createAttribute(`data-id`);
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
    <button type="button" class="edit-btn">
    <i class="fas fa-edit"></i>
    </button>
    <button type="button" class="delete-btn">
    <i class="fas fa-trash"></i>
    </button>
    </div>`;
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click',deleteItem)
    editBtn.addEventListener('click',editItem)
    //append child
    list.appendChild(element);
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add(`show-container`);
    //add to local storage
    addToLocalStorage(id, value);
    //set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    displayAlert(`please enter value`, "danger");
  }
};
// display alert
const displayAlert = (text, action) => {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
};
//set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
// clear items
const clearItems = () =>{
   const items = document.querySelectorAll('.grocery-item')

   if(items.length > 0) {
     items.forEach((item) =>{
      list.removeChild(item);
     })
   }
   container.classList.remove('show-container')
   displayAlert("empty list", 'success')
   setBackToDefault()
   //localStorage remove
}
const deleteItem = ()=>{
   console.log('item deleted');
}
const editItem = ()=>{
   console.log('item Edited');
}
// function addItem(e) {
//     e.preventDefault()
//     console.log(grocery.value);
// }
// ****** EVENT LISTENERS **********
//submit form
form.addEventListener("submit", addItem);
//clear item
clearBtn.addEventListener('click',clearItems);
// delete item

// ****** LOCAL STORAGE **********
function addToLocalStorage() {
  console.log("added to local storage");
}
// ****** SETUP ITEMS **********
