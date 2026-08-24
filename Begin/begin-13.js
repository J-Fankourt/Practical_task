const PromptSync = require("prompt-sync")();

const radius_R1 = Number(PromptSync("Введите значение: "));
const radius_R2 = Number(PromptSync("Введите значение: "));

console.log("Рассчитаем площадь S1");
const area_S1 = Math.PI * (radius_R1 * radius_R1); 
console.log(area_S1);

console.log("Рассчитаем площадь S2");
const area_S2 = Math.PI * (radius_R2 * radius_R2);
console.log(area_S2);

console.log("Рассчитаем площадь S3");
const area_S3 = (area_S1 - area_S2);
console.log(area_S3);
