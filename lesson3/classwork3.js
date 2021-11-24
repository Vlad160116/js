// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let number = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

// i = 0;
// while (i < number.length) {
//     i++;
//     console.log(number[i]);
// }

// вивести масив в зворотньому порядку.

// let i = number.length -1;
// while (i >=0) {
//     console.log(number[i]);
//     i--;
// }

// 2. перебрати його циклом for

// for (i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }

// вивести масив в зворотньому порядку.

// for (let i = number.length - 1; i >= 0; i--) {
//     const item = number[i];
//     console.log(item);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// i = 0;
// while (i < number.length) {
//     if (i % 2 === 0) {
//         console.log(number[i]);
//     }
//     i++;
// }

// вивести масив в зворотньому порядку.

// let i = number.length -1;
// while (i >=0) {
//     if (i % 2 === 0) {
//         console.log(number[i]);
//     }
//     i--;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (i = 0; i < number.length; i++) {
//     if (i % 2 === 0) {
//         console.log(number[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// i = 0;
// while (i < number.length) {
//     const item = number[i];
//     if (item % 2 === 0) {
//         console.log(item);
//     }
//     i++;
// }

// вивести масив в зворотньому порядку.

// let i = number.length -1;
// while (i >=0) {
//     if (item % 2 === 0) {
//         console.log(number[i]);
//     }
//     i--;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (i = 0; i < number.length; i++) {
//     const item = number[i];
//     if (item % 2 === 0) {
//         console.log(item);
//     }
// }

// вивести масив в зворотньому порядку.

// for (i = number.length - 1; i >= 0; i--) {
//     const item = number[i];
//     if (item % 2 === 0) {
//         console.log(item);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let num of numbers) {
//     if (num % 3 === 0) {
//         num = 'okten';
//     }
// }

// 8. вивести масив в зворотньому порядку.

// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = numbers.length - 1; i >= 0; i--) {
//     const number = numbers[i];
//     console.log(number);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)