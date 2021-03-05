function callAll(jsfiles) {
  var src = document.createElement("script");
  src.setAttribute("type", "text/javascript");
  src.setAttribute("src", jsfiles);
  document.getElementsByTagName("head")[0].appendChild(src);
}

document.addEventListener("DOMContentLoaded", function () {
  window.onload = function () {
    document
      .querySelector("#year")
      .append("thecoello - " + new Date().getFullYear());

    if (window.innerWidth >= 1000) {
      callAll("./js/scroll.js");
      callAll("./js/cursor.js");
      callAll("./js/smoothEffect.js");
    }

    if (window.innerWidth <= 900) {
      callAll("./js/menu.js");
    }
  };
});
