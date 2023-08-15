//  Header
// ===========================================================================

const sideBar = document.querySelector(".header-content");
const burgerIcon = document.querySelector(".bar");
burgerIcon.onclick = function () {
  sideBar.classList.toggle("active");
};
// ===========================================================================
// ===========================================================================

// btn scroll to top
let btnScrollTotop = document.getElementsByClassName("scrollTotop")[0];

onscroll = () => {
  if (scrollY >= 200) {
    btnScrollTotop.style.display = "block";
  } else {
    btnScrollTotop.style.display = "none";
  }
};
btnScrollTotop.onclick = () => {
  scroll({ top: 0, behavior: "smooth" });
};

// ===========================================================================
// ===========================================================================
// form validation
let userName = document.getElementById("userName");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");
let messageInput = document.getElementById("message");
let submitInput = document.getElementById("submit");

submitInput.onclick = function (e) {
  let userNameValue = document.getElementById("userName").value;
  let emailInputValue = document.getElementById("email").value;
  let phoneInputValue = document.getElementById("phone").value;
  let messageInputValue = document.getElementById("message").value;
  let errorMessage = document.getElementById("errorMessage");
  e.preventDefault();

  if (userNameValue == "") {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "please insert your name";
  } else if (emailInputValue == "") {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "please insert your email";
  } else if (phoneInputValue == "") {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "please insert your phone number";
  } else if (messageInputValue == "") {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "please insert your message";
  } else {
    const emailReg = /^[a-z0-9]+@[a-z]+\.[a-z]{3}$/;
    const egyptianMobileRegex = /^(?:\+20|0)?1[0-2]\d{8}$/;
    const messageRegex = /^.{1,50}$/;

    const validEmail = emailReg.test(emailInputValue);
    const validPhone = egyptianMobileRegex.test(phoneInputValue);
    const validMessage = messageRegex.test(messageInputValue);

    if (userNameValue.length > 30 || userNameValue.length < 8) {
      errorMessage.style.display = "block";

      errorMessage.innerHTML = "Your FullName is not valid";
    } else if (!validEmail) {
      errorMessage.style.display = "block";

      errorMessage.innerHTML = "Your E-mail is not valid";
    } else if (!validPhone) {
      errorMessage.style.display = "block";

      errorMessage.innerHTML = "Your Mobile phone is not valid";
    } else if (!validMessage) {
      errorMessage.style.display = "block";

      errorMessage.innerHTML = "Your message is not valid";
    } else {
      errorMessage.style.display = "block";

      errorMessage.innerHTML = "your messege sent successfully";

      setTimeout(() => {
        errorMessage.style.display = "none";

        errorMessage.innerHTML = "";
      }, 2000);

      userName.value = "";
      emailInput.value = "";
      phoneInput.value = "";
      messageInput.value = "";
    }
  }
};

// function validateForm(e) {
//   e.preventDefault();

//   const errorMessage = document.getElementById("errorMessage");
//   const userNameValue = document.getElementById("userName").value;
//   const emailInputValue = document.getElementById("email").value;
//   const phoneInputValue = document.getElementById("phone").value;
//   const messageInputValue = document.getElementById("message").value;

//   errorMessage.style.display = "none";
//   errorMessage.innerHTML = "";

//   if (userNameValue === "") {
//     showError(errorMessage, "Please insert your name");
//   } else if (emailInputValue === "") {
//     showError(errorMessage, "Please insert your email");
//   } else if (!validateEmail(emailInputValue)) {
//     showError(errorMessage, "Your E-mail is not valid");
//   } else if (phoneInputValue === "") {
//     showError(errorMessage, "Please insert your phone number");
//   } else if (!validatePhone(phoneInputValue)) {
//     showError(errorMessage, "Your Mobile phone is not valid");
//   } else if (messageInputValue === "") {
//     showError(errorMessage, "Please insert your message");
//   } else if (!validateMessage(messageInputValue)) {
//     showError(errorMessage, "Your message is not valid");
//   } else {
//     showSuccessMessage(errorMessage, "Your message sent successfully");

//     setTimeout(() => {
//       hideErrorMessage(errorMessage);
//       clearFormFields();
//     }, 2000);
//   }
// }

// function showError(element, message) {
//   element.style.display = "block";
//   element.innerHTML = message;
// }

// function showSuccessMessage(element, message) {
//   element.style.display = "block";
//   element.innerHTML = message;
// }

// function hideErrorMessage(element) {
//   element.style.display = "none";
//   element.innerHTML = "";
// }

// function validateEmail(email) {
//   const emailReg = /^[a-z0-9]+@[a-z]+\.[a-z]{3}$/;
//   return emailReg.test(email);
// }

// function validatePhone(phone) {
//   const egyptianMobileRegex = /^(?:\+20|0)?1[0-2]\d{8}$/;
//   return egyptianMobileRegex.test(phone);
// }

// function validateMessage(message) {
//   const messageRegex = /^.{1,50}$/;
//   return messageRegex.test(message);
// }

// function clearFormFields() {
//   document.getElementById("userName").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("phone").value = "";
//   document.getElementById("message").value = "";
// }

// // Attach the event listener to your form
// const form = document.getElementById("contactUsForm");
// form.addEventListener("submit", validateForm);
