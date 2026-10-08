document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    if (!form) return;

    const message = document.getElementById('formMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (message) {
            message.textContent = 'Thank you! Your message has been received.';
            message.classList.add('visible');
        }

        form.reset();
    });
});
