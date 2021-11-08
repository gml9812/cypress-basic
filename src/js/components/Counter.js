export default function Counter({ $app }) {
    const render = () => {
        $app.innerHTML = `
        <div class="container">
          <h1>cypress counter</h1>
          <button class="plus-button">+</button>
          <input name="counter" class="counter" value="10" />
          <button class="minus-button">-</button>
        </div>
        `
    };

    const init = () => {
        render();
    };

    init();
}