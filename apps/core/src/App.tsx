import Link from "./component/Link";

export interface IAppProps
{
    name: string;
}

export default function App(props: IAppProps)
{
    const { name } = props;

    <main>
        <h1>Hello {name}!</h1>
        <p>Visit the <Link url="https://svelte.dev/tutorial" text="Svelte tutorial"/> to learn how to build Svelte apps.</p>
    </main>
}