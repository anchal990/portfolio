// =======================================
// TYPING ANIMATION
// =======================================

const words = [
    "BCA Final-Year Student",
    "Software Developer",
    "Java Programmer",
    "Web Developer",
    "Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, letterIndex--);

        if (letterIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();


// =======================================
// DARK MODE
// =======================================

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.replace("fa-moon", "fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.replace("fa-sun", "fa-moon");

        localStorage.setItem("theme", "light");

    }

});

// Load Saved Theme

window.addEventListener("load", () => {

    const saved = localStorage.getItem("theme");

    if (saved === "dark") {

        document.body.classList.add("dark");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

});


// =======================================
// MOBILE MENU
// =======================================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.classList.toggle("open");

});


// Close Menu

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =======================================
// ACTIVE NAVIGATION
// =======================================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =======================================
// SCROLL REVEAL
// =======================================

const revealElements =
document.querySelectorAll(
".hero,.about,.skills,.projects,.education,.contact"
);

function reveal() {

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// =======================================
// SCROLL TO TOP BUTTON
// =======================================

const topBtn = document.createElement("button");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// =======================================
// SCROLL PROGRESS BAR
// =======================================

const progress = document.createElement("div");

progress.className = "progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressWidth =
        (window.scrollY / total) * 100;

    progress.style.width = progressWidth + "%";

});


// =======================================
// HEADER SHADOW
// =======================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("shadow");

    } else {

        header.classList.remove("shadow");

    }

});

// ======================================
// EMAILJS CONTACT FORM
// ======================================

// Initialize EmailJS
emailjs.init("DBH-UIQCg5a-wqLkr");

// Contact Form
const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitBtn = contactForm.querySelector("button");

        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = "Sending...";
        submitBtn.disabled = true;

        emailjs.sendForm(
            "service_7fs9xsu",
            "template_1ikg6n3",
            contactForm
        )

        .then(() => {

            alert("✅ Message sent successfully!");

            contactForm.reset();

        })

        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send message. Please try again.");

        })

        .finally(() => {

            submitBtn.innerHTML = originalText;

            submitBtn.disabled = false;

        });

    });

}


// =======================================
// BUTTON RIPPLE EFFECT
// =======================================

document.querySelectorAll(".btn")
.forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        ripple.style.left =
            e.offsetX + "px";

        ripple.style.top =
            e.offsetY + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});