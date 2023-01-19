//Apply, call, bind in js

//problem statement

// let userDetalis = {
//     name: 'Akhib',
//     age:23,
//     Designation: 'Software Developer',
//     printDetails:function(){
//         console.log(this.name);
//     }
// }

// userDetalis.printDetails()


// let userDetalis2 = {
//     name: 'Shaikh Akhib',
//     age:24,
//     Designation: 'Software Developer',
// }
// // fuction borrowing
// userDetalis.printDetails.call(userDetalis2)


// let userDetalis = {
//     name: 'Akhib',
//     age:23,
//     Designation: 'Software Developer',

// }

// let printDetails = function(state,country){
//     console.log(this.name+" "+state+" "+ country);
// }

// printDetails.call(userDetalis, "Nanded", "India")


// let userDetalis2 = {
//     name: 'Shaikh Akhib',
//     age:24,
//     Designation: 'Software Developer',
// }
// // fuction borrowing
// printDetails.call(userDetalis2, "Nanded", "India")


let userDetalis = {
    name: 'Akhib',
    age:23,
    Designation: 'Software Developer',

}

let printDetails = function(state,country){
    console.log(`${this.name} ${state} ${country}`);
}
// fuction borrowing
printDetails.call(userDetalis, "Nanded", "India")


let userDetalis2 = {
    name: 'Shaikh Akhib',
    age:24,
    Designation: 'Software Developer',
}
//Apply
printDetails.apply(userDetalis2, ["Nanded", "India"])

//Bind  besically we can create copy of our fuction and invoke it later.
let newFun = printDetails.bind(userDetalis, "Nanded", "India")

newFun();