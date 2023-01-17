const P = (props) => {
    return (
        <p className={`md:text-lg ${props.className}`}>
            {props.children}
        </p>
    )
}

export default P