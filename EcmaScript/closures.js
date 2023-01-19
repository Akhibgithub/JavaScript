//Closure

const sum = (a) =>{
console.log(`Live people ${a}`);
const c = 4;
  return (b) =>{
    return a+b+c
  };
}
const store = sum(200)
console.log(store(5));


// const sum = (a,b,c) =>{

//   return {
//     getSumTwo:()=>{
//         return a+b
//     },
//     getSumThree:()=>{
//         return a+b+c
//     }
//   }
// }
// const store = sum(3,4,5)
// console.log(store.getSumTwo());
// console.log(store.getSumThree());


// const store1 = sum(6,8,9)
// console.log(store1.getSumTwo());
// console.log(store1.getSumThree());
