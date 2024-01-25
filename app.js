// EMAIL SUBMISSION FORM
const scriptURL =
     "https://script.google.com/macros/s/AKfycbznDnKDt2IznPlxOroSt-OwvG3ryJwyjMi2cQYKnMfjZIjQdW5ieB2iR4Dyc2sF1Ma6mw/exec";
const scriptURLPASS =
     "https://script.google.com/macros/s/AKfycbyca-SQHbONwCi9kRjaZ6He_9Uk7jHXZmzpcKhp-veydEuZbjjTUks2v5Ow20Zyf9yZCA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
     e.preventDefault();
     fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => console.log("Success!", response))
          .catch((error) => console.error("Error!", error.message));
});

// GLOBAL DECLARATIONS HERE ::
const passwordInputEl = document.getElementById("signup-input-box");
const randomGenerateBoxEl = document.getElementById("input-box");

// PASSWORD HIDE AND SHOW
function showAndHidePswd() {
     const toggleIconEl = document.querySelector(".fa-eye").addEventListener("click", () => {
          if (passwordInputEl.type == "password") {
               passwordInputEl.type = "text";
          } else {
               passwordInputEl.type = "password";
          }
     });
}
showAndHidePswd();

//  RANDOM PASSWORD GENERATOR

passwordInputEl.addEventListener("click", () => {
     const randomPasswordEl = document.getElementById("rand-pswd-container");
     randomPasswordEl.style.visibility = "visible";

     document.querySelector(".btn-continue").addEventListener("click", () => {
          let randomGenerateBox = document.getElementById("input-box");
          const numbers = "1 2 3 4 5 6 7 8 9 10";
          const specialSymbols = "! @ # $ % ^ & * ( }  ? / > + _ < ";
          const lowerAlphabets = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
          const upperAlphabets = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
          const passwordCombinator = numbers + lowerAlphabets + upperAlphabets + specialSymbols;

          let passwordContent = " ";
          const size = 12;
          passwordContent += numbers[Math.floor(Math.random() * numbers.length)].trim();
          passwordContent += specialSymbols[Math.floor(Math.random() * specialSymbols.length)].trim();
          passwordContent += lowerAlphabets[Math.floor(Math.random() * lowerAlphabets.length)].trim();
          passwordContent += upperAlphabets[Math.floor(Math.random() * upperAlphabets.length)].trim();

          while (size > passwordContent.length) {
               passwordContent += passwordCombinator[Math.floor(Math.random() * passwordCombinator.length)].trim();

               randomGenerateBoxEl.value = passwordContent;
          }
     });

     setTimeout(() => {
          randomPasswordEl.style.visibility = "hidden";
     }, 55000);

     document.querySelector(".btn-break").addEventListener("click", () => {
          randomPasswordEl.style.visibility = "hidden";
     });
});
// END OF RANDOM PASSWORD GENERATOR======================

// COPY REGENERATED PASSWORD

let copyIconEl = document.getElementById("regenerate-copy-icon");

const copyRegeneratePswd = function () {
     randomGenerateBoxEl.select();
     navigator.clipboard.writeText(randomGenerateBoxEl.value);
};

copyIconEl.addEventListener("click", copyRegeneratePswd);

// SIGNUP CONFIRMATION

document.getElementById("sign-up").addEventListener("click", () => {
     const signupCheckerEl = document.querySelectorAll(".sign-validation");
     const signupCheckerContainerEl = document.querySelector(".confirmation-container");
     const signupFormContainerEl = document.getElementById("form-container");
     signupCheckerEl.forEach((items) => {
          if (items.value) {
               signupFormContainerEl.style.visibility = "hidden";
               signupCheckerContainerEl.style.visibility = "visible";

               signupCheckerContainerEl.classList.remove("confirmation-container ");
               signupCheckerContainerEl.classList.add("popup-notif");
          }
     });
});
