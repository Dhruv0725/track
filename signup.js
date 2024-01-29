import { getUsers } from "./data.js";

const userList = getUsers();
document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  //console.log(localStorage.getItem("currentUser"));
  //console.log(currentUser);
  if (!currentUser) {
    // const currentPath = window.location.pathname;

    // const newPath = "/index.html";
    // const newUrl = currentPath.replace("/signup.html", "") + newPath;

    window.location.href = "index.html";
  }
  //console.log(document.querySelector(".myForm"));
  // document.querySelector(".signupsubmit").addEventListener("click", () => {
  //   console.log("djdjfk");
  // });

  document.querySelector(".myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("logged");
    // console.log(e);
    validateSignUpForm();

    /*-------------------*/
  });
});

function validateSignUpForm() {
  // Retrieve form data
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dateOfBirth = document.getElementById("dateOfBirth").value;
  const employeeID = document.getElementById("employeeID").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  //const profilePicture = document.getElementById("profilePicture").value;
  //const designation = document.getElementById("designation").value;
  const contactNumber = document.getElementById("contactNumber").value;
  const address = document.getElementById("address").value;

  // Validation logic
  if (
    !firstName ||
    !lastName ||
    !dateOfBirth ||
    !employeeID ||
    !email ||
    !password ||
    !contactNumber ||
    !address
  ) {
    alert("All fields are required.");
    return false;
  }

  let age = calculateAge(new Date(dateOfBirth));
  if (age < 20) {
    alert("User must be at least 20 years old.");
    return false;
  }

  if (!isUniqueEmployeeID(employeeID)) {
    alert("Employee ID should be unique, number, and non-empty.");
    return false;
  }

  if (!isValidContactNumber(contactNumber)) {
    alert("Contact Number should be a 10-digit number.");
    return false;
  }

  const language = document.getElementById("language").value;
  if (language !== "English" && language !== "Hindi") {
    alert("Language should be either English or Hindi.");
    return false;
  }

  const newUser = {
    username: email,
    password: password,
    firstName,
    lastName,
    email,
    age: age,
    employeeID: parseInt(employeeID),
    contactNumber: contactNumber,
    language: language,
    profilePicture: profilePicture,
    designation: "Programmer",
    address: address,
  };

  localStorage.setItem("currentUser", JSON.stringify(newUser));
  // const currentPath = window.location.pathname;

  // const newPath = "/webpage.html";
  // const newUrl = currentPath.replace("/signup.html", "") + newPath;
  // console.log(newUrl);
  window.location.href = "webpage.html";
  // console.log(currentUser);
}

function calculateAge(birthDate) {
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function isUniqueEmployeeID(employeeID) {
  return userList.every(function (user) {
    return user.employeeID !== parseInt(employeeID);
  });
}

function isValidContactNumber(contactNumber) {
  return /^\d{10}$/.test(contactNumber);
}
