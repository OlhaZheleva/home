'use strict';


// 1. Задача на селектори:

//     - для елементу з текстом 'Навігація по DOM дереву'
let navigation = document.getElementById('headerTwo');
console.log(navigation);


//     - для першого елементу <section>

let firstChildSection = document.body.querySelector('.firstSection').firstElementChild;
console.log(firstChildSection);



// //     - для елементу списку з текстом 'Пункт 5'
// тут довелось шукати рішення в інеті, сама не зразу зрозуміла 

let text = 'Пункт 5';
let points = document.getElementsByTagName('li');

for (let i = 0; i < points.length; i++) {
    if (points[i].textContent == text) {
      console.log(points[i]);
      break;
    }
  }


//     - для елементу з класом 'hatredLevelBlock'
const hatredLevelBlock = document.querySelector('.hatredLevelBlock');
console.log(hatredLevelBlock);

//     Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою 
// різних методів) і має бути присвоєний якійсь змінній.
//     Приклад:
//  let spanWithClass = document.querySelector('.hatredLevelCounter');