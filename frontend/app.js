const products = [
  {
    name: "Bluetooth Speaker",
    price: 2499,
    category: "Gadgets",
    stock: 18,
    image: "./Assets/speaker.jpg"
  },
  {
    name: "Smart Watch",
    price: 3999,
    category: "Gadgets",
    stock: 30,
    image: "./Assets/watch.jpg"
  },
  {
    name: "Desk Lamp",
    price: 899,
    category: "Home",
    stock: 50,
    image: "./Assets/lamp.jpg"
  },
  {
    name: "Coffee Mug",
    price: 299,
    category: "Home",
    stock: 75,
    image: "./Assets/mug.jpg"
  },
  {
    name: "Travel Backpack",
    price: 1499,
    category: "Travel",
    stock: 12,
    image: "./Assets/backpack.jpg"
  },
  {
    name: "Power Bank",
    price: 1999,
    category: "Gadgets",
    stock: 40,
    image: "./Assets/powerbank.jpg"
  }
];

const images = document.getElementById("images");

products.forEach((product) => {
  images.innerHTML += `
    <div class="card">
      <img src="${product.image}">
      <div class="card-content">
        <h2>${product.name}</h2>
        <span class="tag">${product.category}</span>
        <p class="price">₹${product.price}</p>
        <p class="stock">Available Stock: ${product.stock}</p>
      </div>
    </div>
  `;
});