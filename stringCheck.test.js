const calc = require('./part-2/7/index');
const testArray = [
    [
        "abdegi", "abcdefghijklmnopqrstuvwxyz", "c, f, h"
    ],
]

test.each(testArray)('given %p and static mask %p - expected %p',(str, arg, output) =>{
    expect(calc(str)).toEqual(output)
})