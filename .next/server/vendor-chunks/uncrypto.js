"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uncrypto";
exports.ids = ["vendor-chunks/uncrypto"];
exports.modules = {

/***/ "(ssr)/./node_modules/uncrypto/dist/crypto.node.mjs":
/*!****************************************************!*\
  !*** ./node_modules/uncrypto/dist/crypto.node.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _crypto),\n/* harmony export */   getRandomValues: () => (/* binding */ getRandomValues),\n/* harmony export */   randomUUID: () => (/* binding */ randomUUID),\n/* harmony export */   subtle: () => (/* binding */ subtle)\n/* harmony export */ });\n/* harmony import */ var node_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:crypto */ \"node:crypto\");\n\nconst subtle = node_crypto__WEBPACK_IMPORTED_MODULE_0__.webcrypto?.subtle || {};\nconst randomUUID = ()=>{\n    return node_crypto__WEBPACK_IMPORTED_MODULE_0__.randomUUID();\n};\nconst getRandomValues = (array)=>{\n    return node_crypto__WEBPACK_IMPORTED_MODULE_0__.webcrypto.getRandomValues(array);\n};\nconst _crypto = {\n    randomUUID,\n    getRandomValues,\n    subtle\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5jcnlwdG8vZGlzdC9jcnlwdG8ubm9kZS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsU0FBU0Qsa0RBQW9CLEVBQUVDLFVBQVUsQ0FBQztBQUNoRCxNQUFNRSxhQUFhO0lBQ2pCLE9BQU9ILG1EQUFxQjtBQUM5QjtBQUNBLE1BQU1JLGtCQUFrQixDQUFDQztJQUN2QixPQUFPTCxrREFBb0IsQ0FBQ0ksZUFBZSxDQUFDQztBQUM5QztBQUNBLE1BQU1DLFVBQVU7SUFDZEg7SUFDQUM7SUFDQUg7QUFDRjtBQUVtRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy91bmNyeXB0by9kaXN0L2NyeXB0by5ub2RlLm1qcz80Nzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlQ3J5cHRvIGZyb20gJ25vZGU6Y3J5cHRvJztcblxuY29uc3Qgc3VidGxlID0gbm9kZUNyeXB0by53ZWJjcnlwdG8/LnN1YnRsZSB8fCB7fTtcbmNvbnN0IHJhbmRvbVVVSUQgPSAoKSA9PiB7XG4gIHJldHVybiBub2RlQ3J5cHRvLnJhbmRvbVVVSUQoKTtcbn07XG5jb25zdCBnZXRSYW5kb21WYWx1ZXMgPSAoYXJyYXkpID0+IHtcbiAgcmV0dXJuIG5vZGVDcnlwdG8ud2ViY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnJheSk7XG59O1xuY29uc3QgX2NyeXB0byA9IHtcbiAgcmFuZG9tVVVJRCxcbiAgZ2V0UmFuZG9tVmFsdWVzLFxuICBzdWJ0bGVcbn07XG5cbmV4cG9ydCB7IF9jcnlwdG8gYXMgZGVmYXVsdCwgZ2V0UmFuZG9tVmFsdWVzLCByYW5kb21VVUlELCBzdWJ0bGUgfTtcbiJdLCJuYW1lcyI6WyJub2RlQ3J5cHRvIiwic3VidGxlIiwid2ViY3J5cHRvIiwicmFuZG9tVVVJRCIsImdldFJhbmRvbVZhbHVlcyIsImFycmF5IiwiX2NyeXB0byIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uncrypto/dist/crypto.node.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/uncrypto/dist/crypto.node.mjs":
/*!****************************************************!*\
  !*** ./node_modules/uncrypto/dist/crypto.node.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _crypto),\n/* harmony export */   getRandomValues: () => (/* binding */ getRandomValues),\n/* harmony export */   randomUUID: () => (/* binding */ randomUUID),\n/* harmony export */   subtle: () => (/* binding */ subtle)\n/* harmony export */ });\n/* harmony import */ var node_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:crypto */ \"node:crypto\");\n\nconst subtle = node_crypto__WEBPACK_IMPORTED_MODULE_0__.webcrypto?.subtle || {};\nconst randomUUID = ()=>{\n    return node_crypto__WEBPACK_IMPORTED_MODULE_0__.randomUUID();\n};\nconst getRandomValues = (array)=>{\n    return node_crypto__WEBPACK_IMPORTED_MODULE_0__.webcrypto.getRandomValues(array);\n};\nconst _crypto = {\n    randomUUID,\n    getRandomValues,\n    subtle\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5jcnlwdG8vZGlzdC9jcnlwdG8ubm9kZS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsU0FBU0Qsa0RBQW9CLEVBQUVDLFVBQVUsQ0FBQztBQUNoRCxNQUFNRSxhQUFhO0lBQ2pCLE9BQU9ILG1EQUFxQjtBQUM5QjtBQUNBLE1BQU1JLGtCQUFrQixDQUFDQztJQUN2QixPQUFPTCxrREFBb0IsQ0FBQ0ksZUFBZSxDQUFDQztBQUM5QztBQUNBLE1BQU1DLFVBQVU7SUFDZEg7SUFDQUM7SUFDQUg7QUFDRjtBQUVtRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy91bmNyeXB0by9kaXN0L2NyeXB0by5ub2RlLm1qcz80Nzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlQ3J5cHRvIGZyb20gJ25vZGU6Y3J5cHRvJztcblxuY29uc3Qgc3VidGxlID0gbm9kZUNyeXB0by53ZWJjcnlwdG8/LnN1YnRsZSB8fCB7fTtcbmNvbnN0IHJhbmRvbVVVSUQgPSAoKSA9PiB7XG4gIHJldHVybiBub2RlQ3J5cHRvLnJhbmRvbVVVSUQoKTtcbn07XG5jb25zdCBnZXRSYW5kb21WYWx1ZXMgPSAoYXJyYXkpID0+IHtcbiAgcmV0dXJuIG5vZGVDcnlwdG8ud2ViY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnJheSk7XG59O1xuY29uc3QgX2NyeXB0byA9IHtcbiAgcmFuZG9tVVVJRCxcbiAgZ2V0UmFuZG9tVmFsdWVzLFxuICBzdWJ0bGVcbn07XG5cbmV4cG9ydCB7IF9jcnlwdG8gYXMgZGVmYXVsdCwgZ2V0UmFuZG9tVmFsdWVzLCByYW5kb21VVUlELCBzdWJ0bGUgfTtcbiJdLCJuYW1lcyI6WyJub2RlQ3J5cHRvIiwic3VidGxlIiwid2ViY3J5cHRvIiwicmFuZG9tVVVJRCIsImdldFJhbmRvbVZhbHVlcyIsImFycmF5IiwiX2NyeXB0byIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/uncrypto/dist/crypto.node.mjs\n");

/***/ })

};
;