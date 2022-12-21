// Camparison operators returns either true or false.

// checks the value only .
let a = 10
let b = 10
let c = a==b
console.log(c)

// checks eqaul value and type.
let d = 10
let e = '10'
let f = d===e
console.log(f);

//not eqaul to checks only value is eqaul or not.
let g = 20
let h = 30
let i = g != h
console.log(i);

// not eqaul value or not eqaul type.
let j = 20
let k = '20'
let l = j !== k
console.log(l);

// greater than
let m = 10
let n = 20
let o = m > n
console.log(o);

//less than 
let p = 40
let q = 30 
let s = p < q
console.log(s);

//greate than or equal to
let t = 20
let w = 25
let y = t >=w
console.log(y);


//less than or equal to
let z = 20
let aa = 25
let ab = t <=w
console.log(ab);

// ternary operator works as if else checks the condition if it find the condition is true  returns first value either returns second.
let ac = 15
let ad;
 ad = (ac > 10) ? 'Asif badwa hai' : 'false'
console.log(ad);



