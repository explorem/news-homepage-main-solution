const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".hamburger__closed");
const menuIcon = document.querySelector(".hamburger__opened");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)