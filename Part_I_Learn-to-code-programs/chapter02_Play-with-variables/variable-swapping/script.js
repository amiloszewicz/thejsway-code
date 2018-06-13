// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter02.md#variable-swapping

let number1 = 5;
let number2 = 3;

let holderNumber1 = number1;
number1 = number2;
number2 = holderNumber1;

console.log(number1); // Should show 3
console.log(number2); // Should show 5
