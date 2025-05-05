document.addEventListener("DOMContentLoaded", function () {
    const aboutYouSection = document.querySelector('#contact');

    const observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("Animation triggered for:", entry.target); // Debugging log
                aboutYouSection.style.animation = "slideInFromTopRight 1s ease-out forwards"; // Apply animation
                observer.unobserve(aboutYouSection); // Stop observing after animation
            }
        });
    }, { threshold: 1.0 }); // Trigger when 50% of the section is visible

    observer.observe(aboutYouSection);
});