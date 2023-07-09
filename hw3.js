'use strict';

// 1. Напишіть функцію addThemAll яка буде знаходити суму усіх своїх аргументів незалежно 
// від їх кількості (але без використання вбудованого об'єкту Math).
//  Використайте оператор розширення:

function addThemAll (...args) {
    let sum = 0;
    for (let arg of args) {
      sum += arg
    };
    return sum;
}

console.log(addThemAll(2,4)); // 6*
console.log(addThemAll(1,2,3,4)); // 10*
console.log(addThemAll(5,5,10)); // 20*

// 2. Задача на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b

function multiply(a) {
    return function(b) {
      return a * b;
    };
  };

console.log(multiply(5)(5))	; // 25*
console.log(multiply(2)(-2)); // -4*
console.log(multiply(4)(3))	; // 12*




// 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів.
// Функція буде приймати два аргументи:
// Властивість за якою треба посортуватиОпцію напрямку сортування, зростання чи спадання

const movies = [
  {
  movieName: 'The Thing',
  releaseYear: 1982,
  directedBy: 'Carpenter',
  runningTimeInMinutes: 109,
  },
  {
  movieName: 'Aliens',
  releaseYear: 1986,
  directedBy: 'Cameron',
  runningTimeInMinutes: 137,
  },
  {
  movieName: 'Men in Black',
  releaseYear: 1997,
  directedBy: 'Sonnenfeld',
  runningTimeInMinutes: 98,
  },
  {
  movieName: 'Predator',
  releaseYear: 1987,
  directedBy: 'McTiernan',
  runningTimeInMinutes: 107,
  },
  ];
  
  console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
  console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
  console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*
  

  function byProperty(property, direction) {
    return (a, b) =>
    {
      if (direction === '>') { 
        return a[property] > b[property] ? 1 : -1;
      } else {
        return a[property] < b[property] ? 1 : -1;
      }
    } 
  }



// 4. Напишіть функцію detonatorTimer(delay)

// Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. 
// Напишіть її двома варіантами:

// Використовуючи setInterval
// Використовуючи вкладений setTimeout


// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) { 
    let timer = setInterval(function() {
    if (delay === 0) {
      clearInterval(timer);
      console.log("BOOM!"); 
    } else { 
      console.log(delay--);
    }
  }, 1000); 
}; 

function detonatorTimer(delay) { 
    let timer = setTimeout(function go () {
      
      if (delay === 0) {
        clearTimeout(timer);
        console.log("BOOM!"); 
      } else {
        setTimeout (go, 1000);
        console.log(delay);
        delay--;
      }
      
  }, 1000) }
  
detonatorTimer(3);

// 5. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять. Наприклад:


let cat = {
  name: "Koks",
  age: 5, 
  color: 'grey',
  coatLength: 'long-haired',
  meal: 'tuna',

  care() {
    console.log(`He is ${this.coatLength} and he needs to be brushed every day.`);
  },
  food() { 
    console.log(`Koks loves canned food, but his favorite is ${this.meal}`);
  },
  yearsOld() { 
    console.log(`He is ${this.age} old. It is like ${((this.age - 2 ) * 4) + 9 + 15 }`);
  }
}

cat.care();
cat.yearsOld();
cat.food();



// 6. А тепер зробіть всі свої методи з задачі 5 прив'язаними до контексту свого об'єкту
//  Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:



cat.care();
cat.food();
cat.yearsOld();


let securedSelfIntroduce = cat.care.bind(cat);
let securedSelfPrognose = cat.food.bind(cat);
let securedSelfDescribeMyMood = cat.yearsOld.bind(cat);

setTimeout(securedSelfIntroduce, 1000); 
setTimeout(securedSelfPrognose, 2000); 
setTimeout(securedSelfDescribeMyMood, 3000); 




// 7. Напишіть функцію-декоратор яка вповільнює виконання 
// довільної функції на вказану кількість секунд.


function someFunction (userName) { 
  userName = userName.toUpperCase();
  console.log( `hello, ${userName}`);
}

function slower(func, seconds) {
  return function(...args) {
    console.log('Chill out, you will get you result in 5 seconds');
    setTimeout(() => func.apply(this, args), seconds * 1000);
  };
}

let slowedSomeFunction = slower(someFunction, 5); 
// обгортаєте свою довільну функцію 'someFunction' в декоратор*

slowedSomeFunction('nike') // викликаєте декоратор*

// виведе в консоль "Chill out, you will get you result in 5 seconds"
//...через 5 секунд виведе результат роботи 'someFunction*'
