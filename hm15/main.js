import { allValues } from "./src/hm1.js";
import { mathAlert } from "./src/hm2.js";
import { maxDigit } from "./src/hm3.js";
import { getPairs } from "./src/hm4.js";
import { getRandomArray } from "./src/hm5.js";
import { getStudentSubjects } from "./src/hm6.js";
import { getTaxes } from "./src/hm7.js";
import { getStudent } from "./src/hm8.js";
import { boxesStart } from "./src/hm9.js";
import { soundPad } from "./src/hm10.js";
import { getRandomChinese } from "./src/hm11.js";
import { starWarsApp } from "./src/hm12.js";
import { generators } from "./src/hm13.js";

// Moduele HW1
allValues();

// Module HW2
document.getElementById('hw2').onclick = function () { mathAlert() };

// Module HW3
maxDigit();

// Module HW4
getPairs();

// Module HW5
getRandomArray(15, 1, 100);

// Module HW6
getStudentSubjects();

// Module HW7
getTaxes();

// Module HW8
getStudent();

// Module HW9
boxesStart();

// Module HW10 
soundPad();

// Module HW11  
getRandomChinese(5);

// Module HW12  
starWarsApp();

// Module HW12  
generators();