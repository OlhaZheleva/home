'use strict';

// HW2. По темі ‘Об'єкти в деталях’ + функції
// Домашнє завдання по темі "Об'єкти"


// Задача про обчислення різниці часу

function durationBetweenDates (start, end, dimension ) {
    switch(dimension) {
        case ('days'): 
            return Math.abs(Date.parse(end) - Date.parse(start))/(24 * 60 * 60 * 1000) + " " + 'days' ;
        case ('hours'): 
            return Math.abs(Date.parse(end) - Date.parse(start))/(60 * 60 * 1000) + " " + 'hours' ;
        case ('minutes'): 
            return Math.abs(Date.parse(end) - Date.parse(start))/(60 * 1000) + " " + 'minutes' ; 
        case ('seconds'): 
        return Math.abs(Date.parse(end) - Date.parse(start))/1000 + " " + 'seconds' ; 
    }
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); // поверне '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // поверне '362 days'


// Задача про перетворення об'єкту

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584', 
};

function optimizer(data) {

    return Object.fromEntries(
        Object.entries(data)
        .map(([ key, val ]) => [ key.toLowerCase(), (Number(val).toFixed(2))])
      );
    };


let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData)  // {apples: '23.40', bananas: '48.00', oranges: '48.76'}



// Задача про рекурсію та ітерацію

// — функцію яка рекурсивно буде знаходити суму всіх непарних додатних чисел до якогось числа.

function recursiveOddSumTo(number) {
    if (number === 1) return 1;

    if (number % 2 !== 0) {
      return (number) + recursiveOddSumTo(number - 1);
    }
    else {
       return recursiveOddSumTo(number - 1);;
    }
    
};

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25



// — функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатних чисел до якогось числа.

function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if( i % 2 !== 0)   {
            sum += i;
        }     
      }
    return sum;
};

console.log(iterativeOddSumTo(1)) // 1       
console.log(iterativeOddSumTo(10)) // 25