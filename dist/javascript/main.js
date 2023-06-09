/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cube/./src/scss/style.scss?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _script_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/script */ \"./src/script/script.js\");\n/* harmony import */ var _script_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_script_script__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://cube/./src/main.js?");

/***/ }),

/***/ "./src/script/script.js":
/*!******************************!*\
  !*** ./src/script/script.js ***!
  \******************************/
/***/ (() => {

eval("// init\r\nnew WOW().init();\r\n// dropdown-toggle\r\nconst dropdownToggle = document.querySelector(\".dropdown-toggle\");\r\nconst dropdownMenu = document.querySelector('.dropdown-menu');\r\ndropdownToggle.addEventListener(\"click\", () => {\r\n    dropdownMenu.classList.add(\"show\");\r\n});\r\ndocument.body.addEventListener(\"click\", (e) => {\r\n    if (e.target.matches(\".dropdown-toggle\") === false) {\r\n        dropdownMenu.classList.remove(\"show\");\r\n    }\r\n});\r\n// go top\r\nconst backToTopButton = document.querySelector('#gotop');\r\n// header scroll\r\nconst header = document.querySelector('.header');\r\n// serve\r\nconst serve = document.querySelector('#serve');\r\nconst tabNavs = document.querySelectorAll('.tab-nav ul li');\r\nconst tabContents = document.querySelectorAll('.tab-content .tab-pane');\r\nconst tabContainer = document.querySelector('.tab-container');\r\n\r\nfunction scrollFunction() {\r\n    // \r\n    const tabsNav = document.querySelector('#tabs .tab-nav');\r\n    // console.log(document.documentElement.scrollTop)\r\n    //  header scroll\r\n    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\r\n        header.classList.add('fixed');\r\n    } else {\r\n        header.classList.remove('fixed');\r\n    };\r\n    // go top \r\n    if(document.documentElement.scrollTop > 300) {        \r\n        // show backToTopButton\r\n        if(!backToTopButton.classList.contains('btnEntrance')){\r\n            backToTopButton.classList.remove('btnExit')\r\n            backToTopButton.classList.add('btnEntrance')\r\n            backToTopButton.style.display = 'block'\r\n        };\r\n    } else {\r\n        // hide backToTopButton\r\n        if(backToTopButton.classList.contains('btnEntrance')) {\r\n            backToTopButton.classList.add('btnExit')\r\n            backToTopButton.classList.remove('btnEntrance')\r\n            setTimeout(() => {\r\n                backToTopButton.style.display = 'none'\r\n            }, 250);            \r\n        };\r\n    };\r\n    // serve\r\n    // console.log(serve.offsetTop )\r\n    // if(serve.offsetTop === document.documentElement.scrollTop) {\r\n    //     tabContainer.addEventListener('scroll', () => {\r\n    //         console.log(tabContainer.scrollTop);\r\n    //     })\r\n        \r\n    // }\r\n    // const serveHeight = (serve.offsetTop + serve.clientHeight) - tabsNav.clientHeight - 270;\r\n    // if(document.documentElement.scrollTop > serve.offsetTop && document.documentElement.scrollTop < serveHeight) {\r\n    //     tabsNav.classList.add('server-nav-fixed');\r\n    //     tabsNav.style.top = \"0\";\r\n    // } else {\r\n    //     tabsNav.classList.remove('server-nav-fixed');\r\n    //     tabsNav.style.top = \"-100%\";\r\n    // }\r\n}\r\nwindow.addEventListener('scroll', scrollFunction);\r\n// tabs\r\ntabNavs.forEach((tab, index) => {\r\n    tab.addEventListener('click', () => {\r\n        tabContents.forEach((content) => {\r\n            content.classList.remove('active', 'show');\r\n        });\r\n        tabNavs.forEach((tab) => {\r\n            tab.classList.remove('active');\r\n        });\r\n        tabContents[index].classList.add('active', 'show');\r\n        tabNavs[index].classList.add('active');\r\n        // console.log(tabContents[index].clientHeight);\r\n        \r\n    });\r\n});\r\n// accordion\r\nconst accordionContent = document.querySelectorAll(\".accordion-item\");\r\naccordionContent.forEach((item, index) => {\r\n    let header = item.querySelector(\".toggle\");\r\n    header.addEventListener(\"click\", () =>{\r\n        item.classList.toggle(\"open\");\r\n\r\n        let content = item.querySelector(\".content\");\r\n        if(item.classList.contains(\"open\")){\r\n            content.style.height = `${content.scrollHeight}px`; \r\n            item.querySelector(\".toggle-icon\").textContent = 'remove';\r\n        }else{\r\n            content.style.height = \"0px\";\r\n            item.querySelector(\".toggle-icon\").textContent = 'add';\r\n        }\r\n        removeOpen(index); \r\n    })\r\n})\r\n\r\nfunction removeOpen(index1){\r\n    accordionContent.forEach((item2, index2) => {\r\n        if(index1 != index2){\r\n            item2.classList.remove(\"open\");\r\n\r\n            let des = item2.querySelector(\".content\");\r\n            des.style.height = \"0px\";\r\n            item2.querySelector(\".toggle-icon\").textContent = 'add';\r\n        }\r\n    })\r\n}\r\n// \r\nconst modalBtn = document.querySelectorAll('.modal-btn');\r\nconst openModal = (id) => {\r\n    const modelId = document.querySelector(id);\r\n    const modalCloseBtn = modelId.querySelector('.modal-close-btn');\r\n    document.body.classList.add('modal-open');\r\n    modelId.classList.add('show');\r\n    modalCloseBtn.addEventListener('click', () => {\r\n        document.body.classList.remove('modal-open');\r\n        modelId.classList.remove('show');\r\n    });\r\n}\r\n\r\nmodalBtn.forEach(btn => {\r\n    btn.addEventListener('click', (e) => {\r\n        const id = e.target.dataset.target;\r\n        openModal(id);\r\n    })\r\n})\r\n\r\n// \r\nconst container = document.querySelector('.banner-box');\r\nfor(let i = 0; i <= 100; i++ ) {\r\n\tconst blocks = document.createElement('div');\r\n\tblocks.classList.add('block');\r\n\tcontainer.appendChild(blocks);\r\n}\r\nfunction animateBlocks() {\r\n\tanime({\r\n\t    targets: '.block',\r\n\t\ttranslateX: function(){\r\n\t\t\treturn anime.random(-container.clientWidth, container.clientWidth)\r\n\t\t},\t\t\r\n        translateY: function(){\r\n\t\t\treturn anime.random(-container.clientHeight, container.clientHeight)\r\n\t\t},\r\n        scale: function(){\r\n\t\t\treturn anime.random(1,5)\r\n\t\t},\r\n\t\teasing: 'linear',\r\n\t\tduration: 6000,\r\n\t\tdelay: anime.stagger(10),\r\n\t\tcomplete: animateBlocks\r\n\t});\r\n}\r\nanimateBlocks();\r\n\r\n// \r\nconst swiper = new Swiper(\".mySwiper\", {\r\n    pagination: {\r\n        el: \".swiper-pagination\",\r\n        clickable: true,\r\n        renderBullet: function (index, className) {\r\n            return '<span class=\"' + className + '\">' + \"</span>\";\r\n        }\r\n    },\r\n    centeredSlides: true,\r\n    autoplay: {\r\n        delay: 9000,\r\n        disableOnInteraction: false,\r\n    }\r\n});\n\n//# sourceURL=webpack://cube/./src/script/script.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;