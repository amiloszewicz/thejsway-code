// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter10.md#arrays-sum

const numbers = [1, 5, 10, 15];
// Compute the sum of array elements
const sum = numbers.reduce((acc, value) => acc + value, 0);

console.log(numbers); // [1, 5, 10, 15] (no change)
console.log(sum);     // 31


const arrays = [[1, 4], [11], [3, 5, 7]];

const arraysSum = arrays => {
    return allNum = arrays.reduce((a, b) => a.concat(b)).reduce((acc, value) => acc + value, 0);
}

console.log(arraysSum(arrays)); // Should show 31
