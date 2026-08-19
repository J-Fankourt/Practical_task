const PromptSync = require("prompt-sync")();

let x = Number(PromptSync("Введите значение числа x: "));
let y = Number(PromptSync("Введите значение числа y: "));

console.log((x * x) + (y * y));

console.log((x * x) - (y * y));

console.log((x * x) * (y * y));

console.log((x * x) / (y * y));