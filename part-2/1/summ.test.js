const calc = require('./index');
const testArray = [
    [[1,4], 10],
    [[4,1], 10],
]

test.each(testArray)('summ for %s is %s',(input, output) =>{
    expect(calc(input)).toBe(output)
})