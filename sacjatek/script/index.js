//form validation

let form = document.querySelector(".form");
let email = form.querySelector(".form__email");
let submit = form.querySelector(".form__submit");

let emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email.addEventListener("input", () => {
  const invalidEmail = [];
  email.setCustomValidity("");
  if (email.value === 0) {
    return;
  }

  const isNotPattern = emailPattern.test(email.value) === false;
  if (isNotPattern) {
    invalidEmail.push("E-mail уведзены няправільна / Email entered incorrectly");
    email.style.borderColor = "red";
  }

  if (invalidEmail.length > 0) {
    email.setCustomValidity(invalidEmail.join(". \n"));
    email.style.borderColor = "red";
  } else {
    email.style.borderColor = "#28a745";
  }

  email.reportValidity();
});
