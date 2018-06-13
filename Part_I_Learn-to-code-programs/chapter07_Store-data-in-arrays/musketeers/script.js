// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter07.md#musketeers

const musketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}

musketeers.push('D\'Artagan');

musketeers.forEach(myMuskeeter => {
    console.log(myMuskeeter);
});

musketeers.splice(2, 1);

for (const myMuskeeter of musketeers) {
    console.log(myMuskeeter);
}
