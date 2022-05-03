const buttons = document.querySelectorAll("button");

function takeResult(flag) {
    if (flag % 2 != 0) {
        return "X";
    }
    else {
        return "O";
    }
}

function check() {
    let flag = 1;
    buttons.forEach((button) => {
        if (button.textContent === "X") flag++;
        if (button.textContent === "O") flag++;
    })
    return flag;
}

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        let flag = check();
        button.textContent = takeResult(flag);
        button.disabled = true;
    });
});


