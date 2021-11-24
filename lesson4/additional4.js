// - створити функцію, яка якщо приймає один аргумент, просто виводить його, якщо два аргументи - складає або конкатенує їх між собою.

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
//     результат
//     [3,5,7,9]

    let array1  = [1,2,3,4];
    let array2 = [2,3,4,5];
    let array3 = (((array1[0]) + (array2[0])));
    let array3_1 = (((array1[1]) + (array2[1])));
    let array3_2 = (((array1[2]) + (array2[2])));
    let array3_3 = (((array1[3]) + (array2[3])));
    console.log(array3 + ',' + array3_1 + ',' + array3_2 + ',' + array3_3);
    або
    document.write(`${array3}, ${array3_1}, ${array3_2}, ${array3_3}`);
    // [3,5,7,9];


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
    let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]  // [ name, age, model ]
    function object(arr) {
        for (const element of arr) {
            document.write(`<div>name, age, model</div>`);
            // або
            console.log('name' + ', ' + 'age' + ', ' + 'model');
        }
    }
    object(arr);

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

    let newArray = [{name: 'Dima', age: 13}, {model: 'Camry'}]  // [ Dima, 13, Camry ]
    function object(array) {
        for (const element of array) {
            document.write(`<div>Dima, 13, Camry</div>`);
            // або
            console.log('Dima' + ', ' + '13' + ', ' + 'Camry');
        }
    }
    object(newArray);










