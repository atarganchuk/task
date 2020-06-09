const calc = (a, b) => {
    if (a && b) {
        return a + b
    } else {
        return (b) => calc()
    }
}

console.log(calc(2))
// module.exports = calc;