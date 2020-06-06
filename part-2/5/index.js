const calc = (str) => {
    return str.toLowerCase().replace(/\s/g, "-").replace(/[.,%]/g, "");
}

module.exports = calc;