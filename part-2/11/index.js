const calc = (arr, fun) => {
    [...arr].forEach((arrE, arrI) => {
        if (!fun(arrI + 1)) arr.splice(0, 1)
    })
    return arr
}

module.exports = calc;