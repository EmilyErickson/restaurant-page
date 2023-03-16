import "./style.css";

function contactTab() {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.classList.add("contactContainer");

  const addressInfo = document.createElement("div");
  let addressText = document.createElement("div");
  let addressTextTitle = document.createElement("div");
  addressTextTitle.textContent = "Come Visit Us!";
  addressText.textContent = "000 Northsouth Street, Null, Null Island 00000";
  addressText.classList.add("addressText");
  addressInfo.classList.add("addressInfo");
  addressInfo.append(addressTextTitle, addressText);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contactInfo");
  let contactText = document.createElement("div");
  contactText.textContent = "Phone No: 123-456-7890";
  let emailText = document.createElement("div");
  emailText.textContent = "E-mail: preeminentpizzeria@email.com";
  contactInfo.append(contactText, emailText);

  container.appendChild(addressInfo);
  container.appendChild(contactInfo);
  content.appendChild(container);

  return container;
}

export default contactTab;
