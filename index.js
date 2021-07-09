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
    // buttons.classList.add("show");
    navItems.forEach((item) => {
      item.classList.add("show");
    });
    showMenu = true;
  } else {
    menuToggle.classList.remove("close");
    navLinks.classList.remove("show");
    form.classList.remove("show");
    ///buttons.classList.remove("show");
    navItems.forEach((item) => {
      item.classList.remove("show");
    });
    showMenu = false;
  }
}

const products = document.querySelector(".prod");

const input = document.querySelector(".search-here");
//console.log(input);
let responseData = [];

const main = document.querySelector(".main");

input.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  console.log(searchString);
  console.log(responseData);
  const filteredData = responseData.filter((product) => {
    return product.title.toLowerCase().includes(searchString.toLowerCase());
  });

  //console.log(filteredData);
  createUi(filteredData);
});

async function fetchProducts() {
  const resp = await fetch("https://fakestoreapi.com/products?limit=5");
  responseData = await resp.json();
  console.log(responseData);

  createUi(responseData);
}

/*fetchProducts();

function createUi(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("wrapper");
    div.innerHTML = `
    <div class='wrap'>
              <div class="main-img">
                <img src="${item.image}" alt="" />
              </div>
              <div class="product-details">
                <p>${item.title}</p>
                
                <h4>Price: ${item.price}</h4>
                <div class='btn-con'>
                  <a href='buyshare.html' class=''>Buy/Share</a>
                </div>

                
              </div>
    
    
    </div>`;

    products.append(div);
  });
}
*/

function createUi(data) {
  const htmlString = data
    .map((item) => {
      return `
      <div class='wrapper'>
        <div class='wrap'>
                
                <div class="main-img">
                  <img class='ig' src="${item.image}" alt="" />
                </div>
                <div class="product-details">
                  <p>${item.title}</p>
                  
                  <h4>Price: $${item.price}</h4>
                  
                  
                  
                </div>
      
      
        </div>
      </div>`;
    })
    .join("");

  products.innerHTML = htmlString;

  const wrap = document.querySelectorAll(".wrap");
  //console.log(im);
  trans(wrap);
  //window.location.assign("hello.html");
}

fetchProducts();

/*function trans(wrap) {
  //e.target;
  console.log(im);
  im.forEach((img) => {
    //console.log(img);
    img.addEventListener("click", (e) => {
      console.log(e.target.src);
      const i = e.target.src;
      localStorage.setItem("images", i);
      window.location.assign("hello.html");
      //console.log(see);
    });
    //window.location.assign("hello.html");
  });

  //window.location.assign("hello.html");
  //localStorage.setItem("images", im);
  //console.log("hello");
  //setTimeout(() => {
  //see();
  //}, 2000);
}
//function see() {
//window.location.assign("hello.html");
//}*/

function trans(wrap) {
  //e.target;
  //console.log(wrap);
  //const i = image.parentElement;
  //console.log(i);

  wrap.forEach((item) => {
    item.addEventListener("click", (e) => {
      //const myImage = e.target.childNodes[1].src;
      const myImage = item.childNodes[1].children[0].src;

      const price = item.childNodes[3].children[1].innerText;
      const title = item.childNodes[3].children[0].innerText;

      //const price = item.childNodes[5].children[1].innerText;
      //const title = item.childNodes[5].children[0].innerText;

      const be = { myImage, price, title };
      //console.log(be);

      localStorage.setItem("details", JSON.stringify(be));
      window.location.assign("compare.html");
    });
  });
  //console.log(title);
  //console.log(price);
  /*image.forEach((img) => {
    //console.log(img);
    img.addEventListener("click", (e) => {
      console.log(e.target.src);
      //const u = e.currentTarget;
      //const i = image.parentElement;
      //const eff = e.target.parentElement.parentElement.nextElementSibling;

      localStorage.setItem("images", i);
      window.location.assign("hello.html");
      //console.log(see);
    });
    //window.location.assign("hello.html");
  });*/

  //window.location.assign("hello.html");
  //localStorage.setItem("images", im);
  //console.log("hello");
  //setTimeout(() => {
  //see();
  //}, 2000);
}
