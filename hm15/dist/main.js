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

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_hm1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/hm1.js */ \"./src/hm1.js\");\n/* harmony import */ var _src_hm2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/hm2.js */ \"./src/hm2.js\");\n/* harmony import */ var _src_hm3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/hm3.js */ \"./src/hm3.js\");\n/* harmony import */ var _src_hm4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/hm4.js */ \"./src/hm4.js\");\n/* harmony import */ var _src_hm5_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/hm5.js */ \"./src/hm5.js\");\n/* harmony import */ var _src_hm6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/hm6.js */ \"./src/hm6.js\");\n/* harmony import */ var _src_hm7_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/hm7.js */ \"./src/hm7.js\");\n/* harmony import */ var _src_hm8_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/hm8.js */ \"./src/hm8.js\");\n/* harmony import */ var _src_hm9_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/hm9.js */ \"./src/hm9.js\");\n/* harmony import */ var _src_hm10_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/hm10.js */ \"./src/hm10.js\");\n/* harmony import */ var _src_hm11_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/hm11.js */ \"./src/hm11.js\");\n/* harmony import */ var _src_hm12_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/hm12.js */ \"./src/hm12.js\");\n/* harmony import */ var _src_hm13_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/hm13.js */ \"./src/hm13.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Moduele HW1\r\n(0,_src_hm1_js__WEBPACK_IMPORTED_MODULE_0__.allValues)();\r\n\r\n// Module HW2\r\ndocument.getElementById('hw2').onclick = function () { (0,_src_hm2_js__WEBPACK_IMPORTED_MODULE_1__.mathAlert)() };\r\n\r\n// Module HW3\r\n(0,_src_hm3_js__WEBPACK_IMPORTED_MODULE_2__.maxDigit)();\r\n\r\n// Module HW4\r\n(0,_src_hm4_js__WEBPACK_IMPORTED_MODULE_3__.getPairs)();\r\n\r\n// Module HW5\r\n(0,_src_hm5_js__WEBPACK_IMPORTED_MODULE_4__.getRandomArray)(15, 1, 100);\r\n\r\n// Module HW6\r\n(0,_src_hm6_js__WEBPACK_IMPORTED_MODULE_5__.getStudentSubjects)();\r\n\r\n// Module HW7\r\n(0,_src_hm7_js__WEBPACK_IMPORTED_MODULE_6__.getTaxes)();\r\n\r\n// Module HW8\r\n(0,_src_hm8_js__WEBPACK_IMPORTED_MODULE_7__.getStudent)();\r\n\r\n// Module HW9\r\n(0,_src_hm9_js__WEBPACK_IMPORTED_MODULE_8__.boxesStart)();\r\n\r\n// Module HW10 \r\n(0,_src_hm10_js__WEBPACK_IMPORTED_MODULE_9__.soundPad)();\r\n\r\n// Module HW11  \r\n(0,_src_hm11_js__WEBPACK_IMPORTED_MODULE_10__.getRandomChinese)(5);\r\n\r\n// Module HW12  \r\n(0,_src_hm12_js__WEBPACK_IMPORTED_MODULE_11__.starWarsApp)();\r\n\r\n// Module HW12  \r\n(0,_src_hm13_js__WEBPACK_IMPORTED_MODULE_12__.generators)();\n\n//# sourceURL=webpack://hm15/./main.js?");

/***/ }),

