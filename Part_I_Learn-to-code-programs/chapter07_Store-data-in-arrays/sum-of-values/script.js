// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter07.md#sum-of-values

const values = [3, 11, 7, 2, 9, 10];
let result = 0;

for (const value of values) {
    result += value;
}

console.log(result);
