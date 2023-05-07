export function maxDigit() {

    let filter = '1236 6';
    let newValue = filter.split(' ');

    function getMaxDigit(numbers) {
        let resutl = Math.max.apply(null, numbers);
        return resutl;
    };

    let result = getMaxDigit(newValue);

    return console.log('HW 3: ', result);
};


