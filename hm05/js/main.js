
// #1
function getRandomArray(length, min, max) {

    const getRandomNumber = function () {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const array = Array.from({ length })
    const result = array.map(() => {
        return getRandomNumber();
    });

    return result;
}

// #2
function getModa(...numbers) {

    const integers = numbers.filter(number => Number.isInteger(number));

    const occurrences = integers.map(number => integers.filter(n => n === number).length);

    const maxOccurrencesIndex = occurrences.indexOf(Math.max(...occurrences));

    const result = integers[maxOccurrencesIndex];

    return result;
}

// #3
function getAverage(...numbers) {

    const integers = numbers.filter(number => Number.isInteger(number));

    const sum = integers.reduce((a, b) => a + b);

    const result = (sum / integers.length).toFixed(2);

    return result;
}

// #4
function getMedian(...numbers) {

    const array = numbers.filter(num => typeof num === 'number');
    const sortedArray = array.sort((a, b) => a - b);
    const medianIndex = Math.floor(array.length / 2);

    if (array.length % 2 === 0) {

        const medianA = sortedArray[medianIndex - 1];
        const medianB = sortedArray[medianIndex];
        const result = (medianA + medianB) / 2;

        return result;
    } else {
        const result = sortedArray[medianIndex];

        return result;
    }
}

// #5
function filterEvenNumbers(...numbers) {
    const result = numbers.filter(num => num % 2 !== 0);

    return result;
}

// #6
function countPositiveNumbers(...numbers) {
    const positiveNumbers = numbers.filter(number => number > 0);
    const result = positiveNumbers.length;

    return result;
}

// #7
function getDividedByFive(...numbers) {
    const result = numbers.filter(num => num % 5 === 0);

    return result;
}


// #8
function replaceBadWords(str) {
    const badWords = /(shit|fuck)/gi;
    const words = str.split(" ");
    const replacedWords = words.map(word => {
        return word.replace(badWords, "****");
    });

    const result = replacedWords.join(" ");

    return result;
}

// #9
function divideByThree(word) {
    const lowerCaseWord = word.toLowerCase().replace(/\s/g, '');
    const syllables = lowerCaseWord.match(/.{1,3}/g);

    const result = syllables || [lowerCaseWord];

    return result;
}

// #10
function generateCombinations(word) {
    if (word.length > 10) {
        return "Word length should not exceed 10 characters";
    }

    const cicle = [word];

    for (let i = 0; i < word.length - 1; i++) {

        const len = cicle.length;

        for (let j = 0; j < len; j++) {

            const current = cicle[j].split("");

            for (let k = i + 1; k < word.length; k++) {

                if (current[i] !== current[k]) {

                    const copy = current.slice();

                    [copy[i], copy[k]] = [copy[k], copy[i]];

                    cicle.push(copy.join(""));
                }
            }
        }
    }

    const result = [...new Set(cicle, ' ')];

    return result;
} 