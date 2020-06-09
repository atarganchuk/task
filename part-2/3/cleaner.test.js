const calc = require('./index');

test('given array [1,2,"a","b",true, false] and arguments - 2, "b", false, expected return [1,"a",true]',() =>{
    expect(calc([1,2,"a","b",true, false], 2, "b", false)).toEqual([1,"a",true])
})

test('func return is array',() =>{
    expect(Array.isArray(calc([1,2,"a","b",true, false], 2, "b", false))).toBe(true);
})