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

  if (
    userNameValue == "" ||
    emailInputValue == "" ||
    phoneInputValue == "" ||
    messageInputValue == ""
  ) {
    errorMessage.style.display = "block";
  }
  if (userNameValue == "") {
    errorMessage.innerHTML = "please insert your name";
  } else if (emailInputValue == "") {
    errorMessage.innerHTML = "please insert your email";
  } else if (phoneInputValue == "") {
    errorMessage.innerHTML = "please insert your phone number";
  } else if (messageInputValue == "") {
    errorMessage.innerHTML = "please insert your message";
  } else {
    const userNameReg = new RegExp("^[a-zA-Z]{3,10}[ ]{0,1}[a-zA-Z]{2,10}$");
    const emailReg = /^[a-z0-9]+@[a-z]+\.[a-z]{3}$/;
    const egyptianMobileRegex = /^(?:\+20|0)?1[0-2]\d{8}$/;
    const messageRegex = /^.{1,50}$/;

    const validUserName = userNameReg.test(userNameValue);
    const validEmail = emailReg.test(emailInputValue);
    const validPhone = egyptianMobileRegex.test(phoneInputValue);
    const validMessage = messageRegex.test(messageInputValue);

    errorMessage.style.display = "block";
    errorMessage.style.color = "red";

    if (!validUserName) {
      errorMessage.innerHTML = "Your FullName is not valid";
    } else if (!validEmail) {
      errorMessage.innerHTML = "Your E-mail is not valid";
    } else if (!validPhone) {
      errorMessage.innerHTML = "Your Mobile phone is not valid";
    } else if (!validMessage) {
      errorMessage.innerHTML = "Your message is not valid";
    } else {
      errorMessage.innerHTML = "your messege sent successfully";
      errorMessage.style.color = "green";

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
