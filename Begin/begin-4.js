const PromptSync = require("prompt-sync")();

let d = Number(PromptSync("Введите значение окружности: "));
let π = 3.14;

console.log(d * π);
