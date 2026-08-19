const PromptSync = require("prompt-sync")();

let d = Number(PromptSync("Введите значение окружности: "));
const π = 3.14;

console.log(d * π);
