const H3 = (props) => {
    return (
        <h1 className={`text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 lg:mb-6 ${props.className}`}>
            {props.children}
        </h1>
    )
}

export default H3