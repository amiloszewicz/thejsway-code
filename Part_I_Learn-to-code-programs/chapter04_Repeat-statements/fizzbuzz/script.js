// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter04.md#fizzbuzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(` FIZZ ${i} is divided by 3 FIZZ`);
    } else if (i % 5 == 0 && !(i % 3 == 0)) {
        console.log(` BUZZ ${i} is divided bu 5 and not by 3 BUZZ`);
    } else {
        console.log(i);
    }
}