/***/ "./src/hm1.js":
/*!********************!*\
  !*** ./src/hm1.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allValues\": () => (/* binding */ allValues)\n/* harmony export */ });\n\r\nfunction allValues() {\r\n    let products = [\r\n        {\r\n            name: 'FirstProduct',\r\n            price: 15.678,\r\n        },\r\n        {\r\n            name: 'SecondProduct',\r\n            price: 123.965,\r\n        },\r\n        {\r\n            name: 'ThirdProduct',\r\n            price: 90.2345\r\n        }\r\n    ];\r\n\r\n    let productPrices = [];\r\n    let values;\r\n    let maxPrice;\r\n    let minPrice;\r\n    let sumPrice;\r\n\r\n\r\n    products.forEach((product) => {\r\n        productPrices.push(product.price);\r\n    });\r\n\r\n    maxPrice = Math.max(...productPrices);\r\n    minPrice = Math.min(...productPrices);\r\n    sumPrice = productPrices.reduce((a, b) => a + b, 0);\r\n\r\n    values = [\r\n        {\r\n            name: \"Max Price\",\r\n            value: maxPrice\r\n        },\r\n        {\r\n            name: \"Min Price\",\r\n            value: minPrice\r\n        },\r\n        {\r\n            name: \"Sum Price\",\r\n            value: sumPrice\r\n        },\r\n    ];\r\n\r\n    return console.log('HW 1: ', values);\r\n} \n\n//# sourceURL=webpack://hm15/./src/hm1.js?");

/***/ }),

/***/ "./src/hm10.js":
/*!*********************!*\
  !*** ./src/hm10.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"soundPad\": () => (/* binding */ soundPad)\n/* harmony export */ });\nfunction soundPad() {\r\n    window.addEventListener('keydown', playSound);\r\n\r\n\r\n    function playSound(e) {\r\n\r\n        const audio = document.querySelector(`audio[data-key=\"${e.keyCode}\"]`);\r\n        const key = document.querySelector(`.key[data-key=\"${e.keyCode}\"]`);\r\n\r\n        if (!audio) return;\r\n        audio.currentTime = 0;\r\n        audio.play();\r\n        key.classList.add('playing'); \r\n    }\r\n\r\n    function removeTransition(e) {\r\n\r\n        if (e.propertyName !== \"box-shadow\") return;\r\n        this.classList.remove('playing') \r\n    }\r\n\r\n    const keys = document.querySelectorAll('.key');\r\n\r\n    keys.forEach(key => key.addEventListener('transitionend', removeTransition))\r\n}\n\n//# sourceURL=webpack://hm15/./src/hm10.js?");

/***/ }),

/***/ "./src/hm11.js":
/*!*********************!*\
  !*** ./src/hm11.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomChinese\": () => (/* binding */ getRandomChinese)\n/* harmony export */ });\nasync function getRandomChinese(length) {\r\n    let result = '';\r\n\r\n    for (let i = 0; i < length; i++) {\r\n        const now = Date.now();\r\n        const sign = String.fromCharCode(now % 100000);\r\n        result += sign;\r\n        await new Promise(resolve => setTimeout(resolve, 50));\r\n    }\r\n\r\n    return console.log('HW 11: ', result);\r\n}\n\n//# sourceURL=webpack://hm15/./src/hm11.js?");

/***/ }),

