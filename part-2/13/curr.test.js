const calc = require('./index');

test(`given args "5" and "2", expected "7"`,() =>{
    expect(calc(5,2)).toEqual(7)
})

test(`given arg "5", expected "function"`,() =>{
    expect(typeof calc(5)).toBe("function")
})