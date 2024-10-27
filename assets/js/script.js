const btn = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links span");

btn.addEventListener('click',()=>{
    nav.classList.toggle('mobile-nav');
    btn.classList.toggle('open'); 
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('mobile-nav'); 
        btn.classList.remove('open');
        const offset = link.dataset.target === "ap"? 0 : 100
        scrollToAnchor(link.dataset.target,offset)
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

// ancre ciblée/////

function scrollToAnchor(anchorId, offset = 0) {
    const element = document.getElementById(anchorId);
    console.log(element)
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        console.log(elementPosition)
        console.log(offsetPosition)
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}
