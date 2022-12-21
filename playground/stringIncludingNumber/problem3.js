
// const str = "ediug tpircSavaj siht ot emoclew"
// const stringArray = str.split("").reverse().join("")
// console.log(stringArray);


// const words = ["the", "quick", "brown", "for"]
// const str1 = words.map((item) => item.length);
// console.log(str1);

// const arr = [1, 2, 3, 4, 5, 6[4, 5, 6[7, 8, 9[1, 2, 3]]]];
// const arr1 = arr.flat(4);
// console.log(arr1);


// const str3 = ["laptop", "keybord", "mouse", "charger"]
// const arr2 = [50000, 1200, 800, 1800]
// const obj = {}
// str3.forEach((item, index) => (obj[item] = arr2[index]))
// console.log(obj);


const obj1 = {
     name: 'test',
     age: 20,
}
Object.keys(obj1).forEach(function (key) {
     return key = 'something' + delete obj1.age
})
console.log(obj1)
