const btn = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");

btn.addEventListener('click',()=>{
    nav.classList.toggle('mobile-nav');
    btn.classList.toggle('open'); 
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('mobile-nav'); 
        btn.classList.remove('open');
    });
});