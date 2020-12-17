let emailContainer = document.getElementById("email_container");
let symbol__ok = document.getElementById("email_ok");
let symbol__notok = document.getElementById("email_notok");
let emailInput = document.getElementById("email");
const character = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

emailInput.addEventListener("focus", () => {
  verifyEmail();
});
emailInput.addEventListener("input", () => {
  verifyEmail();
});

function verifyEmail() {
  let defaultColor = "blue";
  let errorColor = "red";
  let validColor = "green";

  if (emailInput.value.length < 1) {
    emailContainer.style.borderColor = defaultColor;
    symbol__notok.style.color = defaultColor;
    symbol__ok.style.opacity = "0";
    symbol__notok.style.opacity = "100";
  } else {
    if (character.test(emailInput.value)) {
      emailContainer.style.borderColor = validColor;
      symbol__ok.style.color = validColor;
      symbol__ok.style.opacity = "100";
      symbol__notok.style.opacity = "0";
    } else {
      emailContainer.style.borderColor = errorColor;
      symbol__notok.style.color = errorColor;
      symbol__ok.style.opacity = "0";
      symbol__notok.style.opacity = "100";
    }
  }
}
