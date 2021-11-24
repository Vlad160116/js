// --створити масив з:
// - з 5 числових значень
// let num =[1, 2, 3, 4, 5];
// console.log(num);
// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// console.log(num[3]);
// console.log(num[4]);

// - з 5 стічкових значень
let strings =['a', 'b', 'c', 'd', 'e'];
console.log(strings);
console.log(strings[0]);
console.log(strings[1]);
console.log(strings[2]);
console.log(strings[3]);
console.log(strings[4]);


// - з 5 значень стрічкового, числового та булевого типу
let array = [1, 'okten', true, 14, false];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);


// - та вивести його в консоль


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let key = [];
    key[0] = 14;
    key[1] = 'kjhk';
    key[2] = true;
    key[3] = false;
    key[4] = 38;


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>`);
    document.write('Ukraine');
    document.write(`</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>`);
    document.write('Я підтягнувся ' + i + ' раз');
    document.write(`</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=0;
while(i < 20) {
    i++;
    document.write('<h1>hero</h1>');
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 0;
while(i < 20) {
    i++;
    document.write(`<h1>chair ${i}</h1>`);
    console.log('chair ' + i);
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let nums =[1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];
    // for (let i = 0; i < nums.length; i++) {
    //     const num = nums[i];
    //     console.log(num);
    // }
let i = 0;
while (i < nums.length) {
    i++;
    console.log(nums[i]);
}


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strings = ['1', '2', '3', '4', '5' ,'6', '7', '8', '9', '10'];
for (let i = 0; i < strings.length; i++) {
    const string = strings[i];
    console.log(string);
}
let i = 0;
while (i < strings.length) {
    i++;
    console.log(strings[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrayCase = ['sdasd', 2, 'asdasd', true, '5' ,6, 'sdad', false, 9, 'asdfrsrfs'];
for (let i = 0; i < arrayCase.length; i++) {
    const array = arrayCase[i];
    console.log(array);
}
let i = 0;
while (i < arrayCase.length) {
    i++;
    console.log(arrayCase[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mix = ['qwe', 2, 'sdd', true, 5 ,6, 'eyt', false, 9, 'hdf'];
for (let i = 0; i < mix.length; i++) {
    const mixItem = mix[i];
    if(mixItem === 'boolean'){
        console.log(mixItem);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let mix = ['qwe', 2, 'sdd', true, 5 ,6, 'eyt', false, 9, 'hdf'];
for (let i = 0; i < mix.length; i++) {
    const mixItem = mix[i];
    if(mixItem === 'number'){
        console.log(mixItem);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let mix = ['qwe', 2, 'sdd', true, 5 ,6, 'eyt', false, 9, 'hdf'];
for (let i = 0; i < mix.length; i++) {
    const mixItem = mix[i];
    if(mixItem === 'string'){
        console.log(mixItem);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let mix = ['qwe', 2, 'sdd', true, 5 ,6, 'eyt', false, 9, 'hdf'];
for (let i = 0; i < mix.length; i++) {
    const mixItem = mix[i];
    if(mixItem === 'string'){
        console.log(mixItem);
    }
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
        console.log(i);
    }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i+=2) {
    console.log(i);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i+=2) {
    console.log(i);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i < 100; i+=2) {
    console.log(i);
}