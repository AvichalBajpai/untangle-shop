const products = [
  { id: 1,  name: 'Dell XPS 15 Laptop',          price: 1299.99, category: 'Hardware',    stock: 12,  description: 'High-performance laptop with Intel Core i7, 16GB RAM, 512GB SSD.' },
  { id: 2,  name: 'Microsoft Office 365',         price:   99.99, category: 'Software',    stock: 50,  description: 'Annual subscription for Word, Excel, PowerPoint, and Teams.' },
  { id: 3,  name: 'Cisco Catalyst 2960 Switch',   price:  549.00, category: 'Networking',  stock:  3,  description: '24-port gigabit managed switch for small to medium networks.' },
  { id: 4,  name: 'Adobe Creative Cloud',         price:  599.99, category: 'Software',    stock: 25,  description: 'Full suite — Photoshop, Illustrator, Premiere Pro, and more.' },
  { id: 5,  name: 'Logitech MX Keys Keyboard',    price:   99.00, category: 'Peripherals', stock: 18,  description: 'Wireless backlit keyboard, multi-device pairing, USB-C charging.' },
  { id: 6,  name: 'IT Support Contract (Annual)', price: 2400.00, category: 'Services',    stock: 99,  description: '12-month managed IT support with 4hr response SLA.' },
  { id: 7,  name: 'HP LaserJet Pro M404n',        price:  279.00, category: 'Hardware',    stock:  0,  description: 'Monochrome laser printer, 40 ppm, automatic duplex printing.' },
  { id: 8,  name: 'Ubiquiti UniFi AP WiFi 6',     price:  179.00, category: 'Networking',  stock:  8,  description: 'Wi-Fi 6 access point, 2.4GHz + 5GHz, PoE powered.' },
  { id: 9,  name: 'Cloud Migration Consultation',  price:  800.00, category: 'Services',    stock: 99,  description: 'One-day architecture review and migration planning session.' },
  { id: 10, name: 'Dell 27" 4K Monitor',          price:  449.00, category: 'Peripherals', stock:  5,  description: '4K IPS panel, USB-C 90W charging, height-adjustable stand.' },
  { id: 11, name: 'Windows 11 Pro License',       price:  199.99, category: 'Software',    stock: 40,  description: 'Genuine Microsoft Windows 11 Pro OEM licence key.' },
  { id: 12, name: 'Cat6 Ethernet Cable (10m)',    price:    8.99, category: 'Networking',  stock: 200, description: 'Snagless RJ45 patch cable, 1Gbps, suitable for PoE.' },
];

const container = document.getElementById("products-container");

const categoryStyles = {
  Hardware:    { bg: '#1e2f3d', color: '#5bb3f0' },
  Software:    { bg: '#1a2e28', color: '#3ecfa0' },
  Networking:  { bg: '#2e2210', color: '#e89c3a' },
  Peripherals: { bg: '#2a1f35', color: '#c084fc' },
  Services:    { bg: '#1f2a1f', color: '#86efac' },
};

function renderProducts(list) {
  container.innerHTML = '';

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    const style = categoryStyles[product.category] || { bg: '#2a2a3a', color: '#a89cf0' };

    const stockLabel = product.stock === 0
      ? `<span class="stock out-of-stock">Out of Stock</span>`
      : product.stock <= 5
      ? `<span class="stock low-stock">Low Stock (${product.stock})</span>`
      : `<span class="stock in-stock">In Stock (${product.stock})</span>`;

    card.innerHTML = `
      <span class="product-category" style="background:${style.bg}; color:${style.color}">
        ${product.category}
      </span>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-desc">${product.description}</p>
      <hr>
      <div class="product-info">
        <span class="price">$${product.price.toFixed(2)}</span>
        ${stockLabel}
      </div>
    `;

    container.appendChild(card);
  });
}

renderProducts(products);

module.exports=products;