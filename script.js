import { getUsers } from "./data.js";
const users = getUsers();

document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    // const newPath = "/webpage.html";
    // let newUrl = currentPath.replace(/\/$/, "") + newPath;
    // newUrl = newUrl.replace("/index.html", "");
    //console.log(newUrl);
    window.location.href = "webpage.html";
  }

  const handleLogin = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));

    // const currentPath = window.location.pathname;

    // const newPath = "/webpage.html";
    // let newUrl = currentPath.replace(/\/$/, "") + newPath;
    // newUrl = newUrl.replace("/index.html", "");
    //console.log(newUrl);
    window.location.href = "webpage.html";
  };

  const loginForm = document.querySelector("form");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    //console.log("clicked");
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    const userf = users.find((u) => u.username === user && u.password === pass);

    if (userf) {
      handleLogin(userf);
    } else {
      alert("Invalid username or password");
    }
  });
});
