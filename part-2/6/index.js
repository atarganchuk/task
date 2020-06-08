const calc = (str, target, rep) => {
    const regIndex = str.toUpperCase().search(target.toUpperCase());
    return `${str.slice(0, regIndex)}${(str.charAt(regIndex).toUpperCase() === str.charAt(regIndex)) ? rep.charAt(0).toUpperCase() + rep.slice(1) : rep}${str.slice(regIndex + target.length)}`
}

module.exports = calc;