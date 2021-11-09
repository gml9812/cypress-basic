export default function Counter({ $app }) {
    const render = () => {
        $app.innerHTML = `
        <div class="container">
          <h1>cypress counter</h1>
          <button class="plus-button" data-cy="plus-button">+</button>
          <input class="counter" data-cy="counter" value="10" />
          <button class="minus-button" data-cy="minus-button">-</button>
        </div>
        `
    };

    const addEvent = () => {
        const counter = document.querySelector(".counter");
        const plusBtn = document.querySelector(".plus-button");
        const minusBtn = document.querySelector(".minus-button");

        const plusCounter = () => {
            counter.value++;
        };

        const minusCounter = () => {
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