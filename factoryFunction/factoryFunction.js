// function getCircleArea(radius) {
//     return {
//         pi: 3.14,
//         radius, //radius: radius,
//         getArea() { // getArea: function
//             return this.pi * radius * radius;
//         }
//     };
// };
// const circleFirst = getCircleArea(10);
// console.log(circleFirst.getArea());


// 2.================


function personDetails(firstName, lastName, email, phone){
    return{
        firstName,
        lastName,
        email,
        phone,
    }
}
console.log(personDetails('john','wick','stark010402@gmail.com', '7414946200'))
// returns
// firstname
// lastname
// email
// phone