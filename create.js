/*const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click" , mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
}

const navItem = document.querySelectorAll(".nav-item");

navItem.forEach(n => n.addEventListener("click" . closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}*/

// DOM items SELECTIONS

const menuToggle = document.querySelector(".menu-toggle-btn");
const navLinks = document.querySelector(".nav-list-items");
const navItems = document.querySelectorAll(".lists");
const form = document.querySelector(".form");
const buttons = document.querySelector(".bottons");

//init for DOM manipulation

let showMenu = false;

menuToggle.addEventListener("click", toggle);

function toggle() {
  if (!showMenu) {
    //the javascript toggle method can also be used here
    menuToggle.classList.add("close");
    navLinks.classList.add("show");
    form.classList.add("show");
    buttons.classList.add("show");
    navItems.forEach((item) => {
      item.classList.add("show");
    });
    showMenu = true;
  } else {
    menuToggle.classList.remove("close");
    navLinks.classList.remove("show");
    form.classList.remove("show");
    buttons.classList.remove("show");
    navItems.forEach((item) => {
      item.classList.remove("show");
    });
    showMenu = false;
  }
}
