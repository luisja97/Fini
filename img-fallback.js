document.querySelectorAll("img").forEach(function (img) {
  img.addEventListener("error", function () {
    var ph = document.createElement("div");
    ph.className = "img-ph";
    img.replaceWith(ph);
  });
});
