let task1,
    task2,
    task3,
    task4,
    task5N,
    task5M,
    task6L,
    task6W,
    task7,
    task9,
    task10L,
    task10S,
    task11,
    task12;


function getTask1() {
    let result,
        filter1,
        newValue;

    result = document.getElementById('result1');
    filter1 = document.getElementById('input1').value.replace(/[^. \d]+/g, "");
    newValue = filter1.split(' ');

    function getMaxDigit(numbers) {
        let resutl = Math.max.apply(null, numbers);
        isNaN(resutl) ? resutl = 'Введіть корренкні цифри' : resutl = resutl;
        return resutl;
    };

    result.innerHTML = getMaxDigit(newValue);
};
task1 = document.getElementById('input1');
task1.oninput = function () { getTask1(); };

function getTask2() {
    let value = Number(document.getElementById('input2').value);
    let result = [0];
    let resultNumber = document.getElementById('result2-number');
    let resultDegree = document.getElementById('result2-degree');


    for (let i = 1; i <= value; i++) {

        result[i] === undefined ? result[i] = 0 : result[i] = result[i];

        if ((i !== 1) && (value >= 1) && (value / i) !== 1) {

            let newValue = value;

            while (newValue % i === 0) {

                result[i]++;

                if (newValue / i !== 1) {
                    newValue = newValue / i;
                } else break
            }

            if ((newValue % i !== 0) && newValue !== i) {
                result[i] = 0;
            }
        }
    };
    let degree,
        number;

    degree = Math.max.apply(null, result);
    number = result.map(el => el).indexOf(degree);

    resultNumber.innerHTML = number;
    resultDegree.innerHTML = degree;
};
task2 = document.getElementById('input2');
task2.oninput = function () { getTask2(); };

function getTask3() {
    let value,
        newValue,
        result;

    result = document.getElementById('result3');
    value = [...document.getElementById('input3').value.toLowerCase().replace(/ /g, '')];

    if (value.length > 0) {
        newValue = value;
        newValue[0] = newValue[0].toUpperCase();
        newValue = newValue.join('');
    }

    result.innerHTML = newValue;
};
task3 = document.getElementById('input3');
task3.oninput = function () { getTask3(); };

function getTask4() {
    let value,
        sale,
        result;

    result = document.getElementById('result4');
    value = document.getElementById('input4').value;
    sale = 18 + 1.5;
    newValue = (value - (value * sale) / 100).toFixed(2);
    result.innerHTML = newValue;
};
task4 = document.getElementById('input4');
task4.oninput = function () { getTask4(); };

function getTask5() {
    let valueN,
        valueM,
        result;

    result = document.getElementById('result5');
    valueN = document.getElementById('input5N').value;
    valueM = document.getElementById('input5M').value;

    function getRandomNumber(min, max) {
        let result = Math.round(min - 0.5 + Math.random() * (max - min + 1));
        return result
    };

    result.innerHTML = getRandomNumber(valueN, valueM);
};
task5N = document.getElementById('input5N');
task5M = document.getElementById('input5M');
task5N.oninput = function () { getTask5(); };
task5M.oninput = function () { getTask5(); };

function getTask6() {
    let valueL,
        valueW,
        result,
        counter;

    valueL = document.getElementById('input6L').value.toLowerCase();
    valueW = [...document.getElementById('input6W').value.toLowerCase().replace(/ /g, '')];
    result = document.getElementById('result6');
    counter = 0;

    valueW.forEach(element => {
        element === valueL ? counter++ : counter
    });

    result.innerHTML = counter;
};
task6L = document.getElementById('input6L');
task6W = document.getElementById('input6W');
task6L.oninput = function () { getTask6(); };
task6W.oninput = function () { getTask6(); };

function getTask7() {
    let value,
        result

    value = document.getElementById('input7').value;
    result = document.getElementById('result7');

    function convertCurrency(currency) {
        let newValue,
            converted,
            isDollars,
            isUah;

        converted = currency.toLowerCase();
        isUah = converted.includes('uah');
        isDollars = converted.includes('$');

        if (isDollars) {
            newValue = currency.match(/\d/g).join('');
            converted = newValue * 25 + 'UAH';

            return converted;

        } else if (isUah) {
            newValue = currency.match(/\d/g).join('');
            converted = newValue / 25 + '$';

            return converted;

        } else {
            return "Валюта невірна"
        }

    }

    result.innerHTML = convertCurrency(value);
}

task7 = document.getElementById('input7');
task7.oninput = function () { getTask7(); };

function getTask9() {
    let value,
        result;

    result = document.getElementById('result9');
    value = document.getElementById('input9').value.replace(/[^0-9]/g, "");
    document.getElementById('input9').value = value;

    function getRandomPassword(...numbers) {
        let getRandomPassword = '';
        if (numbers[0] === '') {
            numbers[0] = '8'
        }
        function random() {
            return Math.floor(Math.random() * 10)
        }

        for (let i = 0; i < numbers; i++) {
            getRandomPassword += random();
        }

        return getRandomPassword
    }

    result.innerHTML = getRandomPassword(value);

};
task9 = document.getElementById('input9');
task9.oninput = function () { getTask9(); };


function getTask10() {
    let valueL,
        valueS,
        result;

    valueL = document.getElementById('inputL10').value;
    valueS = document.getElementById('inputS10').value;
    result = document.getElementById('result10');

    let arrayResult = '';
    if (valueL[0] !== undefined && valueS[0] !== undefined) {

        [...valueS].forEach(element => {
            element.toLowerCase() === valueL.toLowerCase() ? arrayResult : arrayResult += element;
        });
    }

    result.innerHTML = arrayResult;

};
task10L = document.getElementById('inputL10');
task10S = document.getElementById('inputS10');
task10L.oninput = function () { getTask10(); };
task10S.oninput = function () { getTask10(); };

function getTask11() {
    let value,
        result;

    result = document.getElementById('result11');
    value = document.getElementById('input11').value.toLowerCase().replace(/ /g, '');

    function getPolindrom(polindrom) {
        let getArray = [...polindrom];

        for (let i = 0; i < getArray.length - 1; i++) {
            if (getArray[i] !== getArray[getArray.length - 1 - i]) {
                return 'Не поліндром'
            }

        }
        return 'Поліндром'
    }

    result.innerHTML = getPolindrom(value);

};
task11 = document.getElementById('input11');
task11.oninput = function () { getTask11(); };

function getTask12() {
    let value,
        result;

    result = document.getElementById('result12');
    value = document.getElementById('input12').value;



    function deleteDuplicate(sentences) {

        let repetedWords = ''
        for (let i = 0; i < sentences.length; i++) {
            let checkLetter = sentences[i];
            let count = 0;
            [...sentences.toLowerCase()].forEach(element => {
                element === checkLetter ? count++ : count;
            });
            count >= 2 ? repetedWords += sentences[i] + sentences[i].toUpperCase() : repetedWords;
        }

        let newSentances = sentences

        for (let i = 0; i < repetedWords.length; i++) {
            let replacer = repetedWords[i];
            newSentances = newSentances.replace(new RegExp(replacer), '')
        }

        return newSentances
    }

    result.innerHTML = deleteDuplicate(value);

};
task12 = document.getElementById('input12');
task12.oninput = function () { getTask12(); };


