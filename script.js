// 🧺 Cart logic
const buttons = document.querySelectorAll('.toggle-btn');
const cartItems = document.getElementById('cartItems');
const totalDisplay = document.getElementById('total');

let cart = [];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);

    if (button.classList.contains('add')) {
      addToCart(name, price);
      button.textContent = "Remove Item";
      button.classList.remove('add');
      button.classList.add('remove');
    } else {
      removeFromCart(name);
      button.textContent = "Add Item";
      button.classList.remove('remove');
      button.classList.add('add');
    }
    updateCartDisplay();
  });
});

function addToCart(name, price) {
  cart.push({ name, price });
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
}

function updateCartDisplay() {
  if (cart.length === 0) {
    cartItems.textContent = "No items added.";
    totalDisplay.textContent = "0";
    return;
  }

  let total = 0;
  cartItems.innerHTML = "";
  cart.forEach((item, i) => {
    total += item.price;
    cartItems.innerHTML += `${i + 1}. ${item.name} - ₹${item.price}<br>`;
  });
  totalDisplay.textContent = total;
}

// 🧾 Auto-scroll for "Book a Service" button
document.getElementById('scrollBtn').addEventListener('click', () => {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

// 📧 Web3Forms Integration
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  const cartData = cart.map(item => `${item.name} - ₹${item.price}`).join(", ");
  const total = totalDisplay.textContent;

  document.getElementById("cartData").value = cartData || "No items";
  document.getElementById("totalAmount").value = `₹${total}`;
});

