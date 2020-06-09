const calc = (num) => {
    let result = 0;
    for (let i = 2; i <= num; i++) {
        let simple = true;
        for (let j = 2; j < i; j++) {
            const n = i/j;
            if ((n ^ 0) === n) {
                simple = false;
            }
        }
        if (simple) result = result + i
    }
    return result
}

module.exports = calc;