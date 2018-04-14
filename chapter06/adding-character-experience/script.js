// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter06.md#adding-character-experience

const aurora = {
    name: 'Aurora',
    health: 150,
    strength: 50,
    xp: 30,

    describe() {
        return `${this.name} has ${this.health} health points and ${this.strength} as strength`;
    }
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());
