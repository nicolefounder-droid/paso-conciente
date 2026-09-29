(function () {
  "use strict";
  var cfg = window.SITE_CONFIG || { bookingUrl: "", links: {} };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- Real links from config.js ---- */
  function isExternal(url) { return /^https?:\/\//i.test(url); }
  if (cfg.bookingUrl) {
    $$("[data-cta]").forEach(function (a) {
      a.setAttribute("href", cfg.bookingUrl);
      if (isExternal(cfg.bookingUrl)) { a.target = "_blank"; a.rel = "noopener"; }
    });
  }
  $$("[data-todo]").forEach(function (a) {
    var url = (cfg.links || {})[a.getAttribute("data-todo")];
    if (url) {
      a.setAttribute("href", url);
      if (isExternal(url)) { a.target = "_blank"; a.rel = "noopener"; }
    } else {
      a.addEventListener("click", function (e) { e.preventDefault(); });
    }
  });

  /* ---- Header: solid background after scrolling ---- */
  var header = $("#site-header");
  function onScroll() { header.classList.toggle("is-stuck", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var btn = $("#menu-btn");
  var menu = $("#menu-movil");
  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    header.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.style.overflow = open ? "hidden" : "";
  }
  btn.addEventListener("click", function () { setMenu(!menu.classList.contains("is-open")); });
  $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  window.matchMedia("(min-width:1024px)").addEventListener("change", function (m) { if (m.matches) setMenu(false); });

  /* ---- Nav highlight while scrolling ---- */
  var ids = ["inicio", "metodo", "sobre-mi", "paquetes", "preguntas"];
  var sections = ids.map(function (id) { return document.getElementById(id); });
  function spy() {
    var y = window.scrollY + window.innerHeight * 0.35, current = "inicio";
    sections.forEach(function (s) { if (s && s.offsetTop <= y) current = s.id; });
    $$("[data-spy]").forEach(function (a) {
      if (a.getAttribute("data-spy") === current) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", spy, { passive: true });
  window.addEventListener("resize", spy);
  spy();

  /* ---- FAQ: one open at a time ---- */
  var items = $$(".faq-item");
  items.forEach(function (item) {
    var q = $(".faq-q", item);
    q.addEventListener("click", function () {
      var wasOpen = item.classList.contains("is-open");
      items.forEach(function (o) {
        o.classList.remove("is-open");
        $(".faq-q", o).setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) { item.classList.add("is-open"); q.setAttribute("aria-expanded", "true"); }
    });
  });
})();
