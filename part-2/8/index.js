const calc = (...args) => {
    const inc = [...args]
    if (inc.length) {
        const newArr = inc.reduce((a, b) => a.concat(b));
        return [...new Set(newArr)]
    }
}

module.exports = calc;