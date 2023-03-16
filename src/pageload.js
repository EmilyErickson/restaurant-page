import "./style.css";
import Img from "./pizza.jpg";

function pageLoad() {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.classList.add("homeContainer");

  const pizzaImg = new Image();
  pizzaImg.src = Img;
  pizzaImg.classList.add("mainimg");

  const textDiv = document.createElement("div");
  let textDivText = document.createElement("div");
  textDivText.textContent =
    "The unsurpassed superlative pizzeria in the country. Complex, crispy crust. Sterling, savory sauce. Choicest, copacetic cheese. Most splendiferous pizza around!";
  textDivText.classList.add("textDivText");
  textDiv.classList.add("textDiv");
  textDiv.appendChild(textDivText);

  const aboutDiv = document.createElement("div");
  aboutDiv.textContent = "Come Visit Us!";
  aboutDiv.classList.add("aboutDiv");

  container.appendChild(pizzaImg);
  container.appendChild(textDiv);
  container.appendChild(aboutDiv);
  content.appendChild(container);

  return container;
}

export default pageLoad;
