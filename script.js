let total = 0;
const totalEl = document.getElementById("total");
const cartItems = document.getElementById("cartItems");
const thankMsg = document.getElementById("thankMsg");

document.querySelectorAll(".add").forEach(btn => {
  btn.addEventListener("click", () => {
    total += parseInt(btn.dataset.price);
    updateCart();
  });
});

document.querySelectorAll(".remove").forEach(btn => {
  btn.addEventListener("click", () => {
    const price = parseInt(btn.dataset.price);
    if (total - price >= 0) total -= price;
    updateCart();
  });
});

function updateCart() {
  totalEl.textContent = total;
  cartItems.textContent = total > 0 ? "Items added to cart." : "No items added.";
}

document.getElementById("bookBtn").addEventListener("click", () => {
  if (total === 0) {
    alert("Please add items before booking!");
    return;
  }
  alert("✅ Booking Confirmed! We'll contact you soon.");
  thankMsg.style.display = "block";
  total = 0;
  updateCart();
});

document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});
