
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        const isOpen = button.classList.contains('active');
        button.classList.toggle('active', !isOpen);
        content.classList.toggle('open', !isOpen);
    });
});
