"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ce8ab1b76b02\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MTY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImNlOGFiMWI3NmIwMlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/Components/Navbar.js":
/*!**********************************!*\
  !*** ./src/Components/Navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_Assets_STUDIOWOB_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/Assets/STUDIOWOB.svg */ \"(app-pages-browser)/./public/Assets/STUDIOWOB.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollTop = window.pageYOffset;\n            setIsScrolled(scrollTop > 0);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleNavbarVisibility = ()=>{\n            if (!isScrolled) {\n                setIsVisible(true); // Navbar is visible when at the top\n            } else {\n                setIsVisible(false); // Navbar is invisible when scrolled down\n            }\n        };\n        handleNavbarVisibility();\n        return ()=>setIsVisible(false); // Clean-up function to ensure visibility is reset when unmounting\n    }, [\n        isScrolled\n    ]);\n    const navbarStyle = {\n        opacity: isVisible ? 1 : 0,\n        transition: \"opacity 0.5s ease-in-out\",\n        backgroundColor: \"rgba(0, 0, 0, 0.5)\"\n    };\n    // Define the logo dimensions based on screen size\n    const logoHeight = isMobileDevice() ? 40 : 60; // Adjust height for mobile screens\n    const logoWidth = isMobileDevice() ? 120 : 180; // Adjust width for mobile screens\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed top-0 w-full z-20\",\n        style: navbarStyle,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between items-center p-4 md:p-8 \".concat(isScrolled ? \"bg-transparent\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: _public_Assets_STUDIOWOB_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"Company Logo\",\n                        height: logoHeight,\n                        width: logoWidth\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\achintya\\\\Downloads\\\\oddeasy\\\\src\\\\Components\\\\Navbar.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\achintya\\\\Downloads\\\\oddeasy\\\\src\\\\Components\\\\Navbar.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\achintya\\\\Downloads\\\\oddeasy\\\\src\\\\Components\\\\Navbar.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\achintya\\\\Downloads\\\\oddeasy\\\\src\\\\Components\\\\Navbar.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\achintya\\\\Downloads\\\\oddeasy\\\\src\\\\Components\\\\Navbar.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"n6xIP5X7j+gq71IqZg7kP/tTYhA=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n// Function to detect mobile device\nconst isMobileDevice = ()=>{\n    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);\n};\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUNwQjtBQUN3QjtBQUV2RCxNQUFNSyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUM7SUFFM0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsZUFBZTtZQUNuQixNQUFNQyxZQUFZQyxPQUFPQyxXQUFXO1lBQ3BDTixjQUFjSSxZQUFZO1FBQzVCO1FBRUFDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVKO1FBRWxDLE9BQU87WUFDTEUsT0FBT0csbUJBQW1CLENBQUMsVUFBVUw7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTFIsZ0RBQVNBLENBQUM7UUFDUixNQUFNYyx5QkFBeUI7WUFDN0IsSUFBSSxDQUFDVixZQUFZO2dCQUNmRyxhQUFhLE9BQU8sb0NBQW9DO1lBQzFELE9BQU87Z0JBQ0xBLGFBQWEsUUFBUSx5Q0FBeUM7WUFDaEU7UUFDRjtRQUVBTztRQUVBLE9BQU8sSUFBTVAsYUFBYSxRQUFRLGtFQUFrRTtJQUN0RyxHQUFHO1FBQUNIO0tBQVc7SUFFZixNQUFNVyxjQUFjO1FBQ2xCQyxTQUFTVixZQUFZLElBQUk7UUFDekJXLFlBQVk7UUFDWkMsaUJBQWlCO0lBQ25CO0lBRUEsa0RBQWtEO0lBQ2xELE1BQU1DLGFBQWFDLG1CQUFtQixLQUFLLElBQUksbUNBQW1DO0lBQ2xGLE1BQU1DLFlBQVlELG1CQUFtQixNQUFNLEtBQUssa0NBQWtDO0lBRWxGLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO1FBQTBCQyxPQUFPVDtrQkFDOUMsNEVBQUNPO1lBQUlDLFdBQVcsZ0RBQW1GLE9BQW5DbkIsYUFBYSxtQkFBbUI7OzhCQUM5Riw4REFBQ2tCO29CQUFJQyxXQUFVOzhCQUViLDRFQUFDdEIsa0RBQUtBO3dCQUFDd0IsS0FBS3ZCLG9FQUFNQTt3QkFBRXdCLEtBQUk7d0JBQWVDLFFBQVFSO3dCQUFZUyxPQUFPUDs7Ozs7Ozs7Ozs7OEJBRXBFLDhEQUFDQztvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkI7R0F0RE1wQjtLQUFBQTtBQXdETiwrREFBZUEsTUFBTUEsRUFBQztBQUV0QixtQ0FBbUM7QUFDbkMsTUFBTWlCLGlCQUFpQjtJQUNyQixPQUFPLGlFQUFpRVMsSUFBSSxDQUFDQyxVQUFVQyxTQUFTO0FBQ2xHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL05hdmJhci5qcz80YzAyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGxvZ29fNiBmcm9tIFwiLi4vLi4vcHVibGljL0Fzc2V0cy9TVFVESU9XT0Iuc3ZnXCI7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICBzZXRJc1Njcm9sbGVkKHNjcm9sbFRvcCA+IDApO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZU5hdmJhclZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghaXNTY3JvbGxlZCkge1xyXG4gICAgICAgIHNldElzVmlzaWJsZSh0cnVlKTsgLy8gTmF2YmFyIGlzIHZpc2libGUgd2hlbiBhdCB0aGUgdG9wXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNWaXNpYmxlKGZhbHNlKTsgLy8gTmF2YmFyIGlzIGludmlzaWJsZSB3aGVuIHNjcm9sbGVkIGRvd25cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVOYXZiYXJWaXNpYmlsaXR5KCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHNldElzVmlzaWJsZShmYWxzZSk7IC8vIENsZWFuLXVwIGZ1bmN0aW9uIHRvIGVuc3VyZSB2aXNpYmlsaXR5IGlzIHJlc2V0IHdoZW4gdW5tb3VudGluZ1xyXG4gIH0sIFtpc1Njcm9sbGVkXSk7XHJcblxyXG4gIGNvbnN0IG5hdmJhclN0eWxlID0ge1xyXG4gICAgb3BhY2l0eTogaXNWaXNpYmxlID8gMSA6IDAsXHJcbiAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgMC41cyBlYXNlLWluLW91dFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC41KVwiLCAvLyBUcmFuc3BhcmVudCBiYWNrZ3JvdW5kXHJcbiAgfTtcclxuXHJcbiAgLy8gRGVmaW5lIHRoZSBsb2dvIGRpbWVuc2lvbnMgYmFzZWQgb24gc2NyZWVuIHNpemVcclxuICBjb25zdCBsb2dvSGVpZ2h0ID0gaXNNb2JpbGVEZXZpY2UoKSA/IDQwIDogNjA7IC8vIEFkanVzdCBoZWlnaHQgZm9yIG1vYmlsZSBzY3JlZW5zXHJcbiAgY29uc3QgbG9nb1dpZHRoID0gaXNNb2JpbGVEZXZpY2UoKSA/IDEyMCA6IDE4MDsgLy8gQWRqdXN0IHdpZHRoIGZvciBtb2JpbGUgc2NyZWVuc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCB3LWZ1bGwgei0yMFwiIHN0eWxlPXtuYXZiYXJTdHlsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtNCBtZDpwLTggJHtpc1Njcm9sbGVkID8gXCJiZy10cmFuc3BhcmVudFwiIDogXCJcIn1gfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICB7LyogSW1hZ2UgY29tcG9uZW50IGRpc3BsYXlpbmcgY3VycmVudCBsb2dvICovfVxyXG4gICAgICAgICAgPEltYWdlIHNyYz17bG9nb182fSBhbHQ9XCJDb21wYW55IExvZ29cIiBoZWlnaHQ9e2xvZ29IZWlnaHR9IHdpZHRoPXtsb2dvV2lkdGh9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgey8qIEFkZCBhbnkgb3RoZXIgbmF2YmFyIGVsZW1lbnRzIGhlcmUgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGRldGVjdCBtb2JpbGUgZGV2aWNlXHJcbmNvbnN0IGlzTW9iaWxlRGV2aWNlID0gKCkgPT4ge1xyXG4gIHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJsb2dvXzYiLCJOYXZiYXIiLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVOYXZiYXJWaXNpYmlsaXR5IiwibmF2YmFyU3R5bGUiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImJhY2tncm91bmRDb2xvciIsImxvZ29IZWlnaHQiLCJpc01vYmlsZURldmljZSIsImxvZ29XaWR0aCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/Navbar.js\n"));

/***/ })

});