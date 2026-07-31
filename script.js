const openBtn = document.getElementById("openBtn");
const container = document.querySelector(".container");
const envelopePage = document.getElementById("envelopePage");

openBtn.addEventListener("click", () => {

    // Button press effect
    openBtn.style.transform = "scale(0.95)";

    setTimeout(() => {

        // Fade first page
        container.classList.add("fade-out");

        setTimeout(() => {

            container.style.display = "none";

            // Show envelope page
            envelopePage.style.display = "flex";

        }, 800);

    }, 150);

});
