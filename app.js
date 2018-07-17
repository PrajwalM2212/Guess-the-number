const inputForm = document.getElementById("input-form"),
    numberInput = document.getElementById("number-input"),
    submitBtn = document.getElementById("submit"),
    min = document.getElementById("min"),
    max = document.getElementById("max"),
    message = document.getElementById("message");

let numGuess = 3,
    minNum = 1,
    maxNum = 10,
    guess = Math.floor(Math.random() * (maxNum-minNum+1) + 1);
    console.log(guess);

inputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const number = Number(numberInput.value);
    numGuess -= 1;
    if (number === 0 || number < minNum || number > maxNum) {
        setMessageAndBorder(`Enter a valid number between ${minNum} and ${maxNum}`, "red");
    } else if (number !== guess && numGuess >= 1 ) {
        setMessageAndBorder(`${number} is wrong, you have ${numGuess} guesses left`, "red");
    } else if (number === guess || numGuess == 0) {
        if (number === guess) {
            playAgain(`${number} is correct, you have won the game`, true);
        } else {
            playAgain(`${number} is wrong , you have lost the game`, false);
        }
    }
});

function playAgain(msg, won) {
    won === true ? color = "green" : color = "red";
    message.textContent = msg;;
    message.style.color = color;
    numberInput.style.borderColor = color;
    numberInput.disabled = "disabled";
    submitBtn.value = "Play Again";
    submitBtn.addEventListener("mousedown", function (e) {
        window.location.reload();
    });
}

function setMessageAndBorder(msg, color) {
    message.textContent = msg;
    message.style.color = color;
    numberInput.style.borderColor = color;
}
