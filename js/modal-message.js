const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".contacts__button");
const closeButton = document.querySelector(".button--close");
const form = modal.querySelector(".feedback");
const userName = modal.querySelector("[name=user-name]");
const userMail = modal.querySelector("[name=user-email]");
const userMessage = modal.querySelector("[name=user-message]");


modalButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("ну ничего себе...открылось");
    modal.classList.add("modal--active");
    userName.focus();
});

closeButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("ого, оно закрылось??...");
    modal.classList.remove("modal--active");
    modal.classList.remove("modal--error");
});

form.addEventListener("submit", function(evt) {
    if (!userName.value || !userMail.value || !userMessage.value) {
        evt.preventDefault();
        modal.classList.add("modal--error");
        console.log("папа... где наши али али... данные??");
    } else {

        localStorage.setItem("userName", userName.value);
        console.log("я сохранил их!!! сохранил...и отправил")
    }
});


window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modal.classList.contains("modal--active")) {
            evt.preventDefault();
            modal.classList.remove("modal--active");
            console.log("чо та не работает да? а нет, работает...");
        }
    }
});