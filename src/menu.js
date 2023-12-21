const createMenuPage = () => {
    const main = document.createElement("main");
    content.appendChild(main);

    const article = document.createElement("article");
    main.appendChild(article);

    const section = document.createElement("section");
    article.appendChild(section);
}

export default createMenuPage;