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
        const average = (sum / this.marks.length).toFixed(1);

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

console.log(person.getInfo());

// #3
console.log(person.marks);

// #4

person.marks = 5;
console.log(person.marks);

// #5

console.log(person.getAverageMark());

// #6

person.dismiss();
person.marks = 5;
console.log(person.marks);

// #7

person.recover();
person.marks = 5;
console.log(person.marks);

