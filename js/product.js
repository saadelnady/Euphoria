const products = data;

// // ======================================
const sideBar = document.querySelector(".header-content");
const burgerIcon = document.querySelector(".bar");
burgerIcon.onclick = function () {
  sideBar.classList.toggle("active");
};

let productId = localStorage.getItem("productId");

let productImg = document.querySelector(".product-container .product-img img ");
let productName = document.querySelector(
  ".product-container .product-info .productName "
);
let productSalary = document.querySelector(
  ".product-container .product-info .buttons .salary "
);
let selectedProduct = products.find((product) => {
  if (product.id == productId) {
    return product;
  }
});

productImg.src = selectedProduct.img_src;
productName.innerHTML = selectedProduct.name;
productSalary.innerHTML = selectedProduct.salary;

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

let productInCart = {
  productId: localStorage.getItem("productId"),
  color: "untitled",
  size: "untitled",
};

document
  .querySelectorAll(".product-info .select-size li")
  .forEach((sizeOption) => {
    sizeOption.addEventListener("click", () => {
      removeAllLisActivation();
      sizeOption.classList.add("active");
      productInCart.size = sizeOption.innerHTML;
    });
  });

document
  .querySelectorAll(".product-info .productColors li")
  .forEach((colorOption) => {
    colorOption.addEventListener("click", () => {
      removeAlColorsLisActivation();
      colorOption.classList.add("active");
      productInCart.color = colorOption.dataset.src;
    });
  });

const myCart = [];
document
  .querySelector(".product-info .buttons .addToCart")
  .addEventListener("click", () => {
    myCart.push(productInCart);
    localStorage.setItem("myCart", JSON.stringify(myCart));
  });
