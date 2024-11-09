import hamburger from "./hamburger.webp";

export function loadMainPage() {
  const content = document.getElementById("content");

  // Add new text:
  const newText = `
      <h1 id="featured-item">Try our new juicy burger for $14.99!</h1>    
      `;
  content.innerHTML += newText;

  // Add image:
  const image = document.createElement("img");
  image.src = hamburger;
  image.alt = "hamburger image";
  content.appendChild(image);
}
