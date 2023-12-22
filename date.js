//замер времени итерации цикла
let a1 = Date.now(new Date());


for(let i = 0; i<1000; i++) {
    console.log(0)
}

let b = Date.now(new Date());
console.log(b - a1)


let a = new Date(2014,11,32,12,23,0)
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute:'numeric',
    second:'numeric',
}

console.log(a.toLocaleString('ru', options))

let b1 = new Date(1991, 8, 14, 6, 45)
let options1 = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute:'numeric',
}

console.log(b.toLocaleString('ru', options1))

//------------------JS DOC---TRY-CATCH----------------------
/**
 * функция преобразует строку с временем в минуты
 * @param {string} time время вида строки в минутах
 * @return {number} вернет целое число в минутах
 */
//try-cath  позволяет обрабатывать ошибки и выполнять код исходя из выданных ошибок.
function timeToMinute (time) { 

    try {
        let hour = +time.split(':')[0]
        let minute = +time.split(':')[1]
        if (!(hour >= 0 && hour <= 23) || !(minute >= 0 && minute <= 59)) {
            throw new RangeError('Некорректное значение для времени')
            
        }

        return hour * 60 + minute
    } catch (error) {
        console.log(error)
    }

}   

console.log(timeToMinute('10:08'))