

type AppProps = {
  content: string;
  style?: React.CSSProperties
}

export default function Header({content, style}: AppProps) {
    return (
        <h2 className={`w-fit mx-auto my-10 text-center text-4xl font-medium ${style} animate-fromTopToBottom`}>
            {content}
        </h2>
    )
}