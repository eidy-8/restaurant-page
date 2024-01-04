const createContractPage = () => {
    const main = document.createElement("main");
    content.appendChild(main);

    const article = document.createElement("article");
    main.appendChild(article);

    const section = document.createElement("section");
    article.appendChild(section);

    const h1 = document.createElement("h1");
    h1.textContent = "Contact Us";
    section.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "Phone: XX XX XXXXX-XXXX";
    section.appendChild(p);

    const footer = document.createElement("footer");
    footer.textContent = "Enrique Onaga";
    content.appendChild(footer);
}

export default createContractPage;