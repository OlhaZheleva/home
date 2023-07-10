'use strict';


// 1. Задача на селектори:

//     - для елементу з текстом 'Навігація по DOM дереву'
let navigation = document.getElementById('headerTwo');
console.log(navigation);


//     - для першого елементу <section>
let section = document.getElementsByTagName('section')[0];
let firstChildSection = section.firstElementChild;
console.log(firstChildSection);



// //     - для елементу списку з текстом 'Пункт 5'
// тут довелось шукати рішення в інеті, сама не зразу зрозуміла 

let list = document.querySelector('li');
let lastChild = list.closest('ul').lastElementChild;
console.log(lastChild.previousElementSibling);


//     - для елементу з класом 'hatredLevelBlock'
const hatredLevelBlock = document.getElementsByClassName('hatredLevelBlock');
console.log(hatredLevelBlock);

//     Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою 
// різних методів) і має бути присвоєний якійсь змінній.
//     Приклад:
//  let spanWithClass = document.querySelector('.hatredLevelCounter');