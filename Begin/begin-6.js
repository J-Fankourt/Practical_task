const PromptSync = require("prompt-sync")();

let a = Number(PromptSync("Введите значение длины ребра: "));
let b = Number(PromptSync("Введите значение длины ребра: "));
let c = Number(PromptSync("Введите значение длины ребра: "));

console.log(a * b * c);

console.log(2 * (a * b + b * c + a * c));
