import Image from "./Image"
import H3 from "../Text/H3"
import H4 from "../Text/H4"
import H2 from "../Text/H2"
import H5 from "../Text/H5"

const ImageWithCaption = (props) => {

    return (
        <div className="mb-2 md:mb-6 lg:mb-10">
            <div className="flex justify-center">
                <span className="relative">
                    <Image image={props.image} alt={props.alt} />
                    {(props.number != 0 && props.number != null) &&
                        <H2 className="absolute top-1 right-1 md:top-2 md:right-2 lg:top-4 lg:right-4 select-none bg-orange-500 w-7 h-7 md:w-9 md:h-9 lg:w-12 lg:h-12 flex items-center justify-center rounded-sm shadow shadow-gray-900">{props.number}</H2>
                    }
                </span>
            </div>
            <H5 className="mt-1 md:mt-2 lg:mt-2 text-center">{props.caption}</H5>
        </div>
    )
}

ImageWithCaption.defaultProps = {
    caption: "Default Caption"
}

export default ImageWithCaption