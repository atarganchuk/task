const calc = (arr) => {
    arrSource = [...arr];

    const reverseCheck = (arr) => {
        if (arrSource[0] > arrSource[1]) {
            return arrSource.reverse()
        } else {
            return arrSource
        }
    }

    const summCalc = (arrSource) => {
        const min = arrSource[0];
        const max = arrSource[1];
        let summ = 0;

        if (min !== max) {
            for (let i = min + 1; i < max; i++) {
                summ = summ + i;
            }
            summ = summ + arrSource[0] + arrSource[1];
        } else {
            summ = arrSource[0] + arrSource[1];
        }

        return summ
    }

    return summCalc(reverseCheck(arrSource));
}

module.exports = calc;