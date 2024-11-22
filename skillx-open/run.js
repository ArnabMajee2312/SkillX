document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    function revealOnScroll() {
        const triggerBottom = window.innerHeight / 1.2;

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check on load
});
