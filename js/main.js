const products = data;
//  Header
const sideBar = document.querySelector(".header-content");
const burgerIcon = document.querySelector(".bar");
burgerIcon.onclick = function () {
  sideBar.classList.toggle("active");
};
// =======================================================
//    slides
const landingDiv = document.querySelector(".landing");
const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");
const buttons = document.querySelectorAll(".hero .landing .bullets span");
let i = 1;
function nextSlide() {
  checker();
  landingDiv.style.backgroundImage = `url(./images/bg_landing_${i}.jpg)`;
  updateActiveBullet();
  i++;
}

function previouseSlide() {
  checker();
  landingDiv.style.backgroundImage = `url(./images/bg_landing_${i}.jpg)`;
  updateActiveBullet();
  i--;
}

function checker() {
  if (i === 0) {
    i = 4;
  } else if (i === 5) {
    i = 1;
  }
}

setInterval(nextSlide, 4000);
nextBtn.onclick = nextSlide;
previousBtn.onclick = previouseSlide;

buttons.forEach((button, index) => {
  button.onclick = function () {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
    i = index + 1; // Update the index based on the clicked bullet
    landingDiv.style.backgroundImage = `url(./images/bg_landing_${i}.jpg)`;
  };
});

// products
let cardsContainer = document.querySelector(".products .cards");
let productsButtons = document.querySelectorAll(".products > button");

function getData() {
  productsButtons.forEach((button) => {
    button.onclick = function () {
      removeActivationFromButtons();
      this.classList.add("active");

      cardsContainer.innerHTML = "";

      if (this.id === "men") {
        getMenData();
      } else if (this.id === "women") {
        getWomenData();
      } else {
        getAllData();
      }
    };
  });
}

getData();

function updateActiveBullet() {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  buttons[i - 1].classList.add("active");
}

function removeActivationFromButtons() {
  productsButtons.forEach((button) => {
    button.classList.remove("active");
  });
}

function getMenData() {
  let menProductsData = products.filter((menProduct) => {
    if (menProduct.type === "men") {
      return menProduct;
    }
  });
  menProductsData.forEach((menProduct) => {
    let { id, name, img_src } = menProduct;

    let card = `
    <div class="card">
        <img src="${img_src}" alt="" />
        <div class="text">
          <p>${name}</p>
          <a href="./product.html"  class="productInfo" onclick = "showDetails(${id})">Explore Now!</a>
          <img src="./images/ic_blackarrowright.png" alt="" />
        </div>
   </div>
`;
    cardsContainer.innerHTML += card;
  });
}

getMenData();

function getWomenData() {
  let womenProductsData = products.filter((womenProduct) => {
    if (womenProduct.type === "women") {
      return womenProduct;
    }
  });
  womenProductsData.forEach((womenProduct) => {
    let { name, id, img_src } = womenProduct;

    let card = `
    <div class="card">
        <img src="${img_src}" alt="" />
        <div class="text">
          <p>${name}</p>
          <a href="./product.html" class="productInfo" onclick ="showDetails(${id})">Explore Now!</a>
          <img src="./images/ic_blackarrowright.png" alt="" />
        </div>
       </div>
        `;
    cardsContainer.innerHTML += card;
  });
}

function getAllData() {
  let allData = products.filter((data) => {
    return data;
  });
  allData.forEach((data) => {
    let { name, id, img_src } = data;

    let card = `
    <div class="card">
        <img src="${img_src}" alt="" />
        <div class="text">
          <p>${name}</p>
          <a href="./product.html" class="productInfo" onclick ="showDetails(${id})">Explore Now!</a>
          <img src="./images/ic_blackarrowright.png" alt="" />
        </div>
       </div>
        `;
    cardsContainer.innerHTML += card;
  });
}

function showDetails(id) {
  localStorage.setItem("productId", id);
  console.log(id);
}

// Get references to HTML elements
const searchInput = document.getElementById("searchInput");

// Function to perform search and display matching products
function performSearch() {
  const searchText = searchInput.value;
  const filteredProducts = products.filter((product) =>
    product.name.includes(searchText)
  );

  // Clear previous products
  cardsContainer.innerHTML = "";

  // Display search results
  filteredProducts.forEach((product) => {
    let card = `
    <div class="card">
        <img src="${product.img_src}" alt="" />
        <div class="text">
          <p>${product.name}</p>
          <a href="./product.html" class="productInfo" onclick ="showDetails(${product.id})">Explore Now!</a>
          <img src="./images/ic_blackarrowright.png" alt="" />
        </div>
       </div>
        `;
    cardsContainer.innerHTML += card;
  });
}

// Attach event listener to the search input
searchInput.addEventListener("input", performSearch);
// ========================================================

// scroll to top button

// btn scroll to top
let btnScrollTotop = document.getElementsByClassName("scrollTotop")[0];

onscroll = () => {
  if (scrollY >= 200) {
    btnScrollTotop.style.display = "block";
  } else {
    btnScrollTotop.style.display = "none";
  }
};
btnScrollTotop.onclick = () => {
  scroll({ top: 0, behavior: "smooth" });
};
