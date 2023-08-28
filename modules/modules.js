"use strict";


/**
 * Оголошуємо змінні з HTML елементами
 */
const imogeInput = document.querySelector('.imoge-input');
const setBlock = document.querySelector('.set');
const arrayBlock = document.querySelector('.array');

/**
 * Створюємо слухачі на необхідні нам події
 */
document.addEventListener('DOMContentLoaded', renderTasks);
clearBtn.addEventListener('click', clearAllTasks);
taskList.addEventListener('click', clearSingleTask);
form.addEventListener('submit', createImoge);



/**
 * Беремо окремий imoge та 
 * @param {Event} event 
 */
function createImoge(event) {
    // Блокуємо дефолтний сабміт форми
    event.preventDefault();
    // Виходимо з функції якщо в полі немає тексту і видаляймо непотрібні пробіли до і після тексту
    if (imogeInput.value.trim() === '') {
        return;
    }

    // Додаємо отриманий символ в set
    createSingleTaskElement(imogeInput.value);
    // Додаємо отриманий символ в array
    storeTaskInLocalStorage(imogeInput.value);
    // Очищуємо поле після додавання в списоки
    imogeInput.value = '';
}