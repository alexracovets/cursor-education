//task1

function* createIdGenerator() {
    for (let i = 0; i < Infinity; i++) {
        yield i
    }
}

const idGenerator = createIdGenerator();


const increaseValueBtn = document.getElementById('increaseValue');
const countValue = document.getElementById('countValue');

increaseValueBtn.onclick = function () {
    countValue.innerText = idGenerator.next().value;
};

//task2

function* changeFont() {
    const font = document.getElementById('changeFont');
    let initialFZ = 30;

    console.log(initialFZ)
    for (let i = 0; i < Infinity; i++) {
        const change = yield;

        if (change === 'up') {
            initialFZ++;
        } else if (change === 'down') {
            initialFZ--;
        }
        font.style.fontSize = `${initialFZ}px`
    }
}

const changeFZ = changeFont();

const increaseBtn = document.getElementById('increaseFont');
const decreaseBtn = document.getElementById('decreaseFont');

increaseBtn.onclick = () => changeFZ.next('up');
decreaseBtn.onclick = () => changeFZ.next('down');