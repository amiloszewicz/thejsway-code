// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter02.md#from-celsius-to-fahrenheit-degrees

const celsiusTemp = Number(prompt('Write Celsius tempeture:'));
const fahrenheitTemp = celsiusTemp * 1.8 + 32;

alert(`${celsiusTemp} C(elsius) is ${fahrenheitTemp} F(ahrenheit)`);
