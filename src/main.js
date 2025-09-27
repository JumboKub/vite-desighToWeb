import './sass/main.scss'

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".tage-home__button");
    const nav = document.querySelector(".tage-home__menu");

    button.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    button.classList.toggle("rotate");
    });
});