/***/ "./src/hm12.js":
/*!*********************!*\
  !*** ./src/hm12.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"starWarsApp\": () => (/* binding */ starWarsApp)\n/* harmony export */ });\nfunction starWarsApp() {\r\n    class StarWarsInfo {\r\n\r\n        constructor() {\r\n            this.layout = document.querySelector('.infoLayout');\r\n            this.selectCharacter = document.getElementById('charactersSelect');\r\n            this.selectPlanets = document.getElementById('selectPlanets');\r\n\r\n            this.currentPageCharacters = 1;\r\n            this.currentPagePlanet = 1;\r\n\r\n            this.characterStatus = true;\r\n            this.planetStatus = false;\r\n\r\n            this.prev = document.getElementById('prev');\r\n            this.next = document.getElementById('next');\r\n        }\r\n\r\n        fetchCharacters(url) {\r\n\r\n            fetch(url)\r\n                .then((response) => response.json())\r\n                .then((data) => {\r\n                    const charactersUrls = data.characters;\r\n                    this.layout.innerHTML = '';\r\n                    charactersUrls.forEach((characterUrl) => {\r\n                        fetch(characterUrl)\r\n                            .then((response) => response.json())\r\n                            .then((characterData) => {\r\n                                const name = characterData.name;\r\n                                const birthYear = characterData.birth_year;\r\n                                const gender = characterData.gender;\r\n\r\n                                const characterItem = document.createElement('div');\r\n\r\n                                characterItem.innerHTML = `\r\n                                <div class='info'>\r\n                                    <div>Name: ${name}</div>\r\n                                    <div>Birth year: ${birthYear}</div>\r\n                                    <div>Sex: ${gender}</div>\r\n                                </div>\r\n                            `;\r\n                                characterItem.style.backgroundImage = `url(\"./dist/img/${name}.jpg\")`;\r\n                                characterItem.classList.add('item');\r\n                                this.layout.appendChild(characterItem);\r\n                            });\r\n                    });\r\n                });\r\n        }\r\n\r\n        fetchPlanets(url) {\r\n\r\n            fetch(url)\r\n                .then((response) => response.json())\r\n                .then((data) => {\r\n\r\n                    const planets = data.results;\r\n                    this.layout.innerHTML = '';\r\n\r\n                    planets.forEach((planet) => {\r\n                        const name = planet.name\r\n                        const characterItem = document.createElement('div');\r\n\r\n                        characterItem.innerHTML = `\r\n                            <div class='info'>\r\n                                <div>Name: ${name}</div>\r\n                            </div>\r\n                        `;\r\n\r\n                        characterItem.style.backgroundImage = `url(\"./dist/img/planets.jpg\")`;\r\n                        characterItem.classList.add('item');\r\n                        this.layout.appendChild(characterItem);\r\n                    })\r\n                })\r\n        }\r\n\r\n        getCharacters() {\r\n            this.planetStatus = false;\r\n            this.characterStatus = true;\r\n\r\n            const url = `https://swapi.dev/api/films/${this.currentPageCharacters}/`;\r\n\r\n            this.checkStatus();\r\n            this.fetchCharacters(url);\r\n        }\r\n\r\n        getPlanets() {\r\n            this.planetStatus = true;\r\n            this.characterStatus = false;\r\n\r\n            const url = `https://swapi.dev/api/planets/?page=${this.currentPagePlanet}`;\r\n\r\n            this.checkStatus();\r\n            this.fetchPlanets(url);\r\n        }\r\n\r\n        checkStatus() {\r\n            if (this.characterStatus) {\r\n\r\n                this.currentPageCharacters === 6 ? this.next.classList.add('disable') : this.next.classList.remove('disable');\r\n                this.currentPageCharacters === 1 ? this.prev.classList.add('disable') : this.prev.classList.remove('disable');\r\n                this.selectCharacter[this.currentPageCharacters - 1].selected = true;\r\n\r\n            } else if (this.planetStatus) {\r\n\r\n                this.currentPagePlanet === 6 ? this.next.classList.add('disable') : this.next.classList.remove('disable');\r\n                this.currentPagePlanet === 1 ? this.prev.classList.add('disable') : this.prev.classList.remove('disable');\r\n                this.selectPlanets[this.currentPagePlanet - 1].selected = true;\r\n\r\n            }\r\n        }\r\n\r\n        nextPlanets() {\r\n            if (this.planetStatus) {\r\n\r\n                this.currentPagePlanet < 6 ? this.currentPagePlanet++ : this.currentPagePlanet;\r\n                this.getPlanets()\r\n\r\n            } else if (this.characterStatus) {\r\n\r\n                this.currentPageCharacters < 6 ? this.currentPageCharacters++ : this.currentPageCharacters;\r\n                this.getCharacters()\r\n\r\n            }\r\n        }\r\n\r\n        prevPlanets() {\r\n            if (this.planetStatus) {\r\n\r\n                this.currentPagePlanet > 1 ? this.currentPagePlanet-- : this.currentPagePlanet;\r\n                this.getPlanets()\r\n\r\n            } else if (this.characterStatus) {\r\n\r\n                this.currentPageCharacters > 1 ? this.currentPageCharacters-- : this.currentPageCharacters;\r\n                this.getCharacters()\r\n\r\n            }\r\n        }\r\n    }\r\n\r\n    const starWars = new StarWarsInfo();\r\n\r\n    const selectСharacters = document.getElementById('charactersSelect');\r\n    const selectPlanets = document.getElementById('selectPlanets');\r\n\r\n    const labelСharacters = document.getElementById('labelCharacters');\r\n    const labelPlanets = document.getElementById('labelPlanets');\r\n\r\n    const prev = document.getElementById('prev');\r\n    const next = document.getElementById('next');\r\n\r\n    starWars.getCharacters()\r\n\r\n\r\n    selectСharacters.onchange = function () {\r\n        starWars.currentPageCharacters = selectСharacters.value;\r\n        starWars.getCharacters()\r\n    }\r\n\r\n    selectPlanets.onchange = function () {\r\n        starWars.currentPagePlanet = selectPlanets.value;\r\n        starWars.getPlanets()\r\n    }\r\n\r\n    labelСharacters.onclick = function () {\r\n        starWars.getCharacters()\r\n    }\r\n\r\n    labelPlanets.onclick = function () {\r\n        starWars.getPlanets()\r\n    }\r\n\r\n    prev.onclick = function () {\r\n        starWars.prevPlanets();\r\n    }\r\n\r\n    next.onclick = function () {\r\n        starWars.nextPlanets();\r\n    }\r\n}\n\n//# sourceURL=webpack://hm15/./src/hm12.js?");

/***/ }),

/***/ "./src/hm13.js":
/*!*********************!*\
  !*** ./src/hm13.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generators\": () => (/* binding */ generators)\n/* harmony export */ });\nfunction generators() {\r\n    //task1\r\n\r\n    function* createIdGenerator() {\r\n        for (let i = 0; i < Infinity; i++) {\r\n            yield i\r\n        }\r\n    }\r\n\r\n    const idGenerator = createIdGenerator();\r\n\r\n\r\n    const increaseValueBtn = document.getElementById('increaseValue');\r\n    const countValue = document.getElementById('countValue');\r\n\r\n    increaseValueBtn.onclick = function () {\r\n        countValue.innerText = idGenerator.next().value;\r\n    };\r\n\r\n    //task2\r\n\r\n    function* changeFont() {\r\n        const font = document.getElementById('changeFont');\r\n        let initialFZ = 30;\r\n\r\n        console.log(initialFZ)\r\n        for (let i = 0; i < Infinity; i++) {\r\n            const change = yield;\r\n\r\n            if (change === 'up') {\r\n                initialFZ++;\r\n            } else if (change === 'down') {\r\n                initialFZ--;\r\n            }\r\n            font.style.fontSize = `${initialFZ}px`\r\n        }\r\n    }\r\n\r\n    const changeFZ = changeFont();\r\n\r\n    const increaseBtn = document.getElementById('increaseFont');\r\n    const decreaseBtn = document.getElementById('decreaseFont');\r\n\r\n    increaseBtn.onclick = () => changeFZ.next('up');\r\n    decreaseBtn.onclick = () => changeFZ.next('down');\r\n}\n\n//# sourceURL=webpack://hm15/./src/hm13.js?");

/***/ }),

