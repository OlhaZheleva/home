'use strict';

// HW1. По темі ‘Масиви в деталях’

// Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

initials = userNames.map((userName) => 
    userName.split(" ").map((w) => w.substring(0,1).toUpperCase() + '.' ).join(' ')
).sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


// Задача на розворот числа:

const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = currentMaxValue.toString().split("").reverse().join('');
reverseMaxValue = Number(reverseMaxValue);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'



// Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

productOfArray = resultsArray.flat(Infinity).reduce(function(a, b) {
    return a * b;
});

console.log(productOfArray); // 24
