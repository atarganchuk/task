const calc = (arr_1, arr_2) => {
    const inc = arr_1.filter(elem => !arr_2.includes(elem)).concat(arr_2.filter(elem => !arr_1.includes(elem)));
    return inc
}
module.exports = calc;