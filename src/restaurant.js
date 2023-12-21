const createRestaurantHomePage = () => {
    const main = document.createElement("main");
    content.appendChild(main);

    const article = document.createElement("article");
    main.appendChild(article);

    const section = document.createElement("section");
    article.appendChild(section);

    const h1 = document.createElement("h1");
    h1.textContent = "THE BEST JAPANESE RESTAURANT";
    section.appendChild(h1);

    const div1 = document.createElement("div");
    div1.classList.add("sushi-text");
    section.appendChild(div1);

    const p1 = document.createElement("p");
    p1.textContent = "Welcome to our humble abode, where the delicate flavors of Japan come to life. At our sushi haven, we believe in simplicity and authenticity.";
    div1.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = "Savor the freshness of handcrafted sushi, prepared with care by our skilled chefs. Each bite is a journey into the heart of Japanese culinary tradition. From classic rolls to inventive creations, our menu caters to every taste.";
    div1.appendChild(p2);

    const p3 = document.createElement("p");
    p3.textContent = "Join us for a casual dining experience that blends modern simplicity with the rich tapestry of Japanese cuisine. It's not just a meal; it's a moment of pure delight.";
    div1.appendChild(p3);

    const p4 = document.createElement("p");
    p4.textContent = "Come, unwind, and experience the joy of good food done right!";
    div1.appendChild(p4);

    const div2 = document.createElement("div");
    div2.classList.add("sushi-text");
    section.appendChild(div2);

    const h2_1 = document.createElement("h2");
    h2_1.textContent = "Hours";
    div2.appendChild(h2_1);

    const p5 = document.createElement("p");
    p5.textContent = "Monday: 6am - 6pm";
    div2.appendChild(p5);

    const p6 = document.createElement("p");
    p6.textContent = "Tuesday: 6am - 6pm";
    div2.appendChild(p6);
    
    const p7 = document.createElement("p");
    p7.textContent = "Wednesday: 6am - 6pm";
    div2.appendChild(p7);

    const p8 = document.createElement("p");
    p8.textContent = "Thursday: 6am - 10pm";
    div2.appendChild(p8);

    const p9 = document.createElement("p");
    p9.textContent = "Friday: 6am - 10pm";
    div2.appendChild(p9);

    const p10 = document.createElement("p");
    p10.textContent = "Saturday: 8am - 10pm";
    div2.appendChild(p10);

    const p11 = document.createElement("p");
    p11.textContent = "Sunday: 8am - 8pm";
    div2.appendChild(p11);

    const div3 = document.createElement("div");
    div3.classList.add("sushi-text");
    section.appendChild(div3);

    const h2_2 = document.createElement("h2");
    h2_2.textContent = "Location";
    div3.appendChild(h2_2);

    const p12 = document.createElement("p");
    p12.textContent = "123 Laughing Street, Whimsyville, JOK 789, Chuckleville County, Smileland.";
    div3.appendChild(p12);

    const footer = document.createElement("footer");
    footer.textContent = "Enrique Onaga";
    content.appendChild(footer);
}

export default createRestaurantHomePage;