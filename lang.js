(function () {
  const KEY = "fino-lang";
  const overlay = document.getElementById("lang-gate");
  if (!overlay) return;

  const saved = localStorage.getItem(KEY);
  const here = location.pathname.split("/").pop() || "index.html";
  const isEs = here.endsWith("-es.html") || here.includes("-es");

  function go(lang) {
    localStorage.setItem(KEY, lang);
    const mapEn = {
      "index-es.html": "index.html",
      "services-es.html": "services.html",
      "areas-es.html": "areas.html",
      "reviews-es.html": "reviews.html",
      "about-es.html": "about.html",
      "contact-es.html": "contact.html",
    };
    const mapEs = {
      "index.html": "index-es.html",
      "services.html": "services-es.html",
      "areas.html": "areas-es.html",
      "reviews.html": "reviews-es.html",
      "about.html": "about-es.html",
      "contact.html": "contact-es.html",
      "": "index-es.html",
    };
    if (lang === "es" && !isEs) location.href = mapEs[here] || "index-es.html";
    else if (lang === "en" && isEs) location.href = mapEn[here] || "index.html";
    else overlay.hidden = true;
  }

  if (!saved) overlay.hidden = false;
  else if (saved === "es" && !isEs) go("es");
  else if (saved === "en" && isEs) go("en");
  else overlay.hidden = true;

  overlay.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => go(btn.getAttribute("data-lang")));
  });
})();
