const calc = require('./part-2/6/index');
const testArray = [
    [
        "Good News everyone!", "news", "time", "Good Time everyone!"
    ],
]

test.each(testArray)('given sting %p and arguments %p, %p - expected %p',(str, target, rep, output) =>{
    expect(calc(str, target, rep)).toBe(output)
})