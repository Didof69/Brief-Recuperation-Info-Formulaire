const bouton = document.getElementById("button-connexion");
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let boxEmail = document.querySelector(".mail");
let boxPassword = document.querySelector(".motDePasse");
const spanEmail = document.querySelector(".spanEmail");
const spanPassword = document.querySelector(".spanPassword");


bouton.addEventListener("click", (event) => {
  boxEmail.className = "mail";
  spanEmail.className = "spanEmail";
  boxPassword.className = "motDePasse";
  spanPassword.className = "spanPassword";
  event.preventDefault();
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  if (email === "" && password === "") {
    boxEmail.className = "mailDefault";
    spanEmail.className = "spanEmailDefault";
    boxPassword.className = "motDePasseDefault";
    spanPassword.className = "spanPasswordDefault";
  } else if (email === "") {
    boxEmail.className = "mailDefault";
    spanEmail.className = "spanEmailDefault";
  } else if (password === "") {
    boxPassword.className = "motDePasseDefault";
    spanPassword.className = "spanPasswordDefault";
  } else if (!validateEmail(email)) {
    boxEmail.className = "mailDefault";
    spanEmail.innerText = "Email non valide"
    spanEmail.className = "spanEmailDefault";
  } else {
    // alert("Vous êtes connecté(e)!");
  }
});

function validateEmail(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

