const btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav.desk");
if (btn && nav) {
  btn.addEventListener("click", () => nav.classList.toggle("open"));
}
