// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter04.md#multiplication-table

const number = Number(prompt('Enter number to see multiplication table for this number:'));

for (let i = 1; i <= number; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}
