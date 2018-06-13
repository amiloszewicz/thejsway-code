// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter06.md#modeling-a-dog

const dog = {
    name: 'Doggy',
    species: 'Wow',
    size: 70,
    bark() {
        return 'Wow, so much bark';
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
