document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => { 
        entries.forEach((entry) => {
            console.log(entry.target);
        })
    }); 
    
    observer.observe(document.querySelector('#About-you'));
});