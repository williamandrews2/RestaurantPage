import cheeseburger from "./images/cheeseburger.webp";
import garlicwafflefries from "./images/garlicwafflefries.jpg";
import mermaidlemonade from "./images/mermaidlemonade.jpg";

export function loadMenu() {
  const content = document.getElementById("content");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuTitle = `<h1 class="tab-heading">Menu</h1>`;
  content.innerHTML += menuTitle;

  // Menu items data:
  const menuItems = [
    { title: "Classic Cheeseburger", image: cheeseburger },
    { title: "Garlic Waffle Fries", image: garlicwafflefries },
    { title: "Signature Mermaid Lemonade", image: mermaidlemonade },
  ];

  // Generate HTML for menu items:
  menuItems.forEach((items) => {
    const menuItemHTML = `
    <div class="menu-item">
      <h2>${items.title}</h2>
      <img src="${items.image}" alt="${items.title}" />
    </div>
    `;
    menuContainer.innerHTML += menuItemHTML;
  });
  content.appendChild(menuContainer);
}
