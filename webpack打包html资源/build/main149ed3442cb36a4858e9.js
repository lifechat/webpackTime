/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("\r\nfunction addNum(a,b){\r\n    return a+b;\r\n}\r\n\r\nconsole.log(addNum(5,6));\r\n\r\ndocument.body.append(\"<h1>这是测试版</h1>\")\r\ndocument.body.style.backgroundColor = \"skyblue\";\r\n\r\nconst btn = document.getElementById('btn');\r\nconst num = document.getElementById(\"num\");\r\nbtn.innerHTML = \"按钮\"\r\nbtn.addEventListener('click',function(){\r\n    const a = parseInt(num.innerText,10);\r\n    num.innerText = a+1;\r\n})\r\n\r\nconsole.log(\"webpack 测试版\")\n\n//# sourceURL=webpack://webpackdemo/./src/index.js?");
/******/ })()
;