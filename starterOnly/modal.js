function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".modal");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClBtn = document.querySelector(".close");
const modalConfCl = document.querySelector(".confirm-button");

// Variables for testing

let text = "";
let firstNameBool = false;
let LastNameBool = false;
let emailBool = false;
let isNum = false;

//check if a String is an email
const isEmail = function (email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClBtn.addEventListener("click", closeModal);

// close modal after confirmation

modalConfCl.addEventListener("click", closeModal);

//checking the first name
document.getElementById("first").addEventListener("keyup", checkFirstName);

//checking the last name
document.getElementById("last").addEventListener("keyup", checkLastName);

//checking the email
document.getElementById("email").addEventListener("keyup", checkEmail);

//checking the number given
document.getElementById("quantity").addEventListener("input", checkNum);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  document.querySelector(".modal-cl").style.display = "block";
  document.querySelector(".modal-confirm").style.display = "none";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function checkFirstName() {
  text = document.getElementById("first");
  if (text.value.length < 2) {
    toggleError(".checkName");
    firstNameBool = false;
  } else if (text.value.length >= 2) {
    toggleError(".checkName", "none");
    firstNameBool = true;
  }
}

function checkLastName() {
  text = document.getElementById("last");
  if (text.value.length < 2) {
    toggleError(".checkLast");
    LastNameBool = false;
  } else if (text.value.length >= 2) {
    toggleError(".checkLast", "none");
    LastNameBool = true;
  }
}

function checkEmail() {
  text = document.getElementById("email");
  if (isEmail(text.value)) {
    toggleError(".checkEmail", "none");
    emailBool = true;
  } else {
    toggleError(".checkEmail");
    emailBool = false;
  }
}

function checkNum() {
  text = document.getElementById("quantity");
  console.log("Calling checknum", text.value);
  if (!text.value.length || isNaN(text.value)) {
    toggleError(".checkQuantity");
    isNum = false;
  } else {
    toggleError(".checkQuantity", "none");
    isNum = true;
  }
}

// Check if at least a radio is checked
function validRadio() {
  for (let i = 1; i <= 6; i++) {
    if (document.getElementById(`location${i}`).checked) {
      return true;
    }
  }
  return false;
}
function toggleError(selector, display = "block") {
  document.querySelector(selector).style.display = display;
}
//Check if the form is valid
function validate() {
  event.preventDefault();
  if (!firstNameBool) {
    toggleError(".checkName");
    alert("Please enter a valid first name");
    return false;
  }

  if (!LastNameBool) {
    toggleError(".checkLast");
    alert("Please enter a valid last name");
    return false;
  }
  if (!emailBool) {
    toggleError(".checkEmail");
    alert("Please enter a valid email");
    return false;
  }
  if (document.getElementById("birthdate").value === "") {
    // alert("Please enter a birth date");
    toggleError(".checkDate");
    return false;
  } else {
    toggleError(".checkDate", "none");
  }

  if (!isNum) {
    alert("Please enter a valid number of tourneys");
    toggleError(".checkQuantity");
    return false;
  }

  if (!validRadio()) {
    alert("Please check at least one radio button");
    return false;
  }
  if (!document.getElementById("checkbox1").checked) {
    alert("Please accept the terms of service");
    return false;
  }

  document.querySelector(".modal-cl").style.display = "none";
  document.querySelector(".modal-confirm").style.display = "block";
  document.querySelector("form").reset();
  return true;
}
