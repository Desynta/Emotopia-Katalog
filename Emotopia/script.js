// Animasi muncul ketika bagian website terlihat

const elements = document.querySelectorAll(
    '.menu-card, .about-content, .about-image'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

elements.forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});