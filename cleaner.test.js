const calc = require('./part-2/3/index');
const testArray = [
    [
        [1,2,"a","b",true, false], 2, "b", false, [1,"a",true]
    ],
]

test.each(testArray)('given array %p and arguments - %p, %p, %p, expected return %p',(arr, arg_1, arg_2, arg_3, output) =>{
    expect(calc(arr, arg_1, arg_2, arg_3)).toEqual(output)
})

test.each(testArray)('func return is array',(arr, arg_1, arg_2, arg_3) =>{
    expect(Array.isArray(calc(arr, arg_1, arg_2, arg_3))).toBe(true);
})