document.addEventListener("DOMContentLoaded", () => {
    const aboutYouHeader = document.querySelector("#about-you h2");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutYouHeader.classList.add("animate");
                    observer.unobserve(aboutYouHeader); // Stop observing after animation
                }
            });
        }
    );

    observer.observe(aboutYouHeader);
});