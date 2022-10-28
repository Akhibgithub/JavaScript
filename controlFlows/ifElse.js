
// if(false) {
//     console.log('Hello World');
// } else if(false) {
//     console.log('Whatsup?');
// } else if(true){
//     console.log("good evening")
// }
//  else {
//     console.log("codition don't match")
// }


//================


// const time = 13;

// if (time >= 6 && time < 12){
//     console.log('Good Morning')
// } else if (time === 12){
//     console.log('Good Noon')
// } else if (time > 12 && time < 18){
//     console.log('Good Afternoon')
// } else if (time >= 18 && time <= 20){
//     console.log('Good Evening')
// } else {
//     console.log('Good Night')
// }



//================


// let time = 13;
// if (time >= 6 && time < 12){
// console.log("Good Morning")
// }
// else if (time === 12){
//     console.log("Good Noon")
// }
// else if (time > 12 && time <18){
//     console.log("Good Afternoon")
// }
// else if (time >= 18 && time <= 20){
//     console.log("Good Evening")
// }
// else{
//     console.log("Good Night")
// }



//===============


// const role = ""

// if (role === "Admin"){
//     console.log("Hello Admin")
// }
// else if (role === "Owner"){
//     console.log("Hello Owner")
// }
// else if (role === "Guest"){
//     console.log("Hello Guest")
// }
// else {
//     console.log("Get the hell out of here!")
// }


//=============

// const name = "daemon"

// if (name === 'daemon'){
//     console.log('Hello Deamon')
// }
// else if (name === 'Aegon'){
//     console.log('Hello Aegon')
// }
// else if (name === 'Aemond'){
//     console.log('Hello Aemond')
// }
// else {
//     console.log('you are not a targaryan')
// }


// =============
//Switch Case ---

// const cast = 'Aegon'

// switch(cast){
//  case "Daemon":
//  console.log('Hello Daemon')
//  break;

// case "Aegon":
//     console.log('Hello Aegon')
//     break;

//     case "Aemond":
//         console.log('Hello Aemond')
//         default:
//             console.log('you are not from house targaryen')
// }


//===========


// const role = ''

// switch(role){
//     case 'admin':
//     console.log('Hello admin')
//     break;

// }


//============
// 1.for 

// for(let i = 0; i < 10; i++ ){ // --- ; because it is statement 
//  console.log(i)
// }


// let str = ''
// for(let i = 1; i < 11; i++ ){
//  console.log("2 * "+ i + " = " + 2 * i )
// }


// for(let i = 10; i > 0; i--) {
//     console.log(i)
// }

// const letters = ["A","B","C","D","E","F","G"]
// for(let i = 0; i < letters.length; i++) {
//     console.log(letters[i])
// }


// const letters = ["A","B","C","D","E","F","G"]
// for(let i = 0; i < letters.length; i++) {
//     if (i % 2 == 0)
//     console.log(letters[i])
// }


// const letters = ["A","B","C","D","E","F","G"]
// for(let i = 0; i < letters.length; i++) {
//     if (i % 2 !== 0)
//     console.log(letters[i])
// }

// let str = "."
// for (let i = 0; i < 10; i++){
// str = str +"."
// console.log(str)
// }




// const cast = 'Daenerys Targaryen';

// switch(cast){
//     case 'jon snow':
//     console.log('Hello jon snow')
//     break;

//     case 'Daenerys Targaryen':
//         console.log('Hello Daenerys Targaryen')
//         break;

//         case 'Sansa Stark':
//         console.log('Hello Sansa Stark')

//         case 'Cersei Lannister':
//             console.log('Hello Cersei Lannister')
//             break;

//             case 'Arya Stark':
//             console.log('Hello Arya Stark')

//             default:
//                 console.log("'You are not a GOT character get the hell out!'")
// }

// if (true) {
//     console.log('If executed');
// } else {
//     console.log('else executed');
// }


// const time = 5;
// time > 6 ? console.log('If executed') : console.log('else executed');



const HodDragons = ['Meleys', 'Vhagar', 'Craxes', 'sunfyre', 'balerian']
const Dragons = 'balerian'
      
Dragons === ('Meleys', 'Vhagar', 'Craxes', 'sunfyre', 'balerian') ? console.log('You are a HOD universe Dragon.') : console.log('Get the hell out of here.')


// Fuction Declaration and Function Expression

// function getname(fullname) { // this has been declare
//     return fullname;
// }

// const getFullName = ()=>{};  // a function stored in a variable it is basically an Expression.