"use strict";

// Задача 1 - ‘FizzBuzz’ через ітератор та генератор

// через ітератор
// let range = {
//     from: 1,
//     to: 100,

//     [Symbol.iterator]() {
//       this.current = this.from;
//       return this;
//     },

//     next() {
//       if (this.current <= this.to) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };

//   for (let num of range) {
//     if (num % 15 === 0)  {
//         console.log("FizzBuzz");
//     } else if (num % 3 === 0) {
//         console.log("Fizz");
//     } else if (num % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(num);
//     }
//   };

// через генератор

// function* limitationGenerator(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i;
//   }
// }

// const numberCount = limitationGenerator(1, 100);

// for (let value of numberCount) {
//   if (value % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (value % 3 === 0) {
//     console.log("Fizz");
//   } else if (value % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(value);
//   }
// }

// Задача 2 - генератор випадкових чисел
// Напишіть функцію-генератор, яка генерує випадкові числа.
// Функція приймає параметрами максимальне значення рандомного числа та
// кількість рандомних чисел які функція повертає:


function* generateRandomNumbers (max)  {

  for (let i = 0; i <= max; i++) {
    yield i;
  }

  return console.log (Math.floor(Math.random() * max));
}

// тут виклик та ітерування в циклі



let sequence = generateRandomNumbers(10);

for(let value of sequence) {
  console.log(value); // 1, затем 2
}