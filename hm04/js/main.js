const students = [
    "Олександр",
    "Ігор",
    "Олена",
    "Іра",
    "Олексій",
    "Світлана"
];

const themes = [
    "Диференційне рівняння",
    "Теорія автоматів",
    "Алгоритми і структури даних"
];

const marks = [
    4,
    5,
    5,
    3,
    4,
    5
];

// Divide the students

const male = [];
const female = [];

students.map((student) => {
    student[student.length - 1] === 'а' ? female.push(student) : male.push(student);
});

// Getting  pairs

const pairs = [];

for (let i = 0; i < themes.length; i++) {
    pairs.push([]);
    pairs[i].push(male[i]);
    pairs[i].push(female[i]);
}

// Getting themes for pairs

const pairsThemes = [];

for (let i = 0; i < themes.length; i++) {
    pairsThemes.push([]);
    pairsThemes[i].push(male[i] + ' і ' + female[i]);
    pairsThemes[i].push(themes[i]);
}

// Getting marks for students

const studentsWithMarks = [];

for (let i = 0; i < students.length; i++) {
    studentsWithMarks.push([]);
    studentsWithMarks[i].push(students[i]);
    studentsWithMarks[i].push(marks[i]);
}

// Getting score for themes

const getScore = [];

function randomScore(min, max) {
    let result = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    return result
};

for (let i = 0; i < themes.length; i++) {
    getScore.push([]);
    getScore[i].push(male[i] + ' і ' + female[i]);
    getScore[i].push(themes[i]);
    getScore[i].push(randomScore(1, 5));
}

console.log(pairs);
console.log(pairsThemes);
console.log(studentsWithMarks);
console.log(getScore);
// const pairs = getPairs(students);
