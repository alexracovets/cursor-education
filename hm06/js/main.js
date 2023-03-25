const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

function getSubjects(student) {
    const subject = [];

    for (let key in student.subjects) {
        key = (key.charAt(0).toUpperCase() + key.slice(1).replace(/_/gi, ' '));
        subject.push(key)
    }

    return subject
};

console.log(getSubjects(students[0]));

function getAverageMark(student) {
    const mark = [];
    let markSum = 0;

    for (let key in student.subjects) {
        student.subjects[key].map((value) => {
            mark.push(value);
            value >= 0 ? markSum += value : value;
        })
    }

    const averageMark = (markSum / mark.length).toFixed(2);

    return averageMark;
};

console.log(getAverageMark(students[0]));

function getStudentInfo(student) {
    const info = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    };

    return info;
};

console.log(getStudentInfo(students[0]));

function getStudentsNames(students) {
    const names = [];

    students.forEach(element => {
        let name = element.name;
        names.push(name);
    });

    names.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);

    return names;
};

console.log(getStudentsNames(students));

function getBestStudent(students) {
    let pesonMark = new Map();
    const marks = [];
    const bestStudent = [];

    students.forEach(element => {
        pesonMark.set(element.name, getAverageMark(element));
        marks.push(getAverageMark(element));
    });

    pesonMark = [...pesonMark];
    const maxMark = marks.sort((a, b) => a > b ? -1 : 1)[0];

    pesonMark.forEach(element => {
        if (element[1] === maxMark) {
            bestStudent.push(element[0]);
        }
    })

    return bestStudent
};

console.log(getBestStudent(students));

function calculateWordLetters(word) {
    const letterCounts = {};

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (letterCounts[letter]) {
            letterCounts[letter]++;
        } else {
            letterCounts[letter] = 1;
        }
    }

    return letterCounts;
};

console.log(calculateWordLetters("тест"));