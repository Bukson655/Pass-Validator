function checkLength(password) {
    if (password.length < 8) {
        return "Za krótkie hasło. Min. 8 znaków.";
    } else {
        return "";
    }
}

function checkLowercaseLetter(password) {
    if (/[a-z]/.test(password)) {
        return "";
    } else {
        return "Min. jedna mała litera!";
    }
}

function checkCapitalLetter(password) {
    if (/[A-Z]/.test(password)) {
        return "";
    } else {
        return "Min. jedna duża litera!";
    }
}

function checkSpecialSign(password) {
    if (/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
        return "";
    } else {
        return "Min. jeden znak specjalny!";
    }
}

function checkBothFields(password, repeatedPassword) {
    if (password == repeatedPassword) {
        return "";
    } else {
        return "Hasła różnią się od siebie.";
    }
}


function confirmNewPassword() {
    let pass = document.getElementById("password");
    let repeatedPass = document.getElementById("repeat-password");

    let lengthMsg = document.getElementById("pass-length");
    let lowercaseLetterMsg = document.getElementById("lowercase-letter");
    let capitalLetterMsg = document.getElementById("capital-letter");
    let specialSignMsg = document.getElementById("special-sign");
    let notMatchedMsg = document.getElementById("pass-matched");

    if (pass.value.length > 0) {

        lengthMsg.innerHTML = checkLength(pass.value);
        lowercaseLetterMsg.innerHTML = checkLowercaseLetter(pass.value);
        capitalLetterMsg.innerHTML = checkCapitalLetter(pass.value);
        specialSignMsg.innerHTML = checkSpecialSign(pass.value);
        notMatchedMsg.innerHTML = checkBothFields(pass.value, repeatedPass.value);
    }
}

confirmNewPassword();