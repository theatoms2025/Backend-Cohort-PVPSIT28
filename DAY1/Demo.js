// // console.log(process)
// // console.log(process.version)
// // console.log(process.platform)
// let [a, b] = process.argv.slice(2);
// console.log(a + b);
// console.log(Number(a) + Number(b));


let {sum, mul, PI } = require('./Math');
console.log(sum(10, 20));
console.log(mul(10, 20));