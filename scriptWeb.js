document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  //console.log(currentUser);
  if (!currentUser) {
    // const currentPath = window.location.pathname;

    // const newPath = "/index.html";
    // const newUrl = currentPath.replace("/webpage.html", "") + newPath;

    window.location.href = "index.html";
  }

  document.querySelector("#logoutbutton").addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    // const currentPath = window.location.pathname;

    // const newPath = "/index.html";
    // const newUrl = currentPath.replace("/webpage.html", "") + newPath;
    window.location.href = "index.html";
  });
});
