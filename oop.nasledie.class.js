
// class Userf {
//     constructor(name, age, admin=false, moder = true) {
//         this.name = name;
//         this.age = age;
//         this.admin = admin;
//         this.moder = moder;
//     }
//     myInfo(){
//         console.log(`Меня зовут ${this.name}, мне ${this.age} лет`);
//         if (this.admin == true) {
//             console.log("\nЯ админ")
//         }
//     }
// }

// class Moderator extends Userf {
//     constructor(name, age, admin=false, moder = true) {
//         super(name, age, admin)

//         this.moder = moder;
//     }
//     addPost() {
//         console.log('New Post')
//     }
//     myInfo() {
//         super.myInfo();
//         console.log('Я модератор')
//     }
// }

// let moderator1 = new Moderator('Ivas', 123, true)
// let user1 = new Userf('Petr', 33)
// let user2 = new Userf('Ivan', 23, true)
// let user3 = new Userf('Vanea', 43)


class People {
    /**
     * класс человек
     * @param {String} fio по формату "Ф И О"
     * @param {String} bday по формату "12.12.2012"
     * @param {String} numbers в формате "8765456789"
     * @param {Number} room номер комнаты
     */
    constructor(fio, bday, numbers, room) {
        let name = fio.toLowerCase().split(" ");
        this.name = {};
        this.name.f = name[0][0].toUpperCase() + name[0].slice(1);
        this.name.i = name[1][0].toUpperCase() + name[1].slice(1);
        this.name.o = name[2][0].toUpperCase() + name[2].slice(1);

        let date = bday.split('.');
        this.date = {};
        this.date.d = +date[0];
        this.date.m = +date[1];
        this.date.y = +date[2];

        this.numbers = numbers.split(', ');

        this.room = +room
        
    }
    static month = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    /**
     * вывести ФИО
     * @return {String} Строка формата ФИО
     */

    getFio() {
        return `${this.name.f} ${this.name.i} ${this.name.o}`
    }
    /**
     * вывести дату рождения.
     * в месяце мы указываем класс и статический метод и указываем индекс месяца -1(так как начинается с 0)
     * @return 
     */
    getBday() {
        return `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
    }
    /**
     * выводим номера телефона или только первый номер
     * @param {Boolean} allNumbers если true - все номера, если false - только первый
     * @return {String} в формате строки "8926123456"
     */

    getNumber(allNumbers) {
        if(this.numbers.length == 0 || this.numbers[0].length == 0) {
            return 'номер не введен'
        }
        if(allNumbers) {
            return this.numbers.join(", ")
        } else {
            return this.numbers[0]
        }
    }
}

let people1 = new People("МаткоВский анатолий ИгоревиЧ", "14.09.1991", "8786545678, 877", 345 );

let fioUser = people1.getFio();
console.log(fioUser);

let bdayUser = people1.getBday()
console.log(bdayUser)

let phoneUser = people1.getNumber()
console.log(phoneUser)