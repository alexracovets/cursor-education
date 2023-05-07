export function starWarsApp() {
    class StarWarsInfo {

        constructor() {
            this.layout = document.querySelector('.infoLayout');
            this.selectCharacter = document.getElementById('charactersSelect');
            this.selectPlanets = document.getElementById('selectPlanets');

            this.currentPageCharacters = 1;
            this.currentPagePlanet = 1;

            this.characterStatus = true;
            this.planetStatus = false;

            this.prev = document.getElementById('prev');
            this.next = document.getElementById('next');
        }

        fetchCharacters(url) {

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const charactersUrls = data.characters;
                    this.layout.innerHTML = '';
                    charactersUrls.forEach((characterUrl) => {
                        fetch(characterUrl)
                            .then((response) => response.json())
                            .then((characterData) => {
                                const name = characterData.name;
                                const birthYear = characterData.birth_year;
                                const gender = characterData.gender;

                                const characterItem = document.createElement('div');

                                characterItem.innerHTML = `
                                <div class='info'>
                                    <div>Name: ${name}</div>
                                    <div>Birth year: ${birthYear}</div>
                                    <div>Sex: ${gender}</div>
                                </div>
                            `;
                                characterItem.style.backgroundImage = `url("./dist/img/${name}.jpg")`;
                                characterItem.classList.add('item');
                                this.layout.appendChild(characterItem);
                            });
                    });
                });
        }

        fetchPlanets(url) {

            fetch(url)
                .then((response) => response.json())
                .then((data) => {

                    const planets = data.results;
                    this.layout.innerHTML = '';

                    planets.forEach((planet) => {
                        const name = planet.name
                        const characterItem = document.createElement('div');

                        characterItem.innerHTML = `
                            <div class='info'>
                                <div>Name: ${name}</div>
                            </div>
                        `;

                        characterItem.style.backgroundImage = `url("./dist/img/planets.jpg")`;
                        characterItem.classList.add('item');
                        this.layout.appendChild(characterItem);
                    })
                })
        }

        getCharacters() {
            this.planetStatus = false;
            this.characterStatus = true;

            const url = `https://swapi.dev/api/films/${this.currentPageCharacters}/`;

            this.checkStatus();
            this.fetchCharacters(url);
        }

        getPlanets() {
            this.planetStatus = true;
            this.characterStatus = false;

            const url = `https://swapi.dev/api/planets/?page=${this.currentPagePlanet}`;

            this.checkStatus();
            this.fetchPlanets(url);
        }

        checkStatus() {
            if (this.characterStatus) {

                this.currentPageCharacters === 6 ? this.next.classList.add('disable') : this.next.classList.remove('disable');
                this.currentPageCharacters === 1 ? this.prev.classList.add('disable') : this.prev.classList.remove('disable');
                this.selectCharacter[this.currentPageCharacters - 1].selected = true;

            } else if (this.planetStatus) {

                this.currentPagePlanet === 6 ? this.next.classList.add('disable') : this.next.classList.remove('disable');
                this.currentPagePlanet === 1 ? this.prev.classList.add('disable') : this.prev.classList.remove('disable');
                this.selectPlanets[this.currentPagePlanet - 1].selected = true;

            }
        }

        nextPlanets() {
            if (this.planetStatus) {

                this.currentPagePlanet < 6 ? this.currentPagePlanet++ : this.currentPagePlanet;
                this.getPlanets()

            } else if (this.characterStatus) {

                this.currentPageCharacters < 6 ? this.currentPageCharacters++ : this.currentPageCharacters;
                this.getCharacters()

            }
        }

        prevPlanets() {
            if (this.planetStatus) {

                this.currentPagePlanet > 1 ? this.currentPagePlanet-- : this.currentPagePlanet;
                this.getPlanets()

            } else if (this.characterStatus) {

                this.currentPageCharacters > 1 ? this.currentPageCharacters-- : this.currentPageCharacters;
                this.getCharacters()

            }
        }
    }

    const starWars = new StarWarsInfo();

    const selectСharacters = document.getElementById('charactersSelect');
    const selectPlanets = document.getElementById('selectPlanets');

    const labelСharacters = document.getElementById('labelCharacters');
    const labelPlanets = document.getElementById('labelPlanets');

    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    starWars.getCharacters()


    selectСharacters.onchange = function () {
        starWars.currentPageCharacters = selectСharacters.value;
        starWars.getCharacters()
    }

    selectPlanets.onchange = function () {
        starWars.currentPagePlanet = selectPlanets.value;
        starWars.getPlanets()
    }

    labelСharacters.onclick = function () {
        starWars.getCharacters()
    }

    labelPlanets.onclick = function () {
        starWars.getPlanets()
    }

    prev.onclick = function () {
        starWars.prevPlanets();
    }

    next.onclick = function () {
        starWars.nextPlanets();
    }
}