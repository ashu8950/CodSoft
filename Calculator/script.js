let string = "";
let inputField = document.querySelector('.input');
let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            string = evaluateString(string);
            inputField.value = string;
        } else if (value === 'C') {
            clearInput();
        } else if (value === 'x') {
            string = string.slice(0, -1);
            inputField.value = string;
        } else {
            string += value;
            inputField.value = string;
        }
    });
});

function evaluateString(str) {
    try {
        return eval(str);
    } catch (error) {
        return 'Error';
    }
}

function clearInput() {
    string = "";
    inputField.value = string;
}
