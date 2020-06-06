const calc = require('./part-2/1/index');
const testArray = [
    [[1,4], 10],
    [[4,1], 10],
    [[2,5], 14],
    [[5,2], 14]
]

test.each(testArray)('summ for %s is %s',(input, output) =>{
    expect(calc(input)).toBe(output)
})

test.each(testArray)('func return is number',(input) =>{
    expect(typeof calc(input)).toBe('number')
})