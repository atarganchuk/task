// Создайте функцию, которая просматривает массив объектов (первый аргумент) и возвращает массив всех объектов, имеющих совпадающие пары имя 
// и значение (второй аргумент). Например: 
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) 
// должен вернуться [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]

const calc = (arr, obj, out) => {
    console.log(arr)
    // console.log(obj)
    // console.log(out)

    // const arrSearch = (val) => {
    //     arr.map(item => {
    //         Object.keys(item).map(elem => {
    //             if (val === elem) console.log("true")
    //         })
    //     })
    // }

    // Object.keys(obj).map(val => {
    //     arrSearch(val)
    // })
    // console.log(Object.keys(obj))
    const search = (obj, arg) => {
        const argCheck = (obj, arg) => {
            Object.keys(obj).map(item => {
                // if (arg !== item) return false
                hasOwnProperty
            })
            return true
        }

        Object.keys(arg).map(elem => {
            if (argCheck(obj, elem)) console.log(elem + "true")
            // Object.keys(obj).map(item => {
            //     if (elem !== item) return false
            // })
        })
    }

    arr.map(item => {
        search(item, obj)
    })
}
// item.hasOwnProperty()

calc([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }, [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]);
// module.exports = calc;