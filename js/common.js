document.addEventListener("DOMContentLoaded", function () {

  function loadHTML(id, file) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(err => console.error("Include error:", err));
  }

  loadHTML("site-header", "/Home/includes/header.html");
  loadHTML("site-footer", "/Home/includes/footer.html");

});
