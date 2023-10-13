const H4 = (props) => {
    return (
        <h4 className={`text-base md:text-lg lg:text-xl mb-3 lg:mb-6 ${props.className}`}>
            {props.children}
        </h4>
    )
}

//text-lg md:text-xl lg:text-2xl

export default H4