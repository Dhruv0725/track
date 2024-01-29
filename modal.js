import { getUsers, updateUser } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const myModal = new bootstrap.Modal(document.getElementById("modalbar"));

  document.querySelector(".edit").addEventListener("click", function () {
    myModal.show();
  });

  document.getElementById("editForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const formElements = e.target.elements;

    const formData = {};

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];

      if (element.nodeName === "INPUT") {
        formData[element.id] = element.value.length != 0 ? element.value : null;
      }
    }
    const users = getUsers();
    // console.log(users);
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      //console.log("IN modal");
      //console.log(currentUser.username);
      updateUser(currentUser.username, formData);
      updatelocalUser(currentUser, formData);
      //console.log(users);

      /*------doing updation*/
      const user = currentUser.username;
      const pass = currentUser.password;

      //console.log(currentUser);
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
    }
  });

  document
    .getElementById("savechangesbutton")
    .addEventListener("click", function () {
      myModal.hide();
      document.body.classList.remove("modal-open");
      var modalBackdrop = document.getElementsByClassName("modal-backdrop")[0];
      modalBackdrop.parentNode.removeChild(modalBackdrop);
    });
});

function updatelocalUser(user, updatedData) {
  for (const prop in updatedData) {
    if (user.hasOwnProperty(prop) && updatedData[prop] !== null) {
      user[prop] = updatedData[prop];
      // console.log(prop);
      if (prop == "firstName" || prop == "lastName") {
        //   console.log(prop);
        user["name"] = user["firstName"] + " " + user["lastName"];
      }
    }
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
}
