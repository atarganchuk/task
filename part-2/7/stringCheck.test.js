const calc = require('./index');

test('given "abdegi", static mask is "abcdefghijklmnopqrstuvwxyz" - expected "c, f, h"',() =>{
    expect(calc("abdegi")).toEqual("c, f, h")
})