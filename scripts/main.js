
document.addEventListener("DOMContentLoaded", () => {

    const aboutYouHeader = document.querySelector("#about-you");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutYouHeader.classList.add("animate");
                    observer.unobserve(aboutYouHeader); // Stop observing after animation
                }
            });
        },
        { threshold: 1.0 } // Trigger when 50% of the element is visible
    );

    observer.observe(aboutYouHeader);
});