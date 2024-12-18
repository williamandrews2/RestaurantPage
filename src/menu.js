import cheeseburger from "./images/cheeseburger.webp";
import hugeBurger from "./images/hugeburger.jpg";
import kidsBurger from "./images/kidsburger.jpg";
import lavaBrownie from "./images/lavabrownie.webp";
import garlicWaffleFries from "./images/garlicwafflefries.jpg";
import mermaidLemonade from "./images/mermaidlemonade.jpg";

export function loadMenu() {
  const content = document.getElementById("content");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuTitle = `<h1 class="tab-heading">Menu</h1>`;
  content.innerHTML += menuTitle;

  // Menu items data:
  const menuItems = [
    { title: "Classic Cheeseburger", image: cheeseburger },
    { title: "Big Ol' Burger", image: hugeBurger },
    { title: "Kid's Burger", image: kidsBurger },
    { title: "Garlic Waffle Fries", image: garlicWaffleFries },
    { title: "Lava Brownie", image: lavaBrownie },
    { title: "Signature Mermaid Lemonade", image: mermaidLemonade },
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
