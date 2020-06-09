const calc = require('./index');

test('given array with [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }] and { "apple": 1, "bat": 2 } as arguments - expected [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]',() =>{
    expect(calc([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })).toEqual([{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }])
})

test('func return is array',() =>{
    expect(Array.isArray(calc([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }))).toBe(true);
})