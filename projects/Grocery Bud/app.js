// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** FUNCTIONS **********
const addItem = (e) =>{
 e.preventDefault()
//  console.log(grocery.value);

}
// function addItem(e) {
//     e.preventDefault()
//     console.log(grocery.value);
// }
// ****** EVENT LISTENERS **********
//submit form
form.addEventListener('submit', addItem);


// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
