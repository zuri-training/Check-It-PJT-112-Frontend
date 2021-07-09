// DOM items SELECTIONS

const menuToggle = document.querySelector(".menu-toggle-btn");
const navLinks = document.querySelector(".nav-list-items");
const navItems = document.querySelectorAll(".lists");
const form = document.querySelector(".form");

//const buttons = document.querySelector(".bottons");

//init for DOM manipulation

let showMenu = false;

menuToggle.addEventListener("click", toggle);

function toggle() {
  if (!showMenu) {
    //the javascript toggle method can also be used here
    menuToggle.classList.add("close");
    navLinks.classList.add("show");
    form.classList.add("show");
    //buttons.classList.add("show");
    navItems.forEach((item) => {
      item.classList.add("show");
    });
    showMenu = true;
  } else {
    menuToggle.classList.remove("close");
    navLinks.classList.remove("show");
    form.classList.remove("show");
    //buttons.classList.remove("show");
    navItems.forEach((item) => {
      item.classList.remove("show");
    });
    showMenu = false;
  }
}

const img = document.querySelector(".d");
const det = document.querySelector(".det");
const btn = document.querySelector(".btn");
const tit = window.document.URL;
console.log(tit);
window.addEventListener("DOMContentLoaded", hello);

function hello() {
  const d = JSON.parse(localStorage.getItem("details"));
  det.innerText = d.title;

  console.log(d.myImage);
  //console.log(d.title);

  if (d) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div><img src=${d.myImage}  /></div>
        <div class='details'>
            <p>${d.title}</p>
            <h4>$${d.price}</h4>
        
        </div>
      
      `;
    //const i = document.createElement("img");
    //i.src = d.myImage;
    //console.log(i);

    img.append(div);
  }

  btn.addEventListener("click", () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${d.price}`,
          text: `${d.title}`,
          url: `${tit}`,
        })
        .then(() => {
          console.log("Thanks for sharing");
        })
        .catch(console.error);
    } else {
      alert("You do not have access to share");
    }
  });
}
