/* popup-window */
const cookieBox = document.querySelector(".popup");
const btnAccept = document.getElementById("accept-btn");

document.addEventListener("DOMContentLoaded", function () {
    if (typeof (Storage) !== "undefined") {
        if (!localStorage.getItem('visited')) {
            cookieBox.classList.add("is-visible");
            document.getElementById('accept-btn').addEventListener('click', function () {
                localStorage.setItem('visited', true);
                var now = new Date().getTime();
                var ttl = 48 * 60 * 60 * 1000;
                var exp = now + ttl;
                localStorage.setItem('expiration', exp);

                cookieBox.classList.remove("is-visible");
            });
        }
    }
})

/*  hamburger-menu */

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
const modal_btn = document.querySelector('.catalog-item__btn');
const modal_window = document.querySelector('.order__modal-window');
const modal_container = document.querySelector('.modal-window__container');

const modalFunc = function () {

    modal_btn.addEventListener('click', function () {
        modal_window.classList.add('is--visible');
    });

    document.querySelector('.exit').addEventListener('click', function () {
        modal_window.classList.remove('is--visible');
    });
}
modal_window.addEventListener("click", function (e) {
    if (modal_window.contains(e.target) && !modal_container.contains(e.target)) {
        modal_window.classList.remove('is--visible');
    }
})
modalFunc();
















