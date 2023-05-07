
export function getRandomArray(length, min, max) {

    const getRandomNumber = function () {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const array = Array.from({ length })
    const result = array.map(() => {
        return getRandomNumber();
    });

    return console.log('HW 5: ', result);
} 