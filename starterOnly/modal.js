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
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function checkFirstName() {
  text = document.getElementById("first");
  if (text.value.length < 2) {
    document.querySelector(".checkName").style.display = "block";
    firstNameBool = false;
  } else if (text.value.length >= 2) {
    document.querySelector(".checkName").style.display = "none";
    firstNameBool = true;
  }
}

function checkLastName() {
  text = document.getElementById("last");
  if (text.value.length < 2) {
    document.querySelector(".checkLast").style.display = "block";
    LastNameBool = false;
  } else if (text.value.length >= 2) {
    document.querySelector(".checkLast").style.display = "none";
    LastNameBool = true;
  }
}

function checkEmail() {
  text = document.getElementById("email");
  if (isEmail(text.value)) {
    document.querySelector(".checkEmail").style.display = "none";
    emailBool = true;
  } else {
    document.querySelector(".checkEmail").style.display = "block";
    emailBool = false;
  }
}

function checkNum() {
  text = document.getElementById("quantity");
  if (isNaN(Number(text.value))) {
    document.querySelector(".checkQuantity").style.display = "block";
    isNum = false;
  } else {
    document.querySelector(".checkQuantity").style.display = "none";
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

//Check if the form is valid
function validate() {
  event.preventDefault();
  if (!validRadio()) {
    alert("Please check at least one radio button");
    return false;
  }
  if (!document.getElementById("checkbox1").checked) {
    alert("Please accept the terms of service");
    return false;
  }
  if (document.getElementById("birthdate").value === "") {
    // alert("Please enter a birth date");
    document.querySelector(".checkDate").style.display = "block";
    return false;
  } else {
    document.querySelector(".checkDate").style.display = "none";
  }
  if (!emailBool) {
    alert("Please enter a valid email");
    return false;
  }
  if (!firstNameBool) {
    alert("Please enter a valid first name");
    return false;
  }

  if (!LastNameBool) {
    alert("Please enter a valid last name");
    return false;
  }

  if (!isNum) {
    alert("Please enter a valid number of tourneys");
    document.querySelector(".checkQuantity").style.display = "block";
    return false;
  }

  document.querySelector(".modal-cl").style.display = "none";
  document.querySelector(".modal-confirm").style.display = "block";

  return true;
}
