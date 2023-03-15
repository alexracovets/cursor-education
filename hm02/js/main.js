
let isSkipEven,
    conditionEven,
    isSkipEvenl,
    resultSum,
    numberN,
    numberM;

while (true) {
    numberN = prompt('Введіть цифру N');

    if (isNaN(numberN)) {
        alert('N не є цифрою');
        continue;
    }

    break;
}

while (true) {
    numberM = prompt('Введіть цифру M');

    if (isNaN(numberM)) {
        alert('N не є цифрою');
        continue;
    }

    if (numberN >= numberM) {
        alert('M має бути більше ніж N')
        continue;
    }

    break;
}

isSkipEven = confirm('пропускати парні числа так/ні?');


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

resultSum = summing(numberN, numberM, isSkipEven)

console.log(`N = ${numberN}, M = ${numberM}, Враховувати парні числа = ${isSkipEven ? 'ні' : 'так'}, Результат = ${resultSum}`);

