// 1


// inits
document.addEventListener('DOMContentLoaded', e => {
    const elem = document.querySelector('');

    // 1
    elem.addEventListener('click', e => {
        e.preventDefault();
        const stringSource = document.querySelector('.factorials__input');
        factorial(stringSource.value);
    })
})