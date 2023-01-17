const H1 = (props) => {
    return (
        <h1 className={`text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-6 ${props.className}`}>
            {props.children}
        </h1>
    )
}

export default H1