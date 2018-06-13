// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter03.md#number-comparison

const number1 = Number(prompt('Number 1'));
const number2 = Number(prompt('Number 2'));

if (number1 > number2) {
    alert(`${number1} is greater than ${number2}`);
} else if (number2 > number1) {
    alert(`${number2} is greater than ${number1}`);
} else {
    alert(`${number1} is equal to ${number2}`)
}
