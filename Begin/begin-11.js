const PromptSync = require("prompt-sync")();

let x = Math.abs(Number(PromptSync("Введите значение числа x: ")));
let y = Math.abs(Number(PromptSync("Введите значение числа y: ")));

console.log(x + y);

console.log(x - y);

console.log(x * y);

console.log(x / y);