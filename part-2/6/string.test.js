const calc = require('./index');

test('given sting "Good News everyone!" and arguments "news", "time" - expected "Good Time everyone!"',() =>{
    expect(calc("Good News everyone!", "news", "time")).toBe("Good Time everyone!")
})