export default function Header({content, classes = ""}) {
    return (
        <h2 className={`w-fit mx-auto my-10 text-center text-4xl font-medium ${classes} animate-fromTopToBottom`}>
            {content}
        </h2>
    )
}