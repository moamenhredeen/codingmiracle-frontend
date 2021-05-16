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

/***/ "./src/App/HttpClient.js":
/*!*******************************!*\
  !*** ./src/App/HttpClient.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HttpClient\": () => (/* binding */ HttpClient)\n/* harmony export */ });\n\r\nclass HttpClient {\r\n\r\n\r\n    static get = async (url) => {\r\n        try {\r\n            return await fetch(url, {\r\n                method: 'get',\r\n                mode: 'cors',\r\n                cache: 'no-cache',\r\n                credentials: 'same-origin',\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                    'Access-Control-Allow-Origin': '*'\r\n                },\r\n                referrerPolicy: \"unsafe-url\"\r\n            });\r\n        } catch (err) {\r\n            console.log(err);\r\n            return [];\r\n        }\r\n\r\n    }\r\n\r\n    static post = async (url, data) => {\r\n        try {\r\n            return await fetch(url, {\r\n                method: 'POST',\r\n                mode: 'cors',\r\n                cache: 'no-cache',\r\n                credentials: 'same-origin',\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                    'Access-Control-Allow-Origin': '*'\r\n                },\r\n                referrerPolicy: \"unsafe-url\",\r\n                body: JSON.stringify(data)\r\n            });\r\n        } catch (err) {\r\n            console.log(err);\r\n            return [];\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/App/HttpClient.js?");

/***/ }),

/***/ "./src/App/PostStorage.js":
/*!********************************!*\
  !*** ./src/App/PostStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostStorage\": () => (/* binding */ PostStorage)\n/* harmony export */ });\n/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpClient */ \"./src/App/HttpClient.js\");\n\r\n\r\n// singleton storage\r\nclass PostStorage {\r\n    constructor() {\r\n        this.posts = null\r\n        // this.posts = [{\r\n        //     id: 1,\r\n        //     header: \"header\",\r\n        //     body: \"body\"\r\n        // }, {\r\n        //     id: 2,\r\n        //     header: \"some header\",\r\n        //     body: \"some body\"\r\n        // }];\r\n    }\r\n\r\n    fetchPosts() {\r\n        return _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient.get('http://localhost:8080/posts/')\r\n            .then(res => res)\r\n            .catch(res => res)\r\n    }\r\n\r\n    async getPosts() {\r\n        const res = await _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient.get('http://localhost:8080/posts/')\r\n        return res.json()\r\n    }\r\n\r\n    async addPost(post) {\r\n        const res = await _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient.post('http://localhost:8080/posts/', post)\r\n        return res\r\n    }\r\n\r\n    remove(post) {\r\n        this.posts = this.posts.filter(el => el.id !== post.id)\r\n        return post\r\n    }\r\n\r\n    update(post) {\r\n        this.remove(post)\r\n        this.posts.push(post)\r\n        return post\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/App/PostStorage.js?");

/***/ }),

/***/ "./src/App/components/Post.js":
/*!************************************!*\
  !*** ./src/App/components/Post.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Post\": () => (/* binding */ Post)\n/* harmony export */ });\nclass Post {\r\n\r\n    constructor(id, header, body) {\r\n        this.id = id;\r\n        this.header = header;\r\n        this.body = body;\r\n    }\r\n\r\n    onClickHandler() {\r\n        console.log(this.id, this.body);\r\n    }\r\n\r\n    // render the new post to the dom\r\n    render() {\r\n        const inputPostContent = document.getElementById('post-content')\r\n        const newPost = document\r\n            .querySelector('.post-output')\r\n            .cloneNode(true);\r\n        newPost.classList.remove('hide');\r\n        newPost.setAttribute('id', this.id);\r\n        const button = newPost.querySelector('.action-comment > span')\r\n        button.addEventListener('click', this.onClickHandler.bind(this));\r\n        newPost.querySelector('.post-content > p').innerHTML = this.body;\r\n        return newPost;\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/App/components/Post.js?");

/***/ }),

/***/ "./src/App/components/PostList.js":
/*!****************************************!*\
  !*** ./src/App/components/PostList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostList\": () => (/* binding */ PostList)\n/* harmony export */ });\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post */ \"./src/App/components/Post.js\");\n/* harmony import */ var _PostStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PostStorage */ \"./src/App/PostStorage.js\");\n\r\n\r\n\r\nclass PostList {\r\n    constructor() {\r\n        this.postStorage = new _PostStorage__WEBPACK_IMPORTED_MODULE_1__.PostStorage();\r\n    }\r\n\r\n    addPost(post) {\r\n        this.postStorage.addPost(post)\r\n        this.render();\r\n    }\r\n\r\n    async render() {\r\n        const postsDOM = document.getElementById('post-list');\r\n        // postsDOM.innerHTML = ''\r\n        const posts = await this.postStorage.getPosts()\r\n        for (const el of posts) {\r\n            const post = new _Post__WEBPACK_IMPORTED_MODULE_0__.Post(el.id, el.header, el.body)\r\n            const postDOM = post.render();\r\n            postsDOM.prepend(postDOM);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/App/components/PostList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_components_PostList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/components/PostList */ \"./src/App/components/PostList.js\");\n\n\nconst inputPost = document.getElementById('post-input')\n\nconst list = new _App_components_PostList__WEBPACK_IMPORTED_MODULE_0__.PostList()\nlist.render()\n\nconst create = document.getElementById('action-submit')\ncreate.addEventListener('click', () => {\n    list.addPost({\n        id: inputPost.getAttribute('id'),\n        header: inputPost.getAttribute('id'),\n        body: inputPost.querySelector('#post-content').value\n    })\n})\n\n\n//# sourceURL=webpack://frontend/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;