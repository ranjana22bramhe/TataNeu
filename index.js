let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.addEventListener("DOMContentLoaded", function () {
    let toggleBtn = document.getElementById("toggleMode");
    let body = document.body;

    // Check local storage for mode preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleBtn.classList.add("btn-dark-mode");
        toggleBtn.innerHTML = "☀️";
    }

    toggleBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Update button icon
        if (body.classList.contains("dark-mode")) {
            toggleBtn.classList.add("btn-dark-mode");
            toggleBtn.innerHTML = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.classList.remove("btn-dark-mode");
            toggleBtn.innerHTML = "🌙";
            localStorage.setItem("theme", "light");
        }
    });
});

