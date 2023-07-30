"use strict";
const userForm = document.querySelector("form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#country");
const userMessage = document.querySelector("#message");
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        name: userName.value,
        email: userEmail.value,
        country: userCountry.value,
        message: userMessage.value,
    };
    console.log(data);
});
