
// function parentFuntion() {
//     const age = 40;
//     function childFunction() {   // have lexical scope.
//         console.log(age);
//         let weight = 55;
//     }
//     return childFunction();
// }
// parentFuntion()

const str = "don't part with your illusions When the are gone you may still exist but you have ceased to live.";

const arr = str.split(" ");
const uprCase = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
const newStr = uprCase.join(" ");
console.log(newStr);


