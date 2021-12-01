// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },


class User1 {
    constructor(name, username, email, suite, city, zipcode, lat, lng ) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
        }
        this.geo = {
            lat: '-37.3159',
            lng: '81.1496'
        }
    }
}
let user = new User1('Leanne Graham', 'Bret', 'Sincere@april.biz',('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', ('-37.3159', '81.1496')));
console.log(user);

//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class User2 {
    constructor(phone, website, catchPhrase, bs) {
        this.phone = phone;
        this.website = website;
        this.company = {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    }
}
let user = new User2('1-770-736-8031 x56442', 'hildegard.org',('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'));
console.log(user);