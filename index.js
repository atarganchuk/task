// 1
const factorial = (num) => {
    const result = document.querySelector('.factorials__result');

    if (num && parseInt(num)) {
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact = fact * i;
        }
        result.innerHTML = fact;
    } else {
        result.innerHTML = "nothing to convert";
    }
}

// 2
const stringLength = (string) => {
    const result = document.querySelector('.length__result'),
        stringArr = string.split(/[ ,]+/);
    if (stringArr.length && stringArr.length > 0) {
        biggest = stringArr[0];
        stringArr.forEach(item => {
            if (biggest.length < item.length) biggest = item
        })
        result.innerHTML = biggest.length;
    } else {
        result.innerHTML = "nothing to convert";
    }
}

// 3
const arrBiggestCalc = (arrResult) => {
    let arrMax = [],
        result = document.querySelector('.largestArr__result');
    arrResult.forEach(item => {
        let converted = item.map(elem => parseInt(elem));
        arrMax.push(getMaxOfArray(converted));
    })
    result.innerHTML = arrMax;
}

const arrBiggestGet = (inputs) => {
    let arrResult = [];

    if (inputs.length) {
        inputs.forEach(item => {
            let arrNew = item.value.split(/[ ,]+/);
            arrResult.push(arrNew);
        })
    }
    arrBiggestCalc(arrResult);
}

const getMaxOfArray = (numArray) => {
    return Math.max.apply(null, numArray);
}

// 4
const stringCut = (string, number) => {
    const num = parseInt(number),
        result = document.querySelector('.stringCut__result');
    if (string.length > number) {
        result.innerHTML = `${string.slice(0, num)}...`
    } else {
        result.innerHTML = "nothing to convert"
    }
}

// 5
const typography = (string) => {
    let result = document.querySelector('.typography__result'),
        converted = "";
    if (string.length) {
        let newArr = string.split(/[ ,]+/);

        newArr.forEach((item, i) => {
            for (let i = 0; i < item.length; i++) {
                if (i === 0) {
                    converted = converted + item[i].toUpperCase();
                } else {
                    converted = converted + item[i].toLowerCase();
                }
            }

            if (newArr.length - 1 !== i) converted = `${converted} `
        })

        result.innerHTML = converted;
    } else {
        result.innerHTML = "nothing to convert"
    }
}

// 6
const combineInit = (col, number) => {
    const num = parseInt(number),
        result = document.querySelector('.combine__result');
    if (col.length && col.length > 1) {
        result.innerHTML = combine(col[0].value.split(/[ ,]+/), col[1].value.split(/[ ,]+/), num);
    } else {
        result.innerHTML = "nothing to convert"
    }
}

const combine = (arrSource, arrTarget, number) => {
    arrSource.forEach((index, i) => {
        arrTarget.splice(number + i, 0, index);
    })
    return arrTarget;
}

// 7
const falsy = (arrSource) => {
    const result = document.querySelector('.falsy__result'),
        resultArr = falsyTypes(arrSource.split(/[ ,]+/)),
        converted = [];

    resultArr.forEach((item, i) => (item)? converted.push(item) : false)

    result.innerHTML = converted;
}

const falsyTypes = (arrSource) => {
    const nu = null;
    arrSource.forEach((item, i) => {
        switch (item) {
            case "true":
                arrSource.splice(i, 1, true);
                break;
            case "false":
                arrSource.splice(i, 1, false);
                break;
            case "0":
                arrSource.splice(i, 1, parseInt(item));
                break;
            case "0n":
                arrSource.splice(i, 1, 0n);
                break;
            case "null":
                arrSource.splice(i, 1, nu);
                break;
            case "undefined":
                arrSource.splice(i, 1, undefined);
                break;
            case "NaN":
                arrSource.splice(i, 1, NaN);
                break;
            default:
                arrSource.splice(i, 1, item);
                break;
        }
    })

    return arrSource
}

// 8
const comparisonInit = (arrSource) => {
    const result = document.querySelector('.comparison__result'),
        converted = [];

    if (arrSource && arrSource.length) arrSource.forEach(item => converted.push(item.value))

    result.innerHTML = comparison(converted);
}

const comparison = (arrSource) => {
    let status = true;
    
    [...arrSource[0]].forEach(item => {if (![...arrSource[1]].some(elem => elem === item)) status = false});

    return status
}

// 9
const separationInit = (arrSource, number) => {
    const num = parseInt(number),
        result = document.querySelector('.separation__result'),
        converted = arrSource.split(/[ ,]+/);

    result.innerHTML = separation(converted, num);
}

const separation = (arrSource, number) => {
    arrSource.forEach(item => {
        let count = Math.round(item.length / number),
            from = 0;
            newArr = [];

        for (let i = 0; i < count; i++) {
            from = from + number;

            item.slice(from, number)
        }
    })
}

// inits
document.addEventListener('DOMContentLoaded', e => {
    const factorialsStart = document.querySelector('.factorials__btn'),
            lengthStart = document.querySelector('.length__btn'),
            biggestStart = document.querySelector('.largestArr__btn'),
            stringCutStart = document.querySelector('.stringCut__btn'),
            typographyStart = document.querySelector('.typography__btn'),
            combineStart = document.querySelector('.combine__btn'),
            falsyStart = document.querySelector('.falsy__btn'),
            comparisonStart = document.querySelector('.comparison__btn'),
            separationStart = document.querySelector('.separation__btn');

    // 1
    factorialsStart.addEventListener('click', e => {
        e.preventDefault();
        const stringSource = document.querySelector('.factorials__input');
        factorial(stringSource.value);
    })

    // 2
    lengthStart.addEventListener('click', e => {
        e.preventDefault();
        const stringSource = document.querySelector('.length__input');
        stringLength(stringSource.value);
    })

    // 3
    biggestStart.addEventListener('click', e => {
        e.preventDefault();
        const stringSource = document.querySelectorAll('.largestArr__input');
        arrBiggestGet(stringSource);
    })

    // 4
    stringCutStart.addEventListener('click', e => {
        e.preventDefault();
        const stringSource = document.querySelector('.stringCut__string').value,
            numberSource = document.querySelector('.stringCut__number').value;
        stringCut(stringSource, numberSource);
    })

    // 5
    typographyStart.addEventListener('click', e => {
        e.preventDefault();
        const stringSource = document.querySelector('.typography__string').value;
        typography(stringSource);
    })

    // 6
    combineStart.addEventListener('click', e => {
        e.preventDefault();
        const stringSource = document.querySelectorAll('.combine__arr'),
            numberSource = document.querySelector('.combine__number').value;
        combineInit(stringSource, numberSource);
    })

    // 7
    falsyStart.addEventListener('click', e => {
        e.preventDefault();
        const stringSource = document.querySelector('.falsy__arr').value;
        falsy(stringSource);
    })

    // 8
    comparisonStart.addEventListener('click', e => {
        e.preventDefault();
        const stringSource = document.querySelectorAll('.comparison__arr');
        comparisonInit(stringSource);
    })

    // 9
    separationStart.addEventListener('click', e => {
        e.preventDefault();
        const stringSource = document.querySelector('.separation__arr').value,
                numberSource = document.querySelector('.separation__number').value;
        separationInit(stringSource, numberSource);
    })
})