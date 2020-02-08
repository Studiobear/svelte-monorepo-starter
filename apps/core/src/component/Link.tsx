export interface ILinkProps
{
    url: string;
    text: string;
}

export default function Link(props: ILinkProps)
{
    const { url, text } = props;

    <a href={url}>{text}</a>
}