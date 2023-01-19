let sum = 0;

const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
const memoize = (fun) => {
  let chache = {};
  return (...args) => {
    let n = args[0];
    if (n in chache) {
      console.log("chache block");
      return chache[n];
    } else {
      console.log("calaculating");
      let result = fun(n);
      chache[n] = result;
      return result;
    }
  };
};
console.time();
const efficient = memoize(calc);
console.log(efficient(5));
console.timeEnd();

console.time();
console.log(efficient(5));
console.timeEnd();

// console.time();
// console.log(calc(5));
// console.timeEnd();
