// Mobile menu switcher

var menuToggle = document.querySelector('.menu-toggle');
var menu = document.querySelector('.page-header__nav');
var headerWrapper = document.querySelector('.page-header__wrapper');


menu.classList.add('main-nav--closed');
menuToggle.classList.remove('menu-toggle--active');
headerWrapper.classList.remove('page-header__wrapper--active-menu');

menuToggle.addEventListener('click', function (evt) {
  if (!menuToggle.classList.contains('menu-toggle--active')) {
    menu.classList.remove('main-nav--closed');
    setTimeout(() => {
      menu.classList.add('main-nav--opened');
    },);
    menuToggle.classList.add('menu-toggle--active');
    headerWrapper.classList.add('page-header__wrapper--active-menu');
  } else {
    menu.classList.add('main-nav--closed');
    setTimeout(() => {
      menu.classList.remove('main-nav--opened');
    },);
    menuToggle.classList.remove('menu-toggle--active');
    headerWrapper.classList.remove('page-header__wrapper--active-menu');
  }
});

// Validation

var mainForm = document.querySelector('.program-selection__form');
var nameField = document.querySelector('#name');
var weightField = document.querySelector('#weight');
var ageField = document.querySelector('#age');
var emailField = document.querySelector('#email');
var phoneField = document.querySelector('#phone');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = 'false';
}

window.onload = function () {
  if (mainForm) {
    if (storage) {
      nameField.value = storage;
      weightField.value = localStorage.getItem('weight');
      emailField.value = localStorage.getItem('email');
      phoneField.value = localStorage.getItem('telephone');
      ageField.focus();
    } else {
      nameField.focus();
    }
  }
};

if (mainForm) {
  mainForm.addEventListener('submit', function (event) {
    if (!nameField.value || !weightField.value || !emailField.value || !emailField.value) {
      event.preventDefault();
    } else {
      localStorage.setItem('name', nameField.value);
      localStorage.setItem('weight', weightField.value);
      localStorage.setItem('email', emailField.value);
      localStorage.setItem('telephone', phoneField.value);
    }
  });
}


// // Pin size changing function

// var tabletWidth = 768;
// var myPlacemark;

// function setProps() {
//   viewport = document.documentElement.clientWidth || window.innerWidth;

//   if (viewport >= tabletWidth) {
//     myPlacemark.options.set('iconImageSize', [124, 106]);
//     myPlacemark.options.set('iconImageOffset', [-56.5, -106]);
//   } else {
//     myPlacemark.options.set('iconImageSize', [67, 53]);
//     myPlacemark.options.set('iconImageOffset', [-28.5, -53]);
//   }
// }

// // Map resizing function (Debounce)

// function debounce(f, ms) {
//   var timer = null;

//   return function (cb) {
//     var onComplete = function () {
//       f.apply(this, cb);
//       timer = null;
//     };
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(onComplete, ms);
//   };
// }

// Map

// ymaps.ready(init);
// function init() {
//   var myMap = new ymaps.Map("map", {
//     center: [59.93860661, 30.31882463],
//     zoom: 15
//   });

//   myPlacemark = new ymaps.Placemark([59.93855677, 30.32310866], {
//     balloonContentHeader: '<img src="img/logo-footer.svg" width="128" height="24" alt="Кэт Энерджи" />',
//     balloonContentBody: 'Большая Конюшенная 19/8',
//     hintContent: 'Мы здесь!'
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'img/map-pin.png',
//     iconImageSize: [124, 106],
//     iconImageOffset: [-62, -106]
//   });

//   setProps();
//   myMap.geoObjects.add(myPlacemark);
//   myMap.behaviors.disable('scrollZoom');

// }

// window.addEventListener('resize', debounce(setProps, 1000));
