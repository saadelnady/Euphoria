//  Header
const sideBar = document.querySelector(".header-content");
const burgerIcon = document.querySelector(".bar");
burgerIcon.onclick = function () {
  sideBar.classList.toggle("active");
};

// ========================================================================
const myCart = JSON.parse(localStorage.getItem("myCart"));

function emptyCart() {
  let table = document.getElementsByTagName("table")[0];
  let emptyCart = `
                  <div class="sadCart">
                          <img src="./images/bg_sadCart.png" alt="" />
                          <p>Your cart is empty and sad :(</p>
                          <p>Add something to make it happy!</p>
                </div>
      
  `;
  table.innerHTML = emptyCart;
  let total = document.querySelector(".grandTotal");
  total.innerHTML = "";
}
function displayTable() {
  let tBody = document.getElementById("tableBody");
  tBody.innerHTML = "";

  if (!myCart) {
    emptyCart();
  }

  myCart.forEach((productInCart, index) => {
    let tr;
    tr = `
        <tr>
            <td class="product-details">
              <img src=${productInCart.img_src} alt="" />
              <div class="details">
                <h3 class="title">${productInCart.name}</h3>
                <p class="color"> color :${productInCart.color} </p>
                <p class="size"> size :${productInCart.size} </p>
              </div>
            </td>
            <td class="price">${productInCart.price} $</td>
            <td>
              <div class="quantity-buttons">
                <button class="minus" onclick = "decreaseQuantity(${index})">-</button>
                <span class="quantity"  >${productInCart.count}</span>
                <button class="plus" onclick = "increaseQuantity( ${index} )">+</button>
              </div>
            </td>
            <td class="shipping">free</td>
            <td class="total">${
              productInCart.count * productInCart.price
            }  $</td>
            <td>
              <img src="./images/ic_recyclepin.png" alt="" class="delete" onclick = "deleteProductInMyCart(${index})"/>
            </td>
        </tr>
        `;

    tBody.innerHTML += tr;
  });
}
function increaseQuantity(index) {
  myCart[index].count++;

  updateCart();
  displayTable();
  updateGrandTotal();
}

function decreaseQuantity(index) {
  if (myCart[index].count > 1) {
    myCart[index].count--;

    updateCart();
    displayTable();
    updateGrandTotal();
  }
}

function updateCart() {
  localStorage.setItem("myCart", JSON.stringify(myCart));
}

displayTable();

function updateGrandTotal() {
  let grandTotal = document.querySelector(".grandTotal .total");
  grandTotal.innerHTML = getGrandTotal();
  if (!getGrandTotal()) {
    emptyCart();
  }
}
function getGrandTotal() {
  let total = 0;
  myCart.map((product) => {
    return (total += product.count * product.price);
  });

  return total;
}
updateGrandTotal();

function deleteProductInMyCart(index) {
  myCart.splice(index, 1);
  localStorage.setItem("myCart", JSON.stringify(myCart));
  displayTable();
  updateGrandTotal();
}
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
