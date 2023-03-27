const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// #1

function getMyTaxes(salary) {
    return this.tax * salary;
}

console.log(getMyTaxes.call(ukraine, 20000));

// #2

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

console.log(getMiddleTaxes.call(ukraine));

// #3

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies
}

console.log(getTotalTaxes.call(ukraine));

// #4

function getMySalary() {
    const minSalary = 1500;
    const maxSalary = 2000;
    const country = this;

    setInterval(() => {

        const salary = minSalary + Math.floor(Math.random() * (maxSalary - minSalary + 1));
        const taxes = salary * country.tax;
        const profit = salary - taxes;

        console.log({ salary, taxes, profit })

    }, 10000);
}

getMySalary.call(ukraine)