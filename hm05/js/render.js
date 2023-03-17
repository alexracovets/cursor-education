const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const result4 = document.getElementById('result4');
const result5 = document.getElementById('result5');
const result6 = document.getElementById('result6');
const result7 = document.getElementById('result7');
const result8 = document.getElementById('result8');
const result9 = document.getElementById('result9');
const result10 = document.getElementById('result10');


const result1Value = getRandomArray(15, 1, 100);
result1.innerHTML = result1Value
console.log(result1Value);

const result2Value = getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
result2.innerHTML = result2Value
console.log(result2Value);

const result3Value = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
result3.innerHTML = result3Value
console.log(result3Value);

const result4Value = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
result4.innerHTML = result4Value
console.log(result4Value);

const result5Value = filterEvenNumbers(1, 2, 3, 4, 5, 6);
result5.innerHTML = result5Value
console.log(result5Value);

const result6Value = countPositiveNumbers(1, -2, 3, -4, -5, 6);
result6.innerHTML = result6Value
console.log(result6Value);

const result7Value = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
result7.innerHTML = result7Value
console.log(result7Value);

const result8Value = replaceBadWords("It's bullshit!");
result8.innerHTML = result8Value
console.log(result8Value);

const result9Value = divideByThree("Commander");
result9.innerHTML = result9Value
console.log(result9Value);

const result10Value = generateCombinations("man");
result10.innerHTML = result10Value
console.log(result10Value);
