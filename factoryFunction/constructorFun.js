// if  a function is part of an object we call that function a method.
// This keyword: The object that executing the current function.
// if an fuction is an method in an object it references that object it self.

function GetCircleArea(radius) {
    this.pi = 3.14;
    this.radius = radius;
    this.getArea = function (){
        return this.pi * this.radius * this.radius;
    }
    return this; //{} 
}
const firstCircle = new GetCircleArea(5);
console.log(firstCircle);
console.log(firstCircle.getArea());
console.log(new String("hello")); //string constructor method.


// 2.======================

function PersonDetails(firstName, lastName, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
}
const firstPerson = console.log(new PersonDetails('Jon','Snow','stark010402@gmail.com','7414946200'))


// ===============

// rest operator : It can handle multiple arguments.

// const getTotal = (numOne, numTwo, ...rest) => {
//     const restSum = rest.reduce((acc, cur) => acc + cur)
//     return numOne + numTwo + restSum;
// };
// console.log(getTotal(10, 100, 456, 1235, 232434, 353));


//===========

// spread Operator : 

// for array
// const nums = [10, 100, 456, 1235, 232, 245]
// const letters = ['a','b','c']
// console.log([...nums,20,200,400, ...letters])

//for object
// if you take existing it will going to overwrite it.

// const personFname = {fname: "John"}
// const personLname = {lname: "Wick"}
// const personDataTwo = {...personFname, ...personLname, phone: 7414946200,fname: "Daemon"}
// console.log(personDataTwo);                                              



// const int = [1,2,3,4,5,6,7,8,9]
// const aplh = ['a','b','c','d']
// const addTwoArr = [...aplh,20,40,...int]
// console.log(addTwoArr);



// const carPrice = {STO: '6mil',SVJ: '3mil',aventador: '4mil'}
// const carPriceTwo = {pagani: '8mil',maclaren: '4mil',Cup: '2mil'}
// const carTotal = {...carPrice,BMW:'2mil',...carPriceTwo}
// console.log(carTotal);



// const gotCast = {fst:'Daenerys Targaryen',sec:'Arya Stark',trd:'Jon Snow',fur: 'Khal Drogo'}
// const hodCast = {fst1:'Viserys Targaryen',sec2:'Daemon Targaryen',trd3:'Rhaenyra Targaryen',fur4: 'Aegon Targaryen'}
// const both = {...gotCast, ...hodCast}
// console.log(both);