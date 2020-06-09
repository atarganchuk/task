const calc = require('./index');

test(`given arr [1, 2, 3, 4] and function(n) {return n >= 3;} as args, expected [3, 4]`,() =>{
    expect(calc([1, 2, 3, 4], function(n) {return n >= 3;})).toEqual([3, 4])
})

