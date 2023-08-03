import './style.css'

// alert('1sfsds sdf234545')
// console.log('пишет в косоль')

// let name = 'John'
// let admin = name
// alert(admin)

// Запрашивать данные у пользователя необходимо с помощью prompt(), а выводить результат с помощью alert().
// 1 Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.
// let input = parseInt(prompt('Введите число', '0') as string)
// alert(`Vi vveli ${input}, vo vtoroy stepeni eto ${input*input}`)

// 2 Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.
// let input = parseInt(prompt('Введите первое число', '0') as string)
// let input2 = parseInt(prompt('Введите второе число', '0') as string)
// alert(`Вы ввели ${input} и ${input2} среднее арифметическое это ${(input+input2)/2}`)

// 3
// Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.
// let input = parseInt(prompt("Введите длину стороны квадрата", "0") as string)
// alert(`Вы ввели ${input} Площадь квадрата равна ${input*input}`)

// 4
// Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.
// let input = parseInt(prompt("Введите число, километр", "0") as string)
// alert(`${input} километров - это ${input*0.621371} миль`)

// 5
// Реализуйте калькулятор. Пользователь вводит два числа,
// а программа выводит результаты действий + - * / между
// этими числами.
// let input = parseFloat(prompt("Введите первое число", "0")as string)
// let input2 = parseFloat(prompt("Введите второе число", "0")as string)
// alert(`${input} + ${input2} = ${input+input2}`)
// alert(`${input}*${input2}=${input*input2}`)
// alert(`${input} - ${input2} = ${input-input2}`)

// 6
// Пользователь вводит значения a и b для формулы a * x + b = 0,
// а программа считает и выводит значение x.
// let input = parseInt(prompt("Введите значаение a", "0")as string)
// let input2 = parseInt(prompt("Введите значение b", "0")as string)
// alert(`Если ${input} * х + ${input2} = 0, то х = ${-input2/input}`)

// 7
// Запросите у пользователя текущее время (часы и минуты)
// и выведите, сколько часов и минут осталось до следующего
// дня.
// let input = parseFloat(prompt("Введите время, часы минуты "))





// Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!».
// let input = (prompt("Ваше имя?"))
// alert(`Привет, ${input}`)

// Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите
// в коде как константу.
// let input = parseInt(prompt(`Год вашего рождения?`))
// alert(`Вам ${2023-input} лет`)

// let company = prompt(`Какой официальное название JS?`);
// if (company == `ECMAScript`) {
//     alert(`Верно`);
// } else {
//     alert(`Неправильно`);
// }

// let number = prompt('Введите число', '');

// if (number > 0) {
//   alert( '1' );
// } else if (number < 0) {
//   alert( '-1' );
// } else {
//   alert( '0' );
// }


// let result = (a + b < 4) ? 'Мало': 'Много';

// let message = (login == 'Сотрудник') ? 'Привет':
// (login == 'Директор') ? 'Здравствуйте':
// (login == '') ? 'Нет логина':
// '';

// Запросить у пользователя его возраст и проверить кор-
// ректность введенных данных (0–120 лет).

// let number  = +(prompt(`Введите число`) as string)

// if (number > 0) {
//     if (number < 120) {
//         alert(`ок`);
//     } else {
//         alert(`не ок`);
//     } 
// } else {
//     alert(`не ок`);
// }


// Напишите if..else, соответствующий следующему switch:

let name = prompt(`What browser do you have?`)
if (name == `Edge`) {
    alert(`You've got the Edge!`);
        } else if (name == `Chrome`) {
    alert(`Okay we support these browsers too`);
        } else if (name == `Firefox`) {
    alert(`Okay we support these browsers too`);
        } else if (name == `Safari`) {
    alert(`Okay we support these browsers too`);
        } else if (name == `Opera`) {
    alert(`Okay we support these browsers too`);
    } 



// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }