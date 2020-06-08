const calc = require('./part-2/4/index');
const testArray = [
    [
        [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }, [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
    ],
]

test.each(testArray)('given array with obj and obj as argument - expected array with obj',(arr, arg, output) =>{
    expect(calc(arr, arg)).toEqual(output)
})

test.each(testArray)('func return is array',(arr, arg, output) =>{
    expect(Array.isArray(calc(arr, arg))).toBe(true);
})