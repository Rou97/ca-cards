class Game {
    constructor() {
        this.maxStep = 10;
        this.step = null;
    }

    start() {
        this.gameMain = buildDom(`

        <main class="game conteiner">
            <header>
                <div class="score">
                    <span class="label">Score:</span>
                    <span class="value"></span>
                </div>
                <div class="timer">
                    <span class="label">Time left:</span>
                    <span class="value"></span>
                </div>
            </header>
            <div class="deck">
                <div class="card current-card"></div>
                <div class="actions">
                    <button disabled class="up">up</button>
                    <button disabled class="down">down</button>
                </div>
                <div class="card next-card"></div>
            </div>
            <footer>
                <p>
                    <span class="label">Step:</span>
                    <span class="step-no"></span>
                    <span class="total-steps"></span>
                </p>
            </footer>
        </main>

        `);
        this.scoreElement = this.gameMain.querySelector(".score .value");
        this.timeLeftElement = this.gameMain.querySelector(".timer . value");

        this.currentCardElement = this.gameMain.querySelector(".current-card");
        this.nextCardElement = this.gameMain.querySelector(".next-card");

        this.buttonUp = this.gameMain.querySelector(".up");
        this.buttonDown = this.gameMain.querySelector(".down");

        this.stepNoElement = this.gameMain.querySelector(".step-no");
        this.totalStepElement = this.gameMain.querySelector(".total-steps");

        document.body.appendChild(this.gameMain);

        //Inicio del juego
        this.showFirstCard();
    }

    showFirstCard() {
        this.totalStepElement.innerText = this.maxStep;
        this.step = 0;
        this.showCard();
        this.startTimer();
    }

    showCard() {
        this.currentCard = this.getRandomCard(1,10);
        this.currentCardElement.innerText = this.currentCard;
        this.nextCardElement.innerText = "?";


        this.stepNoElement.innerText = this.step + 1;
        this.handleClickUp = () => this.revealNumber(true);

        this.buttonUp.addEventListener('click', this.handleClickUp);
        this.buttonUp.removeAttribute('disabled');

        this.handleClickDown = () => this.revealNumber(false);

        this.buttonDown.addEventListener('click', this.handleClickDown);
        this.buttonDown.removeAttribute('disabled');
    }

    revealNumber() {

    }

    getRandomCard(){

    }

}