// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.email = email,
//     this.phone = phone
// }

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//     function  User (id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
//     let user1 = new User(1,'Valya', 'Tymoshenko', '123@ukr.net', 0634567890);
//     console.log(user1);

    // let Arr = [
    //     new User(1,'Valya', 'Tymoshenko', '123@ukr.net', 0634567890),
    //     new User(2,'Vlad', 'Tymoshenko', '123@ukr.net', 0632357643),
    //     new User(3,'Olya', 'Tkachenko', '123@ukr.net', 0673984956),
    //     new User(4,'Vasya', 'Stepanenko', '123@ukr.net', 0636345698),
    //     new User(5,'Vova', 'Tkachenko', '123@ukr.net', 0637542658),
    //     new User(6,'Katya', 'Stepanenko', '123@ukr.net', 0632356789),
    //     new User(7,'Stepan', 'Petrenko', '123@ukr.net', 0632431567),
    //     new User(8,'Sergiy', 'Stepanenko', '123@ukr.net', 0637549700),
    //     new User(9,'Ira', 'Petrenko', '123@ukr.net', 0634567893),
    //     new User(10,'Ann', 'Tkachenko', '123@ukr.net', 0632457945)
    // ];
    // console.log(Arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

    // let filter1 = Arr.filter((item) => {
    //     if (item.id % 2 === 0) {
    //         return item;
    //     }
    // });
    // console.log(filter1);

    // або

    // let filter2 = Arr.filter((item) => {
    //     return (item.id % 2 === 0);
    // });
    // console.log(filter2);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

    // let arr = Arr.sort ((a1, a2) => {
    //     return a1.id - a2.id;
    // })
    // console.log(arr)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

    // class Client {
    //     constructor(id, name, surname, email, phone, order) {
    //         this.id = id;
    //         this.name = name;
    //         this.surname = surname;
    //         this.email = email;
    //         this.phone = phone;
    //         this.phone = order;
    //     }
    // }

// створити пустий масив, наповнити його 10 об'єктами Client

    // let Arr1 = [
    //     new Client (1,'Valya', 'Tymoshenko', '123@ukr.net', 0634567890),
    //     new Client (2,'Vlad', 'Tymoshenko', '123@ukr.net', 0632357643),
    //     new Client (3,'Olya', 'Tkachenko', '123@ukr.net', 0673984956),
    //     new Client (4,'Vasya', 'Stepanenko', '123@ukr.net', 0636345698),
    //     new Client (5,'Vova', 'Tkachenko', '123@ukr.net', 0637542658),
    //     new Client (6,'Katya', 'Stepanenko', '123@ukr.net', 0632356789),
    //     new Client (7,'Stepan', 'Petrenko', '123@ukr.net', 0632431567),
    //     new Client (8,'Sergiy', 'Stepanenko', '123@ukr.net', 0637549700),
    //     new Client (9,'Ira', 'Petrenko', '123@ukr.net', 0634567893),
    //     new Client (10,'Ann', 'Tkachenko', '123@ukr.net', 0632457945)
    // ];
    // console.log(Arr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

    // let arr = Arr1.sort ((a1, a2) => {
    //     return a1.id - a2.id;
    // })
    // console.log(arr)
