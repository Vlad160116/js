// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world'
// console.log(str.length);

// let str1 = 'lorem ipsum'
// console.log(str1.length);

// let str2 = 'javascript is cool'
// console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello world';
let toUpperCase = str.toUpperCase();
console.log(toUpperCase);

let str = 'lorem ipsum';
let toUpperCase = str.toUpperCase();
console.log(toUpperCase);

let str = 'javascript is cool';
let toUpperCase = str.toUpperCase();
console.log(toUpperCase);


// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str = 'HELLO WORLD';
let toLowerCase = str.toLowerCase();
console.log(toLowerCase);

let str = 'LOREM IPSUM';
let toLowerCase = str.toLowerCase();
console.log(toLowerCase);

let str = 'JAVASCRIPT IS COOL';
let toLowerCase = str.toLowerCase();
console.log(toLowerCase);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let trim = str.trim();
console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.write(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToarray = (str) => {
    return str.split(' ');
}
let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
console.log(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, index) => {
    return str.substr(0, index);
};
let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7));



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str = "HTML JavaScript PHP";
let replace = str.toUpperCase().replaceAll(' ','-')
console.log(replace);
document.write(replace);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let firstUp = (str) => {
    if (str !== 0) return str;
    return str[0].toUpperCase() + str.slice(1)
};
document.write(firstUp('hello okten'));
console.log(firstUp('hello okten'));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
document.write(capitalize('okten hi you are welcome'));
console.log(capitalize('okten hi you are welcome'));

