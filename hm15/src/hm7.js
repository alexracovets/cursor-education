


export function getTaxes() {
    const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
    const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
    const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

    // #1

    function getMyTaxes(salary) {
        return this.tax * salary;
    }

    return console.log('HW 7: ', getMyTaxes.call(ukraine, 20000));
}