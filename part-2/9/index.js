const calc = (str) => {
    const input = [...str];
    input.map((el, i) => {
        switch (el){
            case '&':
                input[i] = "&amp;";
                break ;
            case '<':
                input[i] = "&lt;";
                break ;
            case '>':
                input[i] = "&gt;";
                break ;
            case `"`: 
                input[i] = "&quot;";
                break;
            case `'`:
                input[i] = "&apos;";
                break ;
            default:
                break;
        }
    })

    return input.join('')
}

module.exports = calc;