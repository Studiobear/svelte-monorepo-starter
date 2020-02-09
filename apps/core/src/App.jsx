"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Link_1 = require("./component/Link");
function App(props) {
    const { name } = props;
    <main>
        <h1>Hello {name}!</h1>
        <p>Visit the <Link_1.default url="https://svelte.dev/tutorial" text="Svelte tutorial"/> to learn how to build Svelte apps.</p>
    </main>;
}
exports.default = App;
