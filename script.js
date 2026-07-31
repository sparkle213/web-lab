const openBtn = document.getElementById("openBtn");
const container = document.querySelector(".container");
const envelopePage = document.getElementById("envelopePage");

openBtn.addEventListener("click", () => {

    // Make the button feel pressed
    openBtn.style.transform = "scale(0.95)";

    setTimeout(() => {

        // Fade away the first page
        container.classList.add("fade-out");

        setTimeout(() => {

            container.style.display = "none";

            // Show the envelope page
            envelopePage.style.display = "flex";

        }, 800);

    }, 150);

});
