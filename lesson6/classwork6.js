// // - Дано список імен.
// //     let n1 = 'Harry..Potter'
// // let n2 = 'Ron---Whisley'
// // let n3 = 'Hermione__Granger'
//
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
//
//     let n1 = 'Harry..Potter'
//     let replace = n1.replaceAll('..',' ')
//     console.log(replace);
//
//
//     let n2 = 'Ron---Whisley'
//     let replace2 = n2.replaceAll('---',' ')
//     console.log(replace2);
//
//
//     let n3 = 'Hermione__Granger'
//     let replace3 = n3.replaceAll('__',' ')
//     console.log(replace3);
//
// //     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
//     let random = (length, num) => {
//         let emptyArray = [];
//         for (let i = 0; i < length; i++) {
//             emptyArray.push(Math.floor(Math.random() * num));
//         }
//         return emptyArray;
//     };
//     let result = random(10, 100);
//     console.log(result);
//
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
//     result.sort(( a, b ) =>  a - b);
//     console.log(result)
//     result.sort(( a, b ) =>  b - a);
//     console.log(result)
//
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//
//     let funcFilter = (length, num) => {
//         let emptyArray = [];
//         for (let i = 0; i < length; i++) {
//             emptyArray.push(Math.floor(Math.random() * num));
//         }
//         return emptyArray.filter(value => value % 2 === 0);
//     };
//     console.log(funcFilter(10, 100));
//
// // - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
//     let arrayRandom = (length, num) => {
//         let emptyArray = [];
//         for (let i = 0; i < length; i++) {
//             emptyArray.push(Math.floor(Math.random() * num));
//         }
//         return emptyArray.map(value => value.toString());
//     };
//     console.log(arrayRandom(10, 100));
//
// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// // sortNums('ascending') // [3,11,21]
// // sortNums('descending') // [21,11,3]
//
//     let sortNums = (arr, direction) => {
//     if (direction === 'asc') return arr.sort((a, b) => a - b);
//     if (direction === 'desc') return arr.sort((a, b) => b - a);
// };
// console.log(sortNums([11,21,3], 'asc'));
// console.log(sortNums([11,21,3], 'desc'));
//
// // - є масив
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// // -- відсортувати його за спаданням за monthDuration
//
//     let sort = coursesAndDurationArray.sort((u1, u2) => {
//         return u2.monthDuration - u1.monthDuration;
//     });
//     console.log(sort)
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
//     let filter = coursesAndDurationArray.filter(value => {
//         if (value.monthDuration > 5) {
//             return true;
//         } else {
//             return false;
//         }
//     });
//     console.log(filter);

    // - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
    // document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


    // let stringToarray = (str) => {
    //     return str.split(' ');
    // }
    // let str = 'Каждый охотник желает знать';
    // let arr = stringToarray(str);
    // console.log(arr);

    // ADDITIONAL

    // - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
    //     let str = "Сила тяжести приложена к центру масс тела";
    //     document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
    let str = "Сила тяжести приложена к центру масс тела";
    let replace = str.replaceAll('масс тела',' ')
    console.log(replace)

