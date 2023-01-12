//ES6
//Rest and Spread Operator

// exmaple rest 
// the rest operator returns the rest of the argument passed in a function in an array. but on that array we can only use few methods. like join etc.
// combine = rest

// const addNumbers = (...rest) => {
//     return rest.join('')
// }

// const res = addNumbers(1,3,5,2,5,8);
// console.log(res);

// Spread : 
// spread = seprate
// const names = ['Daemon','Viserys','Aegon']

// const getName = (a,b,c)=>{
//   console.log(a,b,c);
// }

// getName(names[0],names[1],names[2])
// getName(...names)
// getName(names)


// const names = ['Daemon','Viserys','Aegon','Rhanera','Alisent']

// const getName = (a,b,c,d,e)=>{
//   console.log(a,b,c,d,e);
// }

// getName(names[0],names[1],names[2])
// getName(...names)
// getName(names)


// With Object ------- rest

const students = {
    name: 'Akhib',
    age: '22',
    hobbies: ['cricket','reading books']
}

// const {hobbies,...rest} = students

// console.log(...hobbies,rest);


// With Object ------- spread

const newStudents = {
    ...students,
    name:'John'
}

console.log(newStudents);