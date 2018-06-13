// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter08.md#vowel-count

let word = prompt('Write down some random word');
let vowelsCount = 0;
const letters = word.split('');

console.log(`Word length is ${letters.length}`);

for (const letter of letters) {
    if (letter.match(/[aeiouyAEIOUY]/)) {
        vowelsCount++;
    }
    if (letter === letter.toUpperCase()) {
        console.log(`${letter} is in UpperCase`);
    } else {
        console.log(`${letter} is in LowerCase`);
    }
}

console.log(`Number of vowels in word is ${vowelsCount}`);
