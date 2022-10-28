// JavaScript Loops

// Loops are handy, if you want to run the same code over and over again, 
// each time with a different value.
// Often this is the case when working with arrays:



// The For Loop -----
// The for statement creates a loop with 3 optional expressions:

// for (expression 1; expression 2; expression 3) {
    // code block to be executed
//   }

// Expression 1 is executed (one time) before the execution of the code block.
// Expression 2 defines the condition for executing the code block.
// Expression 3 is executed (every time) after the code block has been executed.


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]


// for ( let i = 0; i < cars.length; i++){
//  console.log(cars[i])
// }

// let text = ''
// for(i = 0; i <cars.length; i++){
//     text += cars[i]+"  "
// }
// console.log(text)


// ===============

// var havedl = false;
// const age = 17;
// if (age >=18){
//     havedl = true;
//     console.log('You can drive a car')
// }
// else {
//     console.log('Do your studies!')
// }

//===============

// var weekDay = 'sunday';
// if (weekDay === 'sunday'){  //if the if else statement finds an true value it terminates the loop.
//     console.log('if else statement')
// }
// else if (weekDay === 'monday'){
//     console.log('loops and itrations')
// }
// else if (weekDay === 'tuesday'){
//     console.log('let const var')
// }
// else if (weekDay === 'wednsday'){
//     console.log('functions')
// }
// else if (weekDay === 'thuesday' && weekDay ==='friday'){
//     console.log('advace js')
// }
// else{
//     console.log('enjoy your weekend')
// }


var getDay = new Date().getDay();
// console.log(getDay)
switch(getDay){
    case '0':
    console.log('sunday')
    break;
    case '1':
        console.log('monday')
        break;
        case '2':
        console.log('tuesday')
        break;
        case '3':
        console.log('monday')
        break;
        case '4':
        console.log('thuesday')
        break;
        case '5':
        console.log('friday')
        break;
        default:
            console.log('go to hell')

}