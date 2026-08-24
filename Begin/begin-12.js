const PromptSync = require("prompt-sync")();

let value_a = Number(PromptSync("Введите значение: "));
let value_b = Number(PromptSync("Введите значение: "));

console.log("Рассчитаем гипотенузу");

let value_c = Math.hypot(value_a, value_b); 
console.log(value_c);

console.log("Рассчитаем периметр");

console.log(value_a + value_b + value_c); 


