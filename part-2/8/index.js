//Написать функцию, которая принимает два или более массивов и возвращает новый массив уникальных значений. 
//Значения должны быть отсортированы по их первоначальному порядку.

const calc = (...arr) => {
    const inc = [...arr]
    console.log(inc)
}
calc([1,2,3], [1,2,3])
// module.exports = calc;