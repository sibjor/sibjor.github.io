document.addEventListener("DOMContentLoaded", () => {
    const aboutYouHeader = document.querySelector("#about-you h2");

    const observer = new IntersectionObserver(
        ([entry]) => { // Directly access the first entry
            if (entry.isIntersecting) {
                aboutYouHeader.classList.add("animate"); // Add the animate class
                observer.unobserve(aboutYouHeader); // Stop observing after animation
            }
        },
        { threshold: 1.0 } // Trigger when 100% of the header is visible
    );

    observer.observe(aboutYouHeader);
});