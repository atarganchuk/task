const calc = require('./index');

test(`given arr [1, [2], [3, [[4]]]] as arg, expected [1, 2, 3, 4]`,() =>{
    expect(calc([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4])
})

