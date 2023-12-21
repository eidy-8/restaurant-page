import createContractPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

const createTabs = () => {
    const content = document.getElementById("content");
    const header = document.createElement("header");
    content.appendChild(header);
    
    const nav = document.createElement("nav");
    header.appendChild(nav);

    const ul = document.createElement("ul");
    nav.appendChild(ul);

    const img = document.createElement("img");
    img.src = "./img/logo.png";
    ul.appendChild(img);

    const li1 = document.createElement("li");
    li1.textContent = "Home";
    ul.appendChild(li1);

    const li2 = document.createElement("li");
    li2.textContent = "Menu"; 
    ul.appendChild(li2); 

    const li3 = document.createElement("li");
    li3.textContent = "Contact";
    ul.appendChild(li3);

    li1.addEventListener("click", () => {
        alert("li1 working!");
        clearContent();
        createRestaurantHomePage();
    })
    li2.addEventListener("click", () => {
        alert("li2 working!");
        clearContent();
        createMenuPage();
    })
    li3.addEventListener("click", () => {
        alert("li3 working!");
        clearContent();
        createContractPage();
    })
}

function clearContent() {
    const content = document.querySelector("#content");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    if (main) {
        main.remove();
        footer.remove();
    }
}

export default createTabs;