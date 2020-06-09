const calc = (arr) => {
    const newArr = [];

    const rec = (source) => {
        source.map(arri => {
            if (typeof arri !== 'object') {
                newArr.push(arri)
            } else {
                rec(arri)
            }
        })
    }

    rec(arr)
    
    return newArr
}

module.exports = calc;