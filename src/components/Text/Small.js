const Small = (props) => {
    return (
        <small className={`md:text-lg ${props.className}`}>
            {props.children}
        </small>
    )
}

export default Small