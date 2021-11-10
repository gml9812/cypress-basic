export default function Counter({ $app }) {
    const render = () => {
        $app.innerHTML = `
        <div class="container">
          <h1>cypress counter</h1>
          <div class="counter-wrapper">
            <button class="plus-button" data-cy="plus-button">+</button>
            <input class="counter" data-cy="counter" value="10" />
            <button class="minus-button" data-cy="minus-button">-</button>
          </div>
        </div>
        `
    };

    const addEvent = () => {
        const counter = document.querySelector(".counter");
        const plusBtn = document.querySelector(".plus-button");
        const minusBtn = document.querySelector(".minus-button");

        const plusCounter = () => {
            if (counter.value > 12) {
                return;
            }
            counter.value++;
        };

        const minusCounter = () => {
            if (counter.value < 8) {
                return;
            }
            counter.value--;
        };

        plusBtn.addEventListener("click", plusCounter);
        minusBtn.addEventListener("click", minusCounter);
    };


    const init = () => {
        render();
        addEvent();
    };

    init();
}