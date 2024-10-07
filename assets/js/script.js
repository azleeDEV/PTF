const btn = document.querySelector(".menu");
const nav = document.querySelector(".nav-links")

btn.addEventListener('click',()=>{
    nav.classList.toggle('mobile-nav');
    btn.classList.toggle('open');
})
