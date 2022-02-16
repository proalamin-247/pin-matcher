function getpin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getpin();
    }
}

function generatePin() {
    const pin = getpin();
    document.getElementById('random-pin-generatePin').value = pin;

    /* const successMatch = document.getElementById('pin-match-success-message');
    successMatch.style.display = 'none'; */
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-number-display');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const calcInput = document.getElementById('type-number-display');
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

})

function verifyPin() {
    const randomPin = document.getElementById('random-pin-generatePin').value;
    const typePin = document.getElementById('type-number-display').value;

    const successMatch = document.getElementById('pin-match-success-message');
    const failMatch = document.getElementById('pin-match-fail-message');

    if (randomPin == typePin) {
        successMatch.style.display = 'block';
        failMatch.style.display = 'nonegit';

    }
    else {
        failMatch.style.display = 'block';
        successMatch.style.display = 'none';

    }

}