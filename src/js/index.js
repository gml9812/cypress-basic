import Counter from "./components/Counter.js";

export default function App() {
    new Counter({ $app: document.querySelector("#app") });
}

App();