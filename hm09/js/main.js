// Створення класу

class CreateBoxes {

    constructor(countBoxes, inRow, wrapperClass, boxClass) {
        this.countBoxes = countBoxes;
        this.inRow = inRow;
        this.wrapperClass = wrapperClass;
        this.boxClass = boxClass;
        this.colorSwitch = false;
    }

    wrapper() {
        const createWrapper = document.createElement('div');
        createWrapper.classList.add(this.wrapperClass);
        createWrapper.style.maxWidth = `${this.inRow * 50}px`
        document.querySelector('.boxes').insertAdjacentElement('afterbegin', createWrapper);
    }

    boxsCreator() {
        for (let i = 0; i < this.countBoxes; i++) {
            const createWrapper = document.querySelectorAll(`.${this.wrapperClass}`);
            createWrapper.forEach(element => {
                element.insertAdjacentHTML('beforeend',
                    ` <div class="${this.boxClass}"></div> `
                );
            });
        };
    }

    getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    boxsColorer() {
        if (!this.colorSwitch) {
            const createWrapper = document.querySelectorAll(`.${this.wrapperClass}`);
            createWrapper.forEach(element => {
                let boxes = element.querySelectorAll(`.${this.boxClass}`);
                boxes.forEach(box => {
                    box.style.backgroundColor = this.getRandomColor();
                });
            });
        }
    }

    colorStop() {
        this.colorSwitch ? this.colorSwitch = false : this.colorSwitch = true;
    }

    refresh() {
        const createWrapper = document.querySelectorAll(`.${this.wrapperClass}`);
        createWrapper.forEach(element => {
            element.innerHTML = '';
        });
    }

};

const creater = new CreateBoxes(25, 5, 'box-wrapper', 'box')

// Перший вивід блоків функціє generateBlocks

function generateBlocks() {
    creater.wrapper();
    creater.boxsCreator();
    creater.boxsColorer();
};

// Зміна кольору блоків

function generateBlocksInterval() {
    generateBlocks();

    setInterval(() => {
        creater.boxsColorer();
    }, 100);
};

generateBlocksInterval();


// Кнопки

const createWrapperBtn = document.querySelector('.create-wrapper');
const colorSwitchBtn = document.querySelector('.color-switch');

createWrapperBtn.onclick = function () {
    creater.refresh();
    generateBlocks();
};

colorSwitchBtn.onclick = function () {
    creater.colorStop();
    let switcher = this.querySelector('span');
    switcher.innerText === 'ON' ? switcher.innerText = 'OFF' : switcher.innerText = 'ON';
};
