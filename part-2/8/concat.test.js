const calc = require('./index');

test('arrays [1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9] as args and expected [1, 2, 3, 4, 5, 6, 7, 8, 9]',() =>{
    expect(calc([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})