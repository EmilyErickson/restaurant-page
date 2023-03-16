import homepage from "./pageload.js";
import menupage from "./menu.js";
import contactpage from "./contact.js";

function createHeader() {
  const content = document.querySelector("#content");

  const header = document.createElement("div");
  header.classList.add("title");
  header.textContent = "Preeminent Pizzeria";

  header.append(createTabs());
  content.appendChild(header);
}

function createTabs() {
  const tabContent = document.querySelector("#content");
  let btns = document.createElement("div");
  btns.classList.add("tabs");

  let menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.classList.add("menuBtn");

  let homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";

  let contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";

  btns.append(homeBtn, menuBtn, contactBtn);

  menuBtn.addEventListener("click", () => {
    tabContent.removeChild(tabContent.lastChild);
    menupage();
  });

  homeBtn.addEventListener("click", () => {
    tabContent.removeChild(tabContent.lastChild);
    homepage();
  });

  contactBtn.addEventListener("click", () => {
    tabContent.removeChild(tabContent.lastChild);
    contactpage();
  });

  return btns;
}

createHeader();

homepage();
