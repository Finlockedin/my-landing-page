function openmenu() {
    document.getElementById("sidemenu").style.transform = "translateX(0)"; // This will move the menu into the viewport from the right
}

function closemenu() {
    document.getElementById("sidemenu").style.transform = "translateX(100%)"; // This will move the menu back outside the right side of the viewport
}
