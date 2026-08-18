const btnEL = document.querySelector(".btn");
const inputEL = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const toastEL = document.querySelector(".toast");

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }

    inputEL.value = password;
}

btnEL.addEventListener("click", () => {
    createPassword();
});

copyIconEl.addEventListener("click", () => {
    navigator.clipboard.writeText(inputEL.value);

    toastEL.classList.add("active");

    setTimeout(() => {
        toastEL.classList.remove("active");
    }, 2000);
});