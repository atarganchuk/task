const calc = require('./index');

test('given [76,55,44,73] and [44,56,73,34] as arguments, returns [76,55,56,34]',() =>{
    expect(calc([76,55,44,73],[44,56,73,34])).toEqual([76,55,56,34])
})

test('func return is array',() =>{
    expect(Array.isArray(calc([76,55,44,73],[44,56,73,34]))).toBe(true);
})