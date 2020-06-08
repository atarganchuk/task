const calc = (str) => {
    const mask = [..."abcdefghijklmnopqrstuvwxyz"];
    const arr = [...str];
    let result = "";
    let count = 0;
    arr.map((el, eli) => {
        if (mask[eli + count] !== el) {
            result = (result.length) ? `${result}, ${mask[eli + count]}` : mask[eli + count]
            count++
        }
    });
    if (!result.length) result = undefined;
    return result
}
module.exports = calc;