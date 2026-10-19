// Loads each Vega-Lite spec in /specs and draws it into its figure.
// The shared look (fonts, colours) lives in specs/theme.json.
(function () {
  function draw(theme) {
    document.querySelectorAll(".chart[data-spec]").forEach(function (el) {
      var name = el.getAttribute("data-spec");
      vegaEmbed(el, "specs/" + name + ".vl.json", {
        config: theme,
        actions: false,
        renderer: "svg"
      }).catch(function (err) {
        el.textContent = "Sorry, this chart did not load.";
        console.error(name, err);
      });
    });
  }

  fetch("specs/theme.json")
    .then(function (r) { return r.json(); })
    .catch(function () { return {}; })
    .then(function (theme) {
      // wait for the web fonts so text is measured correctly
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function () { draw(theme); });
      } else {
        draw(theme);
      }
    });
})();
