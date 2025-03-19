fetch("../assets/insert-html/nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("nav-bar").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error loading nav file:", error);
  });
