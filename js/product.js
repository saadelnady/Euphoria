const sideBar = document.querySelector(".header-content");
const burgerIcon = document.querySelector(".bar");
burgerIcon.onclick = function () {
  sideBar.classList.toggle("active");
};
// ====================================== ======================================

let productId = localStorage.getItem("productId");

let productImg = document.querySelector(".product-container .product-img img ");
let productName = document.querySelector(
  ".product-container .product-info .productName "
);
let productprice = document.querySelector(
  ".product-container .product-info .buttons .price "
);
const products = data;

let selectedProduct = products.find((product) => {
  if (product.id == productId) {
    return product;
  }
});

productImg.src = selectedProduct.img_src;
productName.innerHTML = selectedProduct.name;
productprice.innerHTML = selectedProduct.price;

localStorage.setItem("products", JSON.stringify(data));

document
  .querySelectorAll(".product-info .select-size li")
  .forEach((sizeOption) => {
    sizeOption.addEventListener("click", () => {
      removeAllLisActivation();
      sizeOption.classList.add("active");
      const newProducts = JSON.parse(localStorage.getItem("products"));
      const result = newProducts.map((p) => {
        if (p.id == productId) {
          p.size = sizeOption.getAttribute("data-src");
        }
        return p;
      });
      localStorage.setItem("products", JSON.stringify(result));
    });
  });
document
  .querySelectorAll(".product-info .productColors li")
  .forEach((colorOption) => {
    colorOption.addEventListener("click", () => {
      removeAlColorsLisActivation();
      colorOption.classList.add("active");
      const newProducts = JSON.parse(localStorage.getItem("products"));

      let result = newProducts.map((p) => {
        if (p.id == productId) {
          p.color = colorOption.getAttribute("data-src");
          p.count = 1;
        }
        return p;
      });

      localStorage.setItem("products", JSON.stringify(result));
    });
  });

let sizeLis = document.querySelectorAll(
  ".product-container .product-info .select-size li"
);
let colorsLis = document.querySelectorAll(
  ".product-container .product-info .productColors li"
);
function removeAllLisActivation() {
  sizeLis.forEach((li) => {
    li.classList.remove("active");
  });
}
function removeAlColorsLisActivation() {
  colorsLis.forEach((li) => {
    li.classList.remove("active");
  });
}
let myCart;
if (localStorage.getItem("myCart")) {
  myCart = JSON.parse(localStorage.getItem("myCart"));
} else {
  myCart = [];
}
document
  .querySelector(".product-info .buttons .addToCart")
  .addEventListener("click", () => {
    let products = JSON.parse(localStorage.getItem("products"));
    products.map((p) => {
      if (p.id == productId) {
        myCart.push(p);
        localStorage.setItem("myCart", JSON.stringify(myCart));
      }
    });
  });
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
