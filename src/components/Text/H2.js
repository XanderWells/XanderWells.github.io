const H2 = (props) => {
    return (
        <h2 className={`text-xl md:text-3xl lg:text-4xl mb-3 lg:mb-6 ${props.className}`}>
            {props.children}
        </h2>
    )
}

export default H2