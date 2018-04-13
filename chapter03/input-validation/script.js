// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter04.md#input-validation

const gameInstruction = 'Enter number higher than 100 to end the game';
let number = Number(prompt(gameInstruction));

while (number <= 100) {
    number = Number(prompt(gameInstruction));
}
