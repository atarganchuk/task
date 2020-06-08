const calc = (arr, obj) => {
    let result = [];

    arr.map(arri => {
        let status = [];

        Object.keys(obj).map(objk => {
            Object.keys(arri).map(arrk => {
                if (objk === arrk) {
                    if (obj[objk] === arri[arrk]) {
                        status.push(true);
                    } else {
                        status.push(false);
                    }
                } else {
                    status.push(false);
                }
            })
        })

        if (Object.keys(obj).length === status.filter(sti => sti === true).length) result.push(arri);
    })

    return result
}

module.exports = calc;