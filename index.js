"use strict";

document.querySelector(".navbar__icon").addEventListener("click", (e) => {
    document.querySelector(".navbar__icon").classList.toggle("navbar__icon--clicked");
    document.querySelector(".navbar").classList.toggle("navbar--dropdown");
    document.querySelector(".navbar__dropdown").classList.toggle("navbar__dropdown--clicked");
});
