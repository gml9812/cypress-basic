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

    const init = () => {
        render();
    };

    init();
}