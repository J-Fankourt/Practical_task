

const PromptSync = require("prompt-sync")();

let a = Number(PromptSync("Введите значение числа a: "));
let b = Number(PromptSync("Введите значение числа b: "));
let result = Math.sqrt(a * b);

console.log(result);

