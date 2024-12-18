import orangeCat from "./images/orangecat.png";

export function loadContact() {
  const content = document.getElementById("content");

  // Add test text to page:
  const newText = `<h1 class="tab-heading">Contact the manager:</h1>`;
  content.innerHTML += newText;

  // Add image:
  const newImage = `<img src="${orangeCat}" alt="orange cat" />`;
  content.innerHTML += newImage;
}
