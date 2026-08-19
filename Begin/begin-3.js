const PromptSync = require("prompt-sync")();

let a = Number(PromptSync("Введите сторону прямоугольника: "));
let b = Number(PromptSync("Введите сторону прямоугольника: "));

console.log(a * b);

console.log((a + b) * 2);
