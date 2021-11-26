// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//     let minNum = (min1, min2, min3) => {
//         if (min1 < min2 && min1 < min3){
//             console.log(min1);
//         } else if (min2 < min1 && min2 < min3) {
//             console.log(min2);
//         } else {
//             console.log(min3);
//         }
//     }
//     minNum (15, 36, 53);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//     let maxNum = (max1, max2, max3) => {
//         if (max1 > max2 && max1 > max3){
//             console.log(max1);
//         } else if (max2 > max1 && max2 > max3) {
//             console.log(max2);
//         } else {
//             console.log(max3);
//         }
//     }
//     maxNum (95, 76, 14);

// - створити функцію яка повертає найбільше число з масиву
//     let maxArray = [465,3,14,45,16,50,14467,27,6943]
//     let arrayMax = (array) => {
//         let max = array[0];
//         for (const element of array) {
//             if(element > max){
//                 max = element;
//             }
//         }
//         return max;
//     }
//     document.write(`<h2>Найбільший елемент масиву: ${arrayMax(maxArray)}</h2>`)

// - створити функцію яка повертає найменьше число з масиву
//     let minArray = [465,3,14,45,16,50,14467,27,6943]
//     let arrayMin = (array) => {
//         let min = array[0];
//         for (const element of array) {
//             if(element < min){
//                 min = element;
//             }
//         }
//         return min;
//     }
//     document.write(`<h2>Найменший елемент масиву: ${arrayMin(minArray)}</h2>`)

    // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
    //     1 спосіб
    // let sumArray = [1,2,10]; // 13
    // let sumElement = (array) => {
    //     let sum = 0;
    //     for (const arrayElement of array) {
    //         sum = arrayElement + sum;
    //     }
    //     return sum;
    // }
    // console.log(sumElement(sumArray));

    //     2 спосіб
    // let calculate = (a, b, c) => {
    //     let result = a + b + c;
    //     return result;
    // }
    // let result = calculate (1, 2, 10);
    // console.log(result);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//     let middleArray = [50,20,80]; // 150/3=50
//     let middle = (array) => {
//         let sum = 0;
//         for (const arrayElement of array) {
//             sum = arrayElement + sum;
//         }
//         return sum/array.length;
//     }
//     console.log(middle(middleArray));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//     let minMax = (...arg) => {
//         let min = arg[0];
//         let max = arg[0];
//         for (const element of arg) {
//             if (element > max) {
//                 max = element;
//             }
//             if (element < min) {
//                 min = element;
//             }
//         }
//         console.log("max ", max);
//         return min;
//     }
//     document.write('Мінімальне число з введених: ' + minMax(142, 36, 11, 456, 1232))


// - створити функцію яка заповнює масив рандомними числами
//     let randomizer = (number) => {
//         let result = Math.round(Math.random() * 45);
//         return result;
//     }
//     let limit = 45;
//     let x1 = randomizer(45);
//     console.log(x1);
//     // або через цикл
//     for (let i = 0; i < 45; i++) {
//         document.write(`<div>${randomizer(45)}</div>`);
//         // aбо
//         console.log(randomizer(45));
//     }

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     let randomizer = (number) => {
//         let result = Math.round(Math.random() * 100);
//         return result;
//     }
//     let limit = 100;
//     let x1 = randomizer(100);
//     console.log(x1);
//     // або через цикл
//     for (let i = 0; i < 100; i++) {
//         document.write(`<div>${randomizer(100)}</div>`);
//         aбо
//         console.log(randomizer(100));
//     }

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//     let randomizer = (limit) => {
//         let result = Math.round(Math.random() * limit);
//         return result;
//     }
//     let x1 = randomizer(476);
//     console.log(x1);
//
//     for (let i = 0; i < 476; i++) {
//         document.write(`<div>${randomizer(476)}</div>`);
//     }

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//     let number = [1, 2, 3];
//     let reverse = (num) => {
//         let newNum = [];
//         for (let i = num.length - 1, ri = 0; i >= 0; i--, ri++) {
//             newNum[ri] = num[i];
//         }
//         return newNum;
//     }
//     console.log(reverse(number))


