const buttons = document.querySelectorAll("button");

const btnTop = document.querySelectorAll(".box-top");
const btnCenter = document.querySelectorAll(".box-center");
const btnBottom = document.querySelectorAll(".box-bottom");

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
        if (check()) btnDisable(buttons);
    });
});

function check() {
    let flagTop = 0;
    let flagCenter = 0;
    let flagBottom = 0;
    btnTop.forEach((button) => {
        if (button.textContent === "X") flagTop++;
        else if (button.textContent === "O") flagTop++;
    })
    btnCenter.forEach((button) => {
        if (button.textContent === "X") flagCenter++;
        else if (button.textContent === "O") flagTop++;
    })
    btnBottom.forEach((button) => {
        if (button.textContent === "X") flagBottom++;
        else if (button.textContent === "O") flagTop++;
    })
    if (flagTop === 3 || flagCenter === 3 || flagBottom === 3 || flagTop === -3 || flagCenter === -3 || flagBottom === -3) return true;
    else return false;
}

function btnDisable(buttons) {
    buttons.forEach((button) => {
        button.disabled = true;
    })
}


