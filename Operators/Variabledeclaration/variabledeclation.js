// Variable Declaration
var firstVariable = 10;
console.log("first--->", firstVariable);

var secondVariable = 50;
console.log("second--->", secondVariable);

var result = firstVariable + secondVariable;
console.log("result--->", result);

// Variable redeclare
var one = "Akhib";
// console.log(one)

// Re-assign
one = {name: "xyz", age: 20 };
console.log(one)

// ============ How to check the type of variable in js =============
var a = 10;
var b = "ten";
var c = false;
var d = [1,2,3,4,5];
var e = { id: 1, add:"NY"};
var f = null;
var g = undefined;
var h = function() {};

console.log("type==>",typeof h)
