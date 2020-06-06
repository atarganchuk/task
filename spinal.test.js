const calc = require('./part-2/5/index');
const data = [
    [
        "Lorem ipsum dolor sit amet", "lorem-ipsum-dolor-sit-amet"
    ],
    [
        "Ut veniam, quis. Nostrud exercitation", "ut-veniam-quis-nostrud-exercitation"
    ]
]

test.each(data)('given %p expected %p',(str, output) =>{
    expect(calc(str)).toBe(output)
})
