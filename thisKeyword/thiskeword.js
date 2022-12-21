// 1. if THIS inside a method in an object.THIS refers to the main object.
// 2. if an key is incerted from outside of an object THIs will refer to the main object.
// 3. if there is an factory fuction THIS will refer to global object in node and in browser
// it will refer window object.

// In JavaScript, the this keyword refers to an object. Which object depends on how this is being
//  invoked (used or called). The this keyword refers to different objects depending on how
// it is used: In an object method, this refers to the object. Alone,
// this refers to the global object.

// const movies = {
//     titles: ['Iron Man', 'Captain America', 'Thor', 'Black Panther'],
//     category: 'Action',
//     getMovies() {
//         const something = this.category 
//         //   const result = this.titles.map(()=>{
//         //     console.log(this.category);
//         //   })
//         const result = this.titles.map((item) => {
//             return `${this.category} - ${item} `
//         })
//         return result;
    // }
// }

//   console.log(movies.getMovies() );
// movies.ratings = function () {
//     console.log(this)
// }
// console.log(movies.ratings())




// function getSometing() {
//  const student = {print: 'Asif', id : '23'}
//     console.log(this.print)
// }
// getSometing()

// 4.bind is an method for refering an existing our decleared object.
// function getData() {
//     console.log(this);
// }
// getData.bind(movies)()


// const HOD = {
//     cast: ['Daemon','Rhaenera','Viserys','Aegon'],
//     category: 'Targaryen',
//     getSurename() {
//         // const some = this
//      const result = this.cast.map((item)=>{
//         return `${this.category} - ${item}`
//      })
//      return result;
//     }
// }
// // console.log(HOD.getSurename());

// function getSomethig() {
//     console.log("---->---->",this)
// }
// getSomethig.bind(HOD)()




