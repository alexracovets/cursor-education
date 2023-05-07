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


export function getStudent() {
    const person = new Student('Вищої Школи Психотерапії', 1, 'Остап Родоманський Бендер');
    console.log('HW 8: ',`Інформація студента: ${person.getInfo()}`);
}