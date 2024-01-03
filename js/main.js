const menu_btn = document.querySelector('.hamburger-menu');
const mobile_menu = document.querySelector('.header__menu');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})

document.addEventListener("click", function (e) {
    if (!mobile_menu.contains(e.target) && !menu_btn.contains(e.target)) {
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    }
})

/*   modal   */

const modalFunc = function () {
    const modal_btn = document.querySelector('.catalog-item__btn');
    const modal_window = document.querySelector('.order__modal-window');
    const modal_container = document.querySelector('.modal-window__container');

    modal_btn.addEventListener('click', function () {
        modal_window.classList.add('is--visible');
    });

    document.querySelector('.exit').addEventListener('click', function () {

        modal_window.classList.remove('is--visible');

    });
}

modalFunc();



