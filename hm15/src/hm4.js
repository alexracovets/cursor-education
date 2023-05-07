export function getPairs() {

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

    return console.log('HW 4: ', pairs);

}