/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handlers/get.ts":
/*!*****************************!*\
  !*** ./src/handlers/get.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handler: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\n/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_get_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/get/module */ \"./src/libs/get/module.ts\");\n/* harmony import */ var _libs_get_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/get/controller */ \"./src/libs/get/controller.ts\");\n\n\n\nlet applicationContext = null;\nconst getApplicationContext = async () => {\n    if (applicationContext)\n        return applicationContext;\n    applicationContext =\n        await _nestjs_core__WEBPACK_IMPORTED_MODULE_0__.NestFactory.createApplicationContext(_libs_get_module__WEBPACK_IMPORTED_MODULE_1__.GetBillingModule);\n    return applicationContext;\n};\nconst handler = async (event, context) => {\n    const appContext = await getApplicationContext();\n    const controller = appContext.get(_libs_get_controller__WEBPACK_IMPORTED_MODULE_2__.GetBillingController);\n    return await controller.do(event, context);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvZ2V0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzJDO0FBU1c7QUFDUTtBQUU5RCxJQUFJLGtCQUFrQixHQUE0QixJQUFJLENBQUM7QUFFdkQsTUFBTSxxQkFBcUIsR0FBRyxLQUFLLElBQXNDLEVBQUU7SUFDekUsSUFBSSxrQkFBa0I7UUFBRSxPQUFPLGtCQUFrQixDQUFDO0lBRWxELGtCQUFrQjtRQUNoQixNQUFNLHFEQUFXLENBQUMsd0JBQXdCLENBQUMsOERBQWdCLENBQUMsQ0FBQztJQUUvRCxPQUFPLGtCQUFrQixDQUFDO0FBQzVCLENBQUMsQ0FBQztBQUVLLE1BQU0sT0FBTyxHQUdoQixLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBa0MsRUFBRTtJQUMzRCxNQUFNLFVBQVUsR0FBRyxNQUFNLHFCQUFxQixFQUFFO0lBQ2hELE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsc0VBQW9CLENBQUM7SUFFdkQsT0FBTyxNQUFNLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztBQUM1QyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXRlci1kaXN0cmljdC1iaWxsaW5nLWFwaS8uL3NyYy9oYW5kbGVycy9nZXQudHM/MjBkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTmVzdEFwcGxpY2F0aW9uQ29udGV4dCB9IGZyb20gXCJAbmVzdGpzL2NvbW1vblwiO1xuaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tIFwiQG5lc3Rqcy9jb3JlXCI7XG5pbXBvcnQge1xuICBBUElHYXRld2F5UHJveHlFdmVudCxcbiAgQVBJR2F0ZXdheVByb3h5RXZlbnRWMixcbiAgQVBJR2F0ZXdheVByb3h5UmVzdWx0LFxuICBBUElHYXRld2F5UHJveHlSZXN1bHRWMixcbiAgQ29udGV4dCxcbiAgSGFuZGxlcixcbn0gZnJvbSBcImF3cy1sYW1iZGFcIjtcbmltcG9ydCB7IEdldEJpbGxpbmdNb2R1bGUgfSBmcm9tIFwiLi4vbGlicy9nZXQvbW9kdWxlXCI7XG5pbXBvcnQgeyBHZXRCaWxsaW5nQ29udHJvbGxlciB9IGZyb20gXCIuLi9saWJzL2dldC9jb250cm9sbGVyXCI7XG5cbmxldCBhcHBsaWNhdGlvbkNvbnRleHQ6IElOZXN0QXBwbGljYXRpb25Db250ZXh0ID0gbnVsbDtcblxuY29uc3QgZ2V0QXBwbGljYXRpb25Db250ZXh0ID0gYXN5bmMgKCk6IFByb21pc2U8SU5lc3RBcHBsaWNhdGlvbkNvbnRleHQ+ID0+IHtcbiAgaWYgKGFwcGxpY2F0aW9uQ29udGV4dCkgcmV0dXJuIGFwcGxpY2F0aW9uQ29udGV4dDtcblxuICBhcHBsaWNhdGlvbkNvbnRleHQgPVxuICAgIGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZUFwcGxpY2F0aW9uQ29udGV4dChHZXRCaWxsaW5nTW9kdWxlKTtcblxuICByZXR1cm4gYXBwbGljYXRpb25Db250ZXh0O1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXI6IEhhbmRsZXI8XG4gIEFQSUdhdGV3YXlQcm94eUV2ZW50LFxuICBBUElHYXRld2F5UHJveHlSZXN1bHRcbj4gPSBhc3luYyAoZXZlbnQsIGNvbnRleHQpOiBQcm9taXNlPEFQSUdhdGV3YXlQcm94eVJlc3VsdD4gPT4ge1xuICBjb25zdCBhcHBDb250ZXh0ID0gYXdhaXQgZ2V0QXBwbGljYXRpb25Db250ZXh0KClcbiAgY29uc3QgY29udHJvbGxlciA9IGFwcENvbnRleHQuZ2V0KEdldEJpbGxpbmdDb250cm9sbGVyKVxuXG4gIHJldHVybiBhd2FpdCBjb250cm9sbGVyLmRvKGV2ZW50LCBjb250ZXh0KVxufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/handlers/get.ts\n");

