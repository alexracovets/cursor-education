function onLoad1() {
    let result,
        filter1,
        newValue;

    result = document.getElementById('result1');
    filter1 = '1236 6'.replace(/[^. \d]+/g, "");
    newValue = filter1.split(' ');

    function getMaxDigit(numbers) {
        let resutl = Math.max.apply(null, numbers);
        isNaN(resutl) ? resutl = 'Введіть корренкні цифри' : resutl = resutl;
        return resutl;
    };


    result.innerHTML = getMaxDigit(newValue);
    console.log(`Task1, Input: 1236 6, Result: ${getMaxDigit(newValue)}`)
};

function onLoad2() {
    let value = 25;
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

    console.log(`Task2, Input: 25, Number: ${number}, Degree: ${degree}`)
};

function onLoad3() {
    let value,
        newValue,
        result;

    result = document.getElementById('result3');
    let word = 'вЛАД';
    value = [...word.toLowerCase().replace(/ /g, '')];

    if (value.length > 0) {
        newValue = value;
        newValue[0] = newValue[0].toUpperCase();
        newValue = newValue.join('');
    }

    result.innerHTML = newValue;
    console.log(`Task3, Input: вЛАД, Result: ${newValue}`)
};

function onLoad4() {
    let value,
        sale,
        result;

    result = document.getElementById('result4');
    value = 1000;
    sale = 18 + 1.5;
    newValue = (value - (value * sale) / 100).toFixed(2);

    result.innerHTML = newValue;
    console.log(`Task4, Input: 1000, Result: ${newValue}`)
};

function onLoad5() {
    let result;

    result = document.getElementById('result5');

    function getRandomNumber(min, max) {
        let result = Math.round(min - 0.5 + Math.random() * (max - min + 1));
        return result
    };

    let resultData = getRandomNumber(1, 10);

    result.innerHTML = resultData;
    console.log(`Task5, NumberN: 1, NumberM: 10, Result: ${resultData}`)
};

function onLoad6() {
    let valueL,
        valueW,
        result,
        counter;

    valueL = 'а'.toLowerCase();
    valueW = [...'Асталавіста'.toLowerCase().replace(/ /g, '')];
    result = document.getElementById('result6');
    counter = 0;

    valueW.forEach(element => {
        element === valueL ? counter++ : counter
    });

    result.innerHTML = counter;
    console.log(`Task6, Litter: a, Word: Асталавіста, Result: ${counter}`)
};

function onLoad7() {
    let value,
        result

    value = '2500UAH';
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
    console.log(`Task7/Task8, Input: 2500UAH, Result: ${value}`)
}

function onLoad9() {
    let value,
        result;

    result = document.getElementById('result9');
    value = ''.replace(/[^0-9]/g, "");
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

    let newresult = getRandomPassword(value)
    result.innerHTML = newresult;

    console.log(`Task9, Input: ''(8), Result: ${newresult}`)
};

function onLoad10() {
    let valueL,
        valueS,
        result;

    valueL = 'a';
    valueS = 'blablabla';
    result = document.getElementById('result10');

    let arrayResult = '';
    if (valueL[0] !== undefined && valueS[0] !== undefined) {

        [...valueS].forEach(element => {
            element.toLowerCase() === valueL.toLowerCase() ? arrayResult : arrayResult += element;
        });
    }

    result.innerHTML = arrayResult;
    console.log(`Task10, Letter: a, Sentences: blablabla, Result: ${arrayResult}`)
};

function onLoad11() {
    let value,
        result;

    result = document.getElementById('result11');
    value = 'Я несу гусеня'.toLowerCase().replace(/ /g, '');

    function getPolindrom(polindrom) {
        let getArray = [...polindrom];

        for (let i = 0; i < getArray.length - 1; i++) {
            if (getArray[i] !== getArray[getArray.length - 1 - i]) {
                return 'Не поліндром'
            }

        }
        return 'Поліндром'
    }
    let newResult = getPolindrom(value);
    result.innerHTML = newResult;
    console.log(`Task11, Input: Я несу гусеня, Result: ${newResult}`)
};

function onLoad12() {
    let value,
        result;

    result = document.getElementById('result12');
    value = 'Бісквіт був дуже ніжним';



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


    let newResult = deleteDuplicate(value);
    result.innerHTML = newResult;

    console.log(`Task12, Input: Бісквіт був дуже ніжним, Result: ${newResult}`)
};

onLoad1();
onLoad2();
onLoad3();
onLoad4();
onLoad5();
onLoad6();
onLoad7();
onLoad9();
onLoad10();
onLoad11();
onLoad12();