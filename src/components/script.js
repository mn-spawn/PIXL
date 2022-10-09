document.querySelector("#titlepage").addEventListener("keyup", event => {
    if (event.code !== "Enter") return;
    window.location = "/";
    event.preventDefault();
  });
  
  document.querySelector("#titlepage").addEventListener("click", function () {
    window.location = "/";
  });
