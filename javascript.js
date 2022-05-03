const buttons = document.querySelectorAll("button");

const btnTop = document.querySelectorAll(".box-top");
const btnCenter = document.querySelectorAll(".box-center");
const btnBottom = document.querySelectorAll(".box-bottom");
const btnLeft = document.querySelectorAll(".left");
const btnMiddle = document.querySelectorAll(".middle");
const btnRight = document.querySelectorAll(".right");

const content = document.querySelector(".content");

const resultText = document.createElement("h1");
resultText.style.color = "red";


function takeResult(flag) {
    if (flag % 2 != 0) {
        return "X";
    }
    else {
        return "O";
    }
}

function changeTurn() {
    let flag = 1;
    buttons.forEach((button) => {
        if (button.textContent === "X") flag++;
        if (button.textContent === "O") flag++;
    })
    return flag;
}

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        let flag = changeTurn();
        button.textContent = takeResult(flag);
        button.disabled = true;
        if (check()) {
            btnDisable(buttons);
            if (flag % 2 != 0) resultText.textContent = "Winner: X"
            else resultText.textContent = "Winner: O";
        }
    });
});

function check() {
    let flagTop = 0;
    let flagCenter = 0;
    let flagBottom = 0;
    let flagLeft = 0;
    let flagMiddle = 0;
    let flagRight = 0;
    btnTop.forEach((button) => {
        if (button.textContent === "X") flagTop++;
        else if (button.textContent === "O") flagTop--;
    })
    btnCenter.forEach((button) => {
        if (button.textContent === "X") flagCenter++;
        else if (button.textContent === "O") flagCenter--;
    })
    btnBottom.forEach((button) => {
        if (button.textContent === "X") flagBottom++;
        else if (button.textContent === "O") flagBottom--;
    })
    btnLeft.forEach((button) => {
        if (button.textContent === "X") flagLeft++;
        else if (button.textContent === "O") flagLeft--;
    })
    btnMiddle.forEach((button) => {
        if (button.textContent === "X") flagMiddle++;
        else if (button.textContent === "O") flagMiddle--;
    })
    btnRight.forEach((button) => {
        if (button.textContent === "X") flagRight++;
        else if (button.textContent === "O") flagRight--;
    })
    if (flagTop === 3 || flagCenter === 3 || flagBottom === 3 || flagTop === -3 || flagCenter === -3 || flagBottom === -3 || flagLeft === 3 || flagLeft === -3 || flagMiddle === 3 || flagMiddle === -3 || flagRight === 3 || flagRight === -3) return true;
    else return false;
}

function btnDisable(buttons) {
    buttons.forEach((button) => {
        button.disabled = true;
    })
}


content.appendChild(resultText);