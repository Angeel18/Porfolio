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
    { threshold: 0.6 }
);

sections.forEach((section) => {
    observer.observe(section);
});
