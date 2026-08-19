const PromptSync = require("prompt-sync")();

let a = Number(PromptSync("Введите значение числа: "));
let b = Number(PromptSync("Введите значение числа: "));

console.log((a + b) / 2);
