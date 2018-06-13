// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter08.md#word-info

let word = prompt('Write down some random word');
const letters = word.split('');

console.log(`Word length is ${letters.length}`);

for (const letter of letters) {
    if (letter === letter.toUpperCase()) {
        console.log(`${letter} is in UpperCase`);
    } else {
        console.log(`${letter} is in LowerCase`);
    }
}
