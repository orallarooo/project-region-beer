/* popup-window */

const cookieBox = document.querySelector(".popup");
const btnAccept = document.getElementById("accept-btn");


document.addEventListener("DOMContentLoaded", function() {
    // Проверяем, существует ли у клиента localStorage
    if (typeof(Storage) !== "undefined") {
      // Если localStorage существует, проверяем, сохранено ли определенное значение с ключом 'visited'
      if (!localStorage.getItem('visited')) {
        // Если значение не сохранено, показываем popup окно
        // Здесь нужно добавить код для вашего popup окна
        cookieBox.classList.add("is-visible");
        // После того, как пользователь нажмет на кнопку в окне, мы устанавливаем значение в localStorage
        document.getElementById('accept-btn').addEventListener('click', function() {
          localStorage.setItem('visited', true);
          var now = new Date().getTime();
          var ttl = 48 * 60 * 60 * 1000; // 48 часов в миллисекундах
          var exp = now + ttl;
          localStorage.setItem('expiration', exp);
            
        cookieBox.classList.remove("is-visible");
        });
      }
  }})

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
















