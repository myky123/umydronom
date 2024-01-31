// -- VARIABLES
const mediaQuery = window.matchMedia("(min-width: 30rem)");
const currentYear = new Date().getFullYear();

let body = document.body;
let backdrop = document.querySelector(".backdrop");
let mobileNavigation = document.querySelector(".mobile-nav");
let hamburgerButton = document.querySelector(".hb-btn");
let squeegeContainer = document.querySelector(".header__squeege-container");
let navContainer = document.querySelector(".header__nav-container");
let headerLine = document.querySelector(".header__line");
let currentYearSpan = document.getElementById("current-year");

// -- FUNCTIONS

// Adding and removing hb-btn--active class (hamburger menu is active)
// This function cooperates with CSS

openMobileNav = () => {
    if (hamburgerButton.classList.contains("hb-btn--active")) {
        hamburgerButton.classList.remove("hb-btn--active");
        backdrop.style.display = "none";
        mobileNavigation.style.display = "none";

        // backdrop.style.display = "none";
    } else {
        backdrop.style.display = "block";
        mobileNavigation.style.display = "flex";
        hamburgerButton.classList.add("hb-btn--active");
    }
};

openModal = () => {
    body.onclick = function (event) {
        if (event.target == backdrop) {
            hamburgerButton.classList.remove("hb-btn--active");
            backdrop.style.display = "none";
            mobileNavigation.style.display = "none";
        }
    };
};

// Closes mobile menu when the screen is resized
closeMobileNav = (x) => {
    if (x.matches) {
        // If media query matches
        backdrop.style.display = "none";
        mobileNavigation.style.display = "none";
        hamburgerButton.classList.remove("hb-btn--active");
    }
};

// Call listener function at run time
mediaQuery.addListener(closeMobileNav);

// Scroll to contact function
scrollToContact = () => {
    document.getElementById("contact").scrollIntoView();
};

// SESSIONS storage

// Stops animations after a first go
if (window.sessionStorage.getItem("animated") === null) {
    window.sessionStorage.setItem("animated", 1);
} else {
    squeegeContainer.classList.add("stop-animation");
    headerLine.classList.add("stop-animation");
    navContainer.classList.add("stop-animation");
    navContainer.classList.add("header__nav-container--bright");
}

// Changes a thankyou-message accordingly
printReviewMessage = () => {
    window.sessionStorage.setItem("message", "Ďakujeme za vaš komentár");
};

printContactMessage = () => {
    window.sessionStorage.setItem(
        "message",
        "Ďakujeme za vašu správu, čoskoro sa Vám ozveme"
    );
};

if (window.sessionStorage.getItem("message")) {
    if (document.getElementById("thankyou__message")) {
        document.getElementById("thankyou__message").innerHTML =
            window.sessionStorage.getItem("message");
    }
}

// Current year html element update
currentYearSpan.textContent = currentYear;
