import './style.css'

alert('1sfsds sdf234545')
console.log('пишет в косоль')

let name = 'John'
let admin = name
alert(admin)

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