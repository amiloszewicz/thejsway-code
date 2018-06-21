// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter14.md#counting-elements

const countElements = elem => {
    return Array.from(document.querySelectorAll(elem)).length;
};

console.log(countElements("p"));              // Should show 4
console.log(countElements(".adjective"));     // Should show 3
console.log(countElements("p .adjective"));   // Should show 3
console.log(countElements("p > .adjective")); // Should show 2
