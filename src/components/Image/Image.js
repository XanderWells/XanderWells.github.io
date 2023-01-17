import placeholder from './placeholder.jpg'

const Image = (props) => {
    return (
        <img className='rounded md:rounded-md lg:rounded-lg mx-auto' src={props.image} alt={props.alt}/>
    )
}

Image.defaultProps = {
    image: placeholder,
    alt: "Placeholder Image"
}

export default Image