// Menu
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Popup
var popupButton = document.querySelectorAll('.hit__order, .product__buy');
var popupOverlay = document.querySelector('.popup-overlay');
var popup = document.querySelector('.order-popup');
var popupForm = document.querySelector('.order-popup__form');

for (var i = 0; i < popupButton.length; i++) {
  popupButton[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    popupOverlay.classList.add('popup-overlay--show');
    popup.classList.add('order-popup--opened');
  });
}

popupOverlay.addEventListener('click', function() {
  popupOverlay.classList.remove('popup-overlay--show');
  popup.classList.remove('order-popup--opened');
});

document.addEventListener('keydown', function(evt){
  if(evt.keyCode === 27){
    evt.preventDefault();
    if(popup.classList.contains('order-popup--opened')){
      popup.classList.remove('order-popup--opened');
      popupOverlay.classList.remove('popup-overlay--show');
    }
  }
});

popupForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  popupOverlay.classList.remove('popup-overlay--show');
  popup.classList.remove('order-popup--opened');
});
