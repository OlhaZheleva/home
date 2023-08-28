"use strict";

// Задача 1 - ‘FizzBuzz’ через ітератор та генератор

// через ітератор

// let range = {
//   from: 1,
//   to: 100,
// };

// range[Symbol.iterator] = function () {
//   let current = this.from;
//   let last = this.to;

//   return {
//     next() {
//       if (current > last) {
//         return { done: true };
//       } else if (current % 15 === 0) {
//         current++; 
//         return { done: false, value: 'FizzBuzz' };
//       } else if ( current % 3 === 0) {
//         current++; 
//         return { done: false, value: 'Fizz' };
//       } else if (current % 5 === 0) {
//         current++; 
//         return { done: false, value:'Buzz' };
//       } else  {
//         return { done: false, value: current++ };
//       }
//     },
//   };
// };

// for (let num of range) {
//   console.log(num);
// }

// через генератор

// через генератор

function* limitationGenerator(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 15 === 0) {
      yield "FizzBuzz";
    } else if (i % 3 === 0) {
      yield "Fizz";
    } else if (i % 5 === 0) {
      yield "Buzz";
    } else {
      yield i;
    }
  }
}

function useGenerator(min, max) {
  const numberCount = limitationGenerator(min, max);

  for (let i = min; i <= max; i++) {
    console.log(numberCount.next().value);
  }
}

useGenerator(1, 100);

// Задача 2 - генератор випадкових чисел
// Напишіть функцію-генератор, яка генерує випадкові числа.
// Функція приймає параметрами максимальне значення рандомного числа та
// кількість рандомних чисел які функція повертає:

// function* generateRandomNumbers(max, quantity) {

//   for (let i = 0; i < quantity; i++) {
//     yield Math.floor(Math.random() * max);
//   }

// }

// for (const num of generateRandomNumbers(8, 17)) {
//   console.log(num);
// }
