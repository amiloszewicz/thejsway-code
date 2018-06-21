// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter06.md#modeling-a-circle

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    circumference() {
        return 2 * r;
    },
    area() {
        return 3.14 * r * r;
    }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
