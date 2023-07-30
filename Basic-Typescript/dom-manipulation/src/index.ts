const userForm = document.querySelector("form") as HTMLFormElement;
const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userCountry = document.querySelector("#country") as HTMLSelectElement;
const userMessage = document.querySelector("#message") as HTMLTextAreaElement;

userForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const data = {
    name: userName.value,
    email: userEmail.value,
    country: userCountry.value,
    message: userMessage.value,
  };
  console.log(data);
});
