// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter04.md#neither-yes-nor-no

const gameInstruction = 'Write \'yes\' or \'no\' to end the game ;)';
let word = prompt(gameInstruction);

while (word != 'yes' && word != 'no') {
    word = prompt(gameInstruction);
}

alert("Yes! We made it!"); 
