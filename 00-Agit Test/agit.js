const x = [1,2,3,4];
// const x = [5,7,9];
const y = x.reduce((a, b) => a * b);
const result = y % 2 ? 0 : x.reduce((a, b) => a + b) 
console.log(result)