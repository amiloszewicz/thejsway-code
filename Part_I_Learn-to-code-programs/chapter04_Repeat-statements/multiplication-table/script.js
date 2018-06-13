// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter04.md#multiplication-table

const gameInstruction = 'Enter number to see multiplication table for this number:';
let number = Number(prompt(gameInstruction));

while (number > 9 || number < 2) {
    number = Number(prompt(gameInstruction));
}

for (let i = 1; i <= number; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}
