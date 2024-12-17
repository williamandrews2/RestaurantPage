import "./styles.css";
import { loadMainPage } from "./mainpage";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

const tabModules = {
  tab1: loadMainPage,
  tab2: loadMenu,
  tab3: loadContact,
};

const contentContainer = document.getElementById("content");
const tabButtons = document.querySelectorAll(".tab-button");

// Initial loading of main page
document.addEventListener("DOMContentLoaded", loadMainPage());

function switchTab(tabName) {
  contentContainer.innerHTML = "";
  const runFunction = tabModules[tabName];
  if (runFunction) {
    runFunction();
  }
}

// Attach event listeners:
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabName = button.dataset.tab;
    switchTab(tabName);
  });
});
