'use strict';


const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

initials = userNames.map((userName) => 
    userName.split(" ").map((w) => w.substring(0,1).toUpperCase() + '.' ).join(' ')
).sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]



const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = currentMaxValue.toString().split("").reverse().join('');
reverseMaxValue = Number(reverseMaxValue);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'




const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

productOfArray = 1;

for (let i = 0; i < resultsArray.flat(2).length; i++) {
    productOfArray = productOfArray * resultsArray.flat(2) [i];
}

console.log(productOfArray); // 24
