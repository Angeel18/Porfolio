document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".header-content a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => link.classList.remove("active"));

                    const activeLink = document.querySelector(
                        `.header-content a[href="#${entry.target.id}"]`
                    );
                    if (activeLink) activeLink.classList.add("active");
                }
            });
        },
        {threshold: 1} 
    );
    sections.forEach((section) => observer.observe(section));
});

const contactBox = document.querySelector('.contact-box');
const contactSection = document.getElementById('contact');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.target === contactSection) {
                if (entry.isIntersecting) {
                    contactBox.style.display = 'none';
                } else {
                    contactBox.style.display = 'block';
                }
            }
        });
    },
    { threshold: 0.1 }
);

observer.observe(contactSection);

