const createContractPage = () => {
    const main = document.createElement("main");
    content.appendChild(main);

    const article = document.createElement("article");
    main.appendChild(article);

    const section = document.createElement("section");
    article.appendChild(section);

    

    const footer = document.createElement("footer");
    footer.textContent = "Enrique Onaga";
    content.appendChild(footer);
}

export default createContractPage;