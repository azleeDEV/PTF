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

// verification email/////////////

document.querySelector("form").addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Veuillez entrer un email valide.");
        event.preventDefault();
    }
});
