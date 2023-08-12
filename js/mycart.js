//  Header
const sideBar = document.querySelector(".header-content");
const burgerIcon = document.querySelector(".bar");
burgerIcon.onclick = function () {
  sideBar.classList.toggle("active");
};
// ========================================================================

let myCart = JSON.parse(localStorage.getItem("myCart"));

console.log(myCart);
myCart.forEach((object) => {
  let tBody = document.getElementById("tableBody");
  console.log(object);

  let tr = `
        <tr>
            <td class="product-details">
              <img src="./images/11.png" alt="" />
              <div class="details">
                <h3 class="title">Blue Flower Print Crop Top</h3>
                <p class="color">Color : Yellow</p>
                <p class="size">Size : M</p>
              </div>
            </td>
            <td class="price">$29.00</td>
            <td>
              <div class="quantity-buttons">
                <button class="minus">-</button>
                <span class="amount">1</span>
                <button class="plus">+</button>
              </div>
            </td>
            <td class="shipping">free</td>
            <td class="total">$ 29.00</td>
            <td>
              <img src="./images/ic_recyclepin.png" alt="" class="delete" />
            </td>
        </tr>
`;
  tBody.innerHtml += tr;
});
