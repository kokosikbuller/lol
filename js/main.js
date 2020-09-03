$(function () {
    $('.slaider__dog-inner').slick({
        arrows: true,
        autoplay: 4000,
        slidesToShow: 3,
    });
    new WOW().init();
});


window.addEventListener('DOMContentLoaded', () => {

    const dog = document.querySelectorAll('slider__dog-btn'),
        cart = document.querySelector('cart'),
        close = document.querySelector('.cart__close');

    function openCart() {
        cart.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        cart.style.display = 'none';
        document.body.style.overflow = '';
    }

    dog.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);




});