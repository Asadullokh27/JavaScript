function displayRandomNumber(elementId) {
    var randomNumber = generateRandomNumber();
    document.getElementById(elementId).innerHTML = randomNumber;
    document.getElementById(elementId + "Btn").innerHTML = "<i class='fas fa-random'></i> " + randomNumber;
}

function checkNumbers(operation) {
    var inputNumber = parseInt(document.getElementById("userInput").value);
    var randomNumber1 = parseInt(document.getElementById("randomNumber1").innerHTML);
    var randomNumber2 = parseInt(document.getElementById("randomNumber2").innerHTML);
    var result;

    switch (operation) {
        case 'add':
            result = randomNumber1 + randomNumber2;
            break;
        case 'subtract':
            result = randomNumber1 - randomNumber2;
            break;
        case 'multiply':
            result = randomNumber1 * randomNumber2;
            break;
        case 'divide':
            result = randomNumber1 / randomNumber2;
            break;
        default:
            return;
    }

    if (inputNumber === result) {
        alert("Moshniy Developer✅")
    } else {
        alert("Aka xatoyu bu❌.Qayta urinib koring")
    }
}