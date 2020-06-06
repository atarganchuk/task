const calc = (arr, ...arg) => {
    const args = [...arg];
    
    arr.forEach((elem, index) => {args.forEach((arg) => {if (elem === arg) arr.splice(index, 1)})});

    return arr
}

module.exports = calc;