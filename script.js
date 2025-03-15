let cart = [];
let totalPrice = 0;

const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
const cartItemsList = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const checkoutButton = document.getElementById("checkout-button");
const closeCartButton = document.getElementById("close-cart");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Function to update cart display
function updateCart() {
    cartItemsList.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
    });
    totalPriceElement.textContent = totalPrice.toFixed(2);
    cartButton.textContent = `Cart (${cart.length})`;
}

// Function to add item to cart
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));
        cart.push({ name, price });
        totalPrice += price;
        updateCart();
    });
});

// Open the cart modal
cartButton.addEventListener("click", () => {
    cartModal.style.display = "flex";
});

// Close the cart modal
closeCartButton.addEventListener("click", () => {
    cartModal.style.display = "none";
});

// Handle checkout
checkoutButton.addEventListener("click", () => {
    alert(`Checkout successful! Total: $${totalPrice.toFixed(2)}`);
    cart = [];
    totalPrice = 0;
    updateCart();
    cartModal.style.display = "none";
});
