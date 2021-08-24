function footerText() {
    let footerText = document.getElementById("game__footer");
    footerText.innerHTML = `Jerome Kithinji, ${new Date().getFullYear()}. `;
    console.log(footerText.innerHTML);
};

footerText();

console.log("it works");
