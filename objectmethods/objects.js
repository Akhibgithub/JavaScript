
const letters = ['A','B','C','D','E','F']
// console.log(letters[letters.length -1])
letters[1] = 'b';
console.log(letters)



const person = {name : 'Daemon', age : 45, address : 'dragonStone',}

// console.log(person.address) // ---> dot notation

// console.log(person['address']) // ---> bracket notation

person.contact = 7414946200 ;
person.name = 'Aegon' ; // if you reasingning any key in object that is gonna overwrite.
person['country'] = 'westarose';
console.log(person);