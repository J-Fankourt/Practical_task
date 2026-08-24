const PromptSync = require("prompt-sync")();

let radius_R1 = Number(PromptSync("Введите значение: "));
let radius_R2 = Number(PromptSync("Введите значение: "));
const π = 3.14;

console.log("Рассчитаем площадь S1");
let S1 = π * (radius_R1 * radius_R1); 
console.log(S1);

console.log("Рассчитаем площадь S2");
let S2 = π * (radius_R2 * radius_R2);
console.log(S2);

console.log("Рассчитаем площадь S3");
let S3 = (S1 - S2);
console.log(S3);
