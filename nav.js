(function () {
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav.desk");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    document.body.classList.toggle("nav-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
      document.body.classList.remove("nav-open");
    });
  });
})();
