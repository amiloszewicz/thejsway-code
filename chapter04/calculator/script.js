// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter05.md#calculator

const calculate = (num1, symbol, num2) => {
    return eval(num1 + symbol + num2);
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
