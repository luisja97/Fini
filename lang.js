(function () {
  const KEY = "fino-lang";
  const overlay = document.getElementById("lang-gate");
  const here = (location.pathname.split("/").pop() || "index.html");
  const isEs = here.indexOf("-es") !== -1;

  function dest(lang) {
    const toEs = {
      "index.html": "index-es.html",
      "services.html": "services-es.html",
      "areas.html": "areas-es.html",
      "reviews.html": "reviews-es.html",
      "about.html": "about-es.html",
      "contact.html": "contact-es.html",
      "": "index-es.html"
    };
    const toEn = {
      "index-es.html": "index.html",
      "services-es.html": "services.html",
      "areas-es.html": "areas.html",
      "reviews-es.html": "reviews.html",
      "about-es.html": "about.html",
      "contact-es.html": "contact.html"
    };
    return lang === "es" ? (toEs[here] || "index-es.html") : (toEn[here] || "index.html");
  }

  function go(lang) {
    localStorage.setItem(KEY, lang);
    if ((lang === "es" && !isEs) || (lang === "en" && isEs)) {
      location.href = dest(lang);
    } else if (overlay) overlay.hidden = true;
  }

  window.finoSetLang = go;

  if (overlay) {
    const saved = localStorage.getItem(KEY);
    if (!saved) overlay.hidden = false;
    else overlay.hidden = true;

    overlay.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", function () { go(btn.getAttribute("data-lang")); });
    });
  }
})();
