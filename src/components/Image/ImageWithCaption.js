import Image from "./Image"
import H3 from "../Text/H3"

const ImageWithCaption = (props) => {
    return (
        <div className="mb-2 md:mb-6 lg:mb-10">
            <Image image={props.image} alt={props.alt}/>
            <H3 className="mt-1 md:mt-2 lg:mt-2 text-center">{props.caption}</H3>
        </div>
    )
}

ImageWithCaption.defaultProps = {
    caption: "Default Caption"
}

export default ImageWithCaption