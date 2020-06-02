// 1
const factorial = (num) => {
    let result = document.querySelector('.factorials__result');

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
    let result = document.querySelector('.length__result'),
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
    let num = parseInt(number),
        result = document.querySelector('.stringCut__result');
    if (string.length > number) {
        result.innerHTML = string.slice(0, num) + "..."
    } else {
        result.innerHTML = "nothing to convert"
    }
}

//5
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

            if (newArr.length - 1 !== i) converted = converted + " "
        })

        result.innerHTML = converted;
    } else {
        result.innerHTML = "nothing to convert"
    }
}

//inits
document.addEventListener('DOMContentLoaded', e => {
    const factorialsStart = document.querySelector('.factorials__btn'),
            lengthStart = document.querySelector('.length__btn'),
            biggestStart = document.querySelector('.largestArr__btn'),
            stringCutStart = document.querySelector('.stringCut__btn'),
            typographyStart = document.querySelector('.typography__btn');

    // 1
    factorialsStart.addEventListener('click', e => {
        e.preventDefault();
        let stringSource = document.querySelector('.factorials__input');
        factorial(stringSource.value);
    })

    // 2
    lengthStart.addEventListener('click', e => {
        e.preventDefault();
        let stringSource = document.querySelector('.length__input');
        stringLength(stringSource.value);
    })

    // 3
    biggestStart.addEventListener('click', e => {
        e.preventDefault();
        let stringSource = document.querySelectorAll('.largestArr__input');
        arrBiggestGet(stringSource);
    })

    // 4
    stringCutStart.addEventListener('click', e => {
        e.preventDefault();
        let stringSource = document.querySelector('.stringCut__string').value,
            cutCount = document.querySelector('.stringCut__number').value;
        stringCut(stringSource, cutCount);
    })

    //5
    typographyStart.addEventListener('click', e => {
        e.preventDefault();
        let stringSource = document.querySelector('.typography__string').value;
        typography(stringSource);
    })
})