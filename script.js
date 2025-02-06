// ? Cache at least one element using selectElementById.
const intro = document.getElementById("intro");

// ? Cache at least one element using querySelector or querySelectorAll.
const cards = document.querySelectorAll(".card");

// ? Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
// ? Iterate over a collection of elements to accomplish some task.
for (let card of cards) {
  card.classList.add("text-bg-secondary");
  card.firstElementChild.classList.add("pt-3");
}

// ? Create at least one element using createElement.
const introText = document.createElement("p");
introText.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit qui officiis doloremque doloribus maiores nisi. Nesciunt, saepe dolore sed ab voluptatem voluptate totam, assumenda placeat ipsa libero dolorum ipsum! Commodi qui fugit vitae, dolorem quidem ipsum ratione iure eaque quo officia voluptas magni deleniti necessitatibus facilis modi, fugiat quasi et blanditiis quos optio asperiores harum corrupti vero perspiciatis. Architecto. Reprehenderit quae consequatur neque rem, excepturi totam est sint eaque. Asperiores dolores odit, quam nihil voluptatibus maxime accusantium quis cum nesciunt doloremque tempora delectus dolorem velit, illum repellendus eum excepturi?";

// ? Use appendChild and/or prepend to add new elements to the DOM.
intro.appendChild(introText);
// todo: Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.
// ? Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
//success div disappears via style attribute when clicked
const successDiv = document.getElementById("successDiv");
function hideSuccessDiv(){
    successDiv.style.display = "none";
}

successDiv.addEventListener('click', hideSuccessDiv);

// ? Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
// ? Modify at least one attribute of an element in response to user interaction.
const themeBtn = document.getElementById('themeBtn')

themeBtn.addEventListener('click', handleThemeBtnClick)

function handleThemeBtnClick(){
    document.body.classList.toggle('darkMode')
    if (document.body.classList.contains('darkMode')){
        themeBtn.innerHTML = '<img width="60" height="60" src="./assets/sunIcon.png" alt="sun--v1"/>';
    } else if (!document.body.classList.contains('darkMode')) {
        themeBtn.innerHTML = '<img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/bright-moon--v1.png" alt="bright-moon--v1"/>';
    }
}
// ? Register at least two different event listeners and create the associated event handler functions.
// todo: Use at least two Browser Object Model (BOM) properties or methods.
// ? Include at least one form and/or input with HTML attribute validation.
// ? Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
const signUpForm = document.getElementById("signUp");
const password = signUpForm.elements.password;
const confirmPassword = signUpForm.elements.confirmPassword;

password.addEventListener("change", handlePasswordValidation);

confirmPassword.addEventListener("change", handlePasswordMatch);

signUpForm.addEventListener('submit', handleSubmit);

function validatePasswordsMatch() {
    const passwordVal = password.value;
    const confirmPasswordVal = confirmPassword.value;
  return passwordVal === confirmPasswordVal;
}

function validatePassword() {
    const passwordVal = password.value;
  //password requirements
  // password should include a mix of uppercase and lowercase letters, numbers, and symbols (at least one of each)
  const lettersAndNumbers = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  const symbols = /[^a-zA-Z0-9\s]/;
  const containsLettersAndNumbers = lettersAndNumbers.test(passwordVal);
  const containsSymbol = symbols.test(passwordVal);
  return containsLettersAndNumbers && containsSymbol;
}

function handlePasswordValidation() {
  if (!validatePassword()) {
    password.setCustomValidity(
      "Password must include a mix of uppercase and lowercase letters, numbers, and symbols."
    );
  }
}

function handlePasswordMatch() {
  if (!validatePasswordsMatch()) {
    confirmPassword.setCustomValidity("Passwords do not match.");
  }
}

function handleSubmit(e) {
  e.preventDefault();
  displaySuccessDiv('Registration successfully captured')
}

function displaySuccessDiv(msg) {
  successDiv.style.display = "flex";
  successDiv.innerHTML = `<p>${msg}</p>`;
}

