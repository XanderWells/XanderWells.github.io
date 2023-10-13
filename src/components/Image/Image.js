import placeholder from './placeholder.jpg'
import H2 from '../Text/H2'
const Image = (props) => {
    return (
        <img className='rounded md:rounded-md lg:rounded-lg mx-auto max-h-[70vh]' src={props.image} alt={props.alt} />
    )
}

Image.defaultProps = {
    image: placeholder,
    alt: "Placeholder Image"
}

export default Image