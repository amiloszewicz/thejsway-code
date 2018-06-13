// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter07.md#array-maximum

const values = [3, 11, 7, 2, 9, 10];
let maxValue = 0;

for (const value of values) {
    if (value > maxValue) {
        maxValue = value;
    }
}

alert(maxValue);
