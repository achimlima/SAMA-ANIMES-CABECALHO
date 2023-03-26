function menuShow() {
    let menuMobile = document.querySelector ('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/button_mobile1.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
        document.querySelector('.icon').src = "assets/img/button_mobile1.png";
    }
}