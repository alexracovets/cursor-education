const studentsWrapper = document.getElementById("students");

students.forEach(item => {
    studentsWrapper.insertAdjacentHTML("beforeEnd",
        `
            <div class="item"> 
                ${item}
            </div>
        `
    );
});

const maleWrapper = document.getElementById("male");
const femaleWrapper = document.getElementById("female");

male.forEach(item => {
    maleWrapper.insertAdjacentHTML("beforeEnd",
        `
            <div class="item"> 
                ${item}
            </div>
        `
    );
});

female.forEach(item => {
    femaleWrapper.insertAdjacentHTML("beforeEnd",
        `
            <div class="item"> 
                ${item}
            </div>
        `
    );
});

const pairsThemesWrapper = document.getElementById("pairsThemes");

pairsThemes.forEach(item => {
    pairsThemesWrapper.insertAdjacentHTML("beforeEnd",
        `
            <div class="item"> 
                ${item[0] + ' - ' + item[1]}
            </div>
        `
    );
});

const studentsWithMarksWrapper = document.getElementById("studentsWithMarks");

studentsWithMarks.forEach(item => {
    studentsWithMarksWrapper.insertAdjacentHTML("beforeEnd",
        `
            <div class="item"> 
                ${item[0] + ' - ' + item[1]}
            </div>
        `
    );
});

const getScoreWrapper = document.getElementById("getScore");

getScore.forEach(item => {
    getScoreWrapper.insertAdjacentHTML("beforeEnd",
        `
            <div class="item"> 
                ${item[0] + ' - ' + item[1] + ': Оцінка ' + item[2]}
            </div>
        `
    );
});
