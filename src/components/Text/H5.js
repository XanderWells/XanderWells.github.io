const H5 = (props) => {
    return (
        <h5 className={`text-sm md:text-base lg:text-lg mb-3 lg:mb-6 ${props.className}`}>
            {props.children}
        </h5>
    )
}

export default H5