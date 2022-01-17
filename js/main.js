/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/accordion.js":
/*!************************************!*\
  !*** ./src/js/import/accordion.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var faqTriggers = document.querySelectorAll('.faq__item');
faqTriggers.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
  });
});

/***/ }),

/***/ "./src/js/import/burger.js":
/*!*********************************!*\
  !*** ./src/js/import/burger.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var burger = document.querySelector('.burger');
var header = document.querySelector('.header__inner');
var headerRight = document.querySelector('.header__right');
var nav = document.querySelector('.nav__inner');
var headerClose = document.querySelector('.header__logo-cross');
var body = document.body;
burger.addEventListener('click', function () {
  burger.style.display = 'none';
  header.classList.add('active');
  headerRight.classList.add('active');
  nav.classList.add('active');
});
headerClose.addEventListener('click', function () {
  burger.style.display = 'block';
  header.classList.remove('active');
  headerRight.classList.remove('active');
  nav.classList.remove('active');
});

/***/ }),

/***/ "./src/js/import/langs.js":
/*!********************************!*\
  !*** ./src/js/import/langs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var langsTrigger = document.querySelector('.langs');
var langsItems = document.querySelectorAll('.langs__list-item');
langsTrigger.addEventListener('click', function () {
  langsItems.forEach(function (item) {
    item.classList.toggle('active');
  });
});

/***/ }),

/***/ "./src/js/import/modal.js":
/*!********************************!*\
  !*** ./src/js/import/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var modalBtns = document.querySelectorAll('.btn');
var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal__close');
var modalForm = document.querySelector('.modal__form');
var body = document.body;
var html = document.getElementById('html');
var header = document.querySelector('.header__inner');
var burger = document.querySelector('.burger');
var headerRight = document.querySelector('.header__right');
var nav = document.querySelector('.nav__inner');
modalBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('active');
    body.classList.add('active-modal');
    html.classList.add('active-modal');
    burger.style.display = 'block';
    header.classList.remove('active');
    headerRight.classList.remove('active');
    nav.classList.remove('active');
  });
});
modalClose.addEventListener('click', function () {
  modal.classList.remove('active');
  body.classList.remove('active-modal');
  html.classList.remove('active-modal');
});
modal.addEventListener('click', function () {
  modal.classList.remove('active');
  body.classList.remove('active-modal');
  html.classList.remove('active-modal');
});
modalForm.addEventListener('click', function (event) {
  event.stopPropagation();
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/import/offices.js":
/*!**********************************!*\
  !*** ./src/js/import/offices.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var officesTabs = document.querySelectorAll('.contact__tabs-item');
officesTabs.forEach(function (item) {
  item.addEventListener('click', function () {
    officesTabs.forEach(function (tab) {
      tab.classList.remove('active');
    });
    item.classList.add('active');
  });
});

/***/ }),

/***/ "./src/js/import/slider.js":
/*!*********************************!*\
  !*** ./src/js/import/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _Swiper;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var companiesItems = document.querySelectorAll('.companies__item');
var companiesSlider = new Swiper('.companies__track', (_Swiper = {
  loop: true,
  freeMode: true,
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: companiesItems.length - 1
}, _defineProperty(_Swiper, "loop", true), _defineProperty(_Swiper, "autoplay", {
  delay: 1,
  disableOnInteraction: true
}), _defineProperty(_Swiper, "freeMode", true), _defineProperty(_Swiper, "speed", 3000), _defineProperty(_Swiper, "freeModeMomentum", false), _Swiper));
var customersSlider = new Swiper('.customers__track', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slidesShadow: true
  } // loop: true

});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/slider */ "./src/js/import/slider.js");
/* harmony import */ var _import_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _import_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/burger */ "./src/js/import/burger.js");
/* harmony import */ var _import_burger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_import_burger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _import_langs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/langs */ "./src/js/import/langs.js");
/* harmony import */ var _import_langs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_import_langs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _import_offices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import/offices */ "./src/js/import/offices.js");
/* harmony import */ var _import_offices__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_import_offices__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _import_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import/accordion */ "./src/js/import/accordion.js");
/* harmony import */ var _import_accordion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_import_accordion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _import_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./import/modal */ "./src/js/import/modal.js");
/* harmony import */ var _import_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_import_modal__WEBPACK_IMPORTED_MODULE_6__);








/***/ })

/******/ });
//# sourceMappingURL=main.js.map