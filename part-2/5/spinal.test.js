const calc = require('./index');

test('given "Lorem ipsum dolor sit amet", expected "lorem-ipsum-dolor-sit-amet"',() =>{
    expect(calc("Lorem ipsum dolor sit amet")).toBe("lorem-ipsum-dolor-sit-amet")
})
