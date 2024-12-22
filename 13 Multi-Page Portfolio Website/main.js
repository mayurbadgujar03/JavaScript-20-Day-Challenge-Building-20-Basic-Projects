import { setActive, renderContent } from './modules/nav.js';
import { homePage } from './modules/home.js';
import { aboutPage } from './modules/about.js';
import { contactPage } from './modules/contact.js';

document.addEventListener('DOMContentLoaded', () => {
    renderContent(homePage);
    setActive("home-btn");


    document.getElementById("home-btn").addEventListener("click", () => {
        renderContent(homePage);
        setActive("home-btn");
    });

    document.getElementById("about-btn").addEventListener("click", () => {
        renderContent(aboutPage);
        setActive("about-btn");
    });

    document.getElementById("contact-btn").addEventListener("click", () => {
        renderContent(contactPage);
        setActive("contact-btn");
    });
});
