class Student {

    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.name = fullName;
        this._marks = [5, 4, 4, 5];
        this.dismissed = false;
        this.lastMarks = [...this._marks];
    }

    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.name}`;
    }

    getAverageMark() {
        if (this.dismissed) {
            return null
        }

        const sum = this._marks.reduce((total, mark) => total + mark, 0);
        const average = (sum / this._marks.length).toFixed(1);

        return average;
    }

    dismiss() {
        this.dismissed = true;
        this._marks = null;
    }

    recover() {
        this.dismissed = false;
        this._marks = [...this.lastMarks];
    }

    get marks() {
        if (this.dismissed) {
            return null
        }

        return this._marks;
    }

    set marks(mark) {
        if (!this.dismissed) {
            this._marks.push(mark);
            this.lastMarks = [...this._marks];
        }
    }
}

// #1

const person = new Student('Вищої Школи Психотерапії', 1, 'Остап Родоманський Бендер');

// #2

console.log(`Інформація студента: ${person.getInfo()}`);

// #3
console.log(`Гетер marks: ${[...person.marks]}`);

// #4

person.marks = 5;
console.log(`Сетер marks: ${[...person.marks]}`);

// #5

console.log(`Середня оцінка: ${person.getAverageMark()}`);

// #6

person.dismiss(); 
console.log(`Студент виключений, його статус в системі: ${person.marks}`);

// #7

person.recover(); 
console.log(`Студент поновлений, його статус в системі: ${person.marks}`);

// Advanced 

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);

        setInterval(() => {
            this.getScholarship();
        }, 30000);

    }

    getScholarship() {
        if (!this.dismissed && this.getAverageMark() >= 4) {
            console.log(`Ви отримали 1400 грн. стипендії`);
        } else {
            console.log(`Ви не можете отримати стипендію`);
        }
    }
}
const budgetStudent = new BudgetStudent('Вищої Школи Психотерапії', 1, 'Остап Родоманський Бендер');

budgetStudent.getScholarship();