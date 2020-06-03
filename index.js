// 1
const factorial = (num) => {
    const result = document.querySelector('.factorials__result');

    if (parseInt(num) !== NaN) {
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
    const result = document.querySelector('.length__result');
    const stringArr = string.split(/[ ,]+/);

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
const getMaxOfArray = (numArray) => {
    return Math.max.apply(null, numArray);
}

const arrBiggestCalc = (arrResult) => {
    const result = document.querySelector('.largestArr__result');
    const arrMax = [];

    arrResult.forEach(item => {
        const converted = item.map(elem => parseInt(elem));

        arrMax.push(getMaxOfArray(converted));
    })
    result.innerHTML = arrMax;
}

const arrBiggestGet = (inputs) => {
    const arrResult = [];

    if (inputs.length) {
        inputs.forEach(item => {
            const arrNew = item.value.split(/[ ,]+/);
            arrResult.push(arrNew);
        })
    }
    arrBiggestCalc(arrResult);
}

// 4
const stringCut = (string, number) => {
    const num = parseInt(number);
    const result = document.querySelector('.stringCut__result');

    (string.length > number) ? result.innerHTML = `${string.slice(0, num)}...` : result.innerHTML = string;
}

// 5
const typography = (string) => {
    const result = document.querySelector('.typography__result');
    let converted = "";

    if (string.length) {
        const newArr = string.split(/[ ,]+/);

        newArr.forEach((item, i) => {
            converted = `${converted} ${[...item].map((e, i) => (i === 0)? e.toUpperCase() : e.toLowerCase()).join("")}`
        })

        result.innerHTML = converted;
    } else {
        result.innerHTML = "nothing to convert"
    }
}

// 6
const combineInit = (col, number) => {
    const num = parseInt(number);
    const result = document.querySelector('.combine__result');

    if (col.length && col.length > 1) {
        result.innerHTML = combine(col[0].value.split(/[ ,]+/), col[1].value.split(/[ ,]+/), num);
    } else {
        result.innerHTML = "nothing to convert"
    }
}

const combine = (arrSource, arrTarget, number) => {
    const newArr = [...arrTarget];
    newArr.splice(number, 0, ...arrSource)
    return newArr;
}

// 7
const falsy = (arrSource) => {
    const result = document.querySelector('.falsy__result');
    const resultArr = falsyTypes(arrSource.split(/[ ,]+/));
    let converted = [];

    resultArr.forEach((item, i) => (item)? converted.push(item) : false)
    result.innerHTML = converted;
}

const falsyTypes = (arrSource) => {
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
                arrSource.splice(i, 1, null);
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
    const result = document.querySelector('.comparison__result');
    const converted = [];

    if (arrSource && arrSource.length) arrSource.forEach(item => converted.push(item.value))
    result.innerHTML = comparison(converted);
}

const comparison = (arrSource) => {
    let status = true;
    
    [...arrSource[1]].forEach(item => {if (![...arrSource[0]].some(elem => elem.toLowerCase() === item.toLowerCase())) status = false});

    return status
}

// 9
const separationInit = (arrSource, number) => {
    const num = parseInt(number);
    const result = document.querySelector('.separation__result');
    const converted = arrSource.split(/[ ,]+/);

    result.innerHTML = separation(converted, num);
}

const separation = (arrSource, number) => {
    arrSource.forEach(item => {
        const count = Math.round(item.length / number);
        const newArr = [];
        let from = 0;

        for (let i = 0; i < count; i++) {
            from = from + number;
            item.slice(from, number)
        }
    })
}

// inits
document.addEventListener('DOMContentLoaded', e => {
    const factorialsStart = document.querySelector('.factorials__btn');
    const lengthStart = document.querySelector('.length__btn');
    const biggestStart = document.querySelector('.largestArr__btn');
    const stringCutStart = document.querySelector('.stringCut__btn');
    const typographyStart = document.querySelector('.typography__btn');
    const combineStart = document.querySelector('.combine__btn');
    const falsyStart = document.querySelector('.falsy__btn');
    const comparisonStart = document.querySelector('.comparison__btn');
    const separationStart = document.querySelector('.separation__btn');

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
        const stringSource = document.querySelector('.stringCut__string').value;
        const numberSource = document.querySelector('.stringCut__number').value;
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
        const stringSource = document.querySelectorAll('.combine__arr');
        const numberSource = document.querySelector('.combine__number').value;
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
        const stringSource = document.querySelector('.separation__arr').value;
        const numberSource = document.querySelector('.separation__number').value;
        separationInit(stringSource, numberSource);
    })
})