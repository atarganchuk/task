const calc = require('./part-2/2/index');
const testArray = [
    [
        [1,2,5],[2,3,5,6,4],[1,3,6,4]
    ],
    [
        [3,7,56,23],[23,3,7,88],[56,88]
    ],
    [
        [76,55,44,73],[44,56,73,34],[76,55,56,34]
    ]
]

test.each(testArray)('given %p and %p as arguments, returns %p',(arr_1, arr_2, output) =>{
    expect(calc(arr_1, arr_2)).toEqual(output)
})

test.each(testArray)('func return is array',(arr_1, arr_2) =>{
    expect(Array.isArray(calc(arr_1, arr_2))).toBe(true);
})