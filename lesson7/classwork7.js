// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car (model, factory, year, maxSpeed,volumeEngine) {
//     this.model = model,
//         this.factory = factory,
//         this.year = year,
//         this.maxSpeed = maxSpeed,
//         this.volumeEngine = volumeEngine,
//
//     // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     this.drive = function() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
//     this.info = function() {
//         for (const key in this)
//             if (typeof this[key] !== 'function')
//                 console.log(`${key} - ${this[key]}`)
//     }
//
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
//     let increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed
//     }
//
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//
//
//     // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
// let car1 = new Car ('BMW', 'Germany', 2021, 300, 5.0)
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.drive();
// car1.changeYear(2015)
// car1.info();
// car1.addDriver('Vlad')
// console.log(car1)

// - (Те саме, тільки через клас)

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// class Car {
//     constructor(model, factory, year, maxSpeed,volumeEngine) {
//             this.model = model,
//             this.factory = factory,
//             this.year = year,
//             this.maxSpeed = maxSpeed,
//             this.volumeEngine = volumeEngine
//     }
//
//         // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//         drive () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         }
//
//     // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
//     info () {
//         for (const key in this)
//             console.log(`${key} - ${this[key]}`)
//     }
//
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed
//     }
//
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//
//     changeYear (newValue) {
//         this.year = newValue
//     }
//
//
//     // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//     addDriver (driver) {
//         this.driver = driver
//     }
// }
// let car2 = new Car ('BMW', 'Germany', 2021, 300, 5.0);
// console.log(car2);
// car2.drive();
// car2.info();
// car2.increaseMaxSpeed(20);
// car2.drive();
// car2.changeYear(2015)
// car2.info();
// car2.addDriver('Vlad')
// console.log(car2)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// через клас

// class Cinderella {
//     constructor(mame, age, footsize) {
//         this.mame = mame;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }

// через функцію

// function Cinderella (mame, age, footsize) {
//     this.mame = mame;
//     this.age = age;
//     this.footsize = footsize;
// }

// let arrCinderella = [
//     new Cinderella('Ariel', 20, 35),
//     new Cinderella('Ariel', 20, 35),
//     new Cinderella('Ariel', 20, 35),
//     new Cinderella('Ariel', 20, 35),
//     new Cinderella('Ariel', 20, 35),
//     new Cinderella('Ariel', 20, 35),
//     new Cinderella('Ariel', 20, 35),
//     new Cinderella('Ariel', 20, 35),
//     new Cinderella('Ariel', 20, 35),
//     new Cinderella('Ariel', 20, 35),
// ]
// console.log(arrCinderella)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Prince {
//     constructor(mame, age, foundShoe) {
//         this.mame = mame;
//         this.age = age;
//         this.foundShoe = foundShoe;
//     }
// }

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// const newCouple = (cinderella, prince) => {
//     for (const item of cinderella) {
//         if (item.footsize === prince.findShose) {
//             return `your cinderella: ${item.name}`
//         }
//     }
// };
// console.log(newCouple(cinderella, prince));
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// let princess = cinderella.find((item) => item.footsize === prince.findShose);
// console.log(princess);

