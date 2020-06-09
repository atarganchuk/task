const calc = require('./index');

test(`given number "10", expected "17"`,() =>{
    expect(calc(10)).toEqual(17)
})

