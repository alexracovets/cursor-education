
function getPrompt(ask) {
    let prompting = prompt(ask);

    return prompting
}

function getNumber(text) {

    let gettingNumber = Number(getPrompt(text));
    gettingNumber = isNaN(gettingNumber) ? 0 : Number.isInteger(gettingNumber) ? gettingNumber : Math.floor(gettingNumber);

    return gettingNumber;
}

function summing(N, M, isNotSumEven) {
    let sum = 0;

    for (let i = N; i <= M; i++) {
        let argument = Number(i);

        if (isNotSumEven) {
            sum += i % 2 === 0 ? 0 : argument;
        } else {
            sum = sum + argument;
        }

    }
    return sum
}


let numberN,
    numberM,
    isSkipEven,
    conditionEven,
    isSkipEvenl,
    resultSum;


numberN = getNumber('Введіть ціле число N. (Якщо число не ціле, воно буде приведенно до наменшого цілого числа)');
numberM = getNumber('Введіть ціле число M. (Якщо число не ціле, воно буде приведенно до наменшого цілого числа)');
conditionEven = getPrompt('Введіть умову чи пропускати парні числа так/ні ?');

isSkipEven = conditionEven == 'так' ? true : false;
resultSum = summing(numberN, numberM, isSkipEven)

console.log(`N = ${numberN}, M = ${numberM}, Враховувати парні числа = ${isSkipEven ? 'ні' : 'так'}, Результат = ${resultSum}`); 

