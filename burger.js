const BurgerDrop = () => {
    const burger = document.querySelector('.menuTrigger');
    const navInteractive = document.querySelector(".nav-options");

    burger.addEventListener('click', () => {
        navInteractive.classList.toggle("burger-menu-visible");
        burger.classList.toggle("burger_close");
    })
}
BurgerDrop();