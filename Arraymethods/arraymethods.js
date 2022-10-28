// Array methods. 

let arr1 = [1,2,3,4,5];
let arr2 = ["A","B","C","D","E"];
// console.log(arr1, arr2);

//1.=========================
// let result = arr1.toString(); // converts an array to a string of comma seprated values.
// console.log(result);

//2.=========================
// let result = arr2.join("-"); // joins the elements of an array by a separator.
// console.log(typeof result, result);

//3.=========================
// let resultpop = arr2.pop(); // popouts the last value of an array and also returns the popped value modifies the original array.
// console.log(arr2);
// console.log(result);

//4.=========================
// let result = arr2.push("F"); // Adds a new element at the end of the array.
// console.log(arr2);
// console.log(result);

//5.=========================
// let result = arr2.shift(); // Removes first element and returns it, modifies the original array.
// console.log(arr2);
// console.log(result);
// console.log(arr2.length);

//6.=========================
// let result = arr2.unshift("Z"); // Adds element to the begining returns new array length.
// console.log(arr2);
// console.log(arr2.length);

//7.=========================
// let result = arr2.concat(arr1); // Used to joint arrays to given array, returns a new array does not change existing arrays.
// console.log(result);
// console.log(result.length);

//8.=========================
// let result = arr2.fill("A"); // The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
// console.log(result);
// console.log(result.length);

//9.=========================
// let result = arr2.includes("A"); // The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// console.log(result);

//10.=========================
// let months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb'); //Add and/or removes the items of an array, splice can be used to add new items in an array 
// // inserts at index 1
// console.log(months);
// console.log(typeof months);

//11.=========================
// let months = ['Jan', 'March', 'April', 'June'];
// console.log(months.slice(0,-2)); // slices out a piece from an array and creates a new array.
// console.log(typeof months,months);

//12.=========================
// let months = ['Jan', 'March', 'April', 'June'];
// console.log(months.reverse()); // Reverse the elements in the source array.
// console.log(typeof months);


//13.=========================
// var arr3 = [1, 2, 3, 4, 5, 6, 7];
// var mappedArray = arr3.map(function(items,index){
//     return (items + 2);
// });
// console.log(mappedArray);

// 14.=========================
// var arr3 = [1, 2, 3, 4, 5, 6, 7];
// var forEachedArray = arr3.forEach(function(items){
//     // return items < 9;
//     console.log(items < 9);
// });

   // using forEach method --
//    const fruits = ['apple', 'banana', 'cherry', 'mango', 'dragonrruit', 'watermelon'] 
//    fruits.forEach(myFunction)

// function myFunction(item, index, arr) {

//     // adding strings to the array elements
//     arr[index] = 'This is fresh' +" " + item + " " + 'you can have it :)';
// }

// console.log(fruits);

// 15.=========================
//  var arr3 = [1, 2, 3, 4, 5, 6, 7,8,9,10,12,13,18];
//  var filteredArray = arr3.filter(function(myfilteredElements){
//  return myfilteredElements >= 7;
//  });
//  console.log(filteredArray);

// 16.=========================
//  var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 18];
//  var everyArray = arr3.every(function(myElements){
//  return myElements > 0;
//  });
//  console.log(everyArray);


// 17.=========================
//  var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 18];
//  var someArray = arr3.some(function(myElements){
//  return myElements > 2;
//  });
//  console.log(someArray);


// 18.=========================
//  var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 18];
//  var reduceArray = arr3.reduce(function(total, current){
//  return total + current;
// });
// console.log(reduceArray); 


// 19.=========================
//  var arr3 = [10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
//  var sortArray = arr3.sort(function(a,b ){
//  return a-b;
// });
// console.log(sortArray); 


// 20.=========================
const shapes = ["sqaure", "rectangle", "circle", "trangle", "diamond"];
//   //returns the element if it finds the given argument is true.
// console.log(shapes.find(function(items){
//     return items === "diamond";
//  }));


// some
// console.log(shapes.some(function(abc){
//  return abc === "trangle"
// }))

const products = ["Apple", "samsung","realme", "woodland","Nike","Apple","samsung",
"realme","realme", "woodland","realme", "woodland","Nike","Apple"];

// console.log(products.filter(function(item){
//  return item ==="Apple" || item ==="woodland" || item ==="samsung";
// }))
// console.log(products.map(function(item){
//     return item.slice(0, 3) +"...";
// }))
// console.log(products.forEach(function(item){
//     return console.log(item.slice(0, 3) +"...");
// })
// );
// console.log(products)
