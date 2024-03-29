export function getStudentSubjects() {

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

  
    return console.log('HW 6: ', getSubjects(students[0]));
}
