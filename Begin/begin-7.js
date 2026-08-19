const PromptSync = require("prompt-sync")();

let R = Number(PromptSync("Введите значение окружности: "));
const π = 3.14;

console.log(2 * R * π);
console.log(π * (R * R));
