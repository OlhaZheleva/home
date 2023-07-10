'use strict';

const btnTurn = document.querySelector('.button');
const theme = document.querySelector('.wrapper'); 
const lastChanchText = document.querySelector('.last-turn');
let lastChanchTime = localStorage.getItem('lastChanch');


// запуск сторінки (перше відкритта або перезавантаження)
if (localStorage.getItem('theme') === 'dark') { // якщо в нас темна тема, а дефолтна світла, то значить і є змінна коли було перемикання теми 
    theme.classList.add('dark');
    btnTurn.innerHTML = 'Turn on'; 
    lastChanchText.innerHTML = `<p>Last turn off: <br> ${lastChanchTime}</p>`;
    btnTurn.classList.add('purple');
};

if (localStorage.getItem('lastChanch') !== null) {
    lastChanchText.innerHTML = `<p>Last turn on: <br> ${lastChanchTime} </p>`; // якщо світла тема, то перевірити чи було перемикання до цього 
} else { 
    lastChanchText.innerHTML = `<p>No action yet</p>`; // при першому відкритті, коли локал чистий
};


btnTurn.addEventListener('click' , function () { 

    theme.classList.toggle('dark');
    btnTurn.classList.toggle('purple');

    if ( theme.classList.contains('dark')) { // якщо тема вже темна, увімкнути світлу тему + змінити кнопку
        btnTurn.innerHTML = 'Turn on';
        window.localStorage.setItem('theme', 'light');

    } else { // якзо тема світла, то увімкнути темну  + зніми стилі кнопки 
        btnTurn.innerHTML = 'Turn off';
        window.localStorage.setItem('theme', 'dark');
    }

    let lastChanchTime = new Date().toLocaleString(); // записати час дії, тобто кліку по кнопці у локал 
    lastChanchText.innerHTML = `<p>Last turn off: <br> ${lastChanchTime}</p>`;
    window.localStorage.setItem('lastChanch', lastChanchTime); 
});


// але мені здається, що тут можна ще переписати до більш локанічної форми 