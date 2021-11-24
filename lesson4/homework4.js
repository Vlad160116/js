// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    function rectangle (a, b) {
       let square = a * b;
       return square;
    }
    let result = rectangle (4, 5);
    console.log(result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
    function circle (π, r) {
        let square = π * (r * r);
        return square;
    }
    let result = circle (3.14,2);
    console.log(result);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
    function cylinder (π, r, h) {
        let square = 2 * π * r * h;
        return square;
    }
    let result = cylinder (3.14,2, 5);
    console.log(result);


// - створити функцію яка приймає масив та виводить кожен його елемент
//     1 спосіб
    let okten = [1, 2, false, 'okten', 5, true];
    console.log(okten);
    console.log(okten[0]);
    console.log(okten[1]);
    console.log(okten[2]);
    console.log(okten[3]);
    console.log(okten[4]);
    console.log(okten[5]);

//     2 спосіб
let array = [1, 2, false, 'okten', 5, true];
function dataArray (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
dataArray(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//     1 спосіб
    function dataP (text) {
        document.write(`<p>${text}</p>`)
        document.write(`<p>${text}</p> <hr>`)
        // document.write(`<hr>`)

//     2 спосіб
        for (let i = 0; i <= 10; i++) {
           document.write(`<p>${text} - ${i}</p>`)
        }
    }
    dataP('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
    function list(argument) {
        document.write(`<ul>`);
        document.write(`<li>${argument}</li>`);
        document.write(`<li>${argument}</li>`);
        document.write(`<li>${argument}</li>`);
        document.write(`</ul>`);
    }
    list('item');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
    function listCreator(number) {
        document.write(`<ul>`);
        for (let i = 0; i < number; i++) {
            document.write(`<li>list</li>`);
        }
        document.write(`</ul>`);
    }
    listCreator(3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
    let array = [true,'saffsdxc', 2021, false];
    function primitives (array){
        document.write(`<ol>`)
            for (let i = 0; i < array.length; i++) {
                document.write(`<li>${array[i]}</li>`);
            }
        document.write(`</ol>`)
    }
    primitives(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
    let newArray = [{id: 1, name: 'Vlad', age: 25}, {id: 2, name: 'Valeriy', age: 30}, {id: 3, name: 'Ivan', age: 45}];
    function object(array) {
        for (const element of array) {
            document.write(`<div>${element.id}.${element.name} - ${element.age}</div>`);
            // або
            console.log(element.id + '.' + element.name +  '-' + element.age);
        }
    }
    object(newArray);