/***/ }),

/***/ "./src/libs/get/controller.ts":
/*!************************************!*\
  !*** ./src/libs/get/controller.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GetBillingController: () => (/* binding */ GetBillingController)\n/* harmony export */ });\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\n\nlet GetBillingController = class GetBillingController {\n    constructor(logger) {\n        this.logger = logger;\n    }\n    async do(event, context) {\n        this.logger.log('Get /billing api triggered');\n        return {\n            statusCode: 200,\n            body: \"Hello get\"\n        };\n    }\n};\nGetBillingController = __decorate([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Injectable)(),\n    __metadata(\"design:paramtypes\", [_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Logger])\n], GetBillingController);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9nZXQvY29udHJvbGxlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFRN0MsSUFBTSxvQkFBb0IsR0FBMUIsTUFBTSxvQkFBb0I7SUFDL0IsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXRDLEtBQUssQ0FBQyxFQUFFLENBQ04sS0FBMkIsRUFDM0IsT0FBZ0I7UUFFaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7UUFFN0MsT0FBTztZQUNMLFVBQVUsRUFBRSxHQUFHO1lBQ2YsSUFBSSxFQUFFLFdBQVc7U0FDbEI7SUFDSCxDQUFDO0NBQ0Y7QUFkWSxvQkFBb0I7SUFEaEMsMERBQVUsRUFBRTtxQ0FFaUIsa0RBQU07R0FEdkIsb0JBQW9CLENBY2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2F0ZXItZGlzdHJpY3QtYmlsbGluZy1hcGkvLi9zcmMvbGlicy9nZXQvY29udHJvbGxlci50cz8yMGEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIExvZ2dlciB9IGZyb20gXCJAbmVzdGpzL2NvbW1vblwiO1xuaW1wb3J0IHtcbiAgQVBJR2F0ZXdheVByb3h5RXZlbnQsXG4gIEFQSUdhdGV3YXlQcm94eVJlc3VsdCxcbiAgQ29udGV4dCxcbn0gZnJvbSBcImF3cy1sYW1iZGFcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdldEJpbGxpbmdDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IExvZ2dlcikge31cblxuICBhc3luYyBkbyhcbiAgICBldmVudDogQVBJR2F0ZXdheVByb3h5RXZlbnQsXG4gICAgY29udGV4dDogQ29udGV4dFxuICApOiBQcm9taXNlPEFQSUdhdGV3YXlQcm94eVJlc3VsdD4ge1xuICAgIHRoaXMubG9nZ2VyLmxvZygnR2V0IC9iaWxsaW5nIGFwaSB0cmlnZ2VyZWQnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgIGJvZHk6IFwiSGVsbG8gZ2V0XCJcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/get/controller.ts\n");

/***/ }),

/***/ "./src/libs/get/module.ts":
/*!********************************!*\
  !*** ./src/libs/get/module.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GetBillingModule: () => (/* binding */ GetBillingModule)\n/* harmony export */ });\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\n/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/libs/get/controller.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\nlet GetBillingModule = class GetBillingModule {\n};\nGetBillingModule = __decorate([\n    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Module)({\n        providers: [\n            _nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Logger,\n            _controller__WEBPACK_IMPORTED_MODULE_1__.GetBillingController\n        ]\n    })\n], GetBillingModule);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9nZXQvbW9kdWxlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDSTtBQVE3QyxJQUFNLGdCQUFnQixHQUF0QixNQUFNLGdCQUFnQjtDQUFHO0FBQW5CLGdCQUFnQjtJQU41QixzREFBTSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1Qsa0RBQU07WUFDTiw2REFBb0I7U0FDckI7S0FDRixDQUFDO0dBQ1csZ0JBQWdCLENBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXRlci1kaXN0cmljdC1iaWxsaW5nLWFwaS8uL3NyYy9saWJzL2dldC9tb2R1bGUudHM/ODZlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIsIE1vZHVsZSB9IGZyb20gXCJAbmVzdGpzL2NvbW1vblwiO1xuaW1wb3J0IHsgR2V0QmlsbGluZ0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICBMb2dnZXIsXG4gICAgR2V0QmlsbGluZ0NvbnRyb2xsZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBHZXRCaWxsaW5nTW9kdWxlIHt9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/get/module.ts\n");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handlers/get.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;