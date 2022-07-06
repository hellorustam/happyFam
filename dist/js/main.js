/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_webp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/webp.js */ \"./src/js/modules/webp.js\");\n/* harmony import */ var _modules_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger.js */ \"./src/js/modules/burger.js\");\n/* harmony import */ var _modules_fixedMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fixedMenu.js */ \"./src/js/modules/fixedMenu.js\");\n\r\n\r\n\r\n\r\n(0,_modules_webp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n(0,_modules_burger_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n(0,_modules_fixedMenu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nif (document.querySelector('.welcome-text__hide')) {\r\n  function hideText() {\r\n    const text = document.querySelectorAll('.welcome-text__hide');\r\n    const hide = document.querySelector('.welcome__hide');\r\n\r\n    hide.addEventListener('click', () => {\r\n      text.forEach((elem) => {\r\n        if (!elem.classList.contains('welcome-text__hide--hidden')) {\r\n          elem.classList.add('welcome-text__hide--hidden');\r\n          hide.textContent = 'Раскрыть';\r\n        } else {\r\n          elem.classList.remove('welcome-text__hide--hidden');\r\n          hide.textContent = 'Скрыть';\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  hideText();\r\n}\r\n\r\nfunction modalFunc() {\r\n  const modals = document.querySelectorAll('.modal');\r\n  const btns = document.querySelectorAll('.specialists-item__btn');\r\n  const closes = document.querySelectorAll('.modal__close');\r\n\r\n  function modal(activeIndex) {\r\n    modals.forEach((modal, index) => {\r\n      modal.classList.remove('modal--active');\r\n\r\n      if (activeIndex === index) {\r\n        modal.classList.add('modal--active');\r\n        document.body.classList.add('locked');\r\n      }\r\n\r\n      modal.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('modal')) {\r\n          modal.classList.remove('modal--active');\r\n          document.body.classList.remove('locked');\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  function btn() {\r\n    btns.forEach((btn, index) => {\r\n      btn.addEventListener('click', (event) => {\r\n        const e = event.currentTarget;\r\n\r\n        if (e) {\r\n          modal(index);\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  btn();\r\n\r\n  closes.forEach((close, index) => {\r\n    close.addEventListener('click', () => {\r\n      modals.forEach((modal) => {\r\n        modal.classList.remove('modal--active');\r\n        document.body.classList.remove('locked');\r\n      });\r\n    });\r\n  });\r\n}\r\n\r\nmodalFunc();\r\n\r\n// ---- Стрелочка наверх\r\n\r\nfunction arrowTop() {\r\n  let classScrollTop = document.querySelector('.scroll_top');\r\n\r\n  classScrollTop.addEventListener('click', () => {\r\n    window.scrollTo({\r\n      top: 0,\r\n      behavior: 'smooth',\r\n    });\r\n  });\r\n\r\n  window.addEventListener('scroll', () => {\r\n    classScrollTop.hidden = pageYOffset < document.documentElement.clientHeight;\r\n  });\r\n}\r\narrowTop();\r\n\r\n// ---- Показать-скрыть лекции в Курсах\r\n\r\nfunction showCourseText() {\r\n  let titleHide = document.querySelectorAll('.blog-info__cursor');\r\n\r\n  titleHide.forEach((i) => {\r\n    let closestPar = i.closest('.blog-info');\r\n    let closestSib = closestPar.querySelector('.blog-info__hide');\r\n\r\n    i.addEventListener('click', () => {\r\n      closestSib.classList.toggle('blog-info__hide');\r\n    });\r\n  });\r\n}\r\n\r\nshowCourseText();\r\n\n\n//# sourceURL=webpack://mygulp/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ burgerFunc)\n/* harmony export */ });\nfunction burgerFunc() {\r\n   const burger = document.querySelector(\".header__burger\");\r\n   const menu = document.querySelector(\".header__menu\")\r\n\r\n   if(burger) {\r\n      burger.addEventListener(\"click\", () => {\r\n         if(!menu.classList.contains(\"menu--active\")) {\r\n            menu.classList.add(\"menu--active\");\r\n            burger.classList.add(\"header__burger--active\");\r\n            document.body.classList.add('locked');\r\n         } else {\r\n            menu.classList.remove(\"menu--active\");\r\n            burger.classList.remove(\"header__burger--active\")\r\n            document.body.classList.remove('locked');\r\n         }\r\n      })\r\n   }\r\n}\n\n//# sourceURL=webpack://mygulp/./src/js/modules/burger.js?");

/***/ }),

/***/ "./src/js/modules/fixedMenu.js":
/*!*************************************!*\
  !*** ./src/js/modules/fixedMenu.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fixedMenuFunc)\n/* harmony export */ });\nfunction fixedMenuFunc() {\r\n  const menu = document.querySelector(\".header\")\r\n\r\n  window.addEventListener(\"scroll\", scrollFixedMenu)\r\n\r\n\r\n  function scrollFixedMenu() {\r\n    const breakpoint = 80\r\n    if (window.scrollY > breakpoint) {\r\n      menu.classList.add(\"header__fixed\")\r\n    } else {\r\n      menu.classList.remove(\"header__fixed\")\r\n    }\r\n  }\r\n\r\n  scrollFixedMenu()\r\n\r\n}\n\n//# sourceURL=webpack://mygulp/./src/js/modules/fixedMenu.js?");

/***/ }),

/***/ "./src/js/modules/webp.js":
/*!********************************!*\
  !*** ./src/js/modules/webp.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isWebp)\n/* harmony export */ });\nfunction isWebp() {\r\n   function testWebP(callback) {\r\n      let webP = new Image();\r\n      webP.onload = webP.onerror = function() {\r\n         callback(webP.height == 2);\r\n      };\r\n      webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n   }\r\n   testWebP(function(support) {\r\n      let className = support === true ? 'webp' : 'no-webp';\r\n      document.documentElement.classList.add(className);\r\n   })\r\n}\n\n//# sourceURL=webpack://mygulp/./src/js/modules/webp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;