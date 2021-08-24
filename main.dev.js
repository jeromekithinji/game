"use strict";

function footerText() {
  var footerText = document.getElementById("game__footer");
  footerText.innerHTML = "Jerome Kithinji, ".concat(new Date().getFullYear(), ". ");
  console.log(footerText.innerHTML);
}

;
footerText();
console.log("it works");