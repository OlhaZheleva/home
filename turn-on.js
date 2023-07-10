'use strict';

const btnTurn = document.querySelector('.button');
const wrapperBackground = document.querySelector('.wrapper'); 
const lastChangeText = document.querySelector('.last-turn');
let lastChangeTime = localStorage.getItem('lastChange');
let theme = localStorage.getItem('theme');



// запуск сторінки (перше відкритта або перезавантаження)

if (theme === 'dark') { // якщо в нас темна тема, а дефолтна світла, то значить і є змінна коли було перемикання теми 
    wrapperBackground.classList.add('dark');
    btnTurn.textContent = 'Turn on'; 
    lastChangeText.innerHTML = `<p>Last turn off: <br> ${lastChangeTime}</p>`;
    btnTurn.classList.add('purple');
};
if (theme !== null) {
    lastChangeText.innerHTML = `<p>Last turn on: <br> ${lastChangeTime} </p>`; // якщо світла тема, то перевірити чи було перемикання до цього 
} else { 
    lastChangeText.innerHTML = `<p>No action yet</p>`; // при першому відкритті, коли локал чистий
};


btnTurn.addEventListener('click' , function () { 

    if ( wrapperBackground.classList.contains('dark')) { // якщо тема вже темна, увімкнути світлу тему + змінити кнопку
        wrapperBackground.classList.remove('dark');
        btnTurn.classList.remove('purple'); 
        btnTurn.textContent = 'Turn off';
        localStorage.setItem('theme', 'light');

    } else { // якщо тема світла, то увімкнути темну  + зніми стилі кнопки 
        wrapperBackground.classList.add('dark');
        btnTurn.classList.add('purple'); 
        btnTurn.textContent = 'Turn on';
        localStorage.setItem('theme', 'dark');
    }

    let lastChangeTime = new Date().toLocaleString(); // записати час дії, тобто кліку по кнопці у локал 
    lastChangeText.innerHTML = `<p>Last turn off: <br> ${lastChangeTime}</p>`;
    localStorage.setItem('lastChange', lastChangeTime); 

});


// але мені здається, що тут можна ще переписати до більш локанічної форми 

// через toggle чогось воно некоректно працює, бо, як я розумію, в нас обовʼязково має бути умова, типу кнопка не просто перемикає, 
// а виходячи з початкової теми або додає клас, або видаляє 