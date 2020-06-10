const calc = (a, b) => {
    if (!b) return (b) => a + b
    return a + b 
}
module.exports = calc;