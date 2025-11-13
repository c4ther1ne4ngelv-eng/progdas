const learnBtn = document.querySelector('.btn[href="#testimoni"]');

if (learnBtn){
    learnBtn.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector("#testimoni");
        if (target){
            target.scrollIntoView({behavior: 'smooth'});
        }
    })
}

const form = document.querySelector('.contact-form');
if (form){
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Form submitted!");
        form.reset();
    })
}


const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll =  () => {
    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block" ;
    } else {
        scrollTopBtn.style.display = "none";
    }
}
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({top :0, behavior: "smooth"});
});