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

const main = document.querySelector(".main");

const apiUrl = "https://fakestoreapi.com/products";

async function fetchProducts() {
  const resp = await fetch("https://fakestoreapi.com/products");
  const responseData = await resp.json();
  console.log(responseData);

  createUi(responseData);
}

fetchProducts();

function createUi(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("wrapper");
    div.innerHTML = ` <div class='wrap'>
              <h3>${item.category}</h3>
              <div class="main-img">
                <img src="${item.image}" alt="" />
              </div>
              <div class="product-details">
                <p>${item.title}</p>
                
                <h4>Price: ${item.price}</h4>
                <div class='btn-con'>
                  <a href='buyshare.html' class=''>Buy/Share</a>
                </div>
                <div class='desc'>
                  <h4>Description</h4>
                  <p>${item.description}</p>
                </div>
                
              </div>
    
    
    </div>`;

    main.append(div);
  });
}
