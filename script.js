function weather() {
    let monthNumber = Number(prompt('Введите номер месяца (от 1 до 12) и вы узнаете к какому времени года он относится'));
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
        default: console.log('Такого месяца не существует');
            break;
    }
}


function fruits() { 
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    alert(arr);
    let answer1 = prompt('Чему был равен первый');
    let answer2 = prompt('Чему был равен последний элемент массива');

    if (answer1.toLowerCase() === arr[0].toLowerCase() && answer2.toLowerCase() === arr[arr.length - 1].toLowerCase()) {
        alert('Молодец! Ты угадал оба слова');
    } else if (answer1.toLowerCase() === arr[0].toLowerCase() || answer2.toLowerCase() === arr[arr.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else { 
        alert('Неверно');
    }
}
