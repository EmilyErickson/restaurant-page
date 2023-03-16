import "./style.css";
import img1 from "./pizza1.jpg";
import img2 from "./pizza2.jpg";
import img3 from "./pizza3.jpg";
import img4 from "./pizza4.jpg";

function menuTab() {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.classList.add("menuContainer");

  const textDiv = document.createElement("div");
  textDiv.textContent = "Most splendiferous pizza around!";
  textDiv.classList.add("menuTitle");

  const menuItems = document.createElement("div");
  menuItems.classList.add("menuItems");
  let item1 = document.createElement("div");
  item1.classList.add("menuItem");
  let pic1 = new Image();
  pic1.src = img1;
  let text1 = document.createElement("div");
  text1.textContent = "Prototypical Pepperoni";
  item1.append(pic1, text1);

  let item2 = document.createElement("div");
  item2.classList.add("menuItem");
  let pic2 = new Image();
  pic2.src = img2;
  let text2 = document.createElement("div");
  text2.textContent = "Superior Supreme";
  item2.append(pic2, text2);

  let item3 = document.createElement("div");
  item3.classList.add("menuItem");
  let pic3 = new Image();
  pic3.src = img3;
  let text3 = document.createElement("div");
  text3.textContent = "Versatile Vegetable";
  item3.append(pic3, text3);

  let item4 = document.createElement("div");
  item4.classList.add("menuItem");
  let pic4 = new Image();
  pic4.src = img4;
  let text4 = document.createElement("div");
  text4.textContent = "Marvelous Margherita";
  item4.append(pic4, text4);

  menuItems.append(item1, item2, item3, item4);

  container.appendChild(textDiv);
  container.appendChild(menuItems);
  content.appendChild(container);

  return container;
}

export default menuTab;
