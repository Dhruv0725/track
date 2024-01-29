import { getUsers, updateUser } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  let users = getUsers();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  //console.log(currentUser);
  if (currentUser) {
    const usernameElement = document.getElementById("username");
    const designationElement = document.getElementById("designation");
    const addressElement = document.getElementById("address");
    const contactNumberElement = document.getElementById("contactNumber");
    const emailElement = document.getElementById("email");
    const linkElement = document.getElementById("link");
    const languageElement = document.getElementById("language");

    usernameElement.textContent =
      currentUser.firstName + " " + currentUser.lastName;
    designationElement.textContent = currentUser.designation;
    addressElement.textContent = currentUser.address;
    contactNumberElement.textContent = currentUser.contactNumber;
    emailElement.textContent = currentUser.email;
    linkElement.querySelector("a").href = currentUser.link;
    languageElement.textContent = currentUser.language;

    // Add or remove classes as needed
    usernameElement.classList.add("profile-details");
    designationElement.classList.add("card-subtitle");
    addressElement.classList.add("profile-details");
    contactNumberElement.classList.add("profile-details");
    emailElement.classList.add("profile-details");
    linkElement.classList.add("profile-details");
    languageElement.classList.add("profile-details");
  } else {
    console.log("Invalid input");
    window.location.href = "/index.html";
  }
});