/***/ "./src/hm2.js":
/*!********************!*\
  !*** ./src/hm2.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mathAlert\": () => (/* binding */ mathAlert)\n/* harmony export */ });\n\r\nfunction mathAlert() {\r\n    let isSkipEven,\r\n        resultSum,\r\n        numberN,\r\n        numberM;\r\n\r\n    while (true) {\r\n        numberN = +prompt('Введіть цифру N');\r\n\r\n        if (isNaN(numberN) || !Number.isInteger(numberN)) {\r\n            alert('N не є коректною цифрою');\r\n            continue;\r\n        }\r\n\r\n        break;\r\n    }\r\n\r\n    while (true) {\r\n        numberM = +prompt('Введіть цифру M');\r\n\r\n        if (isNaN(numberM) || !Number.isInteger(numberN)) {\r\n            alert('N не є коректною цифрою');\r\n            continue;\r\n        }\r\n\r\n        if (numberN >= numberM) {\r\n            alert('M має бути більше ніж N')\r\n            continue;\r\n        }\r\n\r\n        break;\r\n    }\r\n\r\n    isSkipEven = confirm('пропускати парні числа так/ні?');\r\n\r\n\r\n    function summing(N, M, isNotSumEven) {\r\n        let sum = 0;\r\n\r\n        for (let i = N; i <= M; i++) {\r\n            let argument = Number(i);\r\n\r\n            if (isNotSumEven) {\r\n                sum += i % 2 === 0 ? 0 : argument;\r\n            } else {\r\n                sum = sum + argument;\r\n            }\r\n\r\n        }\r\n        return sum;\r\n    }\r\n\r\n    resultSum = summing(numberN, numberM, isSkipEven)\r\n\r\n    return console.log('HW 3: ', `N = ${numberN}, M = ${numberM}, Враховувати парні числа = ${isSkipEven ? 'ні' : 'так'}, Результат = ${resultSum}`);\r\n}\r\n\n\n//# sourceURL=webpack://hm15/./src/hm2.js?");

/***/ }),

/***/ "./src/hm3.js":
/*!********************!*\
  !*** ./src/hm3.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maxDigit\": () => (/* binding */ maxDigit)\n/* harmony export */ });\nfunction maxDigit() {\r\n\r\n    let filter = '1236 6';\r\n    let newValue = filter.split(' ');\r\n\r\n    function getMaxDigit(numbers) {\r\n        let resutl = Math.max.apply(null, numbers);\r\n        return resutl;\r\n    };\r\n\r\n    let result = getMaxDigit(newValue);\r\n\r\n    return console.log('HW 3: ', result);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://hm15/./src/hm3.js?");

/***/ }),

/***/ "./src/hm4.js":
/*!********************!*\
  !*** ./src/hm4.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPairs\": () => (/* binding */ getPairs)\n/* harmony export */ });\nfunction getPairs() {\r\n\r\n    const students = [\r\n        \"Олександр\",\r\n        \"Ігор\",\r\n        \"Олена\",\r\n        \"Іра\",\r\n        \"Олексій\",\r\n        \"Світлана\"\r\n    ];\r\n\r\n    const themes = [\r\n        \"Диференційне рівняння\",\r\n        \"Теорія автоматів\",\r\n        \"Алгоритми і структури даних\"\r\n    ];\r\n\r\n    const marks = [\r\n        4,\r\n        5,\r\n        5,\r\n        3,\r\n        4,\r\n        5\r\n    ];\r\n\r\n    // Divide the students\r\n\r\n    const male = [];\r\n    const female = [];\r\n\r\n    students.map((student) => {\r\n        student[student.length - 1] === 'а' ? female.push(student) : male.push(student);\r\n    });\r\n\r\n    // Getting  pairs\r\n\r\n    const pairs = [];\r\n\r\n    for (let i = 0; i < themes.length; i++) {\r\n        pairs.push([]);\r\n        pairs[i].push(male[i]);\r\n        pairs[i].push(female[i]);\r\n    }\r\n\r\n    return console.log('HW 4: ', pairs);\r\n\r\n}\n\n//# sourceURL=webpack://hm15/./src/hm4.js?");

/***/ }),

/***/ "./src/hm5.js":
/*!********************!*\
  !*** ./src/hm5.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomArray\": () => (/* binding */ getRandomArray)\n/* harmony export */ });\n\r\nfunction getRandomArray(length, min, max) {\r\n\r\n    const getRandomNumber = function () {\r\n        return Math.floor(Math.random() * (max - min + 1) + min);\r\n    }\r\n\r\n    const array = Array.from({ length })\r\n    const result = array.map(() => {\r\n        return getRandomNumber();\r\n    });\r\n\r\n    return console.log('HW 5: ', result);\r\n} \n\n//# sourceURL=webpack://hm15/./src/hm5.js?");

