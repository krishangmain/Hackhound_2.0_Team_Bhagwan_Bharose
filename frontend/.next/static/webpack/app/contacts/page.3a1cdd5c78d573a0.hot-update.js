"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contacts/page",{

/***/ "(app-pages-browser)/./src/app/contacts/page.tsx":
/*!***********************************!*\
  !*** ./src/app/contacts/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_contactCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/contactCard */ \"(app-pages-browser)/./src/app/components/ui/contactCard.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [otherUsers, setOtherUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const res = await fetch(\"http://localhost:4000/user/\".concat(localStorage.getItem(\"userid\")));\n            const user1 = await res.json();\n            console.log(user1);\n            setUser(user1.user);\n            await Promise.all(user.contacts.map(async (otherid)=>{\n                const newres = await fetch(\"http://localhost:4000/user/\".concat(otherid));\n                const other = await newres.json();\n                setOtherUsers((prev)=>[\n                        ...prev,\n                        other\n                    ]);\n            }));\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto py-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_contactCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: data._id,\n                    title: data.firstName,\n                    subtitle: data.authorityLevel\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\adity gupta\\\\hackhound\\\\Hackhound_2.0_Team_Bhagwan_Bharose\\\\frontend\\\\src\\\\app\\\\contacts\\\\page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, undefined),\n                \"))}\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adity gupta\\\\hackhound\\\\Hackhound_2.0_Team_Bhagwan_Bharose\\\\frontend\\\\src\\\\app\\\\contacts\\\\page.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adity gupta\\\\hackhound\\\\Hackhound_2.0_Team_Bhagwan_Bharose\\\\frontend\\\\src\\\\app\\\\contacts\\\\page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"isU4QPqH6y9E1gjAg/6b+hkZBjU=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGFjdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNnRDtBQUNNO0FBRXRELE1BQU1JLE9BQWlCOztJQUNuQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQWE7SUFDN0MsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFlLEVBQUU7SUFFN0RDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTU8sWUFBWTtZQUNkLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSw4QkFBNkQsT0FBL0JDLGFBQWFDLE9BQU8sQ0FBQztZQUMzRSxNQUFNQyxRQUFRLE1BQU1KLElBQUlLLElBQUk7WUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWlIsUUFBUVEsTUFBTVQsSUFBSTtZQUVsQixNQUFNYSxRQUFRQyxHQUFHLENBQ2JkLEtBQUtlLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLE9BQU9DO2dCQUN2QixNQUFNQyxTQUFTLE1BQU1aLE1BQU0sOEJBQXNDLE9BQVJXO2dCQUN6RCxNQUFNRSxRQUFRLE1BQU1ELE9BQU9SLElBQUk7Z0JBQy9CUCxjQUFjLENBQUNpQixPQUFTOzJCQUFJQTt3QkFBTUQ7cUJBQU07WUFDMUM7UUFJUjtRQUVBZjtJQUNKLEdBQUcsRUFBRTtJQUNQLHFCQUNFLDhEQUFDaUI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBRVgsOERBQUN4QixrRUFBV0E7b0JBQWF5QixJQUFJQyxLQUFLQyxHQUFHO29CQUFFQyxPQUFPRixLQUFLRyxTQUFTO29CQUFFQyxVQUFVSixLQUFLSyxjQUFjO21CQUF6RUM7Ozs7O2dCQUE2RTs7Ozs7Ozs7Ozs7O0FBS3pHO0dBakNNL0I7S0FBQUE7QUFtQ04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb250YWN0cy9wYWdlLnRzeD8yZTdkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29udGFjdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy91aS9jb250YWN0Q2FyZCdcclxuXHJcbmNvbnN0IFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8YW55IHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbb3RoZXJVc2Vycywgc2V0T3RoZXJVc2Vyc10gPSB1c2VTdGF0ZTxhbnlbXSB8IG51bGw+KFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3VzZXIvJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcmlkJyl9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIxID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcjEpXHJcbiAgICAgICAgICAgIHNldFVzZXIodXNlcjEudXNlcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgICAgIHVzZXIuY29udGFjdHMubWFwKGFzeW5jIChvdGhlcmlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3JlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvdXNlci8ke290aGVyaWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG90aGVyID0gYXdhaXQgbmV3cmVzLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3RoZXJVc2VycygocHJldikgPT4gWy4uLnByZXYsIG90aGVyXSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweS04XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPENvbnRhY3RDYXJkIGtleT17aW5kZXh9IGlkPXtkYXRhLl9pZH0gdGl0bGU9e2RhdGEuZmlyc3ROYW1lfSBzdWJ0aXRsZT17ZGF0YS5hdXRob3JpdHlMZXZlbH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhY3RDYXJkIiwiUGFnZSIsInVzZXIiLCJzZXRVc2VyIiwib3RoZXJVc2VycyIsInNldE90aGVyVXNlcnMiLCJmZXRjaERhdGEiLCJyZXMiLCJmZXRjaCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyMSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsImFsbCIsImNvbnRhY3RzIiwibWFwIiwib3RoZXJpZCIsIm5ld3JlcyIsIm90aGVyIiwicHJldiIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiZGF0YSIsIl9pZCIsInRpdGxlIiwiZmlyc3ROYW1lIiwic3VidGl0bGUiLCJhdXRob3JpdHlMZXZlbCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/contacts/page.tsx\n"));

/***/ })

});