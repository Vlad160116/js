// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка обчислює та повертає площу прямокутника висотою
    // 1 спосіб
    // let rectangle = (a, b) =>  a * b;
    // console.log(rectangle(4, 5));

    // 2 спосіб
    // let rectangle = (a, b, action) => {
    //     if ( action === '*') {
    //         return a * b;
    //     } else {
    //         return 0;
    //     }
    // }
    // console.log(rectangle(4, 5, '*'));

// - створити функцію яка обчислює та повертає площу кола

    // let circle = (π, r) =>  π * (r * r);
    // console.log(circle(3.14, 2));

// - створити функцію яка обчислює та повертає площу циліндру
//
//     let cylinder = (π, r, h) =>  2 * π * r * h;
//     console.log(cylinder(3.14,2, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
//     let array = [1, 2, false, 'okten', 5, true];
//
//     let dataArray = (array) => {
//         for (let i = 0; i < array.length; i++) {
//             console.log(array[i])
//         }
//     }
//     dataArray(array)


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
//     let dataP = (text) => {
//         document.write(`<p>${text}</p>`)
//         document.write(`<p>${text}</p> <hr>`)
//         document.write(`<hr>`)
//         for (let i = 0; i <= 10; i++) {
//             document.write(`<p>${text} - ${i}</p>`)
//         }
//     }
//     dataP('text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//     let list = (argument) => {
//         document.write(`<ul>`);
//         document.write(`<li>${argument}</li>`);
//         document.write(`<li>${argument}</li>`);
//         document.write(`<li>${argument}</li>`);
//         document.write(`</ul>`);
//     }
//     list('item');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//      let listCreator = (number) => {
//         document.write(`<ul>`);
//         for (let i = 0; i < number; i++) {
//             document.write(`<li>list</li>`);
//         }
//         document.write(`</ul>`);
//     }
//     listCreator(3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//     let array = [true,'saffsdxc', 2021, false];
//     let primitives = (array) => {
//         document.write(`<ol>`)
//         for (let i = 0; i < array.length; i++) {
//             document.write(`<li>${array[i]}</li>`);
//         }
//         document.write(`</ol>`)
//     }
//     primitives(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
    let newArray = [{id: 1, name: 'Vlad', age: 25}, {id: 2, name: 'Valeriy', age: 30}, {id: 3, name: 'Ivan', age: 45}];
    let object = (array) => {
        for (const element of array) {
            document.write(`<div>${element.id}.${element.name} - ${element.age}</div>`);
            // або
            console.log(element.id + '.' + element.name +  '-' + element.age);
        }
    }
    object(newArray);