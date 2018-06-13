// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter02.md#vat-calculation

const price = Number(prompt('Product price without VAT is:'));
const vatValue = 20.6 / 100;

const priceWithVAt = price * vatValue + price;

alert(`Product price with VAT is ${priceWithVAt}`);
