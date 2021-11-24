// document.write('<div>item1</div>');
// document.write('<div>item2</div>');
// document.write('<div>item3</div>');
// document.write('<div>item4</div>');
// document.write('<div>item5</div>');

// а може бути і 100 елементів щоб не писати 100 шт використовують цикли:(for i while)
// ітерація - перелічення елементів масиву, перевірка цих елементів
// i++ - збільшення одиниці 'і' на 1
// Открити швидко цикли:
// array.fori + кнопка(TAB)
// itar + кнопка(TAB)
// ritar + кнопка(TAB) - цикл в зворотньому напрямку


// for (let i=0; i <=365; i++) {
//     document.write(`<div>day ${i}</div>`);
// }
//              0  1  2
// let array = [11,22,33]
// for (let i=1; i < 3; i++) {
//     document.write(array[1]); // i = 0
// }

//            0          1       2      3       4       5       6
// let array = ['page1','page2','page3','page4','page5','page6','page7'];
// for (let i = 0; i < array.length; i++) {
//     document.write(`<div>${array[i]}</div>`);
// }

// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }




// for (let i = 1; i <= 100; i++) {
//     console.log('я присів ' + i + ' раз'); // - конкатенація
//     console.log(`я присів ${i} раз`); // - інтерполяція
// }


//            0          1       2      3       4       5       6
let pages = ['page1','page2','page3','page4','page5','page6','page7'];
for (let p of pages) {
    document.write(`<div>`);
    document.write(p);
    document.write(`</div>`);
}

// let user1 = {name: 'vasya', age: 31, status: false,};
// for(let field in user1) {
//     console.log(field, user1[field]);
// }
// let users = [
//     {name: 'vasya', age: 31, status: false,},
//     {name: 'vasya', age: 31, status: false,},
//     {name: 'vasya', age: 31, status: false,}
// ];
//
// for (const user of users) {
//     console.log('========')
//     for (const key in user) {
//         console.log(key,user[key]);
//     }
//     console.log('========')
// }