/***/ }),

/***/ "./src/hm6.js":
/*!********************!*\
  !*** ./src/hm6.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStudentSubjects\": () => (/* binding */ getStudentSubjects)\n/* harmony export */ });\nfunction getStudentSubjects() {\r\n\r\n    const students = [{\r\n        name: \"Tanya\",\r\n        course: 3,\r\n        subjects: {\r\n            math: [4, 4, 3, 4],\r\n            algorithms: [3, 3, 3, 4, 4, 4],\r\n            data_science: [5, 5, 3, 4]\r\n        }\r\n    }, {\r\n        name: \"Victor\",\r\n        course: 4,\r\n        subjects: {\r\n            physics: [5, 5, 5, 3],\r\n            economics: [2, 3, 3, 3, 3, 5],\r\n            geometry: [5, 5, 2, 3, 5]\r\n        }\r\n    }, {\r\n        name: \"Anton\",\r\n        course: 2,\r\n        subjects: {\r\n            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\r\n            english: [5, 3],\r\n            cosmology: [5, 5, 5, 5]\r\n        }\r\n    }];\r\n\r\n    function getSubjects(student) {\r\n        const subject = [];\r\n\r\n        for (let key in student.subjects) {\r\n            key = (key.charAt(0).toUpperCase() + key.slice(1).replace(/_/gi, ' '));\r\n            subject.push(key)\r\n        }\r\n\r\n        return subject\r\n    };\r\n\r\n  \r\n    return console.log('HW 6: ', getSubjects(students[0]));\r\n}\r\n\n\n//# sourceURL=webpack://hm15/./src/hm6.js?");

/***/ }),

/***/ "./src/hm7.js":
/*!********************!*\
  !*** ./src/hm7.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTaxes\": () => (/* binding */ getTaxes)\n/* harmony export */ });\n\r\n\r\n\r\nfunction getTaxes() {\r\n    const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };\r\n    const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };\r\n    const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };\r\n\r\n    // #1\r\n\r\n    function getMyTaxes(salary) {\r\n        return this.tax * salary;\r\n    }\r\n\r\n    return console.log('HW 7: ', getMyTaxes.call(ukraine, 20000));\r\n}\n\n//# sourceURL=webpack://hm15/./src/hm7.js?");

/***/ }),

/***/ "./src/hm8.js":
/*!********************!*\
  !*** ./src/hm8.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStudent\": () => (/* binding */ getStudent)\n/* harmony export */ });\nclass Student {\r\n\r\n    constructor(university, course, fullName) {\r\n        this.university = university;\r\n        this.course = course;\r\n        this.name = fullName;\r\n        this._marks = [5, 4, 4, 5];\r\n        this.dismissed = false;\r\n        this.lastMarks = [...this._marks];\r\n    }\r\n\r\n    getInfo() {\r\n        return `Студент ${this.course}го курсу ${this.university}, ${this.name}`;\r\n    }\r\n\r\n    getAverageMark() {\r\n        if (this.dismissed) {\r\n            return null\r\n        }\r\n\r\n        const sum = this._marks.reduce((total, mark) => total + mark, 0);\r\n        const average = (sum / this._marks.length).toFixed(1);\r\n\r\n        return average;\r\n    }\r\n\r\n    dismiss() {\r\n        this.dismissed = true;\r\n        this._marks = null;\r\n    }\r\n\r\n    recover() {\r\n        this.dismissed = false;\r\n        this._marks = [...this.lastMarks];\r\n    }\r\n\r\n    get marks() {\r\n        if (this.dismissed) {\r\n            return null\r\n        }\r\n\r\n        return this._marks;\r\n    }\r\n\r\n    set marks(mark) {\r\n        if (!this.dismissed) {\r\n            this._marks.push(mark);\r\n            this.lastMarks = [...this._marks];\r\n        }\r\n    }\r\n}\r\n\r\n\r\nfunction getStudent() {\r\n    const person = new Student('Вищої Школи Психотерапії', 1, 'Остап Родоманський Бендер');\r\n    console.log('HW 8: ',`Інформація студента: ${person.getInfo()}`);\r\n}\n\n//# sourceURL=webpack://hm15/./src/hm8.js?");

