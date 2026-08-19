const PromptSync = require("prompt-sync")();

let a = Number(PromptSync("Введите значение длины ребра куба: "));

console.log(a * a * a);

console.log(a * a * 6);
