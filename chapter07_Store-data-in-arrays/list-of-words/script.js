// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter07.md#list-of-words

alert('Enter words, if you will write "stop" I will show you all previus words c:');

const instruction = 'Enter new word:';
let words = [];
let newWord = prompt(instruction);
words.push(newWord);

while (newWord != 'stop') {
    newWord = prompt(instruction);
    words.push(newWord);
}

words.pop()
alert(words);