/***/ }),

/***/ "./src/hm9.js":
/*!********************!*\
  !*** ./src/hm9.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"boxesStart\": () => (/* binding */ boxesStart)\n/* harmony export */ });\nfunction boxesStart() {\r\n    // Створення класу\r\n\r\n    class CreateBoxes {\r\n\r\n        constructor(countBoxes, inRow, wrapperClass, boxClass) {\r\n            this.countBoxes = countBoxes;\r\n            this.inRow = inRow;\r\n            this.wrapperClass = wrapperClass;\r\n            this.boxClass = boxClass;\r\n            this.colorSwitch = false;\r\n        }\r\n\r\n        wrapper() {\r\n            const createWrapper = document.createElement('div');\r\n            createWrapper.classList.add(this.wrapperClass);\r\n            createWrapper.style.maxWidth = `${this.inRow * 50}px`\r\n            document.querySelector('.boxes').insertAdjacentElement('afterbegin', createWrapper);\r\n        }\r\n\r\n        boxsCreator() {\r\n            for (let i = 0; i < this.countBoxes; i++) {\r\n                const createWrapper = document.querySelectorAll(`.${this.wrapperClass}`);\r\n                createWrapper.forEach(element => {\r\n                    element.insertAdjacentHTML('beforeend',\r\n                        ` <div class=\"${this.boxClass}\"></div> `\r\n                    );\r\n                });\r\n            };\r\n        }\r\n\r\n        getRandomColor() {\r\n            const r = Math.floor(Math.random() * 256);\r\n            const g = Math.floor(Math.random() * 256);\r\n            const b = Math.floor(Math.random() * 256);\r\n            return `rgb(${r}, ${g}, ${b})`;\r\n        }\r\n\r\n        boxsColorer() {\r\n            if (!this.colorSwitch) {\r\n                const createWrapper = document.querySelectorAll(`.${this.wrapperClass}`);\r\n                createWrapper.forEach(element => {\r\n                    let boxes = element.querySelectorAll(`.${this.boxClass}`);\r\n                    boxes.forEach(box => {\r\n                        box.style.backgroundColor = this.getRandomColor();\r\n                    });\r\n                });\r\n            }\r\n        }\r\n\r\n        colorStop() {\r\n            this.colorSwitch ? this.colorSwitch = false : this.colorSwitch = true;\r\n        }\r\n\r\n        refresh() {\r\n            const createWrapper = document.querySelectorAll(`.${this.wrapperClass}`);\r\n            createWrapper.forEach(element => {\r\n                element.innerHTML = '';\r\n            });\r\n        }\r\n\r\n    };\r\n\r\n    const creater = new CreateBoxes(25, 5, 'box-wrapper', 'box')\r\n\r\n    // Перший вивід блоків функціє generateBlocks\r\n\r\n    function generateBlocks() {\r\n        creater.wrapper();\r\n        creater.boxsCreator();\r\n        creater.boxsColorer();\r\n    };\r\n\r\n    // Зміна кольору блоків\r\n\r\n    function generateBlocksInterval() {\r\n        generateBlocks();\r\n\r\n        setInterval(() => {\r\n            creater.boxsColorer();\r\n        }, 100);\r\n    };\r\n\r\n    generateBlocksInterval();\r\n\r\n}\n\n//# sourceURL=webpack://hm15/./src/hm9.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;