function card(title, imageSrc, paragraphText, timedur) {
    let container = document.querySelector(".container");

    // Create elements
    let box = document.createElement("div");
    let img = document.createElement("img");
    let contentDiv = document.createElement("div"); // New div for title and paragraph
    let h1 = document.createElement("h1");
    let paragraph = document.createElement("p");
    let spanDiv = document.createElement("div"); // New div for span
    let span = document.createElement("span");

    // Set attributes and text content
    img.setAttribute("src", imageSrc);
    img.style.width = "190px"; // Set the width of the 
    img.style.height="190px"
    h1.textContent = title;
    paragraph.textContent = paragraphText;
    span.textContent = timedur;

    // Append elements to appropriate divs
    contentDiv.appendChild(h1);
    contentDiv.appendChild(paragraph);
    spanDiv.appendChild(span);

    // Append elements to box
    box.appendChild(img);
    box.appendChild(contentDiv);
    box.appendChild(spanDiv);

    // Add class to box
    box.classList.add("box");

    // Append box to container
    container.appendChild(box);
}

