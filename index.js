let arr = [];
for(let i = 30; i > 0; i--){
    if(i % 3 === 0)
    arr.push(i)
}

console.log(arr)

let arr2 = [];
for(let i = 0; i < 25; i++){
    
    arr2.push(Math.pow(i,2))
}

console.log(arr2);

let arr3 = [1,2,3,4,5,3,6,8,5,3,7,9]

arr3.forEach((item) => {
    if(item % 2 === 0) {
        arr2.push(item)
    }
})

function printUserData(name, age) {
    return `Hello! my name is ${name}, i have ${age} years old`
}

let user = printUserData('Vadim', 19);

console.log(user);

let obj={
    name: 'Ivan',
    age: 18,
    sayHello() {
        console.log(`Hello ${this.name}`)
    }
}
obj.sayHello()

let arr4 = [1,3,5,7,13,35,46,57,68,78]

arr.sort((a,b) => {
    return a-b});
console.log(arr);
// numbers hibanachi =---------------=----------------=------------------=----------
//создаем функцию и пеоредаем туда параметром число(сколько будет чисел в массиве)
function numbers(count) {
    //создаем пустой массив - как старт
    let numbersHiba = [];
    //проходим циклом 
    for(let i = 0; i < count; i++){
        //если цикл начинаем с нуля - то первое число в массиве будет 1
        if (i == 0) numbersHiba[i] = 1;
        //если итератор будет 1 - то второе число в массиве - 2 
        else if(i == 1) numbersHiba[i] = 2;
        //каждое следующее число будет суммой предпоследнего элемента массива с последним
        else numbersHiba[i] = numbersHiba[i - 2] + numbersHiba[i - 1]
    }

    return numbersHiba
}
console.log(numbers(30));

//number factorial ------------------=----------------------=--------------
//функция высчитывает факториал переданного числа
function getFactorial(n) {
    //начинаем с единицы
    let fact = 1;
    //если переданное число - 0б возвращаем 1
    if (n == 0) return fact;
    //далее идем циклом от 1 до переданного числа 
    for(let i = 1; i <=n; i++) {
        //и каждуюитерацию умножаем число на следующее
        fact *= i
    }
    return fact
}

let q = getFactorial(9)
console.log(q)
//функция возвращает сумму чисел многозначного числа и его произведение.
let getResult = function(num){
    //переводим в строку параметр num
    num += "";
    //объявляем переменную суммы и произведения
    let sum = 0;
    let mul = 1;
    //циклом проходим по переданному параметру-он уже строка
    for(let i = 0; i < num.length; i++) {
        //проверка на ноль - для произвелдения
        if(num[i]==0) {
            //если есть ноль - то пропускаем
            continue
        }
        //сумму плюсуем итерации и преобразуем в число
        sum += +num[i];
        //в произведение задаем умноженныфе итерации 
        mul *= num[i];
    }
    //возвращаем объектом, сумму и произведение
    return {
        'сумма': sum,
        'Произведение': mul
    }
}

console.log(getResult(4350)); 

//функция возвращает обратное число параметра
function reverse(number) {
    //переводим параметр в строку
    number += '';
    //создаем переменную, куда запишем новое перевернутое значение.
    let reverseNumber = '';
    //циклом проходим по длине строки параметра с конца в начало
    for(let i = number.length - 1; i >= 0; i--) {
        //записываем в переменную элементы с конца в начало и преобразуем в число
        reverseNumber += +number[i]
    }
    return reverseNumber
}

console.log(reverse(3456))

//функция считает четные и нечетные цифры в аргументе
function numbersLights(number) {
    //переводим число в строку
    number += '';
    //создаем 2 перемиенные для наших чисел - чет и нечет
    let count1 = 0;
    let count2 = 0;
    //проходим циклом по длине строки параметра
    for (let i = 0; i < number.length; i++) {
        //проверяем, четное или нет и увеличивает 
        if (number[i] % 2 === 0 ) {
            count1++
        } else {
            count2++
        }
        
    }
    //возвращаем объект с значениями
    return {
        "Четных чисел": count1,
        "НеЧетных чисел": count2,
    }
}

console.log(numbersLights(12))

//функция угадывает случайное число от 0 до 100 / 10 попыток

function getNumber() {
    let randomNum = Math.round(Math.random() * 100);
    for(let i = 1; i <= 10; i++) {
        let result = prompt(`Попытка №${i}. Введите число:`);
        if(result == randomNum) {
            return alert(`Вы угадали число! Это ${randomNum}. Попыток использовано: ${i}, `)
        } else if (result < randomNum) {
            alert(`Ваше число ${result} меньше загаданного`)
        } else if (result > randomNum) {
            alert(`Ваше число ${result} больше загаданного`)
        }
        
    }
    return alert(`Вы не угадали число. Попытки закончились. Загаданное число ${randomNum}`)
}

// getNumber()
