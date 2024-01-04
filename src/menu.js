const createMenuPage = () => {
    const main = document.createElement("main");
    content.appendChild(main);

    const article = document.createElement("article");
    main.appendChild(article);

    const section = document.createElement("section");
    article.appendChild(section);

    const h1 = document.createElement("h1");
    h1.textContent = "Menu";
    section.appendChild(h1);

    const div1 = document.createElement("div");
    div1.classList.add("sushi-text");
    section.appendChild(div1);

    const h2_1 = document.createElement("h2");
    h2_1.textContent = "Lamen";
    div1.appendChild(h2_1);

    const img_1 = document.createElement("img");
    img_1.setAttribute("id", "food");
    img_1.src = "./img/lamen.jpg";
    div1.appendChild(img_1);

    const p1 = document.createElement("p");
    p1.textContent = "Enjoy the heartiness of our flavorful Lamen, a Japanese noodle soup that warms the soul. Delicate ramen noodles swim in a rich, savory broth, accompanied by tender slices of meat, crisp vegetables, and a perfect soft-boiled egg."
    div1.appendChild(p1);

    const div2 = document.createElement("div");
    div2.classList.add("sushi-text");
    section.appendChild(div2);

    const h2_2 = document.createElement("h2");
    h2_2.textContent = "Gyoza";
    div2.appendChild(h2_2);

    const img_2 = document.createElement("img");
    img_2.setAttribute("id", "food");
    img_2.src = "./img/gyoza.jpg";
    div2.appendChild(img_2);

    const p2 = document.createElement("p");
    p2.textContent = "Crispy on the outside, juicy on the inside — our Gyoza offers a delightful combination of pan-seared perfection. These Japanese dumplings are filled with a succulent mixture of minced meat and vegetables, delivering a burst of savory goodness in every bite."
    div2.appendChild(p2);

    const div3 = document.createElement("div");
    div3.classList.add("sushi-text");
    section.appendChild(div3);

    const h2_3 = document.createElement("h2");
    h2_3.textContent = "Gyoza";
    div3.appendChild(h2_3);

    const img_3 = document.createElement("img");
    img_3.setAttribute("id", "food");
    img_3.src = "./img/onigiri.jpg";
    div3.appendChild(img_3);

    const p3 = document.createElement("p");
    p3.textContent = "Experience the charm of Onigiri, a handheld rice ball wrapped in seaweed. These triangular delights encase a variety of fillings, from traditional pickled plums to grilled salmon. The ideal snack or quick bite, Onigiri brings simplicity and taste together."
    div3.appendChild(p3);

    const div4 = document.createElement("div");
    div4.classList.add("sushi-text");
    section.appendChild(div4);

    const h2_4 = document.createElement("h2");
    h2_4.textContent = "Sushi Combo";
    div4.appendChild(h2_4);

    const img_4 = document.createElement("img");
    img_4.setAttribute("id", "food");
    img_4.src = "./img/sushi-combo.jpg";
    div4.appendChild(img_4);

    const p4 = document.createElement("p");
    p4.textContent = "Elevate your dining experience with our Sushi Combo, a curated selection of expertly crafted sushi rolls. From classic California rolls to inventive specialty rolls, each piece is a symphony of fresh fish, perfectly seasoned rice, and a touch of wasabi, promising a delightful journey through Japanese culinary artistry."
    div4.appendChild(p4);

    const div5 = document.createElement("div");
    div5.classList.add("sushi-text");
    section.appendChild(div5);

    const h2_5 = document.createElement("h2");
    h2_5.textContent = "Taiyaki";
    div5.appendChild(h2_5);

    const img_5 = document.createElement("img");
    img_5.setAttribute("id", "food");
    img_5.src = "./img/taiyaki.jpg";
    div5.appendChild(img_5);

    const p5 = document.createElement("p");
    p5.textContent = "Indulge your sweet tooth with Taiyaki, a fish-shaped pastry filled with delectable surprises. Our warm, crispy fish-shaped cakes are generously stuffed with sweet fillings like red bean paste, custard, or chocolate, creating a delightful dessert experience."
    div5.appendChild(p5);

    const div6 = document.createElement("div");
    div6.classList.add("sushi-text");
    section.appendChild(div6);

    const h2_6 = document.createElement("h2");
    h2_6.textContent = "Taiyaki";
    div6.appendChild(h2_6);

    const img_6 = document.createElement("img");
    img_6.setAttribute("id", "food");
    img_6.src = "./img/takoyaki.jpg";
    div6.appendChild(img_6);

    const p6 = document.createElement("p");
    p6.textContent = "Delight in the playful flavors of Takoyaki, bite-sized octopus balls that capture the essence of Osaka street food. Crispy on the outside and soft on the inside, these savory spheres are drizzled with tangy takoyaki sauce and topped with bonito flakes for an authentic taste."
    div6.appendChild(p6);

    const footer = document.createElement("footer");
    footer.textContent = "Enrique Onaga";
    content.appendChild(footer);
}

export default createMenuPage;